import React, { useState } from 'react';
import { 
  Smartphone, 
  Sparkles, 
  Download, 
  Star, 
  CheckCircle2, 
  ArrowRight, 
  Compass, 
  Briefcase, 
  GraduationCap, 
  Bell, 
  User, 
  Search,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function AppShowcaseSection({ onOpenAuth }) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(2); // Center screen (index 2) by default

  const screens = [
    {
      id: 0,
      title: 'College Finder',
      category: 'Discovery',
      color: 'from-blue-500 to-indigo-600',
      header: 'Explore 1,200+ Colleges',
      subtitle: 'Compare rankings & cutoffs',
      content: (
        <div className="space-y-2.5 p-3 text-left">
          <div className="p-2.5 bg-blue-50/80 rounded-xl border border-blue-100 flex items-center gap-2">
            <Search className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[10px] text-slate-500">Search IIT, NIT, BITS...</span>
          </div>
          <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">IIT Bombay</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 bg-emerald-50 text-emerald-600 rounded">NIRF #3</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5">CSE Cutoff: AIR 68 • Avg: ₹24 LPA</div>
          </div>
          <div className="p-2.5 bg-white rounded-xl shadow-xs border border-slate-100">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">BITS Pilani</span>
              <span className="text-[9px] font-bold px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">Top Private</span>
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5">BITSAT Score: 325 • Avg: ₹19 LPA</div>
          </div>
        </div>
      )
    },
    {
      id: 1,
      title: 'Cutoff Predictor',
      category: 'Admissions',
      color: 'from-sky-500 to-blue-600',
      header: 'JEE & GATE Predictor',
      subtitle: 'Accurate to 97.4%',
      content: (
        <div className="space-y-2.5 p-3 text-left">
          <div className="p-3 bg-gradient-to-r from-blue-600 to-sky-600 text-white rounded-xl">
            <div className="text-[10px] font-semibold opacity-90">Target Rank Input</div>
            <div className="text-sm font-extrabold">AIR 2,450 (JEE Adv)</div>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center justify-between text-[10px]">
              <span className="font-bold text-emerald-800">IIT Roorkee - ECE</span>
              <span className="font-bold text-emerald-600">High Chance</span>
            </div>
            <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-between text-[10px]">
              <span className="font-bold text-blue-800">IIT BHU - CSE</span>
              <span className="font-bold text-blue-600">Moderate</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'AI Job Feed',
      category: 'Featured',
      color: 'from-blue-600 to-indigo-700',
      header: 'Opportunities For You',
      subtitle: '98% Resume Compatibility',
      content: (
        <div className="space-y-2 p-3 text-left">
          <div className="p-2.5 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-200 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">Frontend SDE</span>
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 bg-emerald-500 text-white rounded">98% Match</span>
            </div>
            <div className="text-[10px] text-slate-600 font-semibold mt-1">Microsoft • ₹18 LPA</div>
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[9px] text-slate-400">Bengaluru • Freshers</span>
              <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">Apply ⚡</span>
            </div>
          </div>
          <div className="p-2.5 bg-white border border-slate-100 rounded-xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-900">AI / ML Intern</span>
              <span className="text-[9px] font-extrabold px-1.5 py-0.5 bg-blue-50 text-blue-600 rounded">94% Match</span>
            </div>
            <div className="text-[10px] text-slate-600 font-semibold mt-0.5">Zomato • ₹45k/mo</div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: 'Live Tracking',
      category: 'Applications',
      color: 'from-indigo-600 to-purple-600',
      header: 'Application Tracker',
      subtitle: 'Real-time status updates',
      content: (
        <div className="space-y-2 p-3 text-left">
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
              <span>Google Cloud</span>
              <span className="text-[9px] font-bold text-blue-600">Round 2</span>
            </div>
            <div className="text-[9px] text-slate-500 mt-1">Technical Coding Interview • Tomorrow 11 AM</div>
          </div>
          <div className="p-2.5 bg-slate-50 border border-slate-100 rounded-xl">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-900">
              <span>Atlassian</span>
              <span className="text-[9px] font-bold text-emerald-600">Shortlisted</span>
            </div>
            <div className="text-[9px] text-slate-500 mt-1">Resume Screening Cleared</div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: 'ATS Resume Score',
      category: 'Profile',
      color: 'from-teal-500 to-emerald-600',
      header: 'AI Profile Analysis',
      subtitle: 'Score: 94 / 100',
      content: (
        <div className="space-y-2 p-3 text-left">
          <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-center">
            <span className="text-[10px] uppercase font-bold text-emerald-700">Profile Strength</span>
            <div className="text-xl font-black text-emerald-700">Top 3%</div>
          </div>
          <div className="space-y-1 text-[10px] text-slate-600">
            <div className="flex justify-between">
              <span>Verified Projects</span>
              <strong className="text-slate-800">4 / 4</strong>
            </div>
            <div className="flex justify-between">
              <span>GitHub Activity</span>
              <strong className="text-slate-800">High</strong>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="app" className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header matching Figma */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold tracking-wide uppercase mb-4">
          <Smartphone className="w-3.5 h-3.5 text-blue-600" />
          <span>Mobile Experience</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight font-heading">
          Checkout Our App for a New Look.
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
          Access verified campus placements, AI cutoff insights, and 1-click applications right from your fingertips.
        </p>

        {/* 5 Mobile Screens Carousel / Perspective Showcase */}
        <div className="mt-14 relative flex items-center justify-center gap-3 sm:gap-6 overflow-x-auto py-8 px-4 no-scrollbar">
          
          {screens.map((screen, idx) => {
            const isCenter = idx === activeScreenIndex;
            const distance = Math.abs(idx - activeScreenIndex);

            return (
              <div
                key={screen.id}
                onClick={() => setActiveScreenIndex(idx)}
                className={`transition-all duration-300 cursor-pointer shrink-0 select-none ${
                  isCenter 
                    ? 'scale-105 z-20 opacity-100 shadow-2xl shadow-blue-500/25 ring-4 ring-blue-500/20 rounded-[38px]' 
                    : distance === 1
                    ? 'scale-90 z-10 opacity-70 hover:opacity-90 rounded-[38px]'
                    : 'scale-75 z-0 opacity-40 hover:opacity-60 hidden md:block rounded-[38px]'
                }`}
              >
                {/* iPhone Mockup Frame */}
                <div className="w-[240px] sm:w-[260px] h-[480px] sm:h-[510px] bg-slate-900 rounded-[38px] p-2.5 shadow-xl border-4 border-slate-800 flex flex-col justify-between overflow-hidden relative">
                  
                  {/* Speaker Notch / Dynamic Island */}
                  <div className="w-20 h-4 bg-slate-950 rounded-full mx-auto mb-2 shrink-0 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div>
                  </div>

                  {/* Screen Inside */}
                  <div className="w-full h-full bg-white rounded-[28px] overflow-hidden flex flex-col justify-between border border-slate-100">
                    
                    {/* App Topbar */}
                    <div className={`p-3.5 bg-gradient-to-r ${screen.color} text-white text-left`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold tracking-wider uppercase opacity-80">{screen.category}</span>
                        <Bell className="w-3.5 h-3.5 opacity-90" />
                      </div>
                      <h5 className="text-xs font-bold mt-1 font-heading">{screen.header}</h5>
                      <p className="text-[9px] opacity-80">{screen.subtitle}</p>
                    </div>

                    {/* App Body Content */}
                    <div className="flex-1 overflow-y-auto no-scrollbar bg-slate-50/50">
                      {screen.content}
                    </div>

                    {/* App Bottom Navigation */}
                    <div className="h-11 bg-white border-t border-slate-100 flex items-center justify-around px-2 text-slate-400">
                      <Compass className="w-4 h-4 text-blue-600" />
                      <Briefcase className="w-4 h-4" />
                      <GraduationCap className="w-4 h-4" />
                      <User className="w-4 h-4" />
                    </div>

                  </div>

                </div>

                <div className="mt-3 text-center">
                  <span className={`text-xs font-bold ${isCenter ? 'text-blue-600' : 'text-slate-500'}`}>
                    {screen.title}
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Carousel Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {screens.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setActiveScreenIndex(dotIdx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                dotIdx === activeScreenIndex 
                  ? 'w-8 bg-blue-600' 
                  : 'w-2.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to screen ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* "Download App Here" Section matching Figma bottom banner */}
        <div className="mt-20 max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center text-left">
            
            <div className="md:col-span-7">
              <span className="text-xs font-bold text-blue-400 uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                <span>Now Available on iOS & Android</span>
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight mt-3 font-heading">
                Download App Here.
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Join over 150,000+ active students receiving daily placement alerts, cutoff updates, and AI interview prep on their phones.
              </p>

              {/* App Store Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                
                {/* Google Play Store Badge */}
                <a 
                  href="#download"
                  onClick={(e) => { e.preventDefault(); onOpenAuth(); }}
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center gap-3 transition-all hover:scale-105 shadow-md cursor-pointer"
                >
                  <span className="text-2xl">▶</span>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-300 leading-none">GET IT ON</span>
                    <span className="block text-sm font-extrabold text-white mt-1 leading-none font-heading">Google Play</span>
                  </div>
                </a>

                {/* Apple App Store Badge */}
                <a 
                  href="#download"
                  onClick={(e) => { e.preventDefault(); onOpenAuth(); }}
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md flex items-center gap-3 transition-all hover:scale-105 shadow-md cursor-pointer"
                >
                  <span className="text-2xl">🍏</span>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-300 leading-none">Download on the</span>
                    <span className="block text-sm font-extrabold text-white mt-1 leading-none font-heading">App Store</span>
                  </div>
                </a>

              </div>

              <div className="mt-6 flex items-center gap-4 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span>4.8 / 5 Rating from 12,000+ Students</span>
              </div>
            </div>

            {/* Isometric Mobile Graphics matching Figma */}
            <div className="md:col-span-5 flex items-center justify-center relative">
              <div className="relative w-64 h-72 flex items-center justify-center">
                
                {/* Phone 1 Back */}
                <div className="absolute w-44 h-64 bg-slate-700/80 rounded-3xl -rotate-12 translate-x-6 border-2 border-slate-600/50 shadow-xl overflow-hidden p-2 flex flex-col justify-between">
                  <div className="w-10 h-2 bg-slate-900 rounded-full mx-auto"></div>
                  <div className="h-44 bg-gradient-to-br from-blue-700 to-indigo-800 rounded-2xl p-2 text-[9px] text-white">
                    <div className="font-bold">Campus Drive Live</div>
                    <div className="mt-2 text-[8px] opacity-80">Google SDE-1 Hiring</div>
                  </div>
                </div>

                {/* Phone 2 Front */}
                <div className="absolute w-48 h-68 bg-slate-900 rounded-3xl rotate-6 -translate-x-4 border-2 border-slate-500 shadow-2xl overflow-hidden p-2 flex flex-col justify-between">
                  <div className="w-12 h-2.5 bg-slate-950 rounded-full mx-auto"></div>
                  <div className="h-52 bg-white rounded-2xl p-2.5 text-left text-slate-800">
                    <span className="text-[10px] font-bold text-blue-600">Top Match</span>
                    <div className="text-xs font-black mt-1">SDE Fullstack</div>
                    <div className="text-[9px] text-slate-500">₹14 LPA • 98% Match</div>
                    <div className="mt-3 p-1.5 bg-emerald-50 text-emerald-700 rounded text-[9px] font-bold">
                      ✓ Direct Interview Scheduled
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
