import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <img className="w-full max-h-[450px] object-cover" src={HeroImage} alt="heroImage" />
    </div>
  )
}

export default Hero
