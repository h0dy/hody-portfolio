import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import {
  FaPython,
  FaReact,
  FaSass,
  FaBootstrap,
  FaNodeJs,
  FaDiscord,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandRedux } from "react-icons/tb";
import portfolioImage from "@/../public/images/portfolio.png";

import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { Github, Instagram } from "lucide-react";
// import { FaGolang } from "react-icons/fa6";
import { NavLink, TechItem, Project } from "./types";

export const navLinks: NavLink[] = [
  { href: "/projects", label: "projects" },
  { href: "/stats", label: "stats" },
  { href: "/contact", label: "contact" },
];

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
];

export const socials: TechItem[] = [
  {
    label: "Github",
    icon: <Github />,
    url: "https://github.com/h0dy",
  },
  {
    label: "Instagram",
    icon: <Instagram />,
    url: "https://Instagram.com/h0dy",
  },
  {
    label: "Discord",
    icon: <FaDiscord />,
    url: "https://discordapp.com/users/637722754791243873",
  },
];

export const projects: Project[] = [
  {
    id: "1",
    label: "portfolio",
    image: portfolioImage,
    description: "you are in it :)",
    gitURL: "https://github.com/h0dy/hody-portfolio",
    projectURL: "https://github.com/h0dy/hody-portfolio",
    tags: ["tailwindcss", "nextjs", "react", "typescript"],
    featured: true,
  },
  {
    id: "2",
    label: "next-store",
    description:
      "ur adipisicing elit. Eos optio quisquam delectus accusantium dolores reiciendis sunt mollitia ad,",
    gitURL: "https://github.com/h0dy/next-store",
    tags: [
      "tailwindcss",
      "nextjs",
      "react",
      "typescript",
      "supabase",
      "prisma",
    ],
    featured: true,
  },
  {
    id: "3",
    label: "next-store",
    description:
      "ur adipisicing elit. Eos optio quisquam delectus accusantium dolores reiciendis sunt mollitia ad, ",
    gitURL: "https://github.com/h0dy/next-store",
    tags: [
      "tailwindcss",
      "nextjs",
      "react",
      "typescript",
      "supabase",
      "prisma",
    ],
    featured: false,
  },
  {
    id: "4",
    label: "next-store",
    image: portfolioImage,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos optio quisquam delectus accusantium dolores reiciendis sunt mollitia ad, totam voluptate magnam, fugiat in porro consectetur. Quisquam numquam adipisci voluptatibus quos?",
    gitURL: "https://github.com/h0dy/next-store",
    projectURL: "https://github.com/h0dy/hody-portfolio",
    tags: [
      "tailwindcss",
      "nextjs",
      "react",
      "typescript",
      "supabase",
      "prisma",
    ],
    featured: true,
  },
];
