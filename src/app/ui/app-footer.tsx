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
    <footer className="w-full pt-10 pb-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 px-4">
        {/* Address */}
        <ul className="flex flex-col flex-1/3"> {/* Added flex-1 */}
          <li className="font-extrabold">IRDC Address</li>
          <li className="text-gray-500">
            Institute of Management, Mindanao State University-Maguindanao, National Highway, Brgy. Tamontaka, Datu Odin Sinsuat 9601 Dinaig, Philippines
          </li>
        </ul>

        {/* Contacts and Web Team */}
        <ul className="flex flex-col flex-1"> {/* Added flex-1 */}
          <li>
            <ul id="contact-section">
              <li className="font-extrabold">Contacts</li>
              <li className="text-gray-500">
                minsupala-irdc@msumaguindanao.edu.ph
              </li>
              <li className="text-gray-500">0975 410 3538</li>
            </ul>
          </li>

          <li className="mt-6">
            <ul>
              <li className="font-extrabold">Web Team</li>
              <li className="text-gray-500">minsupala.irdc.itsupport@msumaguindanao.edu.ph</li>
            </ul>
          </li>
        </ul>

        {/* About */}
        <ul className="flex flex-col flex-1"> {/* Added flex-1 */}
          <li className="font-extrabold">About</li>
          <li><Link href="/about"> History</Link></li>
          <li><Link
            href="/members"
            scroll={true}
            className="block"
          >
            Members
          </Link></li>
        </ul>

        {/* Social media */}
        <ul className="flex flex-col flex-1/5"> {/* Added flex-1 */}
          <li>
            <ul>
              <li className="font-extrabold"> Social media</li>
              <li className="mt-1">
                <Link
                  href="https://www.facebook.com/profile.php?id=61576379536301"
                  target="_blank" // This is the correct usage for opening in a new tab
                  rel="noopener noreferrer" // Good practice for security with target="_blank"
                  className=""
                >Facebook Page
                  {/* <FontAwesomeIcon
                    icon={faFacebook}
                    className="w-9 h-auto text-gray-800"
                  /> */}

                </Link>

              </li>
            </ul>
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
