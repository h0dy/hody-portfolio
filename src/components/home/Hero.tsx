import DynamicTitle from "./DynamicTitle";
import HeroDescription from "./HeroDescription";

const titles = ["hody", "hasan", "h0dy?", "hassan", "idk"];
const description =
  "I'm a full-stack web developer and programmer based in Saudi Arabia, passionate about learning, exploring new technologies, and continuously improving my skills to build high-quality and efficient applications.";

const Hero = () => {
  return (
    <section className="hero-container">
      <DynamicTitle titles={titles} />
      <HeroDescription text={description} />
    </section>
  );
};

export default Hero;
