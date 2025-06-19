import Link from "next/link";
import HeadquartersSection from "./HeadquarterSection";
import NewsAndUpdateRowSecion from "./news/NewsAndUpdateRowSection";
import Image from "next/image";

import { UNIVERSITIES } from "./members/ConsortiumMemberSection";
import { ARTICLES } from "./news/NewsAndUpdateRowSection";

const RealWorldImpact = () => {
  const impactItems = [
    {
      label: "Policy Briefs",
      image: "/assets/resources/front-page/features/feature-1.jpg",
      alt: "Policy Briefs",
    },
    {
      label: "Initiative Beta",
      image: "/assets/resources/front-page/features/feature-2.jpg",
      alt: "Watershed Health",
    },
    {
      label: "Community Outreach",
      image: "/assets/resources/front-page/features/feature-3.jpg",
      alt: "In land capute fisheries",
    },
    {
      label: "Socio-economic Protocol Assessment", // Improved label for clarity
      image: "/assets/resources/front-page/features/feature-4.jpg",
      alt: "Description for impact image 4",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-red-800 to-red-700  text-white py-16">
      <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 drop-shadow-lg">
          Featured
        </h2>
        <p className="text-lg sm:text-xl mb-12 max-w-6xl mx-auto opacity-90">
          Discover the tangible ways our work contributes to real-world change
          and sustainable development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item, idx) => (
            <div key={idx} className="relative group overflow-hidden ">
              <img
                src={item.image}
                alt={item.alt}
                // These are the crucial classes for your requirements:
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-base font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                {item.label}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TopSection = () => {
  return (
    <div className="py-20 px-4 flex flex-col items-center justify-center text-center bg-white sm:py-32 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full space-y-8 sm:space-y-10">
        <div>
          {/* Mobile-first text sizing: default to smaller, then grow on md and xl */}
          <h2 className=" font-bold text-gray-900 tracking-tight leading-tight sm:text-6xl md:text-7xl lg:text-6xl mt-20">
            Welcome to <span className="text-red-800">Minsupala IRDC</span>
          </h2>
          <p className=" text-base text-gray-700 sm:mt-4 sm:text-lg mb-20">
            Mindanao Sulu Palawan - Innovative Research and Development
            Consortium
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out hover:bg-red-600"
            >
              Learn More
            </Link>
            <Link
              href="#news"
              className="px-6 py-3 bg-red-700 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition duration-150 ease-in-out hover:bg-red-600"
            >
              Recent News
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col gap-6">
      <div style={{ width: "100%" }}>
        {" "}
        {/* Optional: A wrapper div if you need to constrain the image's parent */}
        <Image
          src="/assets/resources/sec-mina-joint-message.png"
          alt="Joint message from Sec. Mina"
          layout="responsive" // This is the key prop for full-width and auto height
          width={700} // Replace with the actual original width of your image
          height={400} // Replace with the actual original height of your image
        />
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Upcoming Events – 1/5 width on md+ */}
        <div id="sidecol" className="w-full md:w-2/7 flex flex-col">
          {" "}
          {/* Added flex flex-col here */}
          <div id="sideevent" className="bg-gray-100 p-4 gap-4">
            <h2 className="text-lg font-extrabold mb-2">Upcoming Events</h2>
            <ul className="pl-5 space-y-2">
              <li className="list-disc marker:text-gray-500 hover:bg-gray-50 p-3 rounded transition duration-200">
                <p className="font-bold text-gray-800">
                  Nutritional Analysis Training
                </p>
                <p className="text-sm text-gray-500">
                  Date: July 2-4, 2025 · General Santos City
                </p>
              </li>
            </ul>
          </div>

          <div id="sidesdg" className="w-full p-4 bg-gray-100 ">
            <h2 className="text-lg font-extrabold mb-2">Sustainable Development Goals</h2>
            
          </div>

          {/* Other content can go here, it will push the social media down */}
          {/* For example, if you have other sections between events and social media, they would go here */}
          {/* The social media section should be at the very bottom of this column */}
          <div id="sidesocial" className="w-full p-4 mt-auto bg-gray-100 ">
            {" "}
            {/* mt-auto does the trick */}
            <h2 className="text-lg font-extrabold mb-2">Social Media</h2>
            <Link
              href="https://www.facebook.com/profile.php?id=61576379536301"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full hover:underline"
            >
              <p className=" text-left text-gray-800 mt-2">Facebook Page</p>
            </Link>
          </div>
        </div>

        {/* Right Side – 4/5 width on md+ */}
        <div className="w-full md:w-5/7 flex flex-col gap-6 ">
          {/* News and Updates */}
          <div className="bg-gray-100 p-4">
            <h2 className="text-lg font-extrabold mb-4">News and Updates</h2>

            <ul className="md:flex md:gap-6">
              {ARTICLES.slice(0, 3).map((item, key) => (
                <li
                  key={key}
                  className="w-full md:w-1/3 flex flex-col items-center text-center"
                >
                  <Link
                    href={item.link_facebook}
                    className="block w-full hover:underline"
                  >
                    <div className="w-full h-40 relative overflow-hidden rounded">
                      <Image
                        src={item.img}
                        alt={item.event || `Article ${key + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[14px] text-left text-gray-800 mt-2">
                      {item.event}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/news"
              className="mt-6 inline-block text-sm text-blue-700 hover:underline font-bold"
            >
              See More
            </Link>
          </div>

          <div className="flex flex-col p-4">
            <h2 className="text-lg font-extrabold mb-4 text-center md:text-left">
              MinSuPala-IRDC Members
            </h2>

            <div className="flex flex-col md:flex-row">
              {/* Members */}
              <div className="md:p-4 flex-1  ">
                <ul className="md:pl-5 space-y-1 flex flex-col gap-4">
                  {UNIVERSITIES.slice(0, 8).map((member, key) => (
                    <li key={key}>
                      <Link
                        href={member.url}
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src={member.src}
                          alt={member.label}
                          width={24}
                          height={24}
                        />
                        <span className="font-semibold tracking-tight text-gray-600">
                          {member.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="w-full flex-1 md:p-4">
                <ul className="md:pl-5 space-y-1 flex flex-col gap-4">
                  {UNIVERSITIES.slice(8, 16).map((member, key) => (
                    <li key={key}>
                      <Link
                        href={member.url}
                        className="flex items-center gap-2 hover:underline"
                      >
                        <Image
                          src={member.src}
                          alt={member.label}
                          width={24}
                          height={24}
                        />
                        <span className="font-semibold tracking-tight text-gray-600">
                          {member.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
