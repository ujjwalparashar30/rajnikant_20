"use client";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  title: string;
  content: string;
}

const accordionData: AccordionItem[] = [
  {
    title: "Student-First Support",
    content: "Friendly, on-hand staff and personalized mentor guidance—because every question deserves an answer.",
  },
  {
    title: "Proven Track Record",
    content: "Thousands of students have studied here; hundreds have achieved their goals—from CA and IAS to JEE-IIT, NEET, NDA, GST Inspector, and beyond.",
  },
  {
    title: "Flexible, Transparent Plans",
    content: "Daily, monthly, quarterly, or annual memberships—with “pause” options so you never lose a rupee when you need a break.",
  },
  {
    title: "Value-Added Amenities",
    content: "High-speed Wi-Fi, photocopy & tea/coffee Machine, personal light and charging port on each desk, magazines, and a curated collection of productivity books.",
  },
  {
    title: "Quiet, Safe & Clean",
    content: "Thoughtfully designed study spaces—quiet and distraction-free, so you can focus without compromise.",
  },
  {
    title: "Powered by Feedback",
    content: "We continually evolve based on your reviews—ensuring Shanti Library remains the ideal environment for academic excellence.",
  },
];


export default function ShantiLibraryAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Hero Section */}
          <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 p-8 mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-100/30 to-blue-100/30"></div>
            <div className="relative z-10">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Why choose Shanti Library
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl">
                Discover what makes us the trusted partner for modern library solutions
              </p>
            </div>
          </div>

          {/* Accordion Section */}
          <div className="space-y-2">
            {accordionData.map((item, index) => {
              const isOpen = openItems.includes(index);
              return (
                <div
                  key={index}
                  className={cn(
                    "border border-gray-200 rounded-xl overflow-hidden transition-all duration-200",
                    "hover:border-cyan-300 hover:shadow-md hover:shadow-cyan-100/50",
                    isOpen && "border-cyan-400 shadow-lg shadow-cyan-100/50 bg-gradient-to-r from-cyan-50/50 to-sky-50/50"
                  )}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className={cn(
                      "w-full px-6 py-4 text-left flex items-center justify-between",
                      "bg-white hover:bg-gradient-to-r hover:from-cyan-50/50 hover:to-sky-50/50 transition-all duration-200",
                      "focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset",
                      isOpen && "bg-gradient-to-r from-cyan-50 to-sky-50"
                    )}
                  >
                    <span
                      className={cn(
                        "font-semibold text-gray-900 transition-colors duration-200",
                        isOpen && "text-cyan-700"
                      )}
                    >
                      {item.title}
                    </span>
                    <div
                      className={cn(
                        "flex-shrink-0 ml-4 transition-transform duration-200",
                        isOpen && "rotate-90"
                      )}
                    >
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 transition-colors duration-200",
                          isOpen ? "text-cyan-600" : "text-gray-400"
                        )}
                      />
                    </div>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-300 ease-in-out",
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    )}
                  >
                    <div className="px-6 pb-4 text-gray-600 leading-relaxed bg-gradient-to-r from-cyan-25 to-sky-25">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
