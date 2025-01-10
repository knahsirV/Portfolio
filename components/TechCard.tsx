"use client";
import Image from "next/image";
import { motion } from "motion/react";

export const TechCard = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <motion.div
      key={name}
      className="relative grid h-48 w-full max-w-72 place-items-center rounded-xl border border-bunker-900/15 bg-bunker-900/10"
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
          className="mx-auto size-24"
        />
      </motion.div>
      <motion.span
        className="absolute text-2xl font-medium"
        variants={{
          initial: { opacity: 0, scale: 1.5 },
          hover: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 0.3 }}
      >
        {name}
      </motion.span>
    </motion.div>
  );
};
