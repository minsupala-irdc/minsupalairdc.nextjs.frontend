"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { UNIVERSITIES } from "./members/ConsortiumMemberSection";
import { getLatestArticles } from "./api/article";
import { getActivities } from "./api/acitivity";

const SDG_LOGOS = [
  { label: "SDG 01", img: "/assets/resources/sdg/E-WEB-Goal-1.png" },
  { label: "SDG 03", img: "/assets/resources/sdg/E-WEB-Goal-3.png" },
  { label: "SDG 09", img: "/assets/resources/sdg/E-WEB-Goal-9.png" },
  { label: "SDG 11", img: "/assets/resources/sdg/E-WEB-Goal-11.png" },
  { label: "SDG 14", img: "/assets/resources/sdg/E-WEB-Goal-14.png" },
  { label: "SDG 15", img: "/assets/resources/sdg/E-WEB-Goal-15.png" },
  { label: "SDG 17", img: "/assets/resources/sdg/E-WEB-Goal-17.png" },
];
export default function Dashboard() {
  type Article = {
    id: number;
    user_id: number;
    title: string;
    image: string;
    image_name: string;
    school: string;
    is_publishable: boolean | number;
    created_at: string;
    facebook_link: string;
  };

  type Activity = {
    id: number;
    title: string;
    venue: string;
    location: string;
    date: string;
    time: string;
  };

  const TARGET_SDGS = [1, 3, 9, , 11, 14, 15, 17];

  const [latestArticles, setArticles] = useState<Article[]>([]);
  const [upcomingActivities, setActivities] = useState<Activity[]>([]); // ✅ must be an array

  useEffect(() => {
    async function fetchData() {
      const data = await getLatestArticles();
      if (data) {
        setArticles(data);
      }

      const activ = await getActivities();
      if (activ) {
        setActivities(activ);
      }
    }

    fetchData();
  }, []);

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
            <h2 className="text-center md:text-left text-lg font-extrabold mb-2">
              Upcoming Events
            </h2>

            {Array.isArray(upcomingActivities) && upcomingActivities.length > 0 ? (
              <ul className="pl-5 space-y-2">
                {upcomingActivities.map((activity, key) => (
                  <li
                    key={key}
                    className="list-disc marker:text-gray-500 hover:bg-gray-50 rounded transition duration-200"
                  >
                    <p className="font-semibold text-gray-800">{activity.title}</p>
                    <p className="text-sm text-gray-500">
                      {activity.date} / {activity.venue}, {activity.location}
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-500 italic">No upcoming events yet.</p>
            )}


          </div>
          <div id="sidesdg" className="w-full p-4 bg-gray-50 mt-4">
            <h2 className="text-lg font-extrabold mb-4 text-center md:text-left ">
              Sustainable Development Goals
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {SDG_LOGOS.map((logo, key) => (
                <div key={key} className="flex items-center justify-center">
                  <Image
                    src={logo.img}
                    alt={logo.label}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Other content can go here, it will push the social media down */}
          {/* For example, if you have other sections between events and social media, they would go here */}
          {/* The social media section should be at the very bottom of this column */}
          <div
            id="sidesocial"
            className="w-full p-4 mt-4 bg-gray-50 md:mt-auto"
          >
            {" "}
            {/* mt-auto does the trick */}
            <h2 className="text-lg font-extrabold mb-2 text-center md:text-left">
              Social Media
            </h2>
            <Link
              href="https://www.facebook.com/profile.php?id=61576379536301"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full hover:underline text-center md:text-left  text-blue-800 mt-2"
            >
              Facebook Page
            </Link>
          </div>
        </div>

        {/* Right Side – 4/5 width on md+ */}
        <div className="w-full md:w-5/7 flex flex-col gap-6 ">
          {/* News and Updates */}
          <div className="bg-gray-100 p-4">
            <h2 className="text-lg font-extrabold mb-4 text-center md:text-left ">
              News and Updates
            </h2>

            <ul className="md:flex md:gap-6">

              {latestArticles.map((article, key) => (
                <li
                  key={key}
                  className="w-full md:w-1/3 flex flex-col items-center text-center"
                >
                  {article.facebook_link ? (
                    <Link
                      href={article.facebook_link}
                      className="block w-full hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-full h-40 relative overflow-hidden rounded">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/storage/${article.image}`}
                          alt="article image"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[14px] text-left text-gray-800 mt-2">
                        {article.title}
                      </p>
                    </Link>
                  ) : (
                    <div className="block w-full">
                      <div className="w-full h-40 relative overflow-hidden rounded">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_SERVER}/storage/${article.image}`}
                          alt="article image"
                          className="object-cover"
                        />
                      </div>
                      <p className="text-[14px] text-left text-gray-800 mt-2">
                        {article.title}
                      </p>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="flex">
              <Link
                href="/articles"
                className="mt-6 md:ml-auto inline-block text-sm text-blue-700 hover:underline font-bold"
              >
                See More
              </Link>
            </div>
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
                        target="_blank" // This tells the browser to open the link in a new tab
                        rel="noopener noreferrer" // This is important for security and performance
                      >
                        <Image
                          src={member.src}
                          alt={member.label}
                          width={24}
                          height={24}
                        />
                        <span className=" tracking-tight text-gray-600">
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
                        target="_blank" // This tells the browser to open the link in a new tab
                        rel="noopener noreferrer" // This is important for security and performance
                      >
                        <Image
                          src={member.src}
                          alt={member.label}
                          width={24}
                          height={24}
                        />
                        <span className="tracking-tight text-gray-600">
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
