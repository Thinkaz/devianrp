export const dynamic = 'force-dynamic'

import { notFound } from "next/navigation";
import prisma from "@/lib/db";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { cache } from "react";

import DashCards from "@/components/dash-card";
import { CarCards, Finances } from "@/components/dash-card";
import Callout from "@/components/callout";
import YesNo from "@/components/yesno";

interface CharProps {
  params: {
    slug: string[];
  };
}

interface User {
  [key: string]: string | undefined | (() => Promise<string | undefined>);
}

const createServerClient = cache(async () => {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  });
});

async function getCharFromParams(params: CharProps["params"]) {
  const slug = params?.slug?.join("/");
  const char = await getUnique({ id: Number(slug) }); // convert slug to number
  if (!char) {
    null;
  }
  return char;
}

async function getUnique({ id }: { id: number }) {
  const unique = await prisma.players.findMany({
    where: {
      id: id,
    },
    take: 1,
  });
  return unique;
}

async function getVehicules({ citizenid = "" } = {}) {
  const vehicules = await prisma.player_vehicles.findMany({
    where: {
      citizenid: citizenid,
    },
  })
  return vehicules;
}

async function getBilling({ citizenid = "" } = {}) {
  const transactions = await prisma.codem_billing.findMany({
    where: {
      targetidentifier: citizenid,
    },
  });
  return transactions;
}

async function loginOrNot() {
  const supabase = createServerClient();
  const { data: session } = await (await supabase).auth.getSession();
  if (session.session === null) {
    return false;
  } else {
    return true;
  }
}

async function checkIfCharSession(id: number) {
  const supabase = createServerClient();
  const { data: profile } = await (await supabase).auth.getUser();
  const profileDiscordid = profile?.user?.user_metadata.provider_id;
  const profileChar = await prisma.players.findMany({
    where: {
      id: id,
      discordid: profileDiscordid,
    },
  });
  if (profileChar.length == 0) {
    return false;
  } else {
    return true;
  }
}

export default async function CharPage({ params }: CharProps) {
  const profile = await getCharFromParams(params);
  const isLoggedIn = await loginOrNot();
  const isCharSession = await checkIfCharSession(profile[0].id);

  const citizenid = profile[0].citizenid;
  const vehicules = await getVehicules({ citizenid });
  const transactions = await getBilling({ citizenid });

  const charData = JSON.parse(profile[0].charinfo ?? "{}");
  const charName = charData.firstname + " " + charData.lastname;
  const charBirthdate = new Date(charData.birthdate).toLocaleDateString(
    "fr-FR",
    { day: "numeric", month: "short", year: "numeric" }
  );
  const charAge =
    new Date().getFullYear() - new Date(charData.birthdate).getFullYear();
  const charGender = charData.gender;
  let gender: string;
  if (charGender == 1) {
    gender = "Femme";
  } else {
    gender = "Homme";
  }
  const charPhone = charData.phone.replace(
    /(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/,
    "$1 $2 $3 $4 $5"
  );
  const charHeight = charData.height + " cm";

  const charJobData = JSON.parse(profile[0].job ?? "{}");
  const charJob = charJobData.label;
  const charJobGrade = charJobData.grade.name;
  const charMoneyHour = charJobData.payment.toLocaleString("en-US");
  const charDuty = charJobData.onduty;
  const charBoss = charJobData.isboss;

  const moneyData = JSON.parse(profile[0].money);
  const bank = moneyData.bank.toLocaleString("en-US");
  const cash = moneyData.cash.toLocaleString("en-US");
  const crypto = moneyData.crypto.toLocaleString("en-US");
  const iban = profile?.[0]?.iban ?? "";

  const randomColors = [
    "border-l-blue-300",
    "border-l-red-300",
    "border-l-pink-300",
    "border-l-yellow-300",
    "border-l-green-300",
    "border-l-purple-300",
    "border-l-indigo-300",
    "border-l-amber-300",
    "border-l-lime-300",
    "border-l-cyan-300",
    "border-l-emerald-300",
    "border-l-fuchsia-300",
    "border-l-rose-300",
    "border-l-violet-300",
    "border-l-sky-300",
    "border-l-orange-300",
    "border-l-teal-300",
    "border-l-gray-300",
  ];

  const randomColorsBis = [
    "bg-blue-100",
    "bg-red-100",
    "bg-pink-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-amber-100",
    "bg-lime-100",
    "bg-cyan-100",
    "bg-emerald-100",
    "bg-fuchsia-100",
    "bg-rose-100",
    "bg-violet-100",
    "bg-sky-100",
    "bg-orange-100",
    "bg-teal-100",
    "bg-gray-100",
  ];

  if (!profile) {
    notFound();
  }

  if (!isCharSession) {
    return (
      <div className="flex justify-center items-center translate-y-80">
        <Callout
          emoji="⛔"
          text="Tu n'as pas accès à ce personnage, ce n'est pas le tien !"
        />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center translate-y-80">
        <Callout
          emoji="👋"
          text="Tu n'est pas connecté, pense à le faire pour avoir accès à ton dashboard"
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col p-8">
        <h1 className="text-2xl font-space-grotesk font-bold pb-4">
          Personnage
        </h1>
        <div className="grid grid-cols-2">
          <div className="flex flex-col">
            <a>Nom : {charName}</a>
            <a>
              Age : {charAge} ans ({charBirthdate})
            </a>
            <a>Sexe : {gender}</a>
            <a>Taille : {charHeight}</a>
            <a>Portable : {charPhone}</a>
          </div>
          <div className="flex flex-col text-right place-items-end">
            <a>Nom : {charJob}</a>
            <a>Activité : {charJobGrade}</a>
            <a>Paiment (/10min) : ${charMoneyHour}</a>
            <YesNo boolean={charDuty} text={"En service : "} />
            <YesNo boolean={charBoss} text={"Patron : "} />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center mb-8">
        <div className="flex flex-col p-8 w-full">
          <h1 className="text-2xl font-space-grotesk font-bold pb-4">
            Finances
          </h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-4 w-full gap-20">
              <Finances text="Banque" number={bank} />
              <Finances text="Cash" number={cash} />
              <Finances text="Crypto" number={crypto} />
              <Finances text="IBAN" number={Number(iban)} boolean={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-8 mb-8">
        <h1 className="text-2xl font-space-grotesk font-bold pb-4">
          Denières dépenses
        </h1>
        {transactions.length > 0 ? (
          <div className="grid grid-cols-5 gap-3">
            {" "}
            {transactions.map((transaction, index) => (
              <DashCards
                key={index}
                date={transaction.date ?? ""}
                number={Number(transaction.amount ?? 0)}
                color={randomColorsBis[index % randomColorsBis.length]}
                status={transaction.status ?? ""}
                society={transaction.societyname ?? ""}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 w-full">
            <Callout emoji="💸" text="Tu n'as pas de transaction" />
          </div>
        )}
      </div>
      <div className="flex flex-col p-8">
        <h1 className="text-2xl font-space-grotesk font-bold pb-4">
          Véhicules
        </h1>
        {vehicules.length > 0 ? (
          <div className="grid grid-cols-3 gap-8">
            {vehicules.map((vehicule, index) => (
              <CarCards
                key={index}
                name={vehicule.vehicle ?? ""}
                date={vehicule.plate ?? ""}
                price={vehicule?.drivingdistance ?? 0}
                color={randomColors[index % randomColors.length]}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-48 w-full">
            <Callout emoji="🚗" text="Tu ne possède pas de voiture" />
          </div>
        )}
      </div>
    </div>
  );
}
