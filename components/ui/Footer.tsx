'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight } from 'lucide-react'

const Footer: React.FC = () => {
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Newsletter subscription submitted')
  }

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg">SL</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Shanti Library</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6 max-w-xs">
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

          {/* Documentation Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wide">
              Documentation
            </h3>
            <nav className="flex flex-col space-y-3">
              <a href="/help" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Help Centre
              </a>
              <a href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
                Contact
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
