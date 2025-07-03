"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
// import NavBar from "./NavBar";

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
      <div className="relative z-20 w-full flex items-center min-h-[calc(100vh-100px)] px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 lg:w-[45rem] xl:w-[50rem]  "
            >
              <h1 className="text-5xl lg:text-[6.3rem] xl:text-[7rem] font-black text-white leading-none tracking-tight">
                Welcome To
                <br />
                <span className="text-white">Shanti </span>
                <span className="text-cyan-300">Library</span>
              </h1>
            </motion.div>

            <div className="absolute lg:px-12 bottom-0 z-20 mb-[rem] flex items-center justify-between space-x-4">
              <motion.div 
              initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative ">
                {/* Thumbnail Background */}
                <div
                  className="w-27 h-14 bg-gradient-to-br rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                  {/* Simulated video thumbnail */}
                  <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                    <Image src="/youtube.jpg" alt="YouTube" width={400} height={225} className="w-full h-auto" />
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
                    <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Divider Line */}
              <motion.div initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }} 
                  className="h-12 w-0.5 bg-cyan-400"></motion.div>

              <motion.div initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="flex flex-col justify-center w-[12rem]">
                <p className="text-white/80 mt-2">
                  Join the community of 10k+ students who trust Shanti
                </p>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute right-[0rem] lg:px-12 p-6 w-[28rem] bottom-0 z-20">
              <div className="flex items-center justify-center mb-2">
                <div className="backdrop-blur-sm max-w-2xl">
                  <p className="text-white text-left">
                    Reserve your seat, plan your hours, and study without
                    distraction. Your preparation deserves the best environment.
                  </p>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg group"
              >
                More about us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
