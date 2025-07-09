import Image from "next/image";
import Link from "next/link";
export const UNIVERSITIES = [
    {
        src: "/assets/resources/irdc-members/adiong-memorial-state-college.png",
        label: "Adiong Memorial State College",
        url: "https://amsc-edu.net/",
    },

    { src: "/assets/resources/irdc-members/basilan-state-college.png", label: "Basilan State College", url: "https://bassc.edu.ph/basc/" },
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
    { src: "/assets/resources/irdc-members/msu-buug.png", label: "Mindanao State University – Buug", url: "https://msubuug.edu.ph/" },
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

    { src: "/assets/resources/irdc-members/msu-sulu.png", label: "Mindanao State University – Sulu", url: "https://msusulu.edu.ph/" },
    { src: "/assets/resources/irdc-members/msu-tcto.png", label: "Mindanao State University – Tawi-Tawi College of Technology and Oceanography", url: "https://msutawi-tawi.edu.ph/" },
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
    { src: "/assets/resources/irdc-members/sulu-state-college.png", label: "Sulu State College", url: "https://sulustatecollege.edu.ph/" },
    { src: "/assets/resources/irdc-members/tawi-tawi-agricultural-state-college.png", label: "Tawi-tawi Regional Agricultural College", url: "https://trac.edu.ph/" },
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

export default function ConsortiumMemberSection() {
    return (
        <section
            id="home-members"
            className="w-full min-h-[66.66667vh] flex items-center justify-center bg-gray-50 py-10 md:py-25"
        >
            <div className="max-w-6xl w-full mx-auto flex flex-col items-center justify-center p-3 md:p-0">

                <p className="text-3xl text-center font-montserrat"></p>

                <h2 className="text-2xl lg:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight text-center">
                    {/* <span className="text-blue-800">Upcoming</span> Events & Activities */}
                    Mindanao Sulu Palawan{" "}
                    <span className="text-red-700">
                        Innovative Research &<br />
                        Development Consortium
                    </span>
                </h2>

                <p className="mt-4 mb-10 md:mb-20 md:text-lg text-gray-600 text-center ">
                    Driving sustainable development through collaborative research and
                    development.
                </p>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {UNIVERSITIES.map((university, index) => {
                        const isLastOdd =
                            UNIVERSITIES.length % 3 === 1 &&
                            index === UNIVERSITIES.length - 1;

                        return (
                            <Link
                                key={index}
                                href={university.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex md:flex-col items-center transition duration-100 ease-in-out transform hover:scale-110 active:scale-95 ${isLastOdd ? "md:col-start-2" : ""
                                    }`}
                            >
                                {/* Logo */}

                                <div className="relative min-w-[50px] min-h-[50px] md:w-[100px] md:h-[100px] ">
                                    <Image
                                        src={university.src}
                                        alt={university.label}
                                        fill
                                        className="object-cover rounded"
                                    />
                                </div>

                                {/* Label */}
                                <span className="ml-4 md:ml-0 md:mt-3 text-sm text-left md:text-center text-gray-700 font-medium">
                                    {university.label}
                                </span>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>

    )
}