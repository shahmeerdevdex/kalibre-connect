
import React, { useEffect, useRef } from "react";
import { Briefcase, MapPin, Building, Users } from "lucide-react";

const Placement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
            // Once the animation is applied, unobserve the element to prevent issues on scroll
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".reveal");
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  const locations = [
    {
      icon: <MapPin size={24} className="text-kalibre-800" />,
      region: "Pakistan",
      description: "Premier hotels and resorts in Islamabad, Lahore, Karachi, and other major cities."
    },
    {
      icon: <MapPin size={24} className="text-kalibre-800" />,
      region: "Saudi Arabia",
      description: "Luxury accommodations in Riyadh, Jeddah, and prestigious holy cities."
    },
    {
      icon: <MapPin size={24} className="text-kalibre-800" />,
      region: "Middle East",
      description: "5-star hotel chains across Dubai, Abu Dhabi, Doha, and other Gulf destinations."
    },
    {
      icon: <MapPin size={24} className="text-kalibre-800" />,
      region: "United Kingdom",
      description: "Prestigious establishments in London and other major UK cities."
    },
    {
      icon: <MapPin size={24} className="text-kalibre-800" />,
      region: "Europe",
      description: "International hotel groups across European capitals and resort destinations."
    }
  ];

  return (
    <section id="placement" className="py-24 bg-kalibre-50">
      <div className="section-container" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="reveal opacity-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-kalibre-100 text-kalibre-800 uppercase tracking-wide">
                Job Placement
              </span>
              <h2 className="section-heading">
                Your Gateway to Global Career Opportunities
              </h2>
              <p className="text-kalibre-600 mb-8">
                Beyond providing exceptional education, we take pride in connecting our graduates with 
                exciting job opportunities across Pakistan and international destinations. Our extensive 
                network of industry partners ensures that your career journey begins on the right foot.
              </p>
            </div>

            <div className="reveal opacity-0" style={{ transitionDelay: "0.1s" }}>
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-kalibre-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase size={18} className="text-kalibre-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kalibre-900 mb-1">Personalized Placement Support</h3>
                  <p className="text-kalibre-600 text-sm">
                    Our dedicated placement team works with each graduate individually to match their skills, 
                    interests, and career goals with the perfect employment opportunity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6">
                <div className="w-10 h-10 rounded-full bg-kalibre-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Building size={18} className="text-kalibre-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kalibre-900 mb-1">Industry Partnerships</h3>
                  <p className="text-kalibre-600 text-sm">
                    We've established strong relationships with leading hospitality brands worldwide, 
                    giving our graduates preferred access to exciting career opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-kalibre-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users size={18} className="text-kalibre-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-kalibre-900 mb-1">Ongoing Career Support</h3>
                  <p className="text-kalibre-600 text-sm">
                    Our commitment to your success doesn't end with placement. We provide continued 
                    guidance and support as you progress through your hospitality career.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0" style={{ transitionDelay: "0.2s" }}>
            <div className="glassmorphism-card rounded-xl overflow-hidden">
              <div className="p-6 border-b border-kalibre-100">
                <h3 className="text-xl font-semibold text-kalibre-900 mb-2">Placement Destinations</h3>
                <p className="text-kalibre-600 text-sm">
                  Our graduates are successfully employed in prestigious hospitality establishments across:
                </p>
              </div>
              
              <div className="divide-y divide-kalibre-100">
                {locations.map((location, index) => (
                  <div key={index} className="p-5 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-kalibre-50 flex items-center justify-center mr-4 flex-shrink-0">
                      {location.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-kalibre-900">{location.region}</h4>
                      <p className="text-kalibre-600 text-sm">{location.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-kalibre-100/50">
                <p className="text-center text-kalibre-700 font-medium">
                  Ready to start your international career?
                </p>
                <div className="text-center mt-3">
                  <a 
                    href="#apply" 
                    className="inline-block bg-kalibre-800 text-white px-5 py-2 rounded-md text-sm font-medium hover:bg-kalibre-700 transition-all-200"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
