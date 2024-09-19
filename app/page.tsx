import AboutSection from "./Components/AboutSection";
// import Contact from "./Components/Contact";
import ContactSection from "./Components/ContactSection";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navbar from "./Components/Navbar";
import ProjectsSection from "./Components/ProjectsSection";
import ServicesSection from "./Components/ServicecSection";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection/>
      <Footer />
    </div>
  );
};

export default Home;
