import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PartnersMarquee from './components/PartnersMarquee';
import MatchedSection from './components/MatchedSection';
import ResumeSection from './components/ResumeSection';
import DiscoveredSection from './components/DiscoveredSection';
import CampusDrivesSection from './components/CampusDrivesSection';
import AppShowcaseSection from './components/AppShowcaseSection';
import QuestionsBanner from './components/QuestionsBanner';
import PreFooterCta from './components/PreFooterCta';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import DemoModal from './components/DemoModal';

export default function App() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar 
        onOpenAuth={() => setAuthModalOpen(true)} 
        onOpenDemo={() => setDemoModalOpen(true)} 
      />

      {/* Main Page Flow Matching Figma */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <HeroSection 
          onOpenAuth={() => setAuthModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* Section 1.5: Partners / Govt / Ecosystem logos */}
        <PartnersMarquee />

        {/* Section 2: Stop searching. Start getting matched. */}
        <MatchedSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        {/* Section 3: Upload your resume. Find jobs that fit. */}
        <ResumeSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        {/* Section 4: Get Discovered by Students and Recruiters. */}
        <DiscoveredSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        {/* Section 5: Stop running campus drives. Start hiring the right people. */}
        <CampusDrivesSection 
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* Section 6: Checkout Our App for a New Look & Download App */}
        <AppShowcaseSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        {/* Section 7: Still have questions? */}
        <QuestionsBanner 
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        {/* Section 8: Ready for what's next? */}
        <PreFooterCta 
          onOpenAuth={() => setAuthModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <AuthModal 
        isOpen={authModalOpen} 
        onClose={() => setAuthModalOpen(false)} 
      />
      <DemoModal 
        isOpen={demoModalOpen} 
        onClose={() => setDemoModalOpen(false)} 
      />
    </div>
  );
}
