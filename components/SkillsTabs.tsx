"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import { Languages, Frameworks, DevTools } from "@/ConstData/skills";
import Image from "next/image";

const SkillImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='mx-auto mb-2 grid aspect-square w-16 place-items-center rounded-lg bg-zinc-900'>
      <Image src={src} alt={alt} width={100} height={100} className='aspect-square w-8' />
    </div>
  );
};

const SkillsTabs = () => {
  return (
    <div className='grid grid-rows-[auto_1fr] p-6'>
      <Tab.Group>
        <Tab.List className='flex justify-center gap-0 md:gap-8'>
          {["Languages", "Frameworks", "Dev Tools / Platforms"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `${
                  selected ? "bg-zinc-600" : ""
                } rounded-full px-4 py-2 font-semibold text-zinc-50 transition duration-300 hover:bg-zinc-600 focus:outline-none`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=' mt-4 grid place-items-center text-zinc-50'>
          <Tab.Panel className='flex w-full flex-wrap justify-evenly'>
            {Languages.map((language) => (
              <div key={language.name}>
                <SkillImage src={language.icon} alt={language.name} />
                <h1 className='text-center text-lg font-bold'>{language.name}</h1>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className='flex w-full flex-wrap justify-evenly'>
            {Frameworks.map((framework) => (
              <div key={framework.name}>
                <SkillImage src={framework.icon} alt={framework.name} />
                <h1 className='text-center text-lg font-bold'>{framework.name}</h1>
              </div>
            ))}
          </Tab.Panel>
          <Tab.Panel className='flex w-full flex-wrap justify-evenly'>
            {DevTools.map((devtool) => (
              <div key={devtool.name}>
                <SkillImage src={devtool.icon} alt={devtool.name} />
                <h1 className='text-center text-lg font-bold'>{devtool.name}</h1>
              </div>
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default SkillsTabs;
