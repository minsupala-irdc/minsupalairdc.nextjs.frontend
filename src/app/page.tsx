import Image from "next/image";
import { AppCarousel } from "./ui/app-carousel";
import AppSection from "./ui/app-section";
import Link from "next/link";
const sdgLogos = [
  { label: "sdg1", src: "/assets/resources/sdg/E-WEB-Goal-01.png" },
  { label: "sdg3", src: "/assets/resources/sdg/E-WEB-Goal-03.png" },
  { label: "sdg9", src: "/assets/resources/sdg/E-WEB-Goal-09.png" },
  { label: "sdg11", src: "/assets/resources/sdg/E-WEB-Goal-11.png" },
  { label: "sdg14", src: "/assets/resources/sdg/E-WEB-Goal-14.png" },
  { label: "sdg15", src: "/assets/resources/sdg/E-WEB-Goal-15.png" },
  { label: "sdg17", src: "/assets/resources/sdg/E-WEB-Goal-17.png" },
];

const eventList = [
  {
    event: "Financial Management Workshop",
    date: "May 27, 2025",
    time: "8:30 AM-4:00 PM",
    venue:
      "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
  },
  {
    event: "High-Level Meeting",
    date: "May 27, 2025",
    time: "1:00 PM",
    venue: "Acacia Hotel, Davao City",
  },
  {
    event: "Policy Brief Writeshop",
    date: "May 28-29, 2025",
    time: "8:30 AM-5:00 PM",
    venue:
      "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
  },
  {
    event:
      "Workshop on Designing Survey Tools and Protocols for Market Potential and Value Chain Analysis of Indigenous Species",
    date: "May 28-29, 2025",
    time: "8:30 AM-5:00 PM",
    venue:
      "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Orientation of Women, Peace, and Security Agenda",
    date: "May 29, 2025",
    time: "10:30 AM - 12:00 PM",
    venue:
      "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Training-Workshop on Nutritional Analysis",
    date: "June 3-5, 2025",
    time: "TBA",
    venue: "General Santos City",
  },
];

const universities = [
  {
    src: "/assets/resources/irdc-members/adiong-memorial-state-college.png",
    label: "Adiong Memorial State College",
    url: "https://amsc-edu.net/",
  },

  // { src: "/assets/resources/irdc-members/basilan-state-college.png", label: "Basilan State University", url: "https://bassc.edu.ph/basc/" },
  {
    src: "/assets/resources/irdc-members/cotabato-foundation-college-of-science-and-technology.png",
    label: "Cotabato Foundation College of Science and Technology",
    url: "https://cfcst.edu.ph/",
  },
  {
    src: "/assets/resources/irdc-members/cotabato-state-university.png",
    label: "Cotabato State University",
    url: "http://www.cotsu.edu.ph/",
  },
  // { src: "/assets/resources/irdc-members/msu-buug.png", label: "Mindanao State University – Buug", url: "https://msubuug.edu.ph/" },
  {
    src: "/assets/resources/irdc-members/msu-maguindanao.png",
    label: "Mindanao State University - Maguindanao",
    url: "https://msumaguindanao.edu.ph/",
  },
  {
    src: "/assets/resources/irdc-members/msu-gensan.png",
    label: "Mindanao State University - Gensan",
    url: "https://msugensan.edu.ph/",
  },

  // { src: "/assets/resources/irdc-members/msu-sulu.png", label: "Mindanao State University – Sulu", url: "https://msusulu.edu.ph/" },
  // { src: "/assets/resources/irdc-members/msu-tcto.png", label: "Mindanao State University – Tawi-tawi College of Technology and Oceanography", url: "https://msutawi-tawi.edu.ph/" },
  {
    src: "/assets/resources/irdc-members/south-cotabato-state-college.png",
    label: "South Cotabato State College",
    url: "https://scsc.edu.ph/home/",
  },
  {
    src: "/assets/resources/irdc-members/sultan-kudarat-state-university.png",
    label: "Sultan Kudarat State University",
    url: "https://sksu.edu.ph/",
  },
  // { src: "/assets/resources/irdc-members/sulu-state-college.png", label: "Sulu State College", url: "https://sulustatecollege.edu.ph/" },
  // { src: "/assets/resources/irdc-members/tawi-tawi-agricultural-state-college.png", label: "Tawi-tawi Regional Agricultural College", url: "https://trac.edu.ph/" },
  {
    src: "/assets/resources/irdc-members/usm-kabacan.png",
    label: "University of Southern Mindanao - Kabacan",
    url: "https://www.usm.edu.ph/",
  },
  {
    src: "/assets/resources/irdc-members/usm-kidapawan.png",
    label: "University of Southern Mindanao - Kidapawan",
    url: "https://www.usm.edu.ph/academics/kidapawan-city-campus/",
  },

  {
    src: "/assets/resources/irdc-members/dbm.png",
    label: "Department of Budget and Management",
    url: "https://www.dbm.gov.ph/",
  },
];

function CreateEventList() {
  return (
    <section
      id="home-updates"
      className="w-full py-40 bg-gradient-to-br from-gray-0 to-gray-100 "
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="text-center mb-16">
          {" "}
          {/* Increased bottom margin for better spacing */}
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight px-5 md:px-0">
            <span className="text-blue-800">Upcoming</span> Events & Activities
          </h2>
          {/* Subtitle */}
          <p className="md:text-lg text-xl text-gray-600 max-w-5xl mx-auto text-center px-5 md:px-0">
            Stay informed about our latest conferences, workshops, and community engagement initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventList.map((e, index) => (
            <div
              key={index}
              className="bg-white shadow flex flex-col justify-between" // Added shadow-lg and flex-col for consistent height
            >
              <div className="p-6 flex-grow">
                {" "}
                {/* flex-grow to push footer down */}
                {/* Event Title */}
                <h3 className="text-xl font-bold text-gray-700 mb-4 leading-snug">
                  {e.event}
                </h3>{" "}
                {/* Larger title, better line height */}
                {/* Date */}
                <div className="flex items-center text-sm text-gray-700 mb-1">
                  {" "}
                  {/* Increased font size */}
                  <svg
                    className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">{e.date}</span>
                </div>
                {/* Time */}
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  {" "}
                  {/* Increased font size */}
                  <svg
                    className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="font-medium">{e.time}</span>
                </div>
                {/* Venue */}
                <div className="flex items-start text-sm text-gray-500">
                  <svg
                    className="w-5 h-5 mt-0.5 mr-3 text-blue-800 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <p>{e.venue}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CreateConsortiumMemberSection() {
  return (
    <section
      id="home-members"
      className="w-full min-h-[66.66667vh] flex items-center justify-center bg-gray-50 py-40"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center">
        {/* 
        <Image
          src="/assets/resources/IRDC-logo-transparent.png"
          alt="MINSUPALA-IRDC Logo"
          width={0}
          height={0}
          sizes="(max-width: 768px) 40vw, 20vw"
          className="w-full md:w-[30vw] h-auto object-contain"
        /> */}

        <p className="text-3xl  text-center font-montserrat"></p>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight text-center">
          {/* <span className="text-blue-800">Upcoming</span> Events & Activities */}
          Mindanao Sulu Palawan{" "}
          <span className="text-blue-800">
            Innovative Research <br />
            Development Consortium
          </span>
        </h2>

        
          {/* <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center px-5 md:px-0"></p>
          
          
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center px-5 md:px-0">
          
          */}


        <p className="mt-4 mb-20 text-lg text-gray-600 text-center ">
          Driving sustainable development through collaborative research and
          development.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {universities.map((university, index) => {
            const isLastOdd =
              universities.length % 3 === 1 &&
              index === universities.length - 1;

            return (
              <a
                key={index}
                href={university.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center transition duration-100 ease-in-out transform hover:scale-110 active:scale-95 ${
                  isLastOdd ? "md:col-start-2" : ""
                }`}
              >
                {/* Logo */}
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={university.src}
                    alt={university.label}
                    fill
                    className="object-cover rounded"
                  />
                </div>

                {/* Label */}
                <span className="mt-3 text-sm text-center text-gray-700 font-medium">
                  {university.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CreateHighlightsProject1() {
  return (
    <section
      className="w-full bg-gray-50 min-h-[66.66667vh] flex flex-col items-center justify-center py-40 px-4 sm:px-6 lg:px-8"
      
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-8 px-5 md:px-0">
          
          Assessment and Characterization of Water Quality, Inland Capture
          Fisheries, Watershed, and Socioeconomic of Important Water Bodies{" "}
          <span className="text-blue-600">
            for Social and Economic Transformation
          </span>
        </h1>

        <p className="text-justify text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 px-5 md:px-0">
          The project aims to provide a comprehensive assessment and
          characterization of the important water bodies in Central Mindanao to
          gather scientific data and information. This management practice is
          for the sustainable development and transformation of the region. The
          project recognizes the intrinsic linkages between water quality,
          inland capture fisheries, watershed health, and socio-economic
          conditions, emphasizing the need to address these aspects
          holistically.
        </p>

        <div className="flex flex-col items-center justify-center text-gray-700 font-semibold text-lg mb-10">
          {/* Project Cost (aligned to the left within its own space) */}
          <div className="flex items-center mb-6">
            {" "}
            {/* Added mb-6 for spacing below */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>
              Project Cost:{" "}
              <span className="font-bold text-blue-600">45,000,000 PhP</span>
            </span>
          </div>

          {/* Duration and Dates (horizontal on medium screens and above) */}
          <div className="flex items-center flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 mb-2 sm:mb-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span>
                Duration:{" "}
                <span className="font-bold text-blue-600">12 months</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">|</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                Start Date:{" "}
                <span className="font-bold text-blue-600">January 1, 2024</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">-</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                End Date:{" "}
                <span className="font-bold text-blue-600">
                  December 31, 2024
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-16 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <h3 className="md:text-3xl text-2xl font-extrabold text-gray-800 mb-12 text-center leading-tight">
            Focus <span className="text-blue-700">Areas</span>
          </h3>
          <div className="max-w-3xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8  text-base md:text-xl text-gray-700">
              <li className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-600 mr-3 flex-shrink-0"></span>
                <span className="font-semibold">Water Quality Assessment</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-600 mr-3 flex-shrink-0"></span>
                <span className="font-semibold">Inland Capture Fisheries</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-600 mr-3 flex-shrink-0"></span>
                <span className="font-semibold">Watershed Health</span>
              </li>
              <li className="flex items-center">
                <span className="inline-block h-3 w-3 rounded-full bg-blue-600 mr-3 flex-shrink-0"></span>
                <span className="font-semibold">Socioeconomic Conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl mb-10 sm:text-3xl font-extrabold text-gray-800 text-center leading-tight">
          Target{" "}
          <span className="text-blue-700">Sustainable Development Goals</span>
        </h3>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center ">
          The Phase 1 project of MINSUPALA-IRDC is directly aligned with and
          contributes to the realization of the following SDGs.
        </p>
      </div>


      <div className="flex flex-wrap justify-center mt-6 max-w-6xl w-full mx-auto md:flex-nowrap">
        {sdgLogos.map((logo) => (
          <div
            key={logo.label}
            className="flex items-center justify-center relative" // Removed width classes to allow natural sizing without gaps
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


      <div className="mt-20 px-4 sm:px-6 lg:px-8 text-center py-16 rounded-xl w-max-3xl">
        {" "}
        {/* Added padding, background, shadow, and rounded corners */}
        <h3 className="text-3xl mb-10 sm:text-3xl font-extrabold text-gray-800 text-center leading-tight">
          Target{" "}
          <span className="text-blue-700">Resources and Materials</span>
        </h3>
        <p className="md:text-lg text-xl text-gray-700 max-w-3xl mx-auto ">
          Explore our comprehensive research output, detailed findings, and
          valuable resources. Dive into the papers, reports, and data that
          present our impactful work and contributions to the region.
        </p>
      </div>

      <Link href="#" className="block cursor-pointer w-[300px] relative">
        <Image
          src="/assets/resources/phase1-books/status-report-on-water-quality-inland-capture-fisheries-watersheds-and-socio-economic-conditions-of-important-water-bodies-in-central-mindanao.png"
          alt="Status Report Cover"
          width={300}
          height={0} // we'll fix this below
          style={{ height: "auto" }} // maintain aspect ratio, height automatic
          className="object-contain   "
        />
      </Link>
    </section>
  );
}
function CreateHighlightsProject2() {
  return (
    <section
      id="highlights"
      className="w-full bg-gray-50 min-h-[66.66667vh] flex flex-col items-center justify-center py-40 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl w-full mx-auto text-center">
        <h1 className="text-2xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-8 px-5 md:px-0">
          Establishment and Preservation of Indigenous Fish and Crop Products
        </h1>

        {/* <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-10  px-3 md:px-0">
          The Indigenous Crops and Fish Research and Preservation Center aims to
          **conserve and promote indigenous crops and fish species unique to the
          region**. This project aims to develop indigenous products while
          preserving traditional knowledge, biodiversity, and cultural heritage
          associated with these agricultural produce, while also creating market
          opportunities for local farmers.
        </p> */}

<p className="text-justify text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 px-5 md:px-0">
  The Indigenous Crops and Fish Research and Preservation Center aims to
  <span className="text-blue-700 text-bold"> conserve and promote indigenous crops and fish species unique to the
  region</span>. This project aims to develop indigenous products while
  preserving traditional knowledge, biodiversity, and cultural heritage
  associated with these agricultural produce, while also creating market
  opportunities for local farmers.
</p>

        <div className="flex flex-col items-center justify-center text-gray-700 font-semibold text-lg mb-10">
          {/* Project Cost (aligned to the left within its own space) */}
          <div className="flex items-center mb-6">
            {" "}
            {/* Added mb-6 for spacing below */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>
              Project Cost:{" "}
              <span className="font-bold text-blue-600">45,000,000 PhP</span>
            </span>
          </div>

          {/* Duration and Dates (horizontal on medium screens and above) */}
          <div className="flex items-center flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">
            {" "}
            {/* Adjusted spacing */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mr-3 mb-2 sm:mb-0 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
              <span>
                Duration:{" "}
                <span className="font-bold text-blue-600">12 months</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">|</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                Start Date:{" "}
                <span className="font-bold text-blue-600">January 1, 2025</span>
              </span>
              <span className="hidden sm:inline-block text-gray-400">-</span>{" "}
              {/* Separator for horizontal display, now gray */}
              <span>
                End Date:{" "}
                <span className="font-bold text-blue-600">
                  December 31, 2025
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CreateHeadQuarterSection() {
  const instituteName = "Mindanao State University - Institute of Management";
  const fullAddress =
    "56F9+R4V, Shariff Aguak - Cotabato City Rd, Datu Odin Sinsuat, Maguindanao, Philippines";

  return (
    <section
      id="map-location"
      className="w-full bg-white py-40 flex flex-col items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-70"></div>

      

      <div className="relative z-10 max-w-7xl  sm:text-4xl lg:text-5xl  w-full mx-auto text-center px-4 sm:px-6 lg:px-8">
        <p className="text-3xl  font-extrabold text-gray-800 leading-tight mb-6 drop-shadow-sm font-montserrat">
          MINSUPALA-IRDC <span className="text-blue-600">Headquarters</span>
        </p>

        <p className="mb-10 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          We look forward to welcoming you to our facility!
        </p>

        <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.7777397715808!2d124.217656!3d7.1754256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563760dca77263%3A0x5a167ff3a829d8a8!2sMindanao%20State%20University%20Graduate%20School!5e1!3m2!1sen!2sph!4v1715760000000!5m2!1sen!2sph"
            width="100%"
            height="550"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function ConstiumHeadWelcomeSection() {
  // Replace YourComponent with the actual component name where you're adding this
  return (
    <>
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-16 text-center leading-tight drop-shadow-sm ">
            Message from the Consortium{" "}
            <span className="text-blue-700">Lead</span>
          </h2>

          <div className="flex flex-col items-center">
            {" "}
            {/* Center content on small screens */}
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-gray-100 mb-10">
              {/* Replace with actual President's image path */}
              <Image
                src="/assets/placeholders/president-placeholder.jpg"
                alt="President of MINSUPALA-IRDC"
                width={224} // 56 * 4
                height={224} // 56 * 4
                objectFit="cover"
                className="object-cover" // For Tailwind JIT
              />
            </div>
            <div className="p-8 md:p-10 text-gray-700 text-lg sm:text-xl leading-relaxed text-center italic max-w-3xl">
              <p className="mb-6">
                "Greetings from the MINSUPALA-IRDC! Our journey is one of
                impactful research and unwavering dedication to the sustainable
                development of our vibrant regions. We stand committed to
                fostering innovation and collaboration that directly benefits
                the communities we serve."
              </p>
              <p className="mt-8 text-2xl font-semibold text-gray-800">
                — Bai Hejira Nefertiti Sinsuat-Macalandong Limbona
              </p>
              <p className="text-blue-600 text-base">
                Consortium Lead, MINSUPALA-IRDC
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// function CreateMinsupalaIRDCHighlights() { // Replace YourComponent with the actual component name where you're adding this
//   return (
//     <>
//       {/* ... previous sections ... */}

//       <div className="w-full bg-neutral-900 py-10 sm:py-12 relative overflow-hidden">
//         {/* Content */}
//         <div className="relative z-10 text-center px-4">
//           <h3 className="text-3xl sm:text-4xl lg:text-5xl  font-extrabold tracking-wide uppercase leading-tight">
//             {/* Added opacity-80 to the main text color */}
//             <span className="text-gray-50  opacity-90">MINSUPALA IRDC</span> <span className="text-blue-400  opacity-90">Highlights</span>
//           </h3>
//           <p className="mt-4 text-lg text-gray-300 opacity-80 max-w-2xl mx-auto">
//             Discover the key achievements and impactful projects<br/> that define our commitment to the region.
//           </p>
//         </div>

//         {/* needs to be an arrow pointing down here */}
//       </div>

//     </>
//   );
// }

function CreateMinsupalaIRDCHighlights() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <>
      <div id="home-project" className="w-full bg-neutral-900 py-30   relative overflow-hidden">
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
            Discover the key achievements and impactful projects that define our commitment to the
            region.
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
      {CreateEventList()}
      {CreateConsortiumMemberSection()}
      {/* {ConstiumHeadWelcomeSection() } */}
      {CreateMinsupalaIRDCHighlights()}
      {CreateHighlightsProject1()}
      {CreateHighlightsProject2()}
      {CreateHeadQuarterSection()}
    </>
  );
}
