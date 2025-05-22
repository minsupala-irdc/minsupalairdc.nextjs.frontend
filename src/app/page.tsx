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

  { src: "/assets/resources/irdc-members/basilan-state-college.png", label: "Basilan State University", url: "https://bassc.edu.ph/basc/" },
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


function CreateEventList (){
  return (
    
  <section className="w-full flex items-center justify-center pt-10 pb-20 min-h-[66.66667vh] ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4">

      <div>
        <h2 className="text-2xl font-bold mb-4">Recent Updates</h2>
        {/* <div v-for="(news, index) in newsList" :key="index" class="mb-6 flex items-start space-x-4">
          <img :src="news.image" alt="news" class="w-24 h-24 object-cover rounded" />
          <div className="flex flex-col">
            <p class="text-lg font-medium">{{ news.title }}</p>
            <p class="text-sm">March 21, 2025</p>
          </div>
        </div> */}
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Upcoming Events</h2>
        {/* <div v-for="(event, index) in events" :key="index" class="mb-4">
          <p class="text-lg font-semibold">{{ event.title }}</p>
          <p class="text-gray-500 text-sm">{{ event.date }}</p>
        </div> */}
      </div>

    </div>
  </section>
  )
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
      className="w-full min-h-[66.66667vh] flex items-center justify-center bg-gray-50 py-50"
    >
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center">

        {/* <Image
          src="/assets/resources/IRDC-logo-transparent.png"
          alt="MINSUPALA-IRDC Logo"
          width={0}
          height={0}
          sizes="(max-width: 768px) 40vw, 20vw"
          className="w-full md:w-[30vw] h-auto object-contain"
        /> */}

      <h1 className="text-3xl mt-10 mb-30">Mindanao Sulu Palawan Innovative Research and Development Consortium</h1>

        {/* First row: 9 logos */}
        <div className="flex justify-center flex-wrap gap-5 ">
          {universities.slice(0, 9).map((university, index) => (
            <a
              key={index}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center relative group transition duration-100 ease-in-out transform hover:scale-110 active:scale-95"
            >
              <div className="relative w-[100px] h-[100px] group-hover:opacity-100 transition-opacity duration-300">
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
        <div className="flex justify-center flex-wrap gap-5 mt-6">
          {universities.slice(9, 17).map((university, index) => (
            <a
              key={index}
              href={university.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center relative group transition duration-100 ease-in-out transform hover:scale-110 active:scale-95"
            >
              <div className="relative w-[100px] h-[100px] group-hover:opacity-100 transition-opacity duration-300">
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
      className="w-full bg-white min-h-[66.66667vh] flex flex-col items-center justify-center py-50"
    >
      <div className="max-w-6xl w-full mx-auto text-center">
        <h1 className="text-black text-3xl font-bold mb-4">IRDC Highlights</h1>
        <p className="text-gray-700 text-xl">
          Assessment and Characterization of Water Quality, Inland Capture
          Fisheries, Watershed, and Socioeconomic of Important Water Bodies for
          Social and Economic Transformation in Central
        </p>

        <p>Books.</p>
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

function CreateHeadQuarterSection(){
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
      {CreateConsortiumMemberSectionList()}
      {/* {CreateConsortiumMemberSection()} */}
      {/* {CreateEventList()} */}
      {CreateHighlights()}
      {CreateHeadQuarterSection()}
    </>
  );
}