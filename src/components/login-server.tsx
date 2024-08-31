export const dynamic = 'force-dynamic'
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import LoginButtonClient from "./login-client";

export default async function LoginButtonServer({ image, username }: { image?: string; username?: string;}) {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  return (
    <>
      <LoginButtonClient session={session} image={image} username={username}/>
    </>
  );
}
