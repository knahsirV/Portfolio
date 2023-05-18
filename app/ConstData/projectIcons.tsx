import {
  FolderOpenIcon,
  DocumentTextIcon,
  NewspaperIcon,
  UserGroupIcon,
  PlusCircleIcon,
  HomeIcon,
  SparklesIcon,
  BuildingLibraryIcon,
  ShieldCheckIcon,
} from "@heroicons/react/20/solid";

export const projectIcons: { [key: string]: { bg: string; icon: JSX.Element } } = {
  devportfolio: {
    bg: "from-fuchsia-600 to-blue-600",
    icon: <FolderOpenIcon className='h-6 w-6 ' />,
  },
  "cs-373-blog": {
    bg: "from-[#56CCF2] to-[#2F80ED]",
    icon: <DocumentTextIcon className='h-6 w-6' />,
  },
  newsarchiver: {
    bg: " from-[#fc5c7d] to-[#6a82fb] ",
    icon: <NewspaperIcon className='h-6 w-6' />,
  },
  familead: {
    bg: "from-[#ff7e5f] to-[#feb47b]",
    icon: <UserGroupIcon className='h-6 w-6 ' />,
  },
  prescribemate: {
    bg: "from-[#DA22FF] to-[#9733EE]",
    icon: <PlusCircleIcon className='h-6 w-6' />,
  },
  ecohome: {
    bg: "from-[#a8ff78] to-[#78ffd6]",
    icon: <HomeIcon className='h-6 w-6' />,
  },
  prankaid: {
    bg: "from-[#C6FFDD] via-[#FBD786] to-[#f7797d]",
    icon: <SparklesIcon className='h-6 w-6' />,
  },
  sepio: {
    bg: "from-[#A770EF] via-[#CF8BF3] to-[#FDB99B]",
    icon: <BuildingLibraryIcon className='h-6 w-6' />,
  },
  edusafe: {
    bg: "from-[#ffb347] to-[#ffcc33]",
    icon: <ShieldCheckIcon className='h-6 w-6' />,
  },
};
