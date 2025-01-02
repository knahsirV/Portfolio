"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      key={name}
      className="bg relative grid h-40 w-full max-w-72 place-items-center rounded-xl border border-bunker-800/20 bg-bunker-800/5"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        variants={{
          initial: { scale: 1, filter: "blur(0px)" },
          hover: { scale: 0.8, filter: "blur(4px)", opacity: 0.35 },
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          width={100}
          height={100}
          alt={`${name.toLowerCase()}-icon`}
          src={icon}
          className="mx-auto size-20"
        />
      </motion.div>
      <motion.span
        className="absolute text-xl font-medium"
        variants={{
          initial: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};
