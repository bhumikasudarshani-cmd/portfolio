import React, { useState, useEffect } from "react";
import { TabType } from "./types";
import Navigation from "./components/Navigation";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import EducationView from "./components/EducationView";
import CertificatesView from "./components/CertificatesView";
import ProjectsView from "./components/ProjectsView";
import ContactView from "./components/ContactView";
import SideHeading from "./components/SideHeading";
import Toast from "./components/Toast";
import ScrollCanvas from "./components/ScrollCanvas";
import MySkillsView from "./components/MySkillsView";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("HOME");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Track scroll position to update activeTab in navigation
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300; // Offset threshold
      const sections = [
        { id: "home", tab: "HOME" },
        { id: "about", tab: "ABOUT" },
        { id: "education", tab: "EDUCATION" },
        { id: "skills", tab: "SKILLS" },
        { id: "certificates", tab: "CERTIFICATES" },
        { id: "projects", tab: "PROJECTS" },
        { id: "contact", tab: "CONTACT" }
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section.tab as TabType);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="min-h-screen w-full text-white relative overflow-x-hidden font-sans select-none"
      id="portfolio-root"
    >
      {/* Fixed background black color and canvas sequence */}
      <div className="fixed inset-0 bg-black -z-20" />
      <ScrollCanvas />

      {/* Foreground website sections (scroll natively over the fixed canvas) */}
      <div className="relative z-10 w-full flex flex-col">
        {/* Animation Container wrapping all transparent scroll-animated sections */}
        <div className="w-full relative overflow-hidden" id="animation-container">
          {/* Section 1: Header + Hero Grid + Footer */}
          <div id="home" className="w-full min-h-screen flex flex-col justify-between relative">
            {/* Top Header & Navigation */}
            <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center z-20">
              <div className="flex items-center">
                <a
                  href="#home"
                  onClick={() => setActiveTab("HOME")}
                  className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase cursor-pointer focus:outline-none"
                >
                  B.S.
                </a>
              </div>
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </header>

            {/* Hero Grid Content */}
            <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex-1 flex items-center justify-center relative z-10 py-6 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full">
                <section className="lg:col-span-7 flex flex-col justify-center min-h-[360px] sm:min-h-[400px] w-full">
                  <HomeView onNavigate={(tab) => {
                    setActiveTab(tab);
                    const el = document.getElementById(tab.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }} onShowToast={setToastMessage} />
                </section>
                <section className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
                  <SideHeading activeTab="HOME" />
                </section>
              </div>
            </main>

            {/* Footer Spacer */}
            <footer className="w-full flex justify-center pb-8 pt-4 z-10">
            </footer>
          </div>

          {/* Section 2: About Section */}
          <div id="about" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto w-full">
              <AboutView onShowToast={setToastMessage} />
            </div>
          </div>

          {/* Section 3: Education Section */}
          <div id="education" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <EducationView />
            </div>
          </div>

          {/* Section 3.5: My Skills Section */}
          <div id="skills" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <MySkillsView />
            </div>
          </div>
        </div>

        {/* Combined Certificates, Projects & Contact Parent Container with Continuous Background */}
        <main className="w-full red-glow-bg relative z-20 flex flex-col">
          {/* Section 3.7: Certificates Section */}
          <div id="certificates" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <CertificatesView />
            </div>
          </div>

          {/* Section 4: Projects Section */}
          <div id="projects" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto w-full">
              <ProjectsView />
            </div>
          </div>

          {/* Section 5: Contact Section */}
          <div id="contact" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto w-full flex justify-center">
              <ContactView onShowToast={setToastMessage} />
            </div>
          </div>
        </main>
      </div>

      {/* Interactive Toasts */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
