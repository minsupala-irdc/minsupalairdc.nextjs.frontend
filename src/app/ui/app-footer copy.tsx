import Image from "next/image";

export function AppFooter() {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year for copyright

  // Reorganized and enhanced logo list for better visual flow
  const logos = [
    { src: "/assets/resources/footer/logo-bagong-pilipinas.png", alt: "Bagong Pilipinas Logo", width: 100, height: 100, objectFit: "contain" },
    { src: "/assets/resources/IRDC-logo-transparent.png", alt: "MINSUPALA IRDC Logo", width: 150, height: 100, objectFit: "contain" },
    { src: "/assets/resources/footer/logo-foi.png", alt: "FOI Logo", width: 100, height: 100, objectFit: "contain" },
    { src: "/assets/resources/footer/logo-SOCOTEC-ISO.jpg", alt: "SOCOTEC-ISO Logo", width: 120, height: 80, objectFit: "contain" },
  ];

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-16"> {/* Darker background, lighter text */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8"> {/* Wider max-width, better padding */}

        {/* Top Section: Navigation Links & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> {/* Grid layout for sections */}

          {/* Contact Details */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Contact Us
            </h4>
            <ul className="space-y-3 text-lg">
              <li>
                <a href="mailto:msumagirdc@msumaguindanao.edu.ph" className="hover:text-blue-400 transition-colors duration-200">
                  msumagirdc@msumaguindanao.edu.ph
                </a>
              </li>
              <li className="mt-6">
                <h5 className="font-bold text-white mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2h3zm-2-7h.01M12 7h.01M12 11h.01M12 15h.01M12 19h.01" />
                  </svg>
                  Web Team
                </h5>
                <a href="mailto:aasam@msumaguindanao.edu.ph" className="hover:text-blue-400 transition-colors duration-200">
                  aasam@msumaguindanao.edu.ph
                </a>
              </li>
            </ul>
          </div>

          {/* Headquarters Address */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m10.607-10.607L13.414 3.1a1.998 1.998 0 00-2.828 0L6.343 7.343A4.001 4.001 0 006 10.172v0a4.001 4.001 0 00.957 2.375l2.828 2.828A4.001 4.001 0 0013.828 16h0a4.001 4.001 0 002.375-.957l2.828-2.828A4.001 4.001 0 0020 9.828v0a4.001 4.001 0 00-.957-2.375z" />
              </svg>
              Our Address
            </h4>
            <p className="text-lg leading-relaxed">
              56F9+R4V, Shariff Aguak - Cotabato City Rd <br />
              Datu Odin Sinsuat, Maguindanao, Philippines
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.809L14.292 7.708m-4.5 4.5l5.656-5.656m-1.102 1.101L13.828 10.172m0 0a4 4 0 105.656 5.656l-4 4a4 4 0 10-5.656-5.656" />
              </svg>
              Quick Links
            </h4>
            <ul className="space-y-3 text-lg">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Consortium Members</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Publications</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">News & Events</a></li>
            </ul>
          </div>

          {/* Resources/Social Media (Placeholder for future expansion) */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              Resources
            </h4>
            <ul className="space-y-3 text-lg">
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Downloads</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors duration-200">Partnerships</a></li>
              {/* Add social media links here with icons */}
              <li className="mt-4 text-white">Follow Us:</li>
              <li className="flex space-x-4">
                 {/* Example Social Media Icons */}
                 <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-blue-500 transition-colors duration-200"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.157c0-1.789 1.154-2.777 2.661-2.777h2.339v3z"/></svg>
                 </a>
                 <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-blue-400 transition-colors duration-200"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.188 3.513-2.316 7.604-6.066 7.604-1.488 0-2.883-.432-4.066-1.174.195.022.39.034.588.034 1.157 0 2.222-.395 3.076-1.066-1.082-.019-1.996-.732-2.316-1.713.153.029.309.044.47.044.23 0 .454-.031.668-.088-1.127-.23-1.977-1.228-1.977-2.438v-.03c.328.182.709.294 1.108.307-.655-.438-1.082-1.189-1.082-2.046 0-.45.122-.876.335-1.233.12-.472.333-.918.636-1.325 1.545 1.905 3.868 3.166 6.452 3.293-.053-.182-.083-.37-.083-.562 0-1.353 1.096-2.45 2.45-2.45.708 0 1.346.297 1.795.776.562-.111 1.092-.319 1.57-.6-.188.582-.584 1.077-1.067 1.389.5-.057.97-.193 1.41-.385-.333.568-.755 1.088-1.232 1.53z"/></svg>
                 </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <hr className="border-gray-700 mb-10" />

        {/* Logos Section */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-10">
          {logos.map((logo, index) => (
            <div key={index} className="relative transition-transform duration-300 hover:scale-105" style={{ width: `${logo.width}px`, height: `${logo.height}px` }}>
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                sizes="(max-width: 768px) 100px, 150px"
                className={logo.objectFit === "contain" ? "object-contain" : "object-cover"}
                priority={index < 2} // Prioritize loading for the first couple of logos
              />
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500 pt-6 border-t border-gray-700"> {/* Adjusted padding and border */}
          <p>
            © {currentYear} MINSUPALA IRDC. All Rights Reserved.
          </p>
          <p className="mt-1">
            Developed by Web Team MSU Maguindanao.
          </p>
        </div>

      </div>
    </footer>
  );
}