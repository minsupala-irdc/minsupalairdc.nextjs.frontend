import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faFacebook , faGoogle } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

// Logo list
const logos = [
  { src: "/assets/resources/footer/logo-foi.png", alt: "FOI Logo" },
  {
    src: "/assets/resources/footer/logo-bagong-pilipinas.png",
    alt: "Bagong Pilipinas Logo",
  },
  {
    src: "/assets/resources/footer/logo-SOCOTEC-ISO.jpg",
    alt: "SOCOTEC-ISO Logo",
  },
];

export function AppFooter() {
  return (
    <footer className="w-full pt-10 pb-20 bg-gray-100 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
  {/* Address - slightly wider */}
  <ul className="flex-[1.5] flex flex-col">
    <li className="font-extrabold">MinSuPala-IRDC Address</li>
    <li className="text-gray-500">
      Mindanao State University - Institute of Management, National Highway, Brgy. Tamontaka, Datu Odin Sinsuat, Dinaig, Philippines
    </li>
  </ul>

  {/* Contacts and Web Team */}
  <ul className="flex-1 flex flex-col">
    <li className="font-bold">Contacts</li>
    <li className="text-gray-500 ">
      minsupala-irdc@msumaguindanao.edu.ph
    </li>
    <li className="text-gray-500">0975 410 3538</li>

    <li className="font-gray mt-6">Web Team</li>
    <li className="text-gray-500">
      minsupala.irdc.itsupport@msumaguindanao.edu.ph
    </li>
  </ul>

  {/* About */}
  <ul className="flex-1 flex flex-col">
    <li className="font-bold">About</li>
    <li>
      <Link href="/about" className="text-gray-600 hover:underline">History</Link>
    </li>
    <li>
      <Link
        href="/members"
        scroll={true}
        className="text-gray-600 hover:underline"
      >
        Members
      </Link>
    </li>
  </ul>

  {/* Social Media */}
  <ul className="flex-1 flex flex-col">
    <li className="font-bold">Social Media</li>
    <li className="mt-1">
      <Link
        href="https://www.facebook.com/profile.php?id=61576379536301"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:underline"
      >
        Facebook
      </Link>
    </li>
  </ul>
</div>


      {/* Logos section */}
      <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 py-10 px-4">
        <div className="relative w-[100px] h-[100px]">
          <Image
            src="/assets/resources/footer/logo-bagong-pilipinas.png"
            alt="Bagong Pilipinas Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative w-[150px] h-[100px]">
          <Image
            src="/assets/resources/IRDC-logo-transparent.png"
            alt="MINSUPALA IRDC"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100px, 150px"
            priority
          />
        </div>
      </section>

      {/* Copyright */}
      <section className="max-w-6xl mx-auto flex justify-center py-4 px-4">
        <p className="text-center text-sm text-gray-700 font-extrabold">
          MINSUPALA IRDC © 2025 . All Rights Reserved
        </p>
      </section>
    </footer>
  );
}
