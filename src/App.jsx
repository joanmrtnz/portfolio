import Header from "./components/Header";
import LogoPerformance from "./components/LogoPerformance";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--navy)]">
      <Header />
      <main className="px-6 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">
        <div className="relative md:min-h-[95vh]">
          <LogoPerformance />
          <Hero />
        </div>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
