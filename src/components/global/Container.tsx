import { cn } from "@/lib/utils";
// import Navbar from "@/components/navbar/Navbar";
// import Footer from "../footer/Footer";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("mx-auto container  px-3", className)}>
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Container;
