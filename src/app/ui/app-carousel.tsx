"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  title: string;
  date: string;
}

const images: Slide[] = [
  {
    src: "/assets/resources/irdc-timeline/july-21-2023.jpg",
    title: "SUCs in BARMM and Region XII signing of memorandum of Agreement",
    date: "July 21, 2023",
  },
  {
    src: "/assets/resources/irdc-timeline/january-30-2024.jpg",
    title: "First Consortium Meeting at DBM Region 12 Office",
    date: "January 30, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/march-26-2024-1.jpg",
    title: "Training-Workshop on Inland Capture Fisheries",
    date: "March 5, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/april-19-2024.jpg",
    title: "Training-Workshop on GIS Mapping using QGIS",
    date: "April 19, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/april-19-2024-field-sampling-1.jpg",
    title: "Strengthening Field Sampling Techniques for Lotic and Fluvial Ecosystems",
    date: "April 19, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/april-19-protocol-assessment.jpg",
    title: "Minsupala IRDC develops socioeconomic protocols for assessment",
    date: "April 19, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/august-20-2024.jpg",
    title: "Minsupala IRDC partner with AMSC for data collection using Kobo Collect",
    date: "August 20, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/october-5-2024-2.jpg",
    title: "3rd Quarter Meeting for Phase 1 Project Updates",
    date: "October 5, 2024",
  },
  {
    src: "/assets/resources/irdc-timeline/march-8-2025.jpg",
    title: "Presentation of findings on Water Bodies in BARMM",
    date: "March 8, 2025",
  },
  {
    src: "/assets/resources/irdc-timeline/march-19-2025-1.jpg",
    title: "Minsupala IRDC Manuscript Writing Writeshop",
    date: "March 29, 2025",
  },
  {
    src: "/assets/resources/irdc-timeline/march-19-2025-2.jpg",
    title: "Minsupala IRDC Manuscript Writing Writeshop",
    date: "March 29, 2025",
  },
];

export function AppCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full mx-auto max-w-6xl overflow-hidden h-[250px] md:h-[500px] mt-5 mb-5">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="min-w-full flex-shrink-0 relative h-[250px] sm:h-[300px] md:h-[500px]"
          >
            <Image
              src={image.src}
              alt={image.title}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 z-10 bg-[rgba(0,0,0,0.8)] text-white text-xs md:text-sm pt-1 pb-4 md:pt-2 md:pb-10">
              <div className="max-w-6xl mx-auto px-2 md:px-4 text-center text-sm md:text-xl">
                {image.title}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-1 md:bottom-2 left-1/2 transform -translate-x-1/2 z-20 flex space-x-1 md:space-x-2 px-2 md:px-4 py-1 md:py-2 rounded-md">
        {images.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer transition-colors ${
              currentIndex === idx ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}
