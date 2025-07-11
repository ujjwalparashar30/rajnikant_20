import BlogSlider from "@/components/BlogSlider";
import LibraryContact from "@/components/ContactUs";
import FacilitiesSlider from "@/components/Facilities";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import PlansWrapper from "@/components/PlansWrapper";
import ShantiLibraryAccordion from "@/components/ShantiLibraryAccordion";
import StudentSuccessSlider from "@/components/StudentSuccessSlider.jsx";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import Footer from "@/components/ui/Footer";
import VideoTextSection from "@/components/VideoTextSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Premium Study Spaces & Library Services",
  description: "Welcome to Shanti Library - your premier destination for quiet study spaces, comprehensive library services, and academic excellence. Book your study spot today.",
  openGraph: {
    title: "Shanti Library - Premium Study Spaces & Library Services",
    description: "Welcome to Shanti Library - your premier destination for quiet study spaces and academic excellence.",
    url: "https://your-domain.com",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Shanti Library Home",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <section id="home" aria-label="Hero Section">
          <HeroSection classes="top-0" />
        </section>
        
        {/* PlansWrapper contains both plans and booking sections */}
        <PlansWrapper />
        
        <section id="contact" aria-label="Contact Information">
          <LibraryContact />
        </section>
        <section id="facilities" aria-label="Library Facilities">
          <FacilitiesSlider />
        </section>
        <section id="video" aria-label="Library Overview Video">
          <VideoTextSection />
        </section>
        <section aria-label="Frequently Asked Questions">
          <ShantiLibraryAccordion />
        </section>
        <section id="testimonials" aria-label="Student Testimonials">
          <TestimonialsSection />
        </section>
        <section aria-label="Student Success Stories">
          <StudentSuccessSlider />
        </section>
        <section id="blogs" aria-label="Library Blog">
          <BlogSlider posts={[]} />
        </section>
      </main>
      <Footer />
    </>
  );
}
