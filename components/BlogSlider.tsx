"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  image?: string;
  author?: string;
  date?: string;
  category?: string;
}

interface BlogSliderProps {
  posts: BlogPost[];
  autoSlide?: boolean;
  slideInterval?: number;
}

const posts: BlogPost[] = [
  {
    id: "1",
    title:
      "Why You Should Study in a Library: Unlocking the Perfect Study Space",
    content:
      "In a world full of distractions, finding the perfect place to focus and grow is essential. While many students try to study at home, in cafés, or even in parks, nothing quite compares to the benefits of studying in a library. Whether you're preparing for exams, working on projects, or simply reading for pleasure, libraries offer a unique environment that's hard to beat.\n\nHere's why you should seriously consider making the library your go-to study spot.\n\n1. Peaceful and Focused Environment\nLibraries are designed to be quiet and distraction-free. Unlike home or public spaces, where interruptions are common, libraries give you a calm atmosphere where your brain can focus entirely on learning. This peaceful setting naturally boosts concentration and productivity.\n\n2. Minimal Distractions\nAt home, your phone, TV, family members, or even your bed can constantly pull your attention away from your books. Libraries help you break away from these distractions by providing a dedicated study space where your primary focus is studying.\n\n3. Better Time Management\nWhen you visit a library, you're entering a space with purpose. You tend to set specific goals and time limits while you're there, which helps you build discipline and better manage your study hours. This habit can significantly improve your efficiency and consistency.\n\n4. Access to Resources\nLibraries offer more than just a place to sit. You get access to books, journals, and study materials, newspapers and magazines, free Wi-Fi, and printing and photocopying services. These resources can support your learning far better than what's usually available at home.\n\n5. Healthy Study Habits\nA library promotes good posture (thanks to proper seating), structured schedules (you travel there specifically to study), and longer focus periods (fewer distractions). Over time, these factors can help you build stronger and more sustainable study habits.\n\n6. Motivating Study Environment\nSeeing other students studying around you naturally encourages you to stay focused. This \"peer pressure\" can be a positive force that keeps you motivated and helps you avoid procrastination.\n\n7. Facilities That Boost Productivity\nMany modern libraries offer high-speed Wi-Fi, comfortable seating, coffee machines, clean drinking water, personal lockers, cafeteria spaces, and bicycle and vehicle parking. These small conveniences add up and create a hassle-free, supportive study experience.\n\n8. Personal Growth Space\nStudying in a library is not just about grades—it's about developing discipline, focus, and responsibility. It helps you build a mindset that prioritizes personal growth and lifelong learning.\n\nFinal Thoughts\nStudying in a library can transform the way you learn. It's a peaceful, resource-rich, and inspiring place that supports both academic success and personal growth. Whether you need a focused environment, quick access to materials, or just a quiet corner to think, the library is a valuable space that every student should take advantage of.\n\nSo, next time you're struggling to concentrate at home, remember: the library is waiting for you.",
    image: "/blogs/1.jpg",
    category: "Study Tips",
  },
  {
    id: "2",
    title: "5 Ways to Study Effectively in a Library",
    content:
      "Studying in a library is a powerful way to boost your focus and productivity, but simply being in a quiet space is not enough. To truly get the most out of your library time, you need the right strategies.\n\nHere are 5 proven ways to study effectively in a library:\n\n1. Set Clear Study Goals\nBefore you even step into the library, decide exactly what you want to achieve.\n🎯 Example: Finish 3 chapters, solve 2 mock papers, or complete a revision session.\nWhy it works: Having clear, specific targets keeps you focused and makes your study time more productive.\n\n2. Choose the Right Spot\nFind a seat that matches your study style: quiet corners for deep focus, group study areas for discussions, or near facilities like charging points or lockers if needed.\nWhy it works: Your environment directly affects your concentration. The right spot can help you stay in the flow.\n\n3. Use the Pomodoro Technique\nBreak your study time into short, focused sessions: study for 25-30 minutes, take a 5-minute break, repeat.\nWhy it works: It helps prevent burnout, keeps your mind fresh, and makes long study hours more manageable.\n\n4. Minimize Distractions\nKeep your phone on silent or in your locker, avoid unnecessary social media scrolling, and use apps like Forest or Focus To-Do to stay on track.\nWhy it works: Libraries are already low-distraction zones, but your personal discipline matters the most.\n\n5. Use Library Resources Smartly\nTake advantage of reference books, magazines and newspapers, printing and photocopying services, and Wi-Fi for research (not for entertainment!).\nWhy it works: Using resources efficiently saves time and gives you access to materials you might not have elsewhere.\n\nFinal Tip:\n✔️ Stay hydrated, take proper breaks, and leave the library feeling accomplished, not exhausted.",
    image: "/blogs/2.jpg",
    category: "Productivity",
  },
  {
    id: "3",
    title: "Yoga and Exercises Students Should Do to Increase Focus",
    content:
      "In today's fast-paced world, students often struggle with maintaining concentration and mental clarity due to constant distractions, academic pressure, and digital overload. Incorporating yoga and simple exercises into your daily routine can significantly boost focus, reduce stress, and enhance overall well-being. Here's a guide to the most effective yoga poses and exercises students can practice to sharpen their concentration.\n\nWhy Yoga and Exercise Improve Focus\nPhysical movement and mindful breathing help increase blood flow to the brain, reduce anxiety, and improve oxygen circulation, all of which are essential for sustained attention and mental sharpness. Yoga, in particular, helps balance the nervous system and calms mental chatter, allowing students to stay present and engaged in their studies.\n\nBest Yoga Poses to Improve Focus\n\n1. Tree Pose (Vrikshasana)\nBenefits: Improves balance, enhances stability, and encourages mental grounding.\nHow to Do: Stand straight, place one foot on the inner thigh of the opposite leg, hands in a prayer position, and hold steady for 30 seconds on each side.\n\n2. Eagle Pose (Garudasana)\nBenefits: Boosts concentration by challenging your balance and coordination.\nHow to Do: Wrap one leg over the other and one arm under the other, sit slightly in a half-squat, and hold for 30 seconds.\n\n3. Child's Pose (Balasana)\nBenefits: Provides relaxation, reduces fatigue, and resets the mind.\nHow to Do: Kneel on the floor, sit back on your heels, stretch your arms forward, and rest your forehead on the mat.\n\n4. Seated Forward Bend (Paschimottanasana)\nBenefits: Calms the brain, stretches the spine, and reduces anxiety.\nHow to Do: Sit with legs extended, inhale deeply, and exhale as you reach for your feet, keeping your spine long.\n\n5. Alternate Nostril Breathing (Nadi Shodhana Pranayama)\nBenefits: Balances both sides of the brain, enhances focus, and reduces stress.\nHow to Do: Use your thumb and ring finger to alternately close each nostril while breathing slowly and deeply for 3-5 minutes.\n\nSimple Exercises to Sharpen Focus\n1. Jumping Jacks: Quick cardio that increases blood circulation and wakes up the body and mind.\n2. Brisk Walking or Light Jogging: Just 10-15 minutes can improve mood, energy, and attention span.\n3. Stretching Breaks: Reduces physical tension and mental fatigue during long study sessions.\n4. Eye Exercises: Look away from the screen every 20 minutes and focus on a distant object for 20 seconds to prevent eye strain and maintain focus.\n\nTips to Stay Consistent\n• Schedule short yoga or exercise sessions between study breaks.\n• Start with 5-10 minutes daily and gradually increase.\n• Practice mindful breathing whenever you feel distracted.\n• Try morning yoga to kickstart your day with energy and clarity.\n\nFinal Thoughts\nAdding yoga and light exercises to your routine doesn't require hours of commitment but can deliver powerful results for your academic performance and mental well-being. Regular practice can help you build better focus, manage stress, and create a more balanced, healthy student life.",
    image: "/blogs/3.jpg",
    category: "Wellness",
  },
  {
    id: "4",
    title: "The Rise of Self-Study Libraries: A Modern Educational Trend",
    content:
      "In recent years, self-study libraries have emerged as a powerful educational trend, reshaping how students, professionals, and lifelong learners approach learning. Unlike traditional libraries that focus primarily on resource access, self-study libraries are purpose-built spaces that prioritize focus, discipline, and independent learning. This rise reflects a growing need for dedicated environments that foster deep concentration in a world increasingly filled with distractions.\n\nLet's explore why self-study libraries are booming and how they are transforming modern education.\n\nWhat Are Self-Study Libraries?\nSelf-study libraries are specialized spaces designed exclusively for focused, individual learning. They typically offer personal desks, quiet zones, charging points, and comfortable seating, with minimal group activities or social interaction. Many of these libraries operate on subscription models, giving students access to peaceful, time-bound study environments.\n\nWhy Are Self-Study Libraries Gaining Popularity?\n\n1. The Distraction-Free Demand\nIn a world dominated by smartphones, social media, and constant notifications, students are actively seeking spaces where they can disconnect and fully concentrate. Self-study libraries offer strict quiet policies and personal study zones that help eliminate distractions and enable deep, uninterrupted work.\n\n2. Flexible, Membership-Based Access\nMany modern self-study libraries now operate with flexible subscription plans (hourly, daily, or monthly), allowing students to choose when and how often they use the space. This flexibility appeals to competitive exam aspirants, freelancers, and students who need structure but value control over their schedules.\n\n3. Rise in Competitive Exams and Self-Paced Learning\nThe surge in self-study libraries is closely linked to the growing number of students preparing for competitive exams like UPSC, NEET, JEE, and CA, where independent study and long hours of focus are crucial. Additionally, the rise of online courses and self-paced learning platforms encourages students to seek quiet physical spaces where they can fully engage in independent study.\n\n4. A Solution for Small Homes and Noisy Environments\nNot all students have access to quiet, comfortable spaces at home. Self-study libraries provide an ideal escape from household distractions, limited space, and noisy surroundings, offering a professional environment that supports serious study.\n\n5. Minimal Facilities, Maximum Focus\nUnlike traditional libraries with vast book collections, self-study libraries focus more on minimalistic setups that reduce clutter and encourage concentration. Key facilities often include personal LED desk lights, charging ports, ergonomic chairs, high-speed Wi-Fi (often optional), and clean, separated washrooms.\n\nBenefits of Self-Study Libraries\n• Boosts Productivity: Dedicated space encourages students to stay focused for longer.\n• Builds Discipline: Fixed timings promote time management and regularity.\n• Mental Well-being: Calm environments help reduce stress and overstimulation.\n• Flexible Study Options: Choose study hours that fit your personal rhythm.\n\nThe Future of Self-Study Libraries\nAs urbanization increases and more students pursue self-driven educational paths, the demand for self-study libraries is expected to grow. Many modern libraries are now integrating features like personal lockers, private cabins, mindfulness zones, and cafeteria corners for study breaks. Some libraries are even offering digital reservation systems and integrating wellness resources, making them more student-friendly and accessible than ever before.\n\nFinal Thoughts\nThe rise of self-study libraries is not just a passing trend — it represents a shift in how students approach learning in the modern world. In an era of endless digital distractions, these libraries offer something rare and valuable: a quiet space to think, learn, and grow independently.\n\nIf you're someone struggling to stay focused at home or looking for a disciplined study environment, visiting a self-study library might just be your next game-changer.",
    image: "/blogs/4.jpg",
    category: "Education",
  },
];

const BlogSlider: React.FC<BlogSliderProps> = ({
  autoSlide = true,
  slideInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAutoSliding, setIsAutoSliding] = useState(autoSlide);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoSliding || isExpanded) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === posts.length - 1 ? 0 : prevIndex + 1
      );
    }, slideInterval);

    return () => clearInterval(interval);
  }, [isAutoSliding, isExpanded, slideInterval]);

  const goToSlide = (index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsExpanded(false);
      setIsTransitioning(false);
    }, 150);
  };

  const goToPrevious = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? posts.length - 1 : currentIndex - 1);
      setIsExpanded(false);
      setIsTransitioning(false);
    }, 150);
  };

  const goToNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(currentIndex === posts.length - 1 ? 0 : currentIndex + 1);
      setIsExpanded(false);
      setIsTransitioning(false);
    }, 150);
  };

  const handleViewMore = () => {
    setIsExpanded(true);
    setIsAutoSliding(false);
  };

  const handleViewLess = () => {
    setIsExpanded(false);
    setIsAutoSliding(autoSlide);
  };

  const truncateText = (text: string, wordLimit: number = 35) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ");
  };

  if (!posts || posts.length === 0) {
    return (
      <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl">
        <p className="text-gray-500 text-lg">No blog posts available</p>
      </div>
    );
  }

  const currentPost = posts[currentIndex];

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      {/* Main Slider Container */}
      <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl">
        <div className="relative">
          {/* Blog Post Image with Enhanced Styling */}
          {currentPost.image && (
            <div className="relative w-full h-80 md:h-96 lg:h-[500px] overflow-hidden">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

              {/* Image with smooth transitions */}
              <div
                className={`w-full h-full transition-all duration-700 ease-in-out ${
                  isTransitioning
                    ? "scale-110 opacity-0"
                    : "scale-105 opacity-100"
                }`}
              >
                <Image
                  src={currentPost.image}
                  alt={currentPost.title}
                  fill
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-110"
                  style={{
                    filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
                    objectPosition: "center 30%",
                  }}
                  sizes="(max-width: 768px) 100vw, 700px"
                  priority={true}
                />
              </div>

              {/* Floating Category Badge */}
              {currentPost.category && (
                <div className="absolute top-6 left-6 z-20">
                  <div className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg backdrop-blur-sm border border-white/20 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    {currentPost.category}
                  </div>
                </div>
              )}

              {/* Enhanced Navigation Arrows */}
              {!isExpanded && posts.length > 1 && (
                <>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm"
                    onClick={goToPrevious}
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white shadow-xl border-0 w-12 h-12 rounded-full transition-all duration-300 hover:scale-110 z-20 backdrop-blur-sm"
                    onClick={goToNext}
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </Button>
                </>
              )}

              {/* Enhanced Slide Indicators */}
              {!isExpanded && posts.length > 1 && (
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                  {posts.map((_, index) => (
                    <button
                      key={index}
                      className={`transition-all duration-500 rounded-full ${
                        index === currentIndex
                          ? "w-8 h-3 bg-cyan-500 shadow-lg"
                          : "w-3 h-3 bg-white/60 hover:bg-white/90 hover:scale-125"
                      }`}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Enhanced Content Section */}
        <CardContent className="p-8 md:p-12 relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>

          {/* Enhanced Title */}
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-6 leading-tight transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            {currentPost.title}
          </h2>

          {/* Enhanced Content */}
          <div
            className={`prose prose-xl max-w-none transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="text-gray-700 leading-relaxed text-lg md:text-xl mb-8">
              {isExpanded ? (
                <span className="whitespace-pre-line">
                  {currentPost.content}
                </span>
              ) : (
                <>
                  {truncateText(currentPost.content)}
                  {currentPost.content.split(" ").length > 35 && (
                    <span className="text-gray-400">...</span>
                  )}
                </>
              )}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              {!isExpanded && currentPost.content.split(" ").length > 35 && (
                <Button
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  onClick={handleViewMore}
                >
                  Read Full Article
                </Button>
              )}

              {isExpanded && (
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-600 hover:bg-cyan-50 px-8 py-3 rounded-full font-semibold transition-all duration-300"
                  onClick={handleViewLess}
                >
                  Show Less
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Enhanced Thumbnail Navigation */}
    </div>
  );
};

export default BlogSlider;
