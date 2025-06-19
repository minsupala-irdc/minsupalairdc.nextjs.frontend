import Link from "next/link";
import Image from "next/image";

// This is your data
const phase1Books = [
    { school: "msu-mag", src: "/assets/resources/phase1-books/consolidated-terminal-report.png" },
    // { school: "msu-mag", src: "/assets/resources/phase1-books/msu-mag-bird-species-sifaran-watershed.png" }
];

const sdgLogos = [
    { label: "sdg1", src: "/assets/resources/sdg/E-WEB-Goal-01.png" },
    { label: "sdg3", src: "/assets/resources/sdg/E-WEB-Goal-03.png" },
    { label: "sdg9", src: "/assets/resources/sdg/E-WEB-Goal-09.png" },
    { label: "sdg11", src: "/assets/resources/sdg/E-WEB-Goal-11.png" },
    { label: "sdg14", src: "/assets/resources/sdg/E-WEB-Goal-14.png" },
    { label: "sdg15", src: "/assets/resources/sdg/E-WEB-Goal-15.png" },
    { label: "sdg17", src: "/assets/resources/sdg/E-WEB-Goal-17.png" },
];


// In your React component (e.g., a functional component)
function createBookDisplay() {
    return (
        <div className="flex flex-wrap gap-4 justify-center"> {/* Added a container for demonstration */}
            {phase1Books.map((book, index) => (
                // Use a unique key for each item when mapping.
                // If 'src' is always unique, it can be a good key. Otherwise, 'index' is a fallback.
                <Link href="#" className="block cursor-pointer w-[300px] relative" key={book.src || index}>
                    <Image
                        src={book.src} // Use the src from your book object
                        alt={`${book.school} book cover`} // Dynamic alt text for accessibility
                        width={300}
                        height={0} // `height={0}` with `style={{ height: "auto" }}` is a good approach for auto-height
                        style={{ height: "auto" }}
                        className="object-contain"
                    />
                </Link>
            ))}
        </div>
    );
}


export default function Project1Highlights() {
    return (
        <section
            className="w-full bg-gray-50 min-h-[66.66667vh] flex flex-col items-center justify-center py-10 md:py-25 px-1 md:px-4 sm:px-6 lg:px-8"

        >
            <div className="max-w-3xl w-full mx-auto text-center">
                <h1 className="text-xl lg:text-4xl font-extrabold text-gray-800 leading-tight mb-8 px-5 md:px-0">

                    Assessment and Characterization of Water Quality, Inland Capture
                    Fisheries, Watershed, and Socioeconomic of Important Water Bodies{" "}
                    <span className="text-red-600">
                        for Social and Economic Transformation in Central Mindanao
                    </span>
                </h1>

                <p className="text-justify md:text-lg sm:text-xl text-gray-700 leading-relaxed mb-10 px-5 md:px-0">
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
                    <div className="flex md:items-center mb-6">
                        <span>
                            Project Cost:{" "}
                            <span className="font-bold text-red-500">45,000,000 PhP</span>
                        </span>
                    </div>

                    {/* Duration and Dates (horizontal on medium screens and above) */}
                    <div className="flex md:items-center flex-col sm:flex-row text-center sm:text-left space-y-2 sm:space-y-0 sm:space-x-4">

                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3">
                            <span>
                                Duration:{" "}
                                <span className="font-bold text-red-500">12 months</span>
                            </span>
                            <span className="hidden sm:inline-block text-gray-500">|</span>{" "}
                            {/* Separator for horizontal display, now gray */}
                            <span>
                                Start Date:{" "}
                                <span className="font-bold text-red-500">January 1, 2024</span>
                            </span>
                            <span className="hidden sm:inline-block text-gray-500">-</span>{" "}
                            {/* Separator for horizontal display, now gray */}
                            <span>
                                End Date:{" "}
                                <span className="font-bold text-red-500">
                                    December 31, 2024
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="md:mt-16 md:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <h3 className="md:text-3xl text-xl font-extrabold text-gray-800 mb-12 text-center leading-tight">
                        Focus <span className="text-red-700">Areas</span>
                    </h3>
                    <div className="max-w-3xl mx-auto">
                        <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-y-6 gap-x-8  text-base md:text-xl text-gray-700">
                            <li className="flex items-center">
                                <span className="inline-block h-3 w-3 rounded-full bg-red-600 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold">Water Quality Assessment</span>
                            </li>
                            <li className="flex items-center">
                                <span className="inline-block h-3 w-3 rounded-full bg-red-600 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold">Inland Capture Fisheries</span>
                            </li>
                            <li className="flex items-center">
                                <span className="inline-block h-3 w-3 rounded-full bg-red-600 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold">Watershed Health</span>
                            </li>
                            <li className="flex items-center">
                                <span className="inline-block h-3 w-3 rounded-full bg-red-600 mr-3 flex-shrink-0"></span>
                                <span className="font-semibold">Socioeconomic Conditions</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-16 px-4 sm:px-6 lg:px-8">
                <h3 className="text-xl md:text-3xl mb-10 sm:text-3xl font-extrabold text-gray-800 text-center leading-tight">
                    Target{" "}
                    <span className="text-red-700">Sustainable Development Goals</span>
                </h3>
                <p className="md:text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto text-center ">
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
                <h3 className="text-xl md:text-3xl md:mb-10 sm:text-3xl font-extrabold text-gray-800 text-center leading-tight">
                    <span className="text-red-700">Resources and Materials</span>
                </h3>
                <p className="md:text-lg text-gray-700 max-w-3xl mx-auto ">
                    Explore our comprehensive research output, detailed findings, and
                    valuable resources. Dive into the papers, reports, and data that
                    present our impactful work and contributions to the region.
                </p>
            </div>


            {createBookDisplay()}

        </section>
    )
}
