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

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection classes="top-0" />
      <PlansSection />
      <LibraryContact />
      <FacilitiesSlider />
      <VideoTextSection />
      <ShantiLibraryAccordion />
      <TestimonialsSection />
      <BlogSlider posts={[]} />
      <BookingFeedbackComponent />
      <StudentSuccessSlider />
      <Footer />
    </>
  );
}
