'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Student {
  id: number
  name: string
  exam: string
  rank: string
  image: string
  year: string
  college?: string
}

const StudentSuccessSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const students: Student[] = [
    {
      id: 1,
      name: "Hari Om Mishra",
      exam: "CUET",
      rank: "Scored 794/800",
      image: "/success/success3.jpeg",
      year: "2024",
      college: "Graduation"
    },
    {
      id: 2,
      name: "Amit Kumar",
      exam: "SSC",
      rank: "Excise GST Inspector",
      image: "/success/succes1.jpeg",
      year: "2023",
      college: ""
    },
    {
      id: 3,
      name: "Suresh Kumar",
      exam: "CA Final Year",
      rank: "Chartered Accountant",
      image: "/success/success2.jpeg",
      year: "2024",
      college: ""
    }
  ]

  // Show 1 card on small screens, 3 on md+
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else {
        setVisibleCount(3);
      }
    };
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const maxSlide = students.length - visibleCount + 1;
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlide);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlide) % maxSlide);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [visibleCount]);

  const getVisibleStudents = () => {
    return students.slice(currentSlide, currentSlide + visibleCount);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our <span className='text-cyan-500'>Success</span> Stories</h2>
        <p className="text-gray-600 text-lg">Students who achieved their dreams with us</p>
      </div>

      <div className="relative">
        <div className="flex items-center justify-center">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 border-2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <div className={`flex px-4 md:px-16 ${visibleCount === 1 ? 'justify-center' : 'space-x-6'}`}>
            {getVisibleStudents().map((student) => (
              <Card key={student.id} className="flex-1 max-w-xs md:max-w-none overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0 relative">
                  <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                      src={student.image}
                      alt={student.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <div className="bg-black/40 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-xl font-bold mb-2">{student.name}</h3>
                        <div className="space-y-1">
                          <p className="text-sm font-semibold text-blue-300">{student.exam}</p>
                          <p className="text-lg font-bold text-green-400">{student.rank}</p>
                          <p className="text-sm text-gray-300">{student.college}</p>
                          <p className="text-xs text-gray-400">{student.year}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg rounded-full w-12 h-12 border-2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: students.length - visibleCount + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-blue-600 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default StudentSuccessSlider
