import React, { useState, useRef } from "react";
import { AnimatePresence } from "motion/react";
import { TabType } from "./types";
import Navigation from "./components/Navigation";
import HomeView from "./components/HomeView";
import AboutView from "./components/AboutView";
import EducationView from "./components/EducationView";
import SkillsView from "./components/SkillsView";
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
  const contentRef = useRef<HTMLDivElement>(null);

  const renderActiveView = () => {
    switch (activeTab) {
      case "HOME":
        return <HomeView onNavigate={setActiveTab} onShowToast={setToastMessage} />;
      case "ABOUT":
        return <AboutView onShowToast={setToastMessage} />;
      case "EDUCATION":
        return <EducationView />;
      case "SKILLS":
        return <SkillsView />;
      case "CERTIFICATES":
        return <CertificatesView />;
      case "PROJECTS":
        return <ProjectsView />;
      case "CONTACT":
        return <ContactView onShowToast={setToastMessage} />;
      default:
        return <HomeView onNavigate={setActiveTab} onShowToast={setToastMessage} />;
    }
  };

  // If we are on the HOME tab, render the synchronized canvas backdrop and scrolling sections
  if (activeTab === "HOME") {
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
          {/* Section 1: Header + Hero Grid + Footer */}
          <div className="w-full min-h-screen flex flex-col justify-between relative">
            {/* Top Header & Navigation */}
            <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center z-20">
              <div className="flex items-center">
                <button
                  onClick={() => setActiveTab("HOME")}
                  className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase cursor-pointer focus:outline-none"
                >
                  B.S.
                </button>
              </div>
              <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            </header>

            {/* Hero Grid Content */}
            <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex-1 flex items-center justify-center relative z-10 py-6 lg:py-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full">
                <section className="lg:col-span-7 flex flex-col justify-center min-h-[360px] sm:min-h-[400px] w-full">
                  <HomeView onNavigate={setActiveTab} onShowToast={setToastMessage} />
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

          {/* Section 2: About Section (completely transparent background overlay) */}
          <div className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative">
            <div className="max-w-7xl mx-auto w-full">
              <AboutView onShowToast={setToastMessage} />
            </div>
          </div>

          {/* Section 3: Education Section (completely transparent background overlay) */}
          <div className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <EducationView />
            </div>
          </div>

          {/* Section 3.5: My Skills Section (completely transparent background overlay) */}
          <div className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <MySkillsView />
            </div>
          </div>

          {/* Section 3.7: Certificates Section (completely transparent background overlay) */}
          <div id="certificates-section-container" className="w-full min-h-screen bg-transparent text-white px-6 sm:px-12 py-16 lg:py-24 flex items-center justify-center relative pb-32">
            <div className="max-w-7xl mx-auto w-full">
              <CertificatesView />
            </div>
          </div>
        </div>

        {/* Interactive Toasts */}
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      </div>
    );
  }

  // Fallback layout for other tabs (keeps original styling and design 100% intact)
  return (
    <div
      className="min-h-screen w-full bg-black text-white flex flex-col justify-between relative overflow-x-hidden font-sans select-none"
      id="portfolio-root"
    >


      {/* Top Header & Navigation */}
      <header className="w-full max-w-7xl mx-auto px-6 sm:px-12 py-6 sm:py-8 flex justify-between items-center z-20">
        <div className="flex items-center">
          <button
            onClick={() => setActiveTab("HOME")}
            className="text-xs sm:text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors uppercase cursor-pointer focus:outline-none"
          >
            B.S.
          </button>
        </div>
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </header>

      {/* Main Grid Content */}
      <main className="w-full max-w-7xl mx-auto px-6 sm:px-12 flex-1 flex flex-col gap-16 lg:gap-24 relative z-10 py-6 lg:py-10">
        {activeTab === "EDUCATION" ? (
          <div className="w-full min-h-[460px]">
            <AnimatePresence mode="wait">
              <EducationView key="education-page" />
            </AnimatePresence>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16 w-full">
            {/* Left Column - Dynamic Content */}
            <section className="lg:col-span-7 flex flex-col justify-center min-h-[420px] sm:min-h-[460px] w-full">
              <AnimatePresence mode="wait">
                {renderActiveView()}
              </AnimatePresence>
            </section>

            {/* Right Column - Large Adaptable Headings */}
            <section className="lg:col-span-5 flex flex-col items-start lg:items-end justify-center w-full">
              <SideHeading activeTab={activeTab} />
            </section>
          </div>
        )}
      </main>

      {/* Footer Spacer */}
      <footer className="w-full flex justify-center pb-8 pt-4 z-10">
      </footer>

      {/* Interactive Toasts */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}

