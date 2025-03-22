"use client";

import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { LucideAlignLeft } from "lucide-react";
import Link from "next/link";
import { navLinks } from "@/utils/links";

const LinksDropdown = () => {
  return (
    <div className="sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="flex gap-4 max-w-[100px] cursor-pointer"
            variant="default"
          >
            <div className="mb-3">
              <LucideAlignLeft className="size-6 " />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36" align="start" sideOffset={10}>
          {navLinks.map((link) => {
            const { href, label } = link;
            return (
              <DropdownMenuItem key={href} className="cursor-pointer">
                <Link className="capitalize " href={href}>
                  {label}
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default LinksDropdown;
