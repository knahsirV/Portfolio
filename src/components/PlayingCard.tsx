import { cn } from "~/lib/utils";
import { BicycleIcon, Icon } from "@phosphor-icons/react";

const PlayingCard = ({
  className,
  name,

  icon: IconComponent,
}: {
  className?: string;
  name: string;

  icon: Icon;
}) => {
  return (
    <div
      className={cn(
        " w-40 aspect-[5/7] rounded-xl p-4 flex flex-col font-mono uppercase text-[0.6rem]",
        className
      )}
    >
      <div className='flex justify-between text-background '>
        <p>{name}</p>

        <IconComponent size={"1.25rem"} color='currentColor' weight='fill' />
      </div>
      <div className='grow flex flex-col text-background'>
        <div className='m-auto'>
          <IconComponent size={"4rem"} color='currentColor' weight='fill' />
        </div>
      </div>
      <div className='flex justify-between text-background'>
        <IconComponent size={"1.25rem"} color='currentColor' weight='fill' />
        <p className=' rotate-180'>{name}</p>
      </div>
    </div>
  );
};

export default PlayingCard;
