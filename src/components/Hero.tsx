
import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-kalibre-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-kalibre-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-block px-3 py-1 mb-6 text-xs font-medium rounded-full bg-kalibre-100 text-kalibre-800 uppercase tracking-wide">
              CTH Accredited Education Provider
            </span>
          </div>
          
          <h1 className="animate-fade-up text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 max-w-5xl text-kalibre-950" style={{ animationDelay: "0.2s" }}>
            Unlock Your Global <br />
            <span className="text-kalibre-800">Hospitality Career</span>
          </h1>
          
          <p className="animate-fade-up text-kalibre-600 text-lg md:text-xl max-w-2xl mb-10" style={{ animationDelay: "0.3s" }}>
            The Kalibre offers internationally recognized hospitality courses in Pakistan,
            with placement opportunities across Pakistan, Saudi Arabia, the Middle East, UK and Europe.
          </p>
          
          <div className="animate-fade-up flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.4s" }}>
            <a 
              href="#courses" 
              className="bg-kalibre-800 text-white px-8 py-4 rounded-md font-medium hover:bg-kalibre-700 transition-all-200 flex items-center justify-center"
            >
              Explore Courses
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a 
              href="#about" 
              className="bg-kalibre-100 text-kalibre-800 px-8 py-4 rounded-md font-medium hover:bg-kalibre-200 transition-all-200"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="animate-fade-up flex justify-center mt-20" style={{ animationDelay: "0.5s" }}>
          <div className="glassmorphism-card rounded-xl p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-kalibre-800">CTH</div>
                <div className="text-kalibre-600 text-sm mt-1">UK Accredited</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kalibre-800">100%</div>
                <div className="text-kalibre-600 text-sm mt-1">Placement Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kalibre-800">5+</div>
                <div className="text-kalibre-600 text-sm mt-1">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-kalibre-800">Expert</div>
                <div className="text-kalibre-600 text-sm mt-1">Trainers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
