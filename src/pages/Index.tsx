
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Courses from "@/components/Courses";
import MOUSection from "@/components/MOUSection";
import Placement from "@/components/Placement";
import JoinKalibre from "@/components/JoinKalibre";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="py-4"></div>
        <About />
        <div className="py-2"></div>
        <Courses />
        <div className="py-2"></div>
        <Placement />
        <div className="py-2"></div>
        <JoinKalibre />
        <div className="py-2"></div>
        <Testimonials />
        <div className="py-2"></div>
        <MOUSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
