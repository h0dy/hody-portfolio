import { StaticImageData } from "next/image";

export type NavLink = {
  href: string;
  label: string;
};

export type TechItem = {
  label: string;
  icon?: React.ReactNode;
  url: string;
};

export type Project = {
  id: string;
  label: string;
  description: string;
  image?: string | StaticImageData;
  gitURL: string;
  projectURL?: string;
  tags: string[];
  featured: boolean;
};
