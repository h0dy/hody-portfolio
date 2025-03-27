import ContactHero from "@/components/contact/ContactHero";
import React from "react";
import SocialsSection from "@/components/socials/SocialsSection";
import EmailBox from "@/components/contact/EmailBox";

const ContactPage = () => {
  return (
    <>
      <ContactHero />
      <EmailBox />
      <div className="mb-64">
        <SocialsSection />
      </div>
    </>
  );
};

export default ContactPage;
