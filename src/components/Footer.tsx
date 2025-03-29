
import React from "react";
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-kalibre-900 text-white pt-16 pb-10">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1">
            <div className="mb-6">
              <a href="#" className="text-2xl font-display font-bold">
                <span className="text-kalibre-300">The</span> Kalibre
              </a>
            </div>
            <p className="text-kalibre-300 text-sm mb-6">
              UK-based educational provider accredited by the prestigious CTH, offering internationally 
              recognized hospitality courses with job placement opportunities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-kalibre-400 hover:text-white transition-all-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-kalibre-400 hover:text-white transition-all-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-kalibre-400 hover:text-white transition-all-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-kalibre-400 hover:text-white transition-all-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#courses" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Our Courses
                </a>
              </li>
              <li>
                <a href="#placement" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Job Placement
                </a>
              </li>
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  CTH Accreditation
                </a>
              </li>
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Student Resources
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Diploma in Hospitality Management
                </a>
              </li>
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Certificate in Culinary Arts
                </a>
              </li>
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Advanced Diploma in Hospitality & Tourism
                </a>
              </li>
              <li>
                <a href="#" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                  Short Courses & Workshops
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-wrap -mx-3">
              <div className="w-full px-3 mb-6">
                <div className="flex items-center">
                  <Mail size={18} className="text-kalibre-400 mr-3 flex-shrink-0" />
                  <a href="mailto:info@thekalibre.com" className="text-kalibre-300 hover:text-white transition-all-200 text-sm">
                    info@thekalibre.com
                  </a>
                </div>
              </div>
              
              <div className="w-full sm:w-1/2 px-3 mb-4">
                <h4 className="text-white text-sm font-medium mb-2">UK Office</h4>
                <div className="flex items-start">
                  <MapPin size={18} className="text-kalibre-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-kalibre-300 text-xs">
                    9 Isabel Terrace, Pragel Street,<br />
                    London, England, E13 9DN
                  </span>
                </div>
                <div className="flex items-center mt-1 ml-5">
                  <a href="tel:+447471737541" className="text-kalibre-300 hover:text-white transition-all-200 text-xs">
                    +44 747 173 7541
                  </a>
                </div>
              </div>
              
              <div className="w-full sm:w-1/2 px-3 mb-4">
                <h4 className="text-white text-sm font-medium mb-2">USA Office</h4>
                <div className="flex items-start">
                  <MapPin size={18} className="text-kalibre-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-kalibre-300 text-xs">
                    203 Courthouse Drive,<br />
                    Morrisville, NC, 27560
                  </span>
                </div>
                <div className="flex items-center mt-1 ml-5">
                  <a href="tel:+19199192882" className="text-kalibre-300 hover:text-white transition-all-200 text-xs">
                    +1 919 919 2882
                  </a>
                </div>
              </div>
              
              <div className="w-full sm:w-1/2 px-3 mb-4">
                <h4 className="text-white text-sm font-medium mb-2">Dubai Office</h4>
                <div className="flex items-start">
                  <MapPin size={18} className="text-kalibre-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-kalibre-300 text-xs">
                    23rd St - Al Barsha,<br />
                    Dubai - United Arab Emirates
                  </span>
                </div>
                <div className="flex items-center mt-1 ml-5">
                  <a href="tel:+971564178107" className="text-kalibre-300 hover:text-white transition-all-200 text-xs">
                    +971 564 178 107
                  </a>
                </div>
              </div>
              
              <div className="w-full sm:w-1/2 px-3 mb-4">
                <h4 className="text-white text-sm font-medium mb-2">Pakistan Office</h4>
                <div className="flex items-start">
                  <MapPin size={18} className="text-kalibre-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-kalibre-300 text-xs">
                    Gold Crest Mall, Sector DD, Phase 4<br />
                    6th Floor, DHA, Lahore
                  </span>
                </div>
                <div className="flex items-center mt-1 ml-5">
                  <a href="tel:+923100300005" className="text-kalibre-300 hover:text-white transition-all-200 text-xs">
                    +92 310 030 0005
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-kalibre-800 text-center">
          <p className="text-kalibre-400 text-sm">
            © 2022 The Kalibre: operating under AAASK LTD, UK | Company Number: 14107209 All rights reserved. CTH Accredited Education Provider.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
