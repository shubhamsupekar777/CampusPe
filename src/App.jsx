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
      
      <Navbar 
        onOpenAuth={() => setAuthModalOpen(true)} 
        onOpenDemo={() => setDemoModalOpen(true)} 
      />

     
      <main className="flex-1">
        <HeroSection 
          onOpenAuth={() => setAuthModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        <PartnersMarquee />

        <MatchedSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        <ResumeSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        <DiscoveredSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        <CampusDrivesSection 
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        <AppShowcaseSection 
          onOpenAuth={() => setAuthModalOpen(true)}
        />

        <QuestionsBanner 
          onOpenDemo={() => setDemoModalOpen(true)}
        />

        <PreFooterCta 
          onOpenAuth={() => setAuthModalOpen(true)}
          onOpenDemo={() => setDemoModalOpen(true)}
        />
      </main>

      <Footer />

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
