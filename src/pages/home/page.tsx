import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingSteps from "./components/BookingSteps";
import Gallery from "./components/Gallery";
import Team from "./components/Team";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import MobileBar from "./components/MobileBar";

export default function Home() {
  return (
    <div className="bg-coal text-bone">
      <Navbar />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Services />
        <BookingSteps />
        <Gallery />
        <Team />
        <WhyUs />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      {/* Sabit mobil alt bar için boşluk */}
      <div className="h-16 md:hidden" aria-hidden="true"></div>
      <MobileBar />
    </div>
  );
}