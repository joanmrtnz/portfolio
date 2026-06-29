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
    <div className="relative min-h-screen overflow-x-hidden bg-[var(--navy)]">
      <LogoPerformance />
      <Header />
      <main className="relative z-10 px-6 sm:px-12 md:px-24 lg:px-32 xl:px-[150px]">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
