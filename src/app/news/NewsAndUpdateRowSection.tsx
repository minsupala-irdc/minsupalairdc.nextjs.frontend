import Link from "next/link";
import Image from "next/image";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";


function truncateText(text: string): string {
  const maxLength = 200; // The maximum allowed length for the final string
  const ellipsis = "...";
  const ellipsisLength = ellipsis.length;

  // Check if the text length is greater than the maxLength
  if (text.length > maxLength) {
    // Return a substring up to (maxLength - ellipsisLength) characters,
    // then append the ellipsis.
    return text.substring(0, maxLength - ellipsisLength) + ellipsis;
  }

  return text;
}


export const ARTICLES = [
  
  {
    event: "Strategic Recalibration Strengthens MinSuPala-IRDC’s Path to Inclusive Development",
    content:
      "The Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala–IRDC) reaffirmed its commitment to strengthening institutional partnerships, aligning research development priorities, and advancing its shared vision of inclusive growth and innovation across Mindanao, Sulu, and Palawan during the Strategic Direction and Recalibration Meeting held on May 27, 2025, at the Mangostana Function Hall, Acacia Hotel, Davao City. Chaired by DBM Region XII Director Akmad J. Usman, the meeting convened the Presidents and Chancellors of the eight (8 ) founding State Universities and Colleges (SUCs), six (6) new member SUCs, and DBM Region IX Director Mark Louie Martin.",
    event_date: "May 27, 2025",
    img: "/assets/resources/irdc-timeline/june 17 2025 - high level meeting.jpg",
    time: "",
    place: "Function Room Alma, Oroderm City Functions and Events Place",
    location: "Davao City",
    link_facebook: "https://www.facebook.com/permalink.php?story_fbid=pfbid02KCLCQ2DmRnpvVLr18AZbsZVHWc9mh1TG6ZeZhxcdXcH59YniVGRt2mbZsQdU2HA1l&id=61576379536301",
    author: "",
  },
  {
    event: "Policy Brief Writeshop",
    content:
      "The Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala-IRDC) successfully conducted a Policy Brief Writeshop on May 28–29, 2025, at the Oroderm City Functions and Events Place in Davao City",
    event_date: "May 28-29, 2025",
    time: "",
    img: "/assets/resources/irdc-timeline/june-18-2025-policy-brief-writeshop.jpg",
    place: "Function Room Alma, Oroderm City Functions and Events Place",
    location: "Davao City",
    link_facebook: "https://www.facebook.com/permalink.php?story_fbid=pfbid02h5nn7qG2oCLq9GovbLDL1n5YEkQ7ZArj4Pzmp7St3a5u4tGSKJvM49BYafvHmRWjl&id=61576379536301",
    author: "",
  },
  {
    event:
      "Workshop on Designing Survey Tools and Protocols for Market Potential and Value Chain Analysis",
    content:
      "To strengthen the research capabilities of State Universities and Colleges (SUCs) in designing effective tools for assessing the market potential and value chains of indigenous species, the Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala-IRDC) conducted a two-day Workshop on Designing Survey Tools and Protocols for Market Potential and Value Chain Analysis of Indigenous Species.",
    event_date: "May 28-29, 2025",
    img: "/assets/resources/irdc-timeline/june-18-2025-value chain analysis.jpg",
    time: "",
    place: "Third Floor, Oroderm City Functions and Events Place",
    location: "Davao City",
    link_facebook: " https://www.facebook.com/permalink.php?story_fbid=pfbid02S8fLeefVYR4Jg7A7XVbCv2n5f1EQtSK2kTiJZVkgt1MpcLYZXzf2ZXgw49GPEB6sl&id=61576379536301",
    author: "",
  },
  {
    event: "Financial Management Workshop",
    content:
      "In parallel with its strategic leadership meeting, MinSuPala–IRDC conducted a one-day Financial Management Workshop on May 27, 2025, at the Oroderm City Functions and Events Place, Davao City.",
    event_date: "May 27, 2025",
    img: "/assets/resources/irdc-timeline/June 17 2025 - financial management.jpg",
    time: "",
    place: "Function Room Alma, Oroderm City Functions and Events Place",
    location: "Davao City",
    link_facebook: "https://www.facebook.com/permalink.php?story_fbid=pfbid02kYJLwvxFHQT8ukm8f7fHF58QbT8TMYWFia5PsCphw37wswoXtFY1ALoEa3NpjYfRl&id=61576379536301",
    author: "",
  },
  {
    event: "Manuscript Writing Writeshop!",
    content:
      "We are thrilled to introduce, Dr. Rey Y. Capangpangan and Dr. Benjoe Rey B. Visayas as our resource speakers for the 3-day MINSUPALA-IRDC Manuscript Writing Writeshop!",

    img: "/assets/resources/irdc-timeline/march-19-2025-1-2-Technical-Writing-workshop.jpg",
    event_date: "March 19-21, 2025",
    time: "",
    place: "Institute of Management, MSU – Maguindanao",
    location: "Maguindanao del Norte",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid037w9GdhhA4UBrbU6bWz2F881nX86CibChhcsQbbDtb3oNekcc8JDfhYAQmQEcE5Fvl",
    author: "",
  },
  {
    event:
      "Four SUCs Present Research Findings on Water Bodies in BARMM at MINSUPALA IRDC Stakeholders' Consultation",
    content:
      "The Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala-IRDC) member state universities and colleges (SUCs) convened on February 27, 2025, at MSU-Maguindanao to present their research findings on key water bodies in Central Mindanao and BARMM. The Stakeholders’ Consultation, hosted by MSU-Maguindanao, served as a platform for researchers, policymakers, and local stakeholders to exchange insights and develop policy recommendations for the conservation and sustainable management of Ligawasan Marsh, Lake Buluan, the Rio Grande de Mindanao, and Lake Lanao.",
    img: "/assets/resources/irdc-timeline/march-8-2025.jpg",
    event_date: "March 8, 2025",
    time: "",
    place: "Mindanao State University Maguindanao Gymnasium",
    location: "Datu Odin Sinsuat, Maguindanao",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid0vrsxPoMdum77EYeAJaX7mdDgCo2sPtLydBA34ggpnampEUfoDvAiP6mQsN6PZ5Qzl",
    author: "",
  },
  {
    event: "Joint Statement of the Members of the MinSuPala IRDC",
    content:
      "On November 13, 2024, a significant milestone was achieved as new State Universities and Colleges (SUCs)— Basilan State College (BSC), Mindanao State University Buug (MSU Buug), Mindanao State University - Sulu (MSU Sulu), MSU Tawi-Tawi College of Technology and Oceanography (MSUTCTO), Sulu State College (SSC), and Tawi-Tawi Regional Agricultural College (TRAC),—formally inked the Memorandum of Agreement (MOA) with the existing members of the Mindanao-Sulu-Palawan Innovative Research and Development Consortium (MinSuPala IRDC). The signing, held at the Department of Budget and Management (DBM) Region XI in Davao City, marks a historic achievement as the consortium has expanded to include these remote SUCs, integrating marginalized regions into the mainstream political and educational landscape.",
    img: "/assets/resources/irdc-timeline/november-13-2024-New-Members-MOA.jpg",

    event_date: "November 13, 2024",
    time: "",
    place: "Department of Budget and Management (DBM) Region XI",
    location: "Davao City",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid0x74srzsmQHKcF47EDkCow1nWAio4kusDbwbEEPjjAmKAgfqRdNCud5S9xPrEX6csl",
    author: "",
  },
  {
    event:
      "MINSUPALA-IRDC Holds 3rd quarter coordination meeting for phase 1 project updates",
    content:
      "Nine (9) Members of the State Universities and Colleges (SUCs) under the MINSUPALA-Innovative Research and Development Consortium (IRDC) convened for a coordination and status-update meeting of the Phase 1 of the DBM-funded IRDC project. The meeting, held at the DBM Executive Room on October 3, 2024, focused on reviewing the achievements of each SUC for the third quarter, assessing budget utilization, and addressing challenges encountered during the project implementation.",
    img: "/assets/resources/irdc-timeline/october-5-2024-2.jpg",
    event_date: "",
    time: "",
    place: "",
    location: "Koronadal City",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid0aMufoMZGkWxG6EBw5ErGBxuNp9GFRafevJ7DyXESzuGex82af7oKrJR1YF4bWv7El",
    author: "",
  },
  {
    event:
      "MSU Maguindanao extends expertise to IRDC partner Adiong Memorial State College for Data Collection Using Kobocollects",
    content:
      "MINSUPALA-Innovative Research and Development Consortium (IRDC) team of Mindanao State University- Maguindanao (MSU-Maguindanao) extended service to partner state college consortium member, Adiong Memorial State College (AMSC) for the conduct of training workshop on Data Gathering Using Kobocollect on August 15, 2024, at AMSC campus, Ditsaan Ramain, Lanao del Sur. This is for the socioeconomic component of the project titled “Assessment and Characterization of Water Quality, Inland Capture Fisheries, Watershed, and Socio-economic of Important Water Bodies for Social and Economic Transformation”. The training workshop aims to provide participants with the knowledge and skills necessary to conduct effective data collection and proper ways of conducting intervi",
    img: "/assets/resources/irdc-timeline/august-20-2024.jpg",
    event_date: "",
    time: "",
    place: "AMSC Campus",
    location: "Lanao del Sur",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid021UmjrBMu3KMP1yZBqC1BwFfFqZLLbErGYJcUd3oMtmo2SYEFeGpFMYq9snVFEyXcl",
    author: "",
  },
  {
    event:
      "MinSupala-IRDC develops socioeconomic protocol for the Assessment and Characterization of Water Quality, Inland Capture Fisheries, Watershed, and Socio-economic of Important Water Bodies for Social and Economic Transformation in Central Mindanao project",
    content:
      "Nine (9) SUCs participated on the 4th capacity building for the Mindanao Sulu Palawan-Innovative Research and Development Consortium (MinSuPala-IRDC) project. The workshop was hosted by University of Southern Mindanao (USM) at the Commercial Building, USM, Kabacan, Cotabato on March 25-26, 2024.",
    img: "/assets/resources/irdc-timeline/april-19-protocol-assessment.jpg",
    event_date: "April 25-26, 2024",
    time: "",
    place: "Commercial Building, USM",
    location: "Kabacan, Cotabato",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid02E1g4MuEiRqiHgHk7o9L1MQF9eSuukjWJietMK1CJyjsMYMuFUnSSXssaJ1idqgYHl",
    author: "",
  },
  {
    event:
      "Mindanao, Sulu, and Palawan - Innovative Research and Development Consortium (MINSUPALA-IRDC) Strengthening Field Sampling Techniques for Lotic and Fluvial Ecosystems",
    content:
      "MINSUPALA-IRDC’s Training Workshop on Water Quality and Field Sampling Techniques was just the beginning of an exploration for the researchers of the MINSUPALA-IRDC held at Punta Isla Lake Resort last March 22–23, 2024",
    img: "/assets/resources/irdc-timeline/april-19-2024-field-sampling-1.jpg",
    event_date: "April 22–23, 2024",
    time: "",
    place: "Punta Isla Lake Resort",
    location: "Lake Sebu, South Cotabato",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid0Hdo7nHtMtJNEKow2H1Kee3ss7WV2VJjZA8VNNgW9UUsChEEh1PX2ZhNEVrkr7k6wl",
    author: "",
  },
  {
    event:
      "Mindanao, Sulu, and Palawan - Innovative Research and Development Consortium (MinSupala-IRDC) Conducts Training-Workshop on Basic GIS Mapping using QGIS",
    content:
      "MinSuPala-IRDC in its series of capacity enhancement activities, conducted a training-workshop on Basic GIS Mapping using QGIS software hosted by at the University of Southern Mindanao, Kabacan, Cotabato on March 18-19, 2024.",
    img: "/assets/resources/irdc-timeline/april-19-2024.jpg",
    event_date: "March 18-19, 2024.",
    time: "",
    place: "University of Southern Mindanao",
    location: "Kabacan, Cotabato",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid028nHgvtaoRFFLuZjJueDKWPpcCGCQRWZBci2LLuk5i7SY5i4j3sngsvBimS1tyZvWl",
    author: "",
  },
  {
    event:
      "MSU-Maguindanao Hosts first training-workshop on Inland Capture Fisheries for MINSUPALA IRDC",
    content:
      "The seven (7) State Universities and Colleges (SUCs) consortium members of the Mindanao, Sulu and Palawan Innovative Research and Development Consortium (MINSUPALA-IRDC) delved deeper into fish survey and sampling techniques, fish abundance and diversity, and the basic morphology of fish for sustainable inland capture fisheries in important water bodies of Central Mindanao. As the first of the several series of training-workshops scheduled by the IRDC, the 3-Day Training-Workshop on Inland Capture Fishery and Fish Abundance and Diversity Assessment was conducted by MSU Maguindanao last March 4-6, 2024 at Simeon Datumanong Hall, Graduate Studies, MSU Maguindanao Tamontaka Campus.",
    img: "/assets/resources/irdc-timeline/march-26-2024-1.jpg",
    event_date: "March 4-6, 2024",
    time: "",
    place:
      "Simeon Datumanong Hall, Institute of Management, MSU Maguindanao Tamontaka Campus",
    location: "Tamontaka, Datu Odin Sinsuat Maugindanao",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid02ewBNbeYnAi6dAH1Pq7CSURmxgXgPPKRS9sf4EVvKbF8hXUMjcDb7T6QhSNZw97N7l",
    author: "",
  },
  {
    event:
      "The Mindanao, Sulu, and Palawan Innovative Research & Development Consortium (MINSUPALA-IRDC) organized its first consortium meeting at the Department of Budget and Management (DBM) Region 12 Office",
    content:
      "Koronadal City 𝗹 The Mindanao, Sulu, and Palawan Innovative Research & Development Consortium (MINSUPALA-IRDC) organized its first consortium meeting at the Department of Budget and Management (DBM) Region 12 Office last January 17, 2024.Organized by the DBM XII Regional Director Akmad Usman, the meeting was attended by eight consortium members from various State University and Colleges (SUCs). This meeting reaffirmed the initial agreement and discussed strategies for the implementation of the approved 45 million-peso research initiative funded by the DBM.January 17, 2024",
    img: "/assets/resources/irdc-timeline/january-30-2024.jpg",
    event_date: "",
    time: "",
    place: "Department of Budget and Management (DBM) Region 12",
    location: "Koronadal City",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid0DBjSDPSv9PqUgBaCJg35oykPf5SFXYLMUwDXHndQMXPthxHSsjW4ruHmVHGvJVaQl",
    author: "",
  },
  {
    event:
      "First in Mindanao: SUCs in BARMM and Region XII sign Memorandum of Agreement on MINSUPALA Innovative Research and Development Consortium (IRDC)",
    content:
      "Department of Budget and Management Secretary Amenah F. Pangandaman witnessed the ceremonial signing of Memorandum of Agreeement on Mindanao Sulu Palawan (MINSUPALA) IRDC on July 20, 2023 at DBM Region XII Regional Office, Koronadal City, South Cotabato. The MINSUPALA IRDC is the brainchild of Secretary Pangandaman, a product of an exploratory meeting last June 1, 2023 at the Greenleaf Hotel. The signing of MOA for IRDC was immediately realized 50 days after the initial consultative meeting, demonstrating SUC’s eagerness to enhance social capital development.",
    img: "/assets/resources/irdc-timeline/july-21-2023.jpg",
    event_date: "June 1, 2023",
    time: "",
    place: "DBM Region XII Regional Office",
    location: "Koronadal City",
    link_facebook:
      "https://www.facebook.com/msumagovcred/posts/pfbid02rLSr3Zq3cFidagAF1mKQ3H8HBY6Kzib3tyq7RsbwUNr5nEvmPVtXncCBqFJJHVsMl",
    author: "",
  },
];


type Props = {
  limit?: number;
};

// add paramter here..  the parameter lets say show 3 only will only show 3 artiles elese show all by default
export default function NewsAndUpdateRowSecion({ limit }: Props) {

  let data =  limit ? ARTICLES.slice(0, limit) : ARTICLES;
  return (
    <div id="news" className="py-10">
      <div className=" mx-auto max-w-6xl sm:px-6 lg:px-8 md:py-16 flex flex-col items-center justify-center text-center ">
        
          <h2 className="text-xl  md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight leading-tight px-5 md:px-0 md:drop-shadow-sm">
            <span className="text-red-800">Recent</span> Events &amp; Activities
          </h2>
          <p className="md:text-lg text-sm text-gray-600 max-w-5xl mx-auto text-center px-5 md:px-0">Stay informed about our latest conferences, workshops, and community engagement initiatives.
          </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ">

        {data.map((item, index) => {
          const Card = (
            <div className="bg-white shadow-xs rounded overflow-hidden flex flex-col justify-between h-full transition transform hover:shadow-md hover:-translate-y-1">
              <img
                src={item.img}
                alt="News image"
                className="w-full h-48 object-cover"
              />

              <div className="p-4 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-lg font-semibold  mb-2 text-red-700">
                    {item.event}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    {truncateText(item.content)}
                  </p>
                </div>

                <div className="flex justify-between items-center text-sm font-medium text-gray-600">
                  <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                  <span>Read More</span>
                </div>
              </div>
            </div>
          );

          return item.link_facebook ? (
            <Link
              key={index}
              href={item.link_facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {Card}
            </Link>
          ) : (
            <div key={index} className="opacity-50 pointer-events-none">
              {Card}
            </div>
          );
        })}
      </div>
    </div>

  );
}