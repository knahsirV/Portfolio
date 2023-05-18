"use client";
import { Tab, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Languages, Frameworks, DevTools, Skill } from "@/app/ConstData/skills";
import Image from "next/image";

const SkillImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='mx-auto mb-2 grid aspect-square w-16 place-items-center rounded-lg bg-zinc-900'>
      <Image src={src} alt={alt} width={200} height={200} className='aspect-square w-8' />
    </div>
  );
};

const SkillsTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const SkillTab = ({ index, subSkills }: { index: number; subSkills: Skill[] }) => {
    return (
      <Tab.Panel className='w-full'>
        <Transition
          appear
          show={tabIndex === index}
          enter='transition-opacity duration-1000'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-1000'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          className='flex w-full flex-wrap justify-evenly'
        >
          {subSkills.map((skill: any) => (
            <div key={skill.name}>
              <SkillImage src={skill.icon} alt={skill.name} />
              <h1 className='text-center text-lg font-bold'>{skill.name}</h1>
            </div>
          ))}
        </Transition>
      </Tab.Panel>
    );
  };

  return (
    <div className='p-3 md:p-6'>
      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.List className='flex flex-wrap justify-center gap-0 md:gap-8'>
          {["Languages", "Frameworks", "Platforms"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `${
                  selected ? "bg-zinc-800 hover:bg-zinc-800" : "hover:bg-zinc-900"
                } rounded-full px-4 py-2 font-semibold lowercase text-zinc-50 transition duration-1000 focus:outline-none`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=' mt-6 grid place-items-center text-zinc-50'>
          <SkillTab index={0} subSkills={Languages} />
          <SkillTab index={1} subSkills={Frameworks} />
          <SkillTab index={2} subSkills={DevTools} />
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SkillsTabs;
