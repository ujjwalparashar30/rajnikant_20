"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export default function HeroSection({ classes }: { classes?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, y: -50 }}
      className={`relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden ${classes}`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Background image - you can replace with your actual image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat object-contain"
        style={{
          backgroundImage: "url('heroSectionImage.jpg')", // Replace with your actual image
        }}
      />

      {/* Main content */}
      <div className="relative z-20 w-full flex items-center justify-center lg:justify-start min-h-[calc(100vh-100px)] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:w-[45rem] xl:w-[50rem] relative"
            >
              {/* Classy overlay behind main heading */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/20 to-transparent backdrop-blur-[2px] rounded-2xl -m-4 p-4" />
              
              <h1 className="relative text-5xl lg:text-[6.3rem] xl:text-[7rem] font-black text-white leading-none tracking-tight drop-shadow-2xl">
                Welcome To
                <br />
                <span className="text-white">Shanti </span>
                <span className="text-cyan-300">Library</span>
              </h1>
            </motion.div>

            {/* Bottom content - centered on mobile, positioned on desktop */}
            <div className="relative lg:absolute lg:px-12 lg:bottom-0 z-20 lg:mb-[rem] flex flex-col lg:flex-row items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-4">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Sleek overlay behind video thumbnail */}
                <div className="absolute -inset-2 bg-black/20 backdrop-blur-sm rounded-xl" />
                
                {/* Thumbnail Background */}
                <div className="relative w-27 h-14 bg-gradient-to-br rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform shadow-2xl">
                  {/* Simulated video thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                    <Image src="/youtube.jpg" alt="YouTube" width={400} height={225} className="w-full h-auto" />
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors shadow-lg">
                    <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Divider Line - hidden on mobile */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }} 
                className="hidden lg:block h-12 w-0.5 bg-cyan-400 shadow-lg"
              />

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center lg:w-[12rem] relative"
              >
                {/* Subtle overlay behind community text */}
                <div className="absolute -inset-3 bg-black/15 backdrop-blur-sm rounded-lg" />
                
                <p className="relative text-white/80 mt-2 text-center lg:text-left drop-shadow-lg">
                  Join the community of 10k+ students who trust Shanti
                </p>
              </motion.div>
            </div>

            {/* Right side content - centered on mobile, positioned on desktop */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:absolute lg:right-[0rem] lg:px-12 p-6 lg:w-[28rem] lg:bottom-0 z-20"
            >
              {/* Modern glass-morphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/25 via-black/15 to-black/20 backdrop-blur-md rounded-2xl border border-white/10" />
              
              <div className="relative flex items-center justify-center mb-2">
                <div className="max-w-2xl">
                  <p className="text-white text-center lg:text-left drop-shadow-lg">
                    Reserve your seat, plan your hours, and study without
                    distraction. Your preparation deserves the best environment.
                  </p>
                </div>
              </div>

              <div className="relative flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg group shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  More about us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
