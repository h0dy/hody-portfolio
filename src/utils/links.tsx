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
import portfolioImage from "@/../public/images/portfolio.png";
import nextStoreImage from "@/../public/images/next-store.png";
import MERNAuth from "@/../public/images/MERN-auth.png";
import staticSiteGenerator from "@/../public/images/static-site-generator.png";

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
    label: "Nextjs",
    icon: <RiNextjsLine />,
    url: "https://nextjs.org/",
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
];

export const BackEndTechnologies: TechItem[] = [
  {
    label: "NodeJS",
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
    label: "PostegreSQL",
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
    projectURL: "https://hody.dev",
    tags: ["Tailwindcss", "NextJS", "React", "Typescript", "Shadcn UI"],
    featured: true,
  },
  {
    id: "2",
    label: "next-store",
    description:
      "This is a typical e-commerce website that includes most of the essential features you'd expect from an e-commerce platform.",
    gitURL: "https://github.com/h0dy/next-store",
    image: nextStoreImage,
    tags: [
      "Tailwindcss",
      "NextJS",
      "React",
      "Typescript",
      "Supabase",
      "Prisma",
      "Shadcn UI",
      "Clerk",
    ],
    featured: true,
  },
  {
    id: "3",
    label: "MERN-auth",
    description: "Full MERN stack Authentication",
    gitURL: "https://github.com/h0dy/MERN-auth",
    projectURL: "https://mern-auth-g5hn.onrender.com/login",
    image: MERNAuth,
    tags: ["Tailwindcss", "React", "Javascript", "ExpressJS", "MongoDB"],
    featured: false,
  },
  {
    id: "4",
    label: "YelpCamp",
    description:
      "This is a project I built coding along as part of the Udemy course, The Web Developer Bootcamp by Colt Steele.This project focuses on back-end development, so there is no ReactJS and no complex UI; it relies on EJS and Bootstrap for the front end.",
    gitURL: "https://github.com/h0dy/YelpCamp",
    tags: ["Bootstrap", "EJS", "Javascript", "ExpressJS", "MongoDB"],
    featured: false,
  },
  {
    id: "5",
    label: "asteroids",
    description: "asteroids game, a simple project from Boot.dev",
    gitURL: "https://github.com/h0dy/asteroids",
    tags: ["Pygame", "Python"],
    featured: false,
  },
  {
    id: "6",
    label: "Bookbot",
    description: "first project from boot.dev",
    gitURL: "https://github.com/h0dy/Bookbot",
    tags: ["Python"],
    featured: false,
  },
  {
    id: "7",
    label: "Static Site Generator",
    description: "This is a static site generator that converts Markdown files into fully functional HTML pages.",
    gitURL: "https://github.com/h0dy/static-site-generator",
    projectURL: "https://h0dy.github.io/static-site-generator/",
    image: staticSiteGenerator,
    tags: ["Python"],
    featured: true,
  },
];
