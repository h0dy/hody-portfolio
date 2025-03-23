import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import {
  FaPython,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";

import {
  RiTailwindCssFill,
  RiNextjsLine,
  RiSupabaseFill,
} from "react-icons/ri";
// import { FaGolang } from "react-icons/fa6";

type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#projects", label: "projects" },
  { href: "#stats", label: "stats" },
  { href: "#contact", label: "contact" },
];

export type TechItem = {
  label: string;
  icon?: React.ReactNode;
  url: string;
};

export const languages: TechItem[] = [
  {
    label: "javascript",
    icon: <IoLogoJavascript />,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "typescript",
    icon: <TbBrandTypescript />,
    url: "https://www.typescriptlang.org/docs/",
  },
  {
    label: "Nextjs",
    icon: <RiNextjsLine />,
    url: "https://nextjs.org/",
  },
  {
    label: "python",
    icon: <FaPython />,
    url: "https://docs.python.org/3/",
  },
  // {
  //   label: "golang",
  //   icon: <FaGolang />,
  //   url: "https://go.dev/doc/",
  // },
];

export const FrontEndTechnologies: TechItem[] = [
  {
    label: "Tailwindcss",
    icon: <RiTailwindCssFill />,
    url: "https://tailwindcss.com/",
  },
  {
    label: "React",
    icon: <FaReact />,
    url: "https://react.dev/",
  },
  {
    label: "Sass",
    icon: <FaSass />,
    url: "https://sass-lang.com/",
  },
  {
    label: "Bootstrap",
    icon: <FaBootstrap />,
    url: "https://getbootstrap.com/",
  },
  {
    label: "Redux Toolkit",
    icon: <TbBrandRedux />,
    url: "https://redux-toolkit.js.org/",
  },
];

export const BackEndTechnologies: TechItem[] = [
  {
    label: "NodeJs",
    icon: <FaNodeJs />,
    url: "https://nodejs.org/en",
  },
  {
    label: "ExpressJS",
    icon: <SiExpress />,
    url: "https://expressjs.com/",
  },
  {
    label: "MongoDB",
    icon: <SiMongodb />,
    url: "https://www.mongodb.com/",
  },
  {
    label: "PosteSQL",
    icon: <BiLogoPostgresql />,
    url: "https://www.postgresql.org/",
  },
  {
    label: "Prisma",
    icon: <SiPrisma />,
    url: "https://www.prisma.io/",
  },
  {
    label: "Supabase",
    icon: <RiSupabaseFill />,
    url: "https://supabase.com/",
  },
];
