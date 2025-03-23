import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandTypescript } from "react-icons/tb";
import { FaPython } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";

type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "#languages", label: "languages" },
  { href: "#tech-stack", label: "tech stack" },
  { href: "#projects", label: "projects" },
  { href: "#socials", label: "socials" },
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
    label: "python",
    icon: <FaPython />,
    url: "https://docs.python.org/3/",
  },
  {
    label: "golang",
    icon: <FaGolang />,
    url: "https://go.dev/doc/",
  },
];
