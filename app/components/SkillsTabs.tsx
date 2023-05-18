"use client";
import { Tab } from "@headlessui/react";
import React from "react";
import { Languages, Frameworks, DevTools } from "@/app/ConstData/skills";
import Image from "next/image";

const SkillImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className='mx-auto mb-2 grid aspect-square w-16 place-items-center rounded-lg bg-zinc-900'>
      <Image src={src} alt={alt} width={200} height={200} className='aspect-square w-10' />
    </div>
  );
};

const SkillsTabs = () => {
  return (
    <div className='p-3 md:p-6'>
      <Tab.Group>
        <Tab.List className='flex flex-wrap justify-center gap-0 md:gap-8'>
          {["Languages", "Frameworks", "Platforms"].map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                `${
                  selected ? "bg-zinc-800 hover:bg-zinc-800" : "hover:bg-zinc-900"
                } rounded-full px-4 py-2 font-semibold lowercase text-zinc-50 transition duration-300 focus:outline-none`
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className=' mt-6 grid place-items-center text-zinc-50'>
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
