import { motion } from "framer-motion";
import Image from "next/image";

const enterAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
};

export default function Member({ index, name, role, image } : {index: number,name: string, role: string, image: string}) {
    return (
        <motion.div
          key={index}
          id={role.toLowerCase()}
          variants={enterAnimation}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="flex flex-col justify-center items-center m-2"
        >
          <Image
            src={image}
            alt="member"
            className="rounded-full w-24 h-24"
            width={96}
            height={96}
          />
          <h1 className="text-center font-semibold text-orange-400 font-space-grotesk">{name}</h1>
          <h2 className="mb-3 text-center text-sm text-neutral-500 md:mb-4 md:text-base">{role}</h2>
        </motion.div>
      );
}