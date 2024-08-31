export const dynamic = 'force-dynamic'

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { cache } from "react";

import LoginButtonServer from "@/components/login-server";
import HeaderClient from "@/components/header-client";
import ThemeSwitcher from "@/components/themeSwitcher";

const createServerClient = cache(async () => {
  const cookieStore = cookies();
  return createServerComponentClient({
    cookies: () => cookieStore,
  });
});

export default async function Header() {
  const supabase = await createServerClient();  
  const { data: profile } = await supabase.auth.getUser();
  const { data: uprofile } = await supabase
    .from("profiles")
    .select()
    .eq("id", profile?.user?.id)
    .single();


  return (
    <HeaderClient>
      <div className="w-full max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link
          href="/"
          className=" text-xl font-bold flex flex-row align-middle items-center"
        >
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            transform="matrix(1, 0, 0, 1, 0, 0)"
            strokeWidth="1.2"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.24000000000000005"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                opacity="0.3"
                d="M16.4712 16.4711C21.4099 11.5324 23.4117 5.52701 20.9423 3.05768C18.473 0.588345 12.4676 2.59014 7.52899 7.5288C2.59033 12.4675 0.588547 18.4728 3.05787 20.9422C5.5272 23.4115 11.5326 21.4097 16.4712 16.4711Z"
                fill="#db2777"
              />{" "}
              <path
                opacity="0.3"
                d="M7.52879 16.4712C2.59013 11.5325 0.588349 5.52715 3.05768 3.05782C5.527 0.588485 11.5324 2.59028 16.471 7.52894C21.4097 12.4676 23.4115 18.473 20.9421 20.9423C18.4728 23.4117 12.4674 21.4099 7.52879 16.4712Z"
                fill="#db2777"
              />{" "}
              <path
                d="M14.5 12C14.5 13.3807 13.3807 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12C9.5 10.6193 10.6193 9.5 12 9.5C13.3807 9.5 14.5 10.6193 14.5 12Z"
                fill="#db2777"
              />{" "}
            </g>
          </svg>
          <div className="ml-2">Devian</div>
        </Link>
        <nav className="text-md text">
          <ul
            className="z-10 md:space-x-12 space-x-6 flex align-middle items-center"
            style={{ opacity: "1" }}
          >
            <li className="">
              <a
                className="flex items-center hover:text-pink-600 transition-colors duration-150"
                href="/posts"
              >
                <div>Posts</div>
              </a>
            </li>
            <li className="">
              <a href="/changelogs">
                <div className="flex items-center hover:text-pink-600 transition-colors duration-150">
                  <div>Changelogs</div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="/streams">
                <div className="flex items-center hover:text-pink-600 transition-colors duration-150">
                  <div>Streams</div>
                </div>
              </a>
            </li>
            <li className="">
              <a href="https://discord.gg/pxXEzdcHrw">
                <div className="flex items-center hover:text-pink-600 transition-colors duration-150">
                  <div>Discord</div>
                </div>
              </a>
            </li>
            <li>
              <LoginButtonServer image={uprofile?.avatar_url} username={uprofile?.username}/>
            </li>
            <li>
              <ThemeSwitcher />
            </li>
          </ul>
        </nav>
      </div>
    </HeaderClient>
  );
}
