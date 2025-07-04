"use client";

import { motion, useInView } from "framer-motion";
import { useState, useEffect, useRef } from 'react';
import { Phone, MapPin, Send, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

export default function LibraryContact() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const libraryInfo = {
    name: "Shanti Library",
    street: "Talab Chowk",
    area: "Mandawali",
    city: "Delhi",
    state: "DL",
    zipCode: "110092",
    phone: "+919873591122",
    email: "info@shantilibrary.com",
    hours: "Mon-Fri 9AM-8PM, Sat 9AM-6PM",
    images: [
      "image5.jpg",
      "image1.jpg",
      "image2.jpg",
      "heroSectionImage.jpg"
    ],
  };

  // Auto-play functionality
  useEffect(() => {
    if (libraryInfo.images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === libraryInfo.images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [libraryInfo.images.length]);

  const handleCall = () => {
    window.open(`tel:${libraryInfo.phone}`, '_self');
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${libraryInfo.phone.replace('+', '')}`, '_blank');
  };

  const handleDirections = () => {
    const fullAddress = `${libraryInfo.street}, ${libraryInfo.area}, ${libraryInfo.city}, ${libraryInfo.state} ${libraryInfo.zipCode}`;
    const address = encodeURIComponent(fullAddress);
    window.open(`https://www.google.com/maps/place/Shanti+Library/@28.6288976,77.2934965,17z/data=!3m1!4b1!4m6!3m5!1s0x390ce503e852b0bd:0xd88058e680d3bbe4!8m2!3d28.6288976!4d77.2960714!16s%2Fg%2F11vczgckmh?entry=tts&g_ep=EgoyMDI0MDUyMS4wKgBIAVAD`, '_blank');
  };

  function handleShare() {
    const shareData = {
      title: 'Shanti Library',
      text: 'Check out Shanti Library in Mandawali, Delhi!',
      url: window.location.href
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Shared successfully'))
        .catch((error) => console.log('Error sharing:', error));
    } else {
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Failed to copy link'));
    }
  }

  // Slider functions
  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === libraryInfo.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? libraryInfo.images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentImageIndex(index);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: -50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        duration: 0.8
      }
    }
  };

  const contactButtonVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: [0, -10, 10, 0],
      transition: {
        duration: 0.5
      }
    }
  };

  const contactActions = [
    {
      onClick: handleCall,
      icon: Phone,
      title: "Call Library",
      subtitle: libraryInfo.phone,
      borderColor: "border-blue-200",
      hoverBorderColor: "group-hover:border-blue-400",
      iconColor: "text-blue-600"
    },
    {
      onClick: handleWhatsApp,
      icon: FaWhatsapp,
      title: "WhatsApp",
      subtitle: "Quick messages",
      borderColor: "border-green-200",
      hoverBorderColor: "group-hover:border-green-400",
      iconColor: "text-green-600"
    },
    {
      onClick: handleDirections,
      icon: MapPin,
      title: "Get Directions",
      subtitle: "Navigate to library",
      borderColor: "border-purple-200",
      hoverBorderColor: "group-hover:border-purple-400",
      iconColor: "text-purple-600"
    },
    {
      onClick: handleShare,
      icon: Send,
      title: "Share",
      subtitle: "Share with others",
      borderColor: "border-gray-300",
      hoverBorderColor: "group-hover:border-gray-500",
      iconColor: "text-blue-600"
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-20 my-10 bg-gray-50"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Visit Our <span className="text-cyan-500">Library</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Find us in the heart of Mandawali. We&apos;re here to help you on your learning journey.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Slider */}
          <motion.div 
            className="lg:col-span-1"
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div 
              className="relative overflow-hidden rounded-2xl group shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Main Image Container */}
              <div className="relative h-96">
                {/* All Images - Stacked */}
                {libraryInfo.images.map((image, index) => (
                  <motion.img 
                    key={index}
                    src={image}
                    alt={`Shanti Library Interior ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105 ${
                      index === currentImageIndex 
                        ? 'opacity-100 z-10' 
                        : 'opacity-0 z-0'
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
                    transition={{ duration: 0.7 }}
                  />
                ))}
                
                {/* Navigation Arrows */}
                {libraryInfo.images.length > 1 && (
                  <>
                    <motion.button
                      onClick={prevSlide}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft size={20} />
                    </motion.button>
                    
                    <motion.button
                      onClick={nextSlide}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100 z-20"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight size={20} />
                    </motion.button>
                  </>
                )}
              </div>

              {/* Dot Indicators */}
              {libraryInfo.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
                  {libraryInfo.images.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'bg-white scale-125' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Actions */}
          <motion.div 
            className="lg:col-span-1"
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get In Touch</h3>
              <p className="text-gray-600">Choose your preferred way to connect with us</p>
            </div>
            
            {/* Updated Grid Layout - 2x2 for mobile, 2x2 for small screens, 1x4 for larger screens */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
              {contactActions.map((action, index) => (
                <motion.button
                  key={index}
                  onClick={action.onClick}
                  className={`flex flex-col items-center justify-center gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-2xl shadow-lg transition-all duration-200 group hover:shadow-xl hover:bg-gray-50 min-h-[140px] sm:min-h-[160px]`}
                  variants={contactButtonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                >
                  <motion.div 
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center border-2 ${action.borderColor} ${action.hoverBorderColor} transition-colors`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <action.icon size={20} className={`${action.iconColor} sm:w-6 sm:h-6`} />
                  </motion.div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">{action.title}</p>
                    <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-tight">{action.subtitle}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
