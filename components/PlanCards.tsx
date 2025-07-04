"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const PlanCard = ({
  image,
  title,
  description,
  features,
  onClick,
}: {
  image: string;
  title: string;
  description: string;
  features: string | null;
  onClick: () => void;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 max-w-sm mx-auto h-full flex flex-col cursor-pointer transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-64 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
        />
      </div>
      <div className="p-6 text-center flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        {features && (
          <div className="text-xs text-gray-500 mt-4 pt-4 border-t border-gray-100">
            {features}
          </div>
        )}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium">
            Select Plan
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const PlansSection: React.FC<{ setPlan: React.Dispatch<React.SetStateAction<string>> }> = ({ setPlan }) => {
  const plans = [
    {
      image: "/reserveSeat.png",
      title: "Reserve Your Seat",
      description: "Choose a dedicated seat for long-term focused preparation",
      features: null,
      planType: "reserve-seat"
    },
    {
      image: "/productiveHours.png",
      title: "Productive Hours Plan",
      description: "6hrs, 8hrs, 10hrs 12hrs daily access affordable monthly plans",
      features: null,
      planType: "hours-plans"
    },
    {
      image: "/oneDay.png",
      title: "One Day Pass",
      description: "Gain exclusive access to our study spaces for a full day, for one day pass",
      features: null,
      planType: "per-day-plan"
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handlePlanClick = (planType: string) => {
    // Set the selected plan
    setPlan(planType);
    
    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="py-20 mt-10 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore our Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan that fits your study needs and schedule
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="flex">
              <PlanCard
                image={plan.image}
                title={plan.title}
                description={plan.description}
                features={plan.features}
                onClick={() => handlePlanClick(plan.planType)}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default PlansSection;
