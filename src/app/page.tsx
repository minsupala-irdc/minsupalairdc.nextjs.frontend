import Image from "next/image";
import { AppCarousel } from "./ui/app-carousel";
import AppSection from './ui/app-section';
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
    venue: "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
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
    venue: "Function Room Alma, Oroderm City Functions and Events Place, Davao City",
  },
  {
    event: "Workshop on Designing Survey Tools and Protocols for Market Potential and Value Chain Analysis of Indigenous Species",
    date: "May 28-29, 2025",
    time: "8:30 AM-5:00 PM",
    venue: "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Orientation of Women, Peace, and Security Agenda",
    date: "May 29, 2025",
    time: "10:30 AM - 12:00 PM",
    venue: "Second Floor Function Hall, Oroderm City Functions and Events Place, C.M. Recto, Davao City",
  },
  {
    event: "Training-Workshop on Nutritional Analysis",
    date: "June 3-5, 2025",
    time: "TBA",
    venue: "General Santos City",
  },
];

const universities = [
  { src: "/assets/resources/irdc-members/adiong-memorial-state-college.png", label: "Adiong Memorial State College", url: "https://amsc-edu.net/" },

  // { src: "/assets/resources/irdc-members/basilan-state-college.png", label: "Basilan State University", url: "https://bassc.edu.ph/basc/" },
  { src: "/assets/resources/irdc-members/cotabato-foundation-college-of-science-and-technology.png", label: "Cotabato Foundation College of Science and Technology", url: "https://cfcst.edu.ph/" },
  { src: "/assets/resources/irdc-members/cotabato-state-university.png", label: "Cotabato State University", url: "http://www.cotsu.edu.ph/" },
  // { src: "/assets/resources/irdc-members/msu-buug.png", label: "Mindanao State University – Buug", url: "https://msubuug.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-maguindanao.png", label: "Mindanao State University - Maguindanao", url: "https://msumaguindanao.edu.ph/" },
  { src: "/assets/resources/irdc-members/msu-gensan.png", label: "Mindanao State University - Gensan", url: "https://msugensan.edu.ph/" },

  // { src: "/assets/resources/irdc-members/msu-sulu.png", label: "Mindanao State University – Sulu", url: "https://msusulu.edu.ph/" },
  // { src: "/assets/resources/irdc-members/msu-tcto.png", label: "Mindanao State University – Tawi-tawi College of Technology and Oceanography", url: "https://msutawi-tawi.edu.ph/" },
  { src: "/assets/resources/irdc-members/south-cotabato-state-college.png", label: "South Cotabato State College", url: "https://scsc.edu.ph/home/" },
  { src: "/assets/resources/irdc-members/sultan-kudarat-state-university.png", label: "Sultan Kudarat State University", url: "https://sksu.edu.ph/" },
  // { src: "/assets/resources/irdc-members/sulu-state-college.png", label: "Sulu State College", url: "https://sulustatecollege.edu.ph/" },
  // { src: "/assets/resources/irdc-members/tawi-tawi-agricultural-state-college.png", label: "Tawi-tawi Regional Agricultural College", url: "https://trac.edu.ph/" },
  { src: "/assets/resources/irdc-members/usm-kabacan.png", label: "University of Southern Mindanao - Kabacan", url: "https://www.usm.edu.ph/" },
  { src: "/assets/resources/irdc-members/usm-kidapawan.png", label: "University of Southern Mindanao - Kidapawan", url: "https://www.usm.edu.ph/academics/kidapawan-city-campus/" },

  { src: "/assets/resources/irdc-members/dbm.png", label: "Department of Budget and Management", url: "https://www.dbm.gov.ph/" },

];


function CreateEventList() {
    return (
        <section className="w-full py-30 bg-gradient-to-br from-gray-0 to-gray-100 ">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-10 tracking-tight sm:text-4xl">
                    <span className="text-blue-800">Upcoming</span> Events & Activities
                </h2>
s
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventList.map((e, index) => (
                        <div
                            key={index}
                            className="bg-white shadow flex flex-col justify-between" // Added shadow-lg and flex-col for consistent height
                        >
                            <div className="p-6 flex-grow"> {/* flex-grow to push footer down */}
                                {/* Event Title */}
                                <h3 className="text-xl font-bold text-gray-700 mb-4 leading-snug">{e.event}</h3> {/* Larger title, better line height */}

                                {/* Date */}
                                <div className="flex items-center text-sm text-gray-700 mb-1"> {/* Increased font size */}
                                    <svg className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                                    <span className="font-medium">{e.date}</span>
                                </div>

                                {/* Time */}
                                <div className="flex items-center text-sm text-gray-500 mb-3"> {/* Increased font size */}
                                    <svg className="w-5 h-5 mr-3 text-blue-800 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path></svg>
                                    <span className="font-medium">{e.time}</span>
                                </div>

                                {/* Venue */}
                                <div className="flex items-start text-sm text-gray-500">
                                    <svg className="w-5 h-5 mt-0.5 mr-3 text-blue-800 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
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




function CreateConsortiumMemberSectionList() {
  return (
    <section className="max-w-6xl mx-auto">

      <h1 className="text-3xl mt-10 mb-10  text-center">Mindanao Sulu Palawan Innovative Research and Development Consortium</h1>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {universities.map((uni, index) => (
          <a
            key={index}
            href={uni.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {uni.label}
          </a>
        ))}
      </div>
    </section>
  );
}


function CreateConsortiumMemberSection() {
  return (
    <section
      id="consortium"
      className="w-full min-h-[66.66667vh] flex items-center justify-center bg-gray-50 py-30"
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

        <h1 className="text-3xl mt-10 mb-30 font-semibold ">MINSUPALA Innovative Research and Development Consortium</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {universities.map((university, index) => {
            const isLastOdd =
              universities.length % 3 === 1 && index === universities.length - 1;

            return (
              <a
                key={index}
                href={university.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center transition duration-100 ease-in-out transform hover:scale-110 active:scale-95 ${isLastOdd ? 'md:col-start-2' : ''
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
  )
}

function CreateHighlights() {
  return (
    <section
      id="highlights"
      className="w-full bg-white min-h-[66.66667vh] flex flex-col items-center justify-center py-50"
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        <h1 className="text-black text-3xl font-bold mb-4">IRDC Highlights</h1>

        <p className="text-gray-700 text-xl">
          Assessment and Characterization of Water Quality, Inland Capture
          Fisheries, Watershed, and Socioeconomic of Important Water Bodies for
          Social and Economic Transformation
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

        <h1 className="text-black text-xl font-bold mt-10 mb-5">Reports and Findings</h1>
      
    <Link href="/path-to-your-destination" className="block cursor-pointer w-[300px] relative">
      <Image
        src="/assets/resources/phase1-books/status-report-on-water-quality-inland-capture-fisheries-watersheds-and-socio-economic-conditions-of-important-water-bodies-in-central-mindanao.png"
        alt="Status Report Cover"
        width={300}
        height={0} // we'll fix this below
        style={{ height: 'auto' }} // maintain aspect ratio, height automatic
        className="object-contain   " 
      />
    </Link>
    </section>
  );
}

function CreateHeadQuarterSection() {
  return (

    <section
      id="map"
      className="w-full bg-gray-50 min-h-[66.66667vh] flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl">MINSUPALA-IRDC Address</h1>
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.7777397715808!2d124.217656!3d7.1754256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32563760dca77263%3A0x5a167ff3a829d8a8!2sMindanao%20State%20University%20Graduate%20School!5e1!3m2!1sen!2sph!4v1715760000000!5m2!1sen!2sph
"
          width="100%"
          height="550"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>

  )
}

export default function Home() {
  return (
    <>
      <AppCarousel></AppCarousel>
      {CreateEventList()}
      {/* {CreateConsortiumMemberSectionList()} */}
      {CreateConsortiumMemberSection()}
      {CreateHighlights()}
      {CreateHeadQuarterSection()}
    </>
  );
}