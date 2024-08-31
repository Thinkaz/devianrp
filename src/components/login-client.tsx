"use client";
export const dynamic = 'force-dynamic'

import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

import Dropdown from "./dropdown";
import Options from "./options";

export default function LoginButtonClient({
  session,
  username,
  image,
}: {
  session: Session | null;
  username?: string;
  image?: string;
}) {
  const supabase = createClientComponentClient();
  const router = useRouter();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "discord",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  return session ? (
    <div>
      <Dropdown image={image}>
        <div className="flex flex-col p-4 animate-fade-in duration-500">
          <div className="flex flex-col border-b dark:border-neutral-800 border-neutral-300 mb-1">
            <h1 className="text-md font-semibold">Salut {username} 👋</h1>
            <h4 className="text-sm text-neutral-400 pb-3">Alors quoi de neuf ?</h4>
          </div>
          <div className="flex flex-col">
            <Options emoji="👤" title="Dashboard" lien="/dashboard" text="Regarde toi bordel !" />
          </div>
          <div className="flex flex-col pt-1">
            <button
              onClick={handleSignOut}
              className="text-sm text-neutral-500 hover:text-neutral-600 dark:hover:text-neutral-300 transition duration-150 ease-in-out text-right"
            >
              Logout
            </button>
          </div>
        </div>
      </Dropdown>
    </div>
  ) : (
    <button 
      onClick={handleSignIn}
      className="border border-pink-600 rounded px-3 py-1 dark:text-white font-semibold hover:bg-pink-600 hover:text-white transition duration-150 ease-in-out"
    >
      Login
    </button>
  );
}
