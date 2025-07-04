'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin, User } from 'lucide-react'
import Image from 'next/image'

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription submitted')
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Contact Section */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="flex items-center space-x-3 mb-2">
              <Image src="/logo_shanti_library.jpg" alt="Shanti Library Logo" width={40} height={40} className="rounded-lg bg-white" />
              <span className="text-xl font-bold text-gray-900">Shanti Library</span>
            </div>
            <div className="flex space-x-3 mb-2">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="w-6 h-6 text-gray-600 hover:text-pink-500 transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <Youtube className="w-6 h-6 text-gray-600 hover:text-red-600 transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="w-6 h-6 text-gray-600 hover:text-blue-400 transition-colors" />
              </a>
            </div>
            <div className="flex items-center text-gray-700 text-sm mb-1">
              <Phone className="w-4 h-4 mr-2" /> 9873591122
            </div>
            <div className="flex items-center text-gray-700 text-sm mb-1">
              <Mail className="w-4 h-4 mr-2" /> shantilibraryb1@gmail.com
            </div>
            <div className="flex items-start text-gray-700 text-sm mb-1">
              <MapPin className="w-4 h-4 mr-2 mt-0.5" /> 104/2, 3rd Floor, Talab Park, Mandawali, Delhi – 110092
            </div>
            <div className="flex items-center text-gray-700 text-sm">
              <User className="w-4 h-4 mr-2" /> Contact Person: Mr. Rakesh Gupta
            </div>
            <p className="text-gray-600 text-xs leading-relaxed mt-4 max-w-xs">
              Stay in the loop and sign up for the Shanti Library newsletter:
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex max-w-sm">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-r-none border-r-0 focus:ring-0 focus:border-gray-300 text-sm"
                required
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-black hover:bg-gray-800 px-4 flex-shrink-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Company Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
              Company
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="/home" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                About
              </a>
              <a href="/solutions" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Solutions
              </a>
              <a href="/pricing" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Pricing
              </a>
              <a href="/team" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Team
              </a>
              <a href="/career" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Career
              </a>
            </nav>
          </div>

          {/* Documentation & Help Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
              Support
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="/help" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Help Centre
              </a>
              <a href="/faq" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                FAQ
              </a>
              <a href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Privacy Policy
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
              Social
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="https://facebook.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Facebook
              </a>
              <a href="https://instagram.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Instagram
              </a>
              <a href="https://youtube.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Youtube
              </a>
              <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Twitter
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © Shanti Library Inc. All Rights Reserved 2025
            </p>
            <a 
              href="/terms" 
              className="text-gray-500 hover:text-gray-700 text-sm transition-colors duration-200"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
