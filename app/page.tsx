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

export default function Home() {
  return (
    <>
      <NavBar />
      <motion.section id="home" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <HeroSection classes="top-0" />
      </motion.section>
      <PlansSection />
      <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <LibraryContact />
      </motion.section>
      <motion.section id="facilities" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <FacilitiesSlider />
      </motion.section>
      <VideoTextSection />
      <ShantiLibraryAccordion />
      <motion.section id="about" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <TestimonialsSection />
      </motion.section>
      <StudentSuccessSlider />
      <motion.section id="blogs" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BlogSlider posts={[]} />
      </motion.section>
      <motion.section id="booking" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <BookingFeedbackComponent />
      </motion.section>
      <Footer />
    </>
  );
}
