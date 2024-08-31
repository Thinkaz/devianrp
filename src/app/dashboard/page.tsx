export const dynamic = 'force-dynamic'

import prisma from "@/lib/db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

import { CharSelector } from "@/components/dash-card";
import Callout from "@/components/callout";

const createServerClient = cache(async () => {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  });
});

const getUserId = async () => {
  const supabase = await createServerClient();
  const { data: profile } = await supabase.auth.getUser();
  return profile?.user?.identities?.[0]?.id;
};

async function getProfile() {
  const profile = await prisma.players.findMany({
    where: {
      discordid: await getUserId(),
    },
  });
  if (profile.length == 0) {
    return false;
  }
  return profile;
}
export default async function Dashboard() {
  const profile = await getProfile();
  const user = await getUserId();

  if(!user) {
    return (
      <div className="flex justify-center items-center translate-y-80">
        <Callout
          emoji="👋"
          text="Tu n'es pas connecté au serveur, pour pouvoir accéder à ton dashboard, connecte toi au serveur !"
        />
      </div>
    );
  }


  if (!profile) {
    return (
      <div className="flex justify-center items-center translate-y-80">
        <Callout
          emoji="👋"
          text="Tu n'as pas de personnage, cela veut dire deux choses, soit tu n'as pas de personnage, soit tu n'es pas connecté au serveur."
        />
      </div>
    );
  }

  return (
    <div className=" flex flex-col justify-center gap-10 p-10 h-max">
      <Callout
        emoji="👋"
        text="Hello, bienvenue sur ton dashboard, ici tu pourras voir tes personnages, tes véhicules, tes factures et bien plus encore !"
      />
      <div className="grid grid-cols-3 gap-5">
        {profile &&
          profile.map((profile, index) => (
            <CharSelector
              key={index}
              nom={
                JSON.parse(profile.charinfo ?? "{}").firstname +
                " " +
                JSON.parse(profile.charinfo ?? "{}").lastname
              }
              age={JSON.parse(profile.charinfo ?? "{}").birthdate ?? ""}
              href={`/dashboard/${profile.id}	`}
            />
          ))}
      </div>
    </div>
  );
}
