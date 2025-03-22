import Link from "next/link";

const NavItem = ({ label, href }: { label: string; href: string }) => {
  return (
    <Link className="hover:underline font-semibold" href={href}>
      {label}
    </Link>
  );
};

export default NavItem;
