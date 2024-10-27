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
    <div className="overflow-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#25D366]/80">
        <Navbar />
        <Hero />
        {/* <GridSection /> */}
        <AfterGrid />
        <Pays />
        <Testimonials />
        <Started />
        <Footer />
    </div>
  );
}
