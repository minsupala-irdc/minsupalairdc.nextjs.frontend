import Image from "next/image";
import { AppCarousel } from "./ui/app-carousel";

const sdgLogos = [
  { label: "sdg1", src: "/assets/resources/sdg/E-WEB-Goal-01.png" },
  { label: "sdg3", src: "/assets/resources/sdg/E-WEB-Goal-03.png" },
  { label: "sdg9", src: "/assets/resources/sdg/E-WEB-Goal-09.png" },
  { label: "sdg11", src: "/assets/resources/sdg/E-WEB-Goal-11.png" },
  { label: "sdg14", src: "/assets/resources/sdg/E-WEB-Goal-14.png" },
  { label: "sdg15", src: "/assets/resources/sdg/E-WEB-Goal-15.png" },
  { label: "sdg17", src: "/assets/resources/sdg/E-WEB-Goal-17.png" },
];

const universities = [
  { src: "/assets/resources/irdc-members/adiong-memorial-state-college.png", label: "Adiong Memorial State College", url: "https://amsc-edu.net/" },

  { src: "/assets/resources/irdc-members/.png", label: "Basilan State University", url: "" },
  { src: "/assets/resources/irdc-members/cotabato-foundation-college-of-science-and-technology.png", label: "Cotabato Foundation College of Science and Technology", url: "https://cfcst.edu.ph/" },
  { src: "/assets/resources/irdc-members/cotabato-state-university.png", label: "Cotabato State University", url: "http://www.cotsu.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-buug.png", label: "Mindanao State University – Buug", url: "https://msubuug.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-maguindanao.png", label: "Mindanao State University - Maguindanao", url: "https://msumaguindanao.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-gensan.png", label: "Mindanao State University - Gensan", url: "https://msugensan.edu.ph/" },

  { src: "/assets/resources/irdc-members/msu-sulu.png", label: "Mindanao State University – Sulu", url: "https://msusulu.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-tcto.png", label: "Mindanao State University – Tawi-tawi College of Technology and Oceanography", url: "https://msutawi-tawi.edu.ph/" },
  { src: "/assets/resources/irdc-members/south-cotabato-state-college.png", label: "South Cotabato State College", url: "https://scsc.edu.ph/home/" },
  { src: "/assets/resources/irdc-members/sultan-kudarat-state-university.png", label: "Sultan Kudarat State University", url: "https://sksu.edu.ph/" },
  { src: "/assets/resources/irdc-members/sulu-state-college.png", label: "Sulu State College", url: "https://sulustatecollege.edu.ph/" },
  { src: "/assets/resources/irdc-members/tawi-tawi-agricultural-state-college.png", label: "Tawi-tawi Regional Agricultural College", url: "https://trac.edu.ph/" },
  { src: "/assets/resources/irdc-members/usm-kabacan.png", label: "University of Southern Mindanao - Kabacan", url: "https://www.usm.edu.ph/" },
  { src: "/assets/resources/irdc-members/usm-kidapawan.png", label: "University of Southern Mindanao - Kidapawan", url: "https://www.usm.edu.ph/academics/kidapawan-city-campus/" },

  { src: "/assets/resources/irdc-members/dbm.png", label: "Department of Budget and Management", url: "https://www.dbm.gov.ph/" },

];



function CreateConsortiumMemberSection() {
  return (
    <section
      id="consortium"
      className="w-full min-h-[66.66667vh] flex items-center justify-center py-20 bg-gray-50"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center px-4">

        <Image
          src="/assets/resources/IRDC-logo-transparent.png"
          alt="MINSUPALA-IRDC Logo"
          width={0}
          height={0}
          sizes="(max-width: 768px) 40vw, 20vw"
          className="w-full md:w-[30vw] h-auto object-contain"
        />

        {/* <div className="grid grid-cols-1 md:grid-cols-7 mt-20 gap-3">
          {universities.map((university, index) => (
            <a
              key={index}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center duration-100 ease-in-out transform hover:scale-115 active:scale-95 mt-4 mb-4"
            >
              <div className="relative w-[150px] h-[150px] md:w-[100px] md:h-[100px]">
                <Image
                  src={university.src}
                  alt={university.label}
                  fill
                  className="object-cover"
                />
              </div>

              <span className="mt-5 text-sm text-center">{university.label}</span>
            </a>
          ))}
        </div> */}


        {/* First row: 9 logos */}
        <div className="flex justify-center flex-wrap gap-4 mt-20">
          {universities.slice(0, 9).map((university, index) => (
            <a
              key={index}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center relative group transition duration-100 ease-in-out transform hover:scale-110 active:scale-95"
            >
              <div className="relative w-[100px] h-[100px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={university.src}
                  alt={university.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label on hover */}
              <span className="absolute -bottom-5 text-xs text-gray-700 bg-white px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {university.label}
              </span>
            </a>
          ))}
        </div>

        {/* Second row: 8 logos */}
        <div className="flex justify-center flex-wrap gap-4 mt-6">
          {universities.slice(9, 17).map((university, index) => (
            <a
              key={index}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center relative group transition duration-100 ease-in-out transform hover:scale-110 active:scale-95"
            >
              <div className="relative w-[100px] h-[100px] opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={university.src}
                  alt={university.label}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Label on hover */}
              <span className="absolute -bottom-5 text-xs text-gray-700 bg-white px-2 py-0.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-10">
                {university.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

function CreateHighlights() {
  return (
    <section
      id="highlights"
      className="w-full bg-white min-h-[66.66667vh] flex flex-col items-center justify-center py-20 px-4"
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        <h1 className="text-black text-3xl font-bold mb-4">IRDC Highlights</h1>
        <p className="text-gray-700 text-xl">
          Assessment and Characterization of Water Quality, Inland Capture
          Fisheries, Watershed, and Socioeconomic of Important Water Bodies for
          Social and Economic Transformation in Central
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:gap-0 lg:mt-10 max-w-6xl w-full mx-auto justify-center">
        {sdgLogos.map((logo) => (
          <div
            key={logo.label}
            className="flex items-center justify-center relative"
          >
            <Image
              src={logo.src}
              alt={logo.label || "SDG Logo"}
              width={96}
              height={96}
              className="object-contain h-16 sm:h-20 md:h-24 transition-transform duration-300 ease-in-out hover:scale-115 active:scale-95"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <AppCarousel></AppCarousel>
      {CreateConsortiumMemberSection()}
      {CreateHighlights()}
    </>
  );
}