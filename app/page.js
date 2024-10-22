// "use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GridSection from "./components/GridSection";
import AfterGrid from "./components/AfterGrid";
import Pays from "./components/Pays";
import Started from "./components/Started";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";



export default function Home() {
  return (
    <div className="overflow-hidden">
        <Navbar />
        <Hero />
        <GridSection />
        <AfterGrid />
        <Pays />
        <Started />
        {/* <Testimonials /> */}
        <Footer />
    </div>
  );
}
