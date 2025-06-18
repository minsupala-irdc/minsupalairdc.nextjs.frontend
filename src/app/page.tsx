
import Link from 'next/link';
import HeadquartersSection from './HeadquarterSection';
import NewsAndUpdateRowSecion from './NewsAndUpdateRowSection';
import Image from 'next/image';
// const RealWorldImpact = () => {
//   const impactItems = [
//     {
//       label: "Policy Briefs",
//       image: "/assets/resources/front-page/features/feature-1.jpg",
//       alt: "Policy Briefs",
//     },
//     {
//       label: "Initiative Beta",
//       image: "/assets/resources/front-page/features/feature-2.jpg",
//       alt: "Watershed Health",
//     },
//     {
//       label: "Community Outreach",
//       image: "/assets/resources/front-page/features/feature-3.jpg",
//       alt: "In land capute fisheries",
//     },
//     {
//       label: "Socio-economic Protocol Assessment", // Improved label for clarity
//       image: "/assets/resources/front-page/features/feature-4.jpg",
//       alt: "Description for impact image 4",
//     },
//   ];

//   return (
//     <section className="bg-gradient-to-r from-red-500 to-red-900 text-white py-50 my-10">
//       <div className=" mx-auto text-center">
//         <p className="text-lg sm:text-xl mb-6 max-w-3xl mx-auto opacity-90">
//           Discover the tangible ways our work contributes to real-world change and sustainable development.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
//           {impactItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="relative group overflow-hidden "
//             >
//               <img
//                 src={item.image}
//                 alt={item.alt}
//                 className="w-full h-56 object-cover transform "
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-base font-semibold px-4 py-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//                 {item.label}
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

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
          Discover the tangible ways our work contributes to real-world change and sustainable development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item, idx) => (
            <div
              key={idx}
              className="relative group overflow-hidden "
            >
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


const TopSection = () =>{
  return (
<div className="py-50 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center bg-white">
        <div className="max-w-4xl w-full space-y-10">

          <div>
            <h2 className="text-8 xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
              <span className="text-red-800">Minsupala IRDC</span>
            </h2>
            <p className="mt-4 text-base md:text-lg text-gray-700">
              Mindanao Sulu Palawan - Innovative Research and Development Consortium
            </p>


            <div className="mt-6 flex justify-center gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-red-700 text-white font-semibold focus:outline-none focus:ring-2 
                focus:ring-red-500 focus:ring-opacity-75 "
              >
                Learn More
              </Link>
              <Link
                href="#news"
                className="px-6 py-3 bg-red-700 text-white font-semibold 
                focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 "
              >
                Recent News
              </Link>
            </div>

          </div>

        </div>
      </div>

  )
}


export default function Dashboard() {
  return (

    <section>
      
      {TopSection()}



      {RealWorldImpact()}


      <NewsAndUpdateRowSecion></NewsAndUpdateRowSecion>
      <HeadquartersSection></HeadquartersSection>
    </section>
  );
}
