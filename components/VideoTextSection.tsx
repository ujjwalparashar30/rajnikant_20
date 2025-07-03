"use client";

export default function VideoTextSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - YouTube Video */}

          <div className="lg:col-span-1">
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Explore our <span className="text-cyan-500">Library</span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Take a virtual walkthrough of Shanti Library and discover the
                  facilities designed for your productivity. From spacious
                  seating and clean interiors to essential amenities like
                  high-speed Wi-Fi, CCTV, and refreshments — everything is built
                  to enhance your study experience.
                </p>
              </div>
            </div>
          </div>
          {/* Right Column - Text Content */}

          <div className="lg:col-span-1">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/8zOuc1wp-d0"
                  title="Library Tour Video"
                  className="w-full h-full rounded-2xl"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
