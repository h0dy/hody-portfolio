import NowPlaying from "../music-widget/NowPlaying";
import DynamicTitle from "./DynamicTitle";
import HeroDescription from "./HeroDescription";

const titles = ["hody", "hasan", "h0dy?", "hassan", "idk"];
const description =
  "I'm a full-stack web developer and programmer based in Saudi Arabia, dedicated to learning, exploring new technologies, and continuously trying to improve my skills";
  

const Hero = () => {
  return (
    <section className="hero-container">
      <DynamicTitle titles={titles} />
      <HeroDescription text={description} />
{/*       <NowPlaying /> */}
    </section>
  );
};

export default Hero;
