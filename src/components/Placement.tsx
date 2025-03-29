
import React, { useEffect, useRef } from "react";
import { Briefcase, MapPin, Building, Users, CheckCircle } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

const Placement = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const [carouselApi, setCarouselApi] = React.useState<CarouselApi>();
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const scrollIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0");
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

  // Set up auto-scrolling for carousel
  useEffect(() => {
    if (carouselApi) {
      intervalRef.current = setInterval(() => {
        carouselApi.scrollNext();
      }, 2000); // 2 seconds interval
    }
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [carouselApi]);

  // Set up auto-scrolling for horizontal scroll area
  useEffect(() => {
    if (scrollAreaRef.current) {
      let scrollPosition = 0;
      const container = scrollAreaRef.current;
      const scrollStep = 240; // Width of each card
      
      scrollIntervalRef.current = setInterval(() => {
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        } else {
          scrollPosition += scrollStep;
        }
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }, 2000); // 2 seconds interval
    }
    
    return () => {
      if (scrollIntervalRef.current) clearInterval(scrollIntervalRef.current);
    };
  }, []);

  const locations = [
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "United Kingdom",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Prestigious establishments in London and other major UK cities."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Ireland",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Leading hospitality venues across Dublin and Irish tourist destinations."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "USA",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Premium hotel chains in New York, Miami, Los Angeles and other major cities."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Europe",
      image: "https://images.unsplash.com/photo-1519442249543-444325a69c92?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
      description: "International hotel groups across European capitals and resort destinations."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "UAE",
      image: "https://images.unsplash.com/photo-1543362995-788a2e5ba54b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "5-star hotel chains across Dubai, Abu Dhabi, and other UAE destinations."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Saudi Arabia",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Luxury accommodations in Riyadh, Jeddah, and prestigious holy cities."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Malaysia",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Leading hospitality venues across Kuala Lumpur and Malaysian tourist spots."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Pakistan",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Premier hotels and resorts in Islamabad, Lahore, Karachi, and other major cities."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Indonesia",
      image: "https://images.unsplash.com/photo-1543362995-788a2e5ba54b?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Luxury resorts and hotels in Bali, Jakarta, and other Indonesian destinations."
    },
    {
      icon: <MapPin size={24} className="text-ocean-500" />,
      region: "Mauritius",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      description: "Beach resorts and luxury hotels across this tropical island destination."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      position: "Front Office Manager, Marriott Hotels",
      image: "https://images.unsplash.com/photo-1620503374956-c942862f0372?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Dubai, UAE",
      quote: "The Kalibre's CTH program opened doors for me internationally. Their placement support helped me secure a position at one of Dubai's finest hotels."
    },
    {
      name: "Hassan Khan",
      position: "Executive Chef, Hilton Hotels",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "London, UK",
      quote: "The culinary training I received was world-class. The hands-on experience prepared me for the demands of international kitchens."
    },
    {
      name: "Ayesha Malik",
      position: "Events Coordinator, Hyatt Regency",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Riyadh, Saudi Arabia",
      quote: "From classroom to career, The Kalibre supported me at every step. Their industry connections helped me find my dream job."
    }
  ];

  const partners = [
    "Marriott International",
    "Hilton Worldwide",
    "IHG Hotels & Resorts",
    "Accor Group",
    "Rotana Hotels",
    "Jumeirah Group"
  ];

  const partnershipBenefits = [
    "Guaranteed internship opportunities",
    "Direct recruitment pathways",
    "Global career mobility"
  ];

  return (
    <section id="placement" className="py-24 bg-gradient-to-b from-ocean-50 to-white">
      <div className="section-container" ref={sectionRef}>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="reveal opacity-0">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-ocean-100 text-ocean-800 uppercase tracking-wide">
                Job Placement
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold leading-tight mb-3 tracking-tight text-ocean-500">
                Your Gateway to Global Career Opportunities
              </h2>
              <p className="text-ocean-600 mb-8">
                Beyond providing exceptional education, we take pride in connecting our graduates with 
                exciting job opportunities across UK, Ireland, USA, Middle East, South East Asia and Central Asia. 
                Our extensive network of industry partners ensures that your career journey begins on the right foot.
              </p>
            </div>

            <div className="reveal opacity-0" style={{ transitionDelay: "0.1s" }}>
              <div className="flex items-start mb-6 transform hover:translate-x-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Briefcase size={18} className="text-ocean-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-ocean-800 mb-1">Personalized Placement Support</h3>
                  <p className="text-ocean-600 text-sm">
                    Our dedicated placement team works with each graduate individually to match their skills, 
                    interests, and career goals with the perfect employment opportunity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start mb-6 transform hover:translate-x-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Building size={18} className="text-ocean-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-ocean-800 mb-1">Industry Partnerships</h3>
                  <p className="text-ocean-600 text-sm">
                    We've established strong relationships with leading hospitality brands worldwide 
                    by giving our graduates preferred access to exciting career opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-ocean-100 flex items-center justify-center mr-4 flex-shrink-0">
                  <Users size={18} className="text-ocean-500" />
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-ocean-800 mb-1">Ongoing Career Support</h3>
                  <p className="text-ocean-600 text-sm">
                    Our commitment to your success doesn't end with placement. We provide continued 
                    guidance and support as you progress through your hospitality career.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="reveal opacity-0" style={{ transitionDelay: "0.2s" }}>
            <AspectRatio ratio={4/3} className="rounded-xl overflow-hidden">
              <img 
                src="https://res.cloudinary.com/dzwdsxj7s/image/upload/v1743265281/kaliber/ohlvdfenqhhdwqoazjdr.jpg"
                alt="Global career opportunities" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </AspectRatio>
          </div>
        </div>

        <div className="reveal opacity-0 mb-20">
          <h3 className="text-2xl font-display font-semibold text-ocean-500 mb-8 text-center">Industry Placement Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {partners.map((partner, index) => (
              <div key={index} className="glassmorphism-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 p-4 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-ocean-500 text-3xl mb-2">🏨</div>
                  <h4 className="font-medium text-ocean-800 text-sm">{partner}</h4>
                </div>
              </div>
            ))}
          </div>
          
          <div className="glassmorphism-card rounded-xl p-6">
            <p className="text-ocean-700 mb-4 text-center">These partnerships allow us to provide:</p>
            <div className="grid md:grid-cols-3 gap-4">
              {partnershipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-ocean-50 p-3 rounded-lg">
                  <CheckCircle size={20} className="text-ocean-500 mr-2 flex-shrink-0" />
                  <span className="text-ocean-700 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal opacity-0 mb-20">
          <h3 className="text-2xl font-display font-semibold text-ocean-500 mb-8 text-center">Placement Destinations</h3>
          
          <ScrollArea className="h-[380px] w-full rounded-md">
            <div 
              className="flex space-x-4 pb-4"
              ref={scrollAreaRef}
            >
              {locations.map((location, index) => (
                <div 
                  key={index} 
                  className="glassmorphism-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105 flex-shrink-0"
                  style={{ width: "240px" }}
                >
                  <AspectRatio ratio={1/1} className="bg-ocean-50">
                    <img 
                      src={location.image} 
                      alt={location.region} 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 rounded-full bg-ocean-100 flex items-center justify-center mr-2 flex-shrink-0">
                        {location.icon}
                      </div>
                      <h4 className="font-display font-medium text-ocean-800">{location.region}</h4>
                    </div>
                    <p className="text-ocean-600 text-xs">{location.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>

        <div className="reveal opacity-0">
          <h3 className="text-2xl font-display font-semibold text-ocean-500 mb-8 text-center">Success Stories</h3>
          <Carousel 
            opts={{ loop: true, align: "start" }}
            className="mx-auto"
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="glassmorphism-card rounded-xl overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:scale-105 mx-2">
                    <div className="flex flex-col h-full">
                      <div className="p-6 flex-grow">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-display font-medium text-ocean-800">{testimonial.name}</h4>
                            <p className="text-ocean-600 text-xs">{testimonial.position}</p>
                          </div>
                        </div>
                        <p className="text-ocean-700 italic text-sm">"{testimonial.quote}"</p>
                      </div>
                      <div className="p-3 bg-ocean-50 flex items-center">
                        <MapPin size={14} className="text-ocean-500 mr-1" />
                        <span className="text-ocean-600 text-xs">{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
          
          <div className="text-center mt-12">
            <a 
              href="#apply" 
              className="inline-block bg-ocean-500 text-white px-6 py-3 rounded-md font-medium hover:bg-ocean-600 transition-all-200 transform hover:scale-105"
            >
              Start Your International Career
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Placement;
