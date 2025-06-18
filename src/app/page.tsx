import Image from "next/image";
import { AppCarousel } from "./ui/app-carousel";
import Project1Highlights from "./HighlightsProject1";
import EventSection from "./EventSection";
import ConsortiumMemberSection from "./ConsortiumMemberSection";
import HeadquartersSection from "./HeadquarterSection";
import Project2Highlights from "./HighlightsProject2";




function CreateMinsupalaIRDCHighlights() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <>
      <div id="home-projects" className="w-full bg-neutral-900 py-50 mt-20 md:mt-0 relative overflow-hidden">
        {/* Subtle Geometric Dot Pattern Overlay (more integrated) */}
        <div
          className="absolute inset-0 z-0 opacity-10" // Reduced opacity slightly for more subtlety
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='5' cy='5' r='1' fill='%23a0aec0'/%3E%3C/svg%3E\")", // Changed fill to a soft gray for better blend
            backgroundSize: "20px 20px",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 text-centerf px-4 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide uppercase leading-tight">
            <span className="text-gray-50 opacity-90">MINSUPALA IRDC</span>{" "}
            <span className="text-blue-400 opacity-90">Projects</span>
          </h3>
          <p className="mt-4 text-lg text-gray-300 opacity-80 max-w-2xl mx-auto">
            Discover the key achievements and impactful projects that define our commitment to Mindanao Sulu and Palawan.
          </p>
        </div>
        {/* add z index triangle here pointing down */}
      </div>
    </>
  );
}

export default function Home() {
  return (
    <>
      <AppCarousel></AppCarousel>
      <EventSection></EventSection>
      <ConsortiumMemberSection></ConsortiumMemberSection>
      {CreateMinsupalaIRDCHighlights()}
      <Project1Highlights></Project1Highlights>
      <Project2Highlights></Project2Highlights>
      <HeadquartersSection></HeadquartersSection>
    </>
  );
}
