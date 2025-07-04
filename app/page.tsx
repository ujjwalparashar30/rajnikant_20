"use client";
import BlogSlider from "@/components/BlogSlider";
import BookingFeedbackComponent from "@/components/BookingFeedbackComponent";
import LibraryContact from "@/components/ContactUs";
import FacilitiesSlider from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import PlansSection from "@/components/PlanCards";
import ShantiLibraryAccordion from "@/components/ShantiLibraryAccordion";
import StudentSuccessSlider from "@/components/StudentSuccessSlider";
import { TestimonialsSection } from "@/components/TestimonialsSection";
// import Testing from "@/components/Testing";
import Footer from "@/components/ui/Footer";
import VideoTextSection from "@/components/VideoTextSection";
// import { Shanti } from "next/font/google";
// import Image from "next/image";

import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  const [plan, setPlan] = React.useState<string>("");
  return (
    <>
      <NavBar />
      <motion.section id="home" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <HeroSection classes="top-0" />
      </motion.section>
      <motion.section id="plans" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <PlansSection setPlan={setPlan} />
      </motion.section>
      <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <LibraryContact />
      </motion.section>
      <motion.section id="facilities" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <FacilitiesSlider />
      </motion.section>
      <motion.section id="video" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <VideoTextSection />
      </motion.section>
      <ShantiLibraryAccordion />
      <motion.section id="testimonials" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <TestimonialsSection />
      </motion.section>
      <StudentSuccessSlider />
      <motion.section id="blogs" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BlogSlider posts={[]} />
      </motion.section>
      <motion.section id="booking" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BookingFeedbackComponent plan = {plan} />
      </motion.section>
      <Footer />
    </>
  );
}
