import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <h3 className="ml-2 font-bold text-foreground capitalize hover:underline">
        hody
      </h3>
    </Link>
  );
};

export default Logo;
