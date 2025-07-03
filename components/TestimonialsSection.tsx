"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    text: "Best place for study. With AC, suitable and relaxing chairs. Lockers are also available here. There are 2 bathrooms. Here is the lunch area also. You can join this library and make a strong focus on your desired study.",
    imageSrc: "/REVIEW/1.png",
    name: "Suraj Kumar",
  },
  {
    text: "Good Library with a good environment… it has been 2 months there. Owner is also kind and polite. Good experience!",
    imageSrc: "/REVIEW/2.png",
    name: "Kartik Tiwari",
  },
  {
    text: "- Silent study zones with strict noise control\n- High-speed Wi-Fi for uninterrupted research\n- Tea/coffee station for refreshments\n- Newspapers & magazines available for breaks\n- Comfortable ergonomic chairs and study desks\n- Ample charging ports at every seat\n- Bright lighting and climate-controlled environment\n- Secure locker facilities for personal belongings\n- Good ventilation and AC\n- Clean restrooms and common areas\n- Well-maintained furniture and equipment\n- Friendly and helpful behaviour of owner",
    imageSrc: "/REVIEW/3.png",
    name: "Amrita Bhagat",
  },
  {
    text: "The environment of Shanti Library is best for achieving educational objectives. The facilities provided by Shanti Library are best for all the students.",
    imageSrc: "/REVIEW/4.png",
    name: "Anshu Tiwari",
  },
  {
    text: "A beautiful and peaceful place for study. There are many facilities like AC, water, comfortable chairs, etc.",
    imageSrc: "/REVIEW/5.png",
    name: "Deva Haldar",
  },
  {
    text: "Very good environment for all students who are dedicated to any competitive or other exam. Also, very good staff always ready to help the students.",
    imageSrc: "/REVIEW/6.png",
    name: "Mohit Verma",
  },
  {
    text: "Shanti Library gave me the peace and focus I needed to prepare for both NDA and CUET. With their calm environment and mentor support, I scored 794 out of 800 in CUET and cleared NDA too. This place truly shaped my future.",
    imageSrc: "/REVIEW/7.png",
    name: "Hariom Mishra",
  },
  {
    text: "I cracked SSC and got selected as an Excise Inspector—all thanks to Shanti Library. The study-friendly environment, supportive staff, and access to all required materials helped me stay on track. Highly recommended for serious aspirants.",
    imageSrc: "/REVIEW/8.png",
    name: "Amit Kumar",
  },
  {
    text: "From CPT to CA Final, every step of my CA journey was backed by the atmosphere at Shanti Library. It became my second home. The discipline, resources, and comfort here played a key role in my success. Grateful always!",
    imageSrc: "/REVIEW/9.png",
    name: "CA Suresh Kumar",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Learners Say About Shanti Library
            </h2>
          </div>
          <div className="w-full flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestimonialsColumn
              testimonials={testimonials.slice(0, 3)}
              duration={25}
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(3, 6)}
              className="hidden md:block"
              duration={27}
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(6, 9)}
              className="hidden lg:block"
              duration={23}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TestimonialsColumn = ({
  testimonials,
  className,
  duration,
}: {
  testimonials: { text: string; imageSrc: string; name: string }[];
  className?: string;
  duration?: number;
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, imageSrc, name }, testimonialIndex) => (
              <div
                className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white max-w-xs w-full"
                key={testimonialIndex}
              >
                <div className="text-gray-700 leading-relaxed mb-4">{text}</div>
                <div className="flex items-center gap-3">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium text-gray-900">{name}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
