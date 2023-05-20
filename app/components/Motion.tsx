"use client";
import { motion } from "framer-motion";
import { heroContainer, heroItem, otherSections } from "../ConstData/animations";

export const HeroMotionContainer = ({
  className,
  id,
  main,
  staggerChildren,
  children,
}: {
  className?: string;
  id?: string;
  main?: boolean;
  staggerChildren: number;
  children: React.ReactNode;
}) => {
  return main ? (
    <motion.main
      className={className}
      initial='hidden'
      id={id}
      animate='visible'
      variants={heroContainer(staggerChildren)}
      exit='hidden'
    >
      {children}
    </motion.main>
  ) : (
    <motion.div
      className={className}
      initial='hidden'
      id={id}
      animate='visible'
      variants={heroContainer(staggerChildren)}
      exit='hidden'
    >
      {children}
    </motion.div>
  );
};

export const HeroMotionItem = ({
  className,
  section,
  id,
  children,
}: {
  className?: string;
  section?: boolean;
  id?: string;
  children: React.ReactNode;
}) => {
  return section ? (
    <motion.section className={className} id={id} variants={heroItem}>
      {children}
    </motion.section>
  ) : (
    <motion.div className={className} id={id} variants={heroItem}>
      {children}
    </motion.div>
  );
};

export const OtherSectionsMotionContainer = ({
  className,
  id,
  children,
}: {
  className?: string;
  id?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial='hidden'
      whileInView='visible'
      variants={otherSections}
      exit='hidden'
    >
      {children}
    </motion.div>
  );
};
