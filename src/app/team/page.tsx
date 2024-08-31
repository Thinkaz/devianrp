"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Member from "@/components/member";

interface Team {
  name: string;
  role: string;
  image: string;
}

const enterAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const team = [
  {
    key: 1,
    name: "asb47",
    role: "Fondateur",
    image:
      "https://cdn.discordapp.com/avatars/644526268867411989/37dcb1e880443f237fbcc1bacd355ca0.webp?size=256",
  },
  {
    key: 2,
    name: "Anthepretorien",
    role: "Fondateur",
    image:
      "https://cdn.discordapp.com/avatars/815707282331009065/2449319b87aa839d9b3ab1eae37c8318.webp?size=256",
  },

  {
    key: 3,
    name: "Anor",
    role: "Co-Fondateur",
    image:
      "https://cdn.discordapp.com/avatars/302773066772250625/c459610500f7699bcef598d10fde8b08.webp?size=256",
  },
  {
    key: 4,
    name: "bastien20",
    role: "Co-Fondateur",
    image:
      "https://cdn.discordapp.com/avatars/465457426339069952/2d663e12922b1231a74363bfed37cd75.webp?size=256",
  },
  {
    key: 5,
    name: "Saw_6",
    role: "Developpeur",
    image:
      "https://cdn.discordapp.com/avatars/392712090076446751/3971cd90f909a639e359ede345868187.webp?size=256",
  },
  {
    key: 6,
    name: "Kayamiatashi",
    role: "Developpeur",
    image:
      "https://cdn.discordapp.com/avatars/393018977829257216/a0e3beee393f1829bbc45c08cbc497d0.webp?size=256",
  },
  {
    key: 7,
    name: "nono",
    role: "Administrateur",
    image:
      "https://cdn.discordapp.com/avatars/502883901224517652/f818c2ad7f961c26f445fd0207fe15d7.webp?size=256",
  },
  {
    key: 8,
    name: "Zêkñå¥",
    role: "Helper",
    image:
      "https://cdn.discordapp.com/avatars/324316690605146113/128ba11e671bf3f946350e0c992a29a0.webp?size=256",
  },
];

export default function Team() {
  const [showAll, setShowAll] = useState(true);
  const [showFounder, setShowFounder] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  return (
    <motion.div className="w-full justify-center flex pb-12">
      <div className="grid grid-cols-4 gap-x-12 gap-y-8">
        {showAll &&
          team.map((member, index) => {
            return (
              <Member
                key={index}
                index={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            );
          })}
        {showFounder &&
          team.map((member, index) => {
            if (member.role === "Fondateur" || member.role === "Co-Fondateur") {
              return (
                <Member
                  key={index}
                  index={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              );
            }
          })}
        {showDeveloper &&
          team.map((member, index) => {
            if (member.role === "Developpeur") {
              return (
                <Member
                  key={index}
                  index={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              );
            }
          })}
        {showHelper &&
          team.map((member, index) => {
            if (member.role === "Helper" || member.role === "Modérateur") {
              return (
                <Member
                  key={index}
                  index={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                />
              );
            }
          })}
      </div>
    </motion.div>
  );
}
