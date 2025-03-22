import Logo from "./Logo";
import DarkMode from "./DarkMode";
import NavList from "./NavList";
import HamNav from "./HamNav";

const Navbar = () => {
  return (
    <nav className="h-12 px-3 py-3">
      <div className="flex justify-between">
        <Logo />
        <NavList />
        <div className="max-sm:ml-auto">
          <DarkMode />
        </div>
        <HamNav />
      </div>
      <div className="border-b border-1 border-black dark:border-white" />
    </nav>
  );
};

export default Navbar;
