import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ArrowRight, 
  GraduationCap, 
  Building2, 
  CheckCircle2, 
  ExternalLink,
  Award,
  Briefcase,
  Compass,
  Check
} from 'lucide-react';

export default function DiscoveredSection({ onOpenAuth }) {
  const cards = [
    {
      id: 1,
      role: 'Students & Job Seekers',
      audience: 'For Students',
      badgeColor: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      description:
        'Build your verified profile, showcase GitHub projects, predict cutoffs, and get matched to jobs and internships from 1,000+ sources.',
      features: [
        'Verified student credentials & portfolio',
        'AI job & internship match with ATS check',
        'Direct shortlisting with zero ghosting',
      ],
      icon: GraduationCap,
      iconBg: 'bg-blue-50 text-[#078BFA]',
      buttonText: 'Join as Student',
    },
    {
      id: 2,
      role: 'Colleges & Universities',
      audience: 'For Institutions',
      badgeColor: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      description:
        'Digitize your Training & Placement Cell operations, boost student placement statistics, and attract verified corporate recruiters.',
      features: [
        'Centralized TPO management dashboard',
        'NIRF & accreditation reporting assistance',
        'Batch tracking & placement analytics',
      ],
      icon: Building2,
      iconBg: 'bg-indigo-50 text-indigo-600',
      buttonText: 'Partner with Us',
    },
    {
      id: 3,
      role: 'Corporate Recruiters',
      audience: 'For Employers',
      badgeColor: 'bg-sky-50 text-sky-600 border-sky-200',
      description:
        'Access pre-vetted fresher talent across 500+ Indian campuses. Run AI-proctored coding drives with zero manual coordination.',
      features: [
        'Multi-college drive coordination in 1 click',
        'Automated skill & aptitude assessments',
        'Zero agency fees & fast interview scheduling',
      ],
      icon: Briefcase,
      iconBg: 'bg-sky-50 text-sky-600',
      buttonText: 'Hire Campus Talent',
    },
    {
      id: 4,
      role: 'Campus Ambassadors',
      audience: 'Student Leaders',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
      description:
        'Represent CampusPe at your university campus. Lead peer placement groups, earn monthly stipends, and build corporate leadership networks.',
      features: [
        'Performance stipends & exclusive merchandise',
        'Direct mentorship from industry leaders',
        'Certificate of excellence & LOR',
      ],
      icon: Award,
      iconBg: 'bg-amber-50 text-amber-600',
      buttonText: 'Apply as Ambassador',
    },
  ];

  return (
    <section id="colleges" className="relative isolate w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      
      <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 -z-10 h-80 w-80 rounded-full bg-sky-100/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          <div className="min-w-0 text-left lg:col-span-5">
            
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-sky-500 shadow-sm sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.65)]" />
              02 • Dual Ecosystem
            </div>

            <h2 className="font-heading text-[38px] font-extrabold leading-[1.12] tracking-tight text-neutral-700 sm:text-5xl lg:text-[36px] xl:text-[42px]">
              Get Discovered
              <br />
              <span className="text-[#078BFA]">
                by Students and Recruiters.
              </span>
            </h2>

            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-slate-500 sm:text-base">
              A single platform bridging the gap between student talent, higher-education institutions, and corporate hiring teams — creating higher placement success for every stakeholder.
            </p>

            <div className="mt-7 space-y-3">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  500+ Indian Colleges actively participating
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  Zero placement registration fee for verified students
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)]">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <Check className="h-4 w-4 stroke-[2.5]" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-800">
                  End-to-end recruitment drive coordination
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenAuth}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#078BFA] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:px-7 sm:text-sm cursor-pointer"
              >
                Join CampusPe Network
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          <div className="relative mx-auto w-full max-w-[650px] min-w-0 lg:col-span-7 lg:justify-self-end">
            
            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/40 via-sky-100/20 to-purple-200/30 blur-2xl" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.id}
                    className="group rounded-[20px] border border-slate-200/90 bg-white p-5 shadow-[0_4px_16px_rgba(15,23,42,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg text-left flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${card.iconBg} shadow-xs transition-transform group-hover:scale-105`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold border ${card.badgeColor}`}>
                          {card.audience}
                        </span>
                      </div>

                      <h3 className="font-heading text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {card.role}
                      </h3>

                      <p className="mt-2 text-xs leading-relaxed text-slate-500">
                        {card.description}
                      </p>

                      <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-3 text-[11px] text-slate-600">
                        {card.features.map((f, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="line-clamp-1">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 pt-3">
                      <button
                        type="button"
                        onClick={onOpenAuth}
                        className="inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-slate-50 hover:bg-[#078BFA] text-slate-700 hover:text-white border border-slate-200 hover:border-transparent py-2.5 text-xs font-bold transition-all cursor-pointer"
                      >
                        <span>{card.buttonText}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
