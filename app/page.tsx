import BrandSlider from "@/components/BrandSlider";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import Problem from "@/components/Problem";
import Projects from "@/components/Projects";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Projects />
      <HowItWorks />
      <WhyChoose />
      <BrandSlider />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
