import { cn } from "~/lib/utils";
import { BicycleIcon, Icon } from "@phosphor-icons/react";

const PlayingCard = ({
  className,
  name,
  //   img,
  icon: IconComponent,
}: {
  className?: string;
  name: string;
  //   img: string;
  icon: Icon;
}) => {
  return (
    <div
      className={cn(
        " w-52 aspect-[5/7] rounded-xl p-4 flex flex-col font-mono uppercase text-xs",
        className
      )}
    >
      <div className='flex justify-between text-card '>
        <p>{name}</p>
        {/* <img src={img} alt='computer' className='size-5' /> */}
        <IconComponent size={"1.25rem"} color='currentColor' weight='fill' />
      </div>
      <div className='grow flex flex-col text-background'>
        {/* <img src={img} alt='computer' className='size-40 my-auto mx-auto' /> */}
        <div className='m-auto'>
          <IconComponent size={"6rem"} color='currentColor' weight='fill' />
        </div>
      </div>
      <div className='flex justify-between text-card '>
        {/* <img src={img} alt='computer' className='size-5' /> */}
        <IconComponent size={"1.25rem"} color='currentColor' weight='fill' />
        <p className=' rotate-180'>{name}</p>
      </div>
    </div>
  );
};

export default PlayingCard;
