import { navLinks } from "@/utils/links";
import NavItem from "./NavItem";

const NavList = () => {
  return (
    <div className="sm:flex justify-evenly gap-x-4 hidden ml-auto">
      {navLinks.map((link) => {
        return <NavItem cla key={link.href} href={link.href} label={link.label} />;
      })}
    </div>
  );
};

export default NavList;
