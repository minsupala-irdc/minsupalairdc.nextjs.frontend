import Image from "next/image";

// Logo list
const logos = [
  // { src: "/assets/resources/footer/logo-msu-with-name.png", alt: "MSU Logo" },
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
    <footer className="w-full pt-20 pb-50 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[60%_40%] gap-4 p-1">
        <section className="flex p-4 flex-col md:flex-row gap-1 md:gap-30 items-start justify-start md:items-center md:justify-start"></section>
      </div>

      <section className="max-w-6xl mx-auto flex justify-between gap-6 py-10  ">
        <ul className="">
          <li className="font-extrabold">Headquarter's Address</li>
          <li className="text-gray-500">
            56F9+R4V, Shariff Aguak - Cotabato City Rd <br />
            Datu Odin Sinsuat, Maguindanao, Philippines
          </li>
        </ul>


        <ul className="">
          <li>
            <ul>  
              <li className="font-extrabold">Contacts</li>
              <li className="text-gray-500">msumagirdc@msumaguindanao.edu.ph</li>
              <li>
                <span></span>
              </li>
            </ul>
          </li>
          
          <li className="mt-10">
            <ul>
              <li className="font-extrabold">Web Team </li>
              <li>aasam@msumaguindanao.edu.ph</li>
            </ul>
          </li>
        </ul>

        <ul className="">
          <li className="font-extrabold">About</li>
          <li>Consortium Members</li>
        </ul>

        <ul className="">
          <li className="font-extrabold">Resources</li>
          <li>To be added</li>
        </ul>
      </section>

      <section className="max-w-6xl mx-auto flex justify-center py-4">
 <div className="relative w-[100px] h-[100px] group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={"/assets/resources/footer/logo-bagong-pilipinas.png"}
                  alt={"Bagong Pilipinas Logo"}
                  fill
                  className="object-cover"
                />
                </div>

                <div className="relative w-[150px] h-[100px] group-hover:opacity-100 transition-opacity duration-300">
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


      <section className="max-w-6xl mx-auto flex justify-center py-4">
        <p className="text-center text-sm text-gray-700 font-extrabold">
          MINSUPALA IRDC © 2025 . All Rights Reserved
        </p>
      </section>
    </footer>
  );
}
