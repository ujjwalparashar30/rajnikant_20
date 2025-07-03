'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Star, Play, Users, Award } from 'lucide-react'
import Image from 'next/image'

const FitnessHero = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/facilities/ac-room.jpg"
          alt="Gym background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
            <span className="text-black font-bold text-lg">⚡</span>
          </div>
          <span className="text-yellow-400 text-2xl font-bold">FitNix</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">
            About
          </a>
          <a href="#program" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Program
          </a>
          <a href="#pricing" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Pricing
          </a>
          <a href="#testimonial" className="text-white hover:text-yellow-400 transition-colors font-medium">
            Testimonial
          </a>
        </div>

        <Button 
          variant="outline" 
          className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300"
        >
          CONTACT US
        </Button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 px-6 lg:px-12 mt-12 lg:mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Rating */}
            <motion.div 
              className="flex items-center space-x-2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-white font-medium">4.8/5 Verified reviews</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black text-white leading-none tracking-tight">
                TRANSFORM YOUR
                <br />
                <span className="text-white">MIND & </span>
                <span className="relative">
                  MUSCLE
                  <motion.div
                    className="absolute inset-0 bg-blue-600/80 -z-10"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 1 }}
                  />
                </span>
                <span className="text-white">.</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p 
              className="text-gray-300 text-lg lg:text-xl max-w-2xl leading-relaxed"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Build confidence, strength, and discipline with science-backed training, 
              expert coaching, and a community that never lets you quit.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300 hover:scale-105"
              >
                JOIN FITNIX NOW
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-yellow-400 hover:bg-yellow-500 text-black border-yellow-400 font-bold text-lg px-8 py-6 rounded-lg transition-all duration-300"
              >
                🛒 Buy Template For $49
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Experience Card */}
          <motion.div 
            className="lg:justify-self-end"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 max-w-sm">
              <div className="flex items-center justify-between mb-4">
                <span className="text-yellow-400 text-lg font-semibold">Our Experience</span>
                <span className="text-yellow-400 text-2xl font-bold">(12+)</span>
              </div>
              <div className="w-full h-32 bg-yellow-400/20 rounded-lg mb-4 flex items-center justify-center">
                <Award className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 lg:mt-24 flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {/* Video Thumbnail */}
          <div className="flex items-center space-x-4">
            <div className="relative w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
              <Play className="w-8 h-8 text-black ml-1" />
            </div>
            <div className="w-16 h-16 rounded-full bg-gray-600 overflow-hidden">
              <Image
                src="/trainer-avatar.jpg"
                alt="Trainer"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
          </div>

          {/* Membership Stats */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gray-600 border-2 border-white overflow-hidden">
                  <Image
                    src={`/member-${i}.jpg`}
                    alt={`Member ${i}`}
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="text-white">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span className="font-bold">16K+</span>
              </div>
              <p className="text-sm text-gray-300">Membership enjoy our facilities</p>
            </div>
          </div>

          {/* Made in Framer Badge */}
          <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
            <span className="text-white text-sm">🎨 Made in Framer</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FitnessHero
