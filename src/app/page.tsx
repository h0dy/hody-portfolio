import Hero from "@/components/home/Hero";
import LanguagesSection from "@/components/languages/LanguagesSection";
import FrontEndSection from "@/components/front-end/FrontEndSection";
import BackEndSection from "@/components/back-end/BackEndSection";
import SocialsSection from "@/components/socials/SocialsSection";

const HomePage = () => {
  return (
    <>
      <Hero />
      <LanguagesSection />
      <FrontEndSection />
      <BackEndSection />
      <SocialsSection />
    </>
  );
};

export default HomePage;
