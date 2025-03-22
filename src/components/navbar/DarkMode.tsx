"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useState } from "react";

export const DarkMode = () => {
  const { setTheme, theme } = useTheme();

  const [position, setPosition] = useState(theme);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="cursor-pointer">
          <Sun className=" mb-[12px] size-[18px] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute mb-[12px] size-[18px] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-16">
        <DropdownMenuLabel>Theme</DropdownMenuLabel>

        <div className="border-b border-gray-600 dark:border-gray-400" />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem
            className="cursor-pointer"
            onClick={() => setTheme("light")}
            value="light"
          >
            Light
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            className="cursor-pointer"
            onClick={() => setTheme("dark")}
            value="dark"
          >
            Dark
          </DropdownMenuRadioItem>

          <DropdownMenuRadioItem
            className="cursor-pointer"
            onClick={() => setTheme("system")}
            value="system"
          >
            System
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DarkMode;
