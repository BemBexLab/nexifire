import HomeHero from "@/components/HomeHero";
import LogoSlider from "@/components/LogoSlider";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <section className="relative bg-white">
      <div className="relative z-[100]">
        <NavBar />
      </div>
      <div className="relative z-30">
        <HomeHero />
      </div>
      <div className="relative -mt-24 z-10">
        <LogoSlider />
      </div>
    </section>
  );
}
