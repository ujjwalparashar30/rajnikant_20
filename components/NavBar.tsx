"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = window.innerHeight * 0.8;
      
      setIsScrolled(currentScrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 px-4 lg:px-8 py-4" 
          : "bg-transparent px-6 lg:px-12 py-6"
      }`}
      style={{
        backdropFilter: isScrolled ? 'blur(12px) saturate(180%)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px) saturate(180%)' : 'none'
      }}
    >
      <div className={`flex items-center transition-all duration-500 ${isScrolled ? "space-x-1" : "space-x-2"}`}>
        <div className="flex items-center font-bold text-xl group">
          <Image
            src="/logo_shanti_library.jpg"
            alt="Shanti Library Logo"
            width={120}
            height={40}
            className={`mr-2 transition-all duration-500 group-hover:scale-110 ${isScrolled ? "h-6" : "h-8"}`}
          />
          <span className={`transition-all duration-500 transform ${isScrolled ? "text-cyan-500 rotate-12" : "text-cyan-400 rotate-0"}`}>|</span>
          <span className={`font-light transition-all duration-500 ${isScrolled ? "text-gray-800 ml-1 text-lg" : "text-white ml-2 text-xl"}`}>
            Shanti Library
          </span>
        </div>
      </div>

      <div className={`hidden md:flex items-center transition-all duration-500 ${isScrolled ? "space-x-4" : "space-x-8"}`}>
        <a
          href="#"
          className={`relative transition-all duration-500 hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full ${
            isScrolled 
              ? "text-gray-600 hover:text-gray-900 text-sm" 
              : "text-white/80 hover:text-white text-base"
          }`}
        >
          Home
        </a>
        <a
          href="#"
          className={`relative transition-all duration-500 hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full ${
            isScrolled 
              ? "text-gray-600 hover:text-gray-900 text-sm" 
              : "text-white/80 hover:text-white text-base"
          }`}
        >
          Plans
        </a>
        <a
          href="#"
          className={`relative transition-all duration-500 hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full ${
            isScrolled 
              ? "text-gray-600 hover:text-gray-900 text-sm" 
              : "text-white/80 hover:text-white text-base"
          }`}
        >
          Facilities
        </a>
        <a
          href="#"
          className={`relative transition-all duration-500 hover:scale-105 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-500 before:transition-all before:duration-300 hover:before:w-full ${
            isScrolled 
              ? "text-gray-600 hover:text-gray-900 text-sm" 
              : "text-white/80 hover:text-white text-base"
          }`}
        >
          About Us
        </a>
      </div>

      <div className={`flex items-center transition-all duration-500 ${isScrolled ? "space-x-2" : "space-x-4"}`}>
        <Button
          variant="outline"
          className={`transition-all duration-500 hover:scale-105 hover:shadow-lg transform ${
            isScrolled
              ? "bg-gray-100/80 border-gray-300 text-gray-700 hover:bg-gray-200/80 hover:border-cyan-300 text-xs px-3 py-1.5"
              : "bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/40 text-sm px-4 py-2"
          }`}
        >
          Contact
        </Button>
        <Button className={`bg-cyan-500/90 hover:bg-cyan-600/90 text-white transition-all duration-500 hover:scale-105 hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 ${
          isScrolled ? "text-xs px-3 py-1.5" : "text-sm px-4 py-2"
        }`}>
          Reserve Now
        </Button>
      </div>
    </nav>
  );
}
