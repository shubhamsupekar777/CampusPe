
import React from 'react';
import {
  ArrowRight,
  MapPin,
  Zap,
  ShieldCheck,
  TrendingUp,
  BookOpen,
  Monitor,
  Briefcase,
} from 'lucide-react';

// Company and institution logos
function CompanyLogo({ company, logo }) {
  const logos = {
    google: 'https://cdn.simpleicons.org/google',
    notion: 'https://cdn.simpleicons.org/notion',
  };

  if (logo === 'iimb') {
    return (
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
        <div className="flex h-8 w-8 flex-col items-center justify-center rounded-full border-2 border-red-600 text-red-600">
          <span className="text-[7px] font-black leading-none">
            IIM
          </span>
          <span className="mt-0.5 text-[8px] font-black leading-none">
            B
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
      <img
        src={logos[logo]}
        alt={`${company} logo`}
        className="h-6 w-6 object-contain"
        loading="lazy"
      />
    </div>
  );
}

export default function MatchedSection({ onOpenAuth }) {
  const opportunities = [
    {
      id: 1,
      role: 'MBA',
      company: 'IIM Bangalore',
      location: 'Bengaluru',
      ctc: '₹3L+',
      category: 'Top College',
      description:
        "India's premier management institute with global exposure...",
      logo: 'iimb',
      icon: BookOpen,
      buttonText: 'View Details',
    },
    {
      id: 2,
      role: 'Product Intern',
      company: 'Google',
      location: 'Bengaluru',
      workMode: 'Hybrid',
      ctc: '₹35K/mo',
      category: 'Internship',
      description:
        'Work on real products, learn from top engineers and build...',
      logo: 'google',
      icon: Monitor,
      buttonText: 'Apply Now',
    },
    {
      id: 3,
      role: 'Marketing Gig',
      company: 'Notion',
      location: 'Remote',
      workMode: 'Freelance',
      ctc: '₹10K - ₹25K',
      category: 'Freelance',
      description:
        'Create content and help with social media campaigns for...',
      logo: 'notion',
      icon: Briefcase,
      buttonText: 'View Details',
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Set your preferences',
      description:
        "Tell us what you're looking for, from colleges and courses to jobs, internships and gigs.",
      badge: 'Smart Profile',
      icon: Zap,
      iconColor: 'text-blue-600',
      iconBg: 'bg-blue-50',
      badgeColor: 'bg-indigo-50 text-indigo-600',
    },
    {
      number: '02',
      title: 'Discover relevant opportunities',
      description:
        'Explore colleges and career opportunities matched to your profile, interests and goals.',
      badge: 'AI Ranked',
      icon: ShieldCheck,
      iconColor: 'text-indigo-600',
      iconBg: 'bg-slate-100',
      badgeColor: 'bg-slate-100 text-slate-600',
    },
    {
      number: '03',
      title: 'Get notified when something fits',
      description:
        'Get notified when a relevant college or new opportunity is found, so you can act early.',
      badge: 'Instant Alerts',
      icon: TrendingUp,
      iconColor: 'text-emerald-600',
      iconBg: 'bg-emerald-50',
      badgeColor: 'bg-emerald-50 text-emerald-700',
    },
  ];

  const categoryStyles = {
    'Top College': 'bg-violet-50 text-violet-600',
    Internship: 'bg-sky-50 text-sky-600',
    Freelance: 'bg-emerald-50 text-emerald-600',
  };

  const filters = [
    'All',
    'Colleges',
    'Jobs',
    'Internships',
    'Freelance',
    'Part-time',
  ];

  const handleOpportunityClick = () => {
    onOpenAuth?.();
  };

  return (
    <section
      id="students"
      className="relative isolate w-full overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/30 py-12 sm:py-16 lg:min-h-[900px]"
    >
      {/* Soft background glows */}
      <div className="pointer-events-none absolute -left-40 top-24 -z-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-16 -z-10 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />

      {/* Main container: 1440px frame with 100px desktop padding */}
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">

          <div className="min-w-0 text-left lg:col-span-5">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-3.5 py-2 text-[11px] font-semibold uppercase tracking-wide text-sky-500 shadow-sm sm:text-xs">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.65)]" />
              01 • Opportunity Discovery
            </div>

            <h2 className="font-heading text-[38px] font-extrabold leading-[1.12] tracking-tight text-neutral-700 sm:text-5xl lg:text-[36px] xl:text-[42px]">
              Stop searching.
              <br />
              <span className="text-[#078BFA]">
                Start getting matched.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-[440px] text-[15px] leading-[1.45] text-slate-500 sm:text-base">
              Tell CampusPe your skills, preferences and goals.
              We continuously monitor company career pages and
              job sources, find opportunities that match you,
              and notify you when they appear.
            </p>

            {/* Three benefit cards */}
            <div className="mt-7 space-y-3">
              {steps.map((step) => {
                const StepIcon = step.icon;

                return (
                  <article
                    key={step.number}
                    className="group rounded-xl border border-slate-200/80 bg-white/90 p-3.5 shadow-[0_2px_8px_rgba(15,23,42,0.025)] transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-4"
                  >
                    <div className="flex items-start gap-3">

                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${step.iconBg} ${step.iconColor}`}
                      >
                        <span className="text-[10px] font-bold">
                          {step.number}
                        </span>
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-start justify-between gap-x-2 gap-y-1">
                          <h3 className="font-heading text-[13px] font-bold leading-5 text-slate-900 sm:text-sm">
                            {step.title}
                          </h3>

                          <span
                            className={`shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold leading-none sm:text-[10px] ${step.badgeColor}`}
                          >
                            {step.badge}
                          </span>
                        </div>

                        <p className="mt-1.5 max-w-[350px] text-[11px] leading-[1.4] text-slate-500 sm:text-xs">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-7">
              <button
                type="button"
                onClick={handleOpportunityClick}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#078BFA] px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:px-7 sm:text-sm"
              >
                Explore opportunities
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[650px] min-w-0 lg:col-span-7 lg:justify-self-end">

            <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-200/50 via-sky-100/30 to-purple-200/40 blur-2xl" />

            <div className="rounded-[22px] border border-slate-200/90 bg-white/95 p-4 shadow-[0_18px_45px_rgba(15,23,42,0.12)] sm:p-5 lg:p-5">

              <div className="flex flex-col gap-3 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#078BFA] text-white shadow-sm shadow-blue-500/20">
                    <Zap className="h-5 w-5 fill-current" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold tracking-tight text-slate-900 sm:text-lg">
                      CampusPe Opportunity Feed
                    </h3>

                    <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                      Colleges &amp; opportunities matched to you
                    </p>
                  </div>
                </div>

                <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-600 sm:text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  12 new matches today
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {filters.map((filter, index) => (
                  <span
                    key={filter}
                    className={`rounded-full px-3 py-1.5 text-[10px] font-semibold transition-colors sm:text-[11px] ${
                      index === 0
                        ? 'bg-[#078BFA] text-white'
                        : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {filter}
                  </span>
                ))}
              </div>

              <div className="mt-4 space-y-3">
                {opportunities.map((item) => (
                  <article
                    key={item.id}
                    className="group rounded-[15px] border border-slate-200/80 bg-white p-3 transition-all duration-300 hover:border-blue-200 hover:shadow-md sm:p-3.5"
                  >
                    <div className="flex items-start gap-3">

                      <CompanyLogo
                        company={item.company}
                        logo={item.logo}
                      />

                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          <h4 className="font-heading text-[13px] font-bold leading-5 text-slate-900 transition-colors group-hover:text-blue-600 sm:text-sm">
                            {item.company}
                          </h4>

                          <span
                            className={`rounded-md px-2 py-0.5 text-[9px] font-semibold sm:text-[10px] ${categoryStyles[item.category]}`}
                          >
                            {item.category}
                          </span>
                        </div>

                        {/* Role */}
                        <p className="mt-0.5 text-[11px] font-medium text-slate-500 sm:text-xs">
                          {item.role}
                        </p>

                        <div className="mt-1.5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[10px] text-slate-500 sm:gap-x-3 sm:text-[11px]">
                          <span className="inline-flex items-center gap-1">
                            {item.id === 1 ? (
                              <BookOpen className="h-3 w-3 shrink-0" />
                            ) : (
                              <MapPin className="h-3 w-3 shrink-0" />
                            )}
                            {item.id === 1 ? item.role : item.location}
                          </span>

                          {item.workMode && (
                            <span className="inline-flex items-center gap-1">
                              {item.id === 2 ? (
                                <Monitor className="h-3 w-3 shrink-0" />
                              ) : (
                                <Briefcase className="h-3 w-3 shrink-0" />
                              )}
                              {item.workMode}
                            </span>
                          )}

                          <span className="font-semibold text-slate-700">
                            {item.ctc}
                          </span>
                        </div>

                        <p className="mt-2 line-clamp-1 text-[10px] leading-relaxed text-slate-500 sm:text-[11px]">
                          {item.description}
                        </p>

                        <button
                          type="button"
                          onClick={handleOpportunityClick}
                          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-[#078BFA] px-3 py-2 text-[11px] font-bold text-white transition-colors hover:bg-blue-600 sm:hidden"
                        >
                          {item.buttonText}
                          <ArrowRight className="h-3 w-3" />
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={handleOpportunityClick}
                        className="hidden shrink-0 items-center justify-center gap-1 rounded-lg bg-[#078BFA] px-3 py-1.5 text-[10px] font-bold text-white transition-all hover:bg-blue-600 sm:inline-flex sm:text-[11px]"
                      >
                        {item.buttonText}
                      </button>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-4 flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={handleOpportunityClick}
                  className="inline-flex items-center gap-1.5 text-left text-xs font-bold text-[#078BFA] transition-colors hover:text-blue-700 sm:text-sm"
                >
                  View all matched opportunities
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <span className="text-[10px] text-slate-400 sm:text-[11px]">
                  Curated for you
                  <span className="mx-1">•</span>
                  Updated daily
                </span>
              </div>
            </div>

            <div className="mx-auto mt-4 flex max-w-[360px] items-start justify-center gap-3 sm:mt-5 sm:translate-x-4">

              <svg
                viewBox="0 0 42 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="mt-0.5 h-7 w-9 shrink-0 text-indigo-500"
              >
                <path
                  d="M34 27C22 27 13 20 11 9"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
                <path
                  d="M5 14L11 8L17 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="font-heading text-sm font-medium italic leading-[1.65] text-indigo-600 sm:text-[14px]">
                A mix of colleges, jobs,
                <br />
                internships and gigs — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
