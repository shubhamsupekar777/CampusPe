import React, { useState } from 'react';
import { 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  FileCheck, 
  ShieldCheck, 
  SlidersHorizontal,
  Bot,
  Video,
  Check
} from 'lucide-react';

export default function CampusDrivesSection({ onOpenDemo }) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Post Drive & Set Eligibility Filters',
      badge: 'Zero Manual Sifting',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      desc: 'Set strict minimum CGPA, accepted branches, maximum active backlogs, and target passing year in 60 seconds.',
      icon: SlidersHorizontal
    },
    {
      num: '02',
      title: 'AI Screening & Anti-Cheat Proctoring',
      badge: 'Automated Tests',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      desc: 'Run multi-language coding challenges, DSA problems, and situational aptitude with AI webcam proctoring.',
      icon: Bot
    },
    {
      num: '03',
      title: 'One-Click Shortlisting & Video Slots',
      badge: 'Calendar Sync',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      desc: 'Auto-generate interview slots and sync Google Meet or Zoom invites directly to shortlisted students.',
      icon: Video
    },
    {
      num: '04',
      title: 'Instant Offer Letters & Joining Analytics',
      badge: 'Live Analytics',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      desc: 'Deliver digital offer letters and monitor joining probability with our predictive placement model.',
      icon: FileCheck
    }
  ];

  return (
    <section id="recruiters" className="relative isolate w-full overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/20 py-14 sm:py-16 lg:py-20">
      
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-16 -z-10 h-96 w-96 rounded-full bg-purple-100/40 blur-3xl" />

      {/* Main container: 1440px frame with 100px desktop padding matching MatchedSection */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT: Intro copy */}
          <div className="min-w-0 text-left lg:col-span-5">
            
            {/* Section label */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-sky-500 shadow-sm sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.65)]" />
              03 • Hiring Automation
            </div>

            {/* Main heading */}
            <h2 className="font-heading text-[38px] font-extrabold leading-[1.12] tracking-tight text-neutral-700 sm:text-5xl lg:text-[36px] xl:text-[42px]">
              Stop running
              <br />
              campus drives.
              <br />
              <span className="text-[#078BFA]">
                Start hiring the right people.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-slate-500 sm:text-base">
              Say goodbye to messy spreadsheets, physical campus visits across multiple cities, and chaotic manual shortlists. CampusPe centralizes hiring across 500+ colleges with high predictability.
            </p>

            {/* Checklist with distinct status badges matching Figma */}
            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Save 75% on campus hiring cycle time
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Access verified talent from Tier-1, 2, and 3 institutes
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Standardized AI assessments evaluated in real time
                </div>
              </div>
            </div>

            {/* CTA button */}
            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#078BFA] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:px-7 sm:text-sm cursor-pointer"
              >
                Book Recruiter Demo
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* RIGHT: 4 Interactive Workflow Cards (matching Figma design) */}
          <div className="relative mx-auto w-full max-w-[650px] min-w-0 lg:col-span-7 lg:justify-self-end">
            
            {/* Ambient card glow */}
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-sky-100/20 to-purple-200/30 blur-2xl" />

            <div className="space-y-3.5">
              {steps.map((step, idx) => {
                const Icon = step.icon;
                const isSelected = activeStep === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`rounded-[18px] border p-4 sm:p-5 transition-all duration-300 cursor-pointer text-left ${
                      isSelected
                        ? 'border-[#078BFA] bg-white ring-4 ring-blue-500/10 shadow-[0_12px_30px_rgba(7,139,250,0.12)] scale-[1.01]'
                        : 'border-slate-200/90 bg-white/95 hover:border-blue-200 hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold text-xs transition-colors ${
                        isSelected 
                          ? 'bg-[#078BFA] text-white shadow-sm shadow-blue-500/20' 
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-black text-[#078BFA] uppercase tracking-wider">
                              STEP {step.num}
                            </span>
                            <span className="text-slate-300">•</span>
                            <h4 className="font-heading text-[14px] sm:text-base font-bold text-slate-900">
                              {step.title}
                            </h4>
                          </div>
                          <span className={`self-start sm:self-auto text-[10px] font-semibold px-2.5 py-0.5 rounded-full border ${step.badgeColor}`}>
                            {step.badge}
                          </span>
                        </div>

                        <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
