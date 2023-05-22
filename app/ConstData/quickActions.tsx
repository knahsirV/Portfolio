import { ClipboardDocumentListIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { Github, Linkedin } from "react-bootstrap-icons";

export const quickActions = [
  {
    name: "github",
    link: "https://github.com/knahsirV",
    icon: <Github className='h-4 w-4' />,
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/vrishank-v",
    icon: <Linkedin className='h-4 w-4' />,
  },
  {
    name: "email",
    link: "mailto:vrishank@utexas.edu",
    icon: <EnvelopeIcon className='h-4 w-4' />,
  },
  {
    name: "resume",
    link: "https://homefromcollege.com/r/VV-749",
    icon: <ClipboardDocumentListIcon className='h-4 w-4' />,
  },
];
