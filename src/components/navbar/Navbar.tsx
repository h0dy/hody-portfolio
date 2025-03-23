import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavList from "./NavList";
import HamNav from "./HamNav";

const Navbar = () => {
  return (
    <nav className="h-12 py-3 pb-5 text-xl">
      <div className="flex justify-between">
        <Logo />
        <NavList />
        <div className="max-sm:ml-auto">
          <DarkMode />
        </div>
        <HamNav />
      </div>
      <div className="border-b-2 border-foreground dark:border-white" />
    </nav>
  );
};

export default Navbar;
