"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  MdAcUnit,
  MdWifi,
  MdOutlinePhotoCamera,
  MdWaterDrop,
  MdPrint,
  MdRestaurantMenu,
  MdPower,
} from "react-icons/md";
import { GiOfficeChair } from "react-icons/gi";
import { FaParking, FaRestroom } from "react-icons/fa";
import { HiOutlineNewspaper } from "react-icons/hi";
import { TbCoffee } from "react-icons/tb";

const facilities = [
  { icon: <MdAcUnit size={32} />, name: "Air Conditioning" },
  { icon: <MdWifi size={32} />, name: "Free Wi-Fi" },
  { icon: <MdOutlinePhotoCamera size={32} />, name: "CCTV Surveillance" },
  { icon: <MdWaterDrop size={32} />, name: "RO Drinking Water" },
  { icon: <GiOfficeChair size={32} />, name: "Comfortable Chairs" },
  { icon: <FaParking size={32} />, name: "Parking Available" },
  { icon: <HiOutlineNewspaper size={32} />, name: "Daily Newspaper" },
  { icon: <TbCoffee size={32} />, name: "Coffee Machine" },
  { icon: <MdPrint size={32} />, name: "Printer Access" },
  { icon: <MdRestaurantMenu size={32} />, name: "Cafeteria" },
  { icon: <FaRestroom size={32} />, name: "Clean Washrooms" },
  { icon: <MdPower size={32} />, name: "Charging Points" },
];

// Multiple sets of 3 images
const facilityImageSets = [
  {
    images: [
      { src: "/facilities/ac-room.jpg", alt: "Air Conditioned Study Hall" },
      { src: "/facilities/free_wifi.jpg", alt: "Free Wi-Fi Zone" },
      { src: "/facilities/security.jpg", alt: "CCTV Security System" },
    ],
    relatedFacilities: [0, 1, 2], // AC, Wi-Fi, CCTV
  },
  {
    images: [
      { src: "/facilities/water-station.jpg", alt: "RO Water Station" },
      { src: "/facilities/study-chairs.jpg", alt: "Comfortable Study Chairs" },
      { src: "/facilities/parking-area.jpg", alt: "Parking Facility" },
    ],
    relatedFacilities: [3, 4, 5], // RO Water, Chairs, Parking
  },
  {
    images: [
      {
        src: "/facilities/newspaper-section.jpg",
        alt: "/Daily Newspaper Section",
      },
      { src: "/facilities/coffee-machine.jpg", alt: "Coffee Machine Area" },
      { src: "/facilities/printer-station.jpg", alt: "Printer Access Point" },
    ],
    relatedFacilities: [6, 7, 8], // Newspaper, Coffee, Printer
  },
  {
    images: [
      { src: "/facilities/cafeteria.jpg", alt: "Library Cafeteria" },
      { src: "/facilities/washrooms.jpg", alt: "Clean Washroom Facilities" },
      { src: "/facilities/charging-points.jpg", alt: "Device Charging Station" },
    ],
    relatedFacilities: [9, 10, 11], // Cafeteria, Washrooms, Charging
  },
];

export default function FacilitiesSlider() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [highlightedFacilities, setHighlightedFacilities] = useState(
    facilityImageSets[0].relatedFacilities
  );

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSetIndex((prevIndex) => {
        const newIndex =
          prevIndex === facilityImageSets.length - 1 ? 0 : prevIndex + 1;
        setHighlightedFacilities(facilityImageSets[newIndex].relatedFacilities);
        return newIndex;
      });
    }, 5000); // Longer duration since there are 3 images to view

    return () => clearInterval(interval);
  }, []);

  // Manual navigation functions
  const nextSlide = () => {
    const newIndex =
      currentSetIndex === facilityImageSets.length - 1
        ? 0
        : currentSetIndex + 1;
    setCurrentSetIndex(newIndex);
    setHighlightedFacilities(facilityImageSets[newIndex].relatedFacilities);
  };

  const prevSlide = () => {
    const newIndex =
      currentSetIndex === 0
        ? facilityImageSets.length - 1
        : currentSetIndex - 1;
    setCurrentSetIndex(newIndex);
    setHighlightedFacilities(facilityImageSets[newIndex].relatedFacilities);
  };

  const goToSlide = (index: number) => {
    setCurrentSetIndex(index);
    setHighlightedFacilities(facilityImageSets[index].relatedFacilities);
  };

  return (
    <div className="w-full bg-white py-16">
      <div className="text-center mb-8">
        <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
          Our Facilities in Action
        </h3>
        <p className="text-gray-600">
          Experience the quality of our library amenities
        </p>
      </div>
      {/* Facilities Icons Section */}

      {/* 3-Image Slider Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative group">
          {/* Responsive Images Container: 1 image on small screens, 3 on md+ */}
          <div className="relative h-80 md:h-96 overflow-hidden rounded-2xl">
            {facilityImageSets.map((imageSet, setIndex) => (
              <>
                {/* For medium and up: show 3 images */}
                <div
                  key={"md-" + setIndex}
                  className={`hidden md:grid absolute inset-0 grid-cols-3 gap-4 p-4 transition-all duration-700 ease-in-out ${
                    setIndex === currentSetIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  {imageSet.images.map((image, imageIndex) => (
                    <div
                      key={imageIndex}
                      className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-md">
                        <p className="text-xs font-medium">{image.alt}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* For small screens: show only the first image */}
                <div
                  key={"sm-" + setIndex}
                  className={`md:hidden absolute inset-0 grid grid-cols-1 gap-4 p-4 transition-all duration-700 ease-in-out ${
                    setIndex === currentSetIndex
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Image
                      src={imageSet.images[0].src}
                      alt={imageSet.images[0].alt}
                      fill
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-md">
                      <p className="text-xs font-medium">{imageSet.images[0].alt}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {facilityImageSets.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSetIndex
                    ? "bg-blue-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative w-full mb-16 overflow-hidden py-10">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 h-full w-80 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-80 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Infinite Scrolling Track */}
          <div className="slider-track flex w-max animate-marquee whitespace-nowrap">
            {[...facilities, ...facilities].map((facility, index) => {
              const facilityIndex = index % facilities.length;
              const isHighlighted =
                highlightedFacilities.includes(facilityIndex);

              return (
                <div
                  key={index}
                  className={`flex flex-col items-center justify-center min-w-[140px] mx-6 transition-all duration-500 ${
                    isHighlighted
                      ? "text-blue-600 scale-110"
                      : "text-gray-700 scale-100"
                  }`}
                >
                  <div
                    className={`p-4 rounded-full shadow-md transition-all duration-500 ${
                      isHighlighted
                        ? "bg-blue-100 border-2 border-blue-300 shadow-lg"
                        : "bg-gray-100 border-2 border-transparent"
                    }`}
                  >
                    {facility.icon}
                  </div>
                  <span
                    className={`mt-2 text-sm font-medium text-center transition-all duration-500 ${
                      isHighlighted ? "font-bold" : "font-medium"
                    }`}
                  >
                    {facility.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
