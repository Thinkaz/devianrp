"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

interface Booster {
  id: number;
  username: string;
  avatar: string;
  premium_since: number;
}

function Boosters() {
  const [boosters, setBoosters] = useState<Booster[]>([]);

  useEffect(() => {
    const supabase = createClientComponentClient();

    async function fetchBoosters() {
      try {
        const { data, error } = await supabase
          .from("discord_booster")
          .select("*");

        if (error) {
          console.error("Error fetching boosters:", error);
          return;
        }

        setBoosters(data);
      } catch (error) {
        console.error("Error fetching boosters:", error);
      }
    }

    fetchBoosters();
  }, []);

  return (
    <div className="relative overflow-hidden">
      <div className="bg-gradient-to-l from-transparent via-white to-white dark:via-neutral-950 dark:to-neutral-950 w-[100px] h-full absolute left-0 top-0 z-10"></div>
      <div
        className="flex flex-row animate-slideShow w-full gap-4 overflow-x-auto overflow-y-hidden"
        style={{ position: "relative", overflow: "hidden" }}
      >
        {boosters.map((booster) => (
          <div key={booster.id}>
            <div className="group flex flex-row justify-center dark:bg-neutral-900 p-1 rounded border dark:border-neutral-800 gap-2 items-center hover:cursor-pointer hover:opacity-100 dark:opacity-70">
              <Image
                alt={booster.username}
                width={60}
                height={60}
                src={booster.avatar}
                className="rounded-full opacity-75 group transition-opacity duration-200 ease-in-out group-hover:opacity-100"
              />
              <p className="text-white flex flex-col">
                <p className="font-space-grotesk font-semibold dark:text-purple-400 text-purple-700 group-hover:opacity-100">
                  {booster.username}
                </p>
                <span className="text-xs dark:text-neutral-400 text-neutral-600 pr-1">
                  {booster.premium_since ? (
                    `Booster • ${new Date(
                      booster.premium_since
                    ).toLocaleDateString("fr-FR")}`
                  ) : (
                    <span>Grade Ultime</span>
                  )}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gradient-to-r from-transparent dark:via-neutral-950 dark:to-neutral-950 w-[100px] h-full absolute right-0 top-0 z-1O"></div>
    </div>
  );
}

export default Boosters;
