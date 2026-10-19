import React from 'react';
import {
  ArrowRight,
  Bell,
  Bot,
  BriefcaseBusiness,
  Building2,
  Check,
  Code2,
  GraduationCap,
  MessageCircle,
  Search,
  Sparkles,
  Users,
  Zap,
} from 'lucide-react';

const audienceCards = [
  {
    id: 'colleges',
    icon: GraduationCap,
    status: 'Coming Soon',
    title: 'College',
    description: 'Explore colleges, courses, fees, placements & more',
    features: [
      'Search by course, location, fees',
      'Connect directly with colleges',
      'Improve student placements',
    ],
    button: 'Join Waitlist',
    onClickKey: 'onOpenAuth',
    art: 'college',
  },
  {
    id: 'students',
    icon: GraduationCap,
    status: 'Available Now',
    title: "I'm Looking for a Job",
    description: "Upload your resume. We'll find jobs that fit you.",
    features: [
      'Jobs from 1000+ sources',
      'AI powered matching',
      'WhatsApp & email alerts',
    ],
    button: 'Explore Jobs',
    onClickKey: 'onSelectTab',
    art: 'resume',
  },
  {
    id: 'recruiters',
    icon: BriefcaseBusiness,
    status: 'Coming Soon',
    title: "I'm Hiring",
    description: 'Connect with colleges and find candidates — from students to graduates.',
    features: [
      'Connect directly with colleges',
      'Find the right candidates',
      'Simplify your hiring',
    ],
    button: 'Join Waitlist',
    onClickKey: 'onOpenDemo',
    art: 'hiring',
  },
];

function FloatingNotice({ type, className = '' }) {
  if (type === 'whatsapp') {
    return (
      <div className={`absolute z-10 w-[254px] rounded-[28px] border border-indigo-400 bg-white/95 p-5 shadow-sm backdrop-blur-sm ${className}`}>
        <div className="mb-3 flex items-center gap-2 text-[17px] font-semibold text-orange-600">
          <MessageCircle className="h-5 w-5 fill-green-500 text-green-500" />
          WhatsApp Alert
        </div>
        <p className="text-sm font-semibold text-slate-900">Get notified on whatsapp</p>
        <p className="mt-1.5 text-xs leading-[1.55] text-slate-600">
          You’ll get all important updates on your whatsapp
        </p>
      </div>
    );
  }

  return (
    <div className={`absolute z-10 w-[270px] rounded-[28px] border border-indigo-400 bg-white/95 p-5 shadow-sm backdrop-blur-sm ${className}`}>
      <div className="mb-3 flex items-center gap-2 text-[17px] font-semibold text-violet-600">
        <Zap className="h-5 w-5 fill-violet-500 text-violet-500" />
        Resume Builder
      </div>
      <p className="text-sm font-semibold text-slate-900">Build Your Resume</p>
      <p className="mt-2 text-xs leading-[1.6] text-slate-600">
        Our resume builder gives you dynamic options to build better & faster resume that got you hired
      </p>
    </div>
  );
}

function SocialProof({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 shadow-[0_8px_24px_rgba(37,99,235,0.08)] ${className}`}>
      <div className="flex -space-x-2">
        {[
          ['AK', 'bg-blue-500'],
          ['PP', 'bg-indigo-600'],
          ['SN', 'bg-cyan-500'],
        ].map(([initials, color]) => (
          <div key={initials} className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white ${color}`}>
            {initials}
          </div>
        ))}
      </div>
      <div className="min-w-0">
        <p className="whitespace-nowrap text-sm font-semibold text-slate-800">
          <span className="mr-1 text-emerald-500">●</span>🔥 142 students matched today
        </p>
        <p className="mt-0.5 text-xs text-slate-400">Just now • IIT, BITS, VIT</p>
      </div>
    </div>
  );
}

function RecruiterProof({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/90 px-4 py-3 shadow-[0_8px_24px_rgba(37,99,235,0.08)] ${className}`}>
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-slate-700">
        <BriefcaseBusiness className="h-4 w-4" />
      </div>
      <div>
        <p className="whitespace-nowrap text-sm text-slate-800">
          <span className="font-semibold text-blue-600">Radiant Info</span>
          <span className="ml-1">shortlisted 8 interns</span>
        </p>
        <p className="mt-0.5 text-xs font-medium text-emerald-600">
          <span className="mr-1">●</span>Verified recruiter • 2 days ago
        </p>
      </div>
    </div>
  );
}

function CardIllustration({ type }) {
  if (type === 'college') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-8 right-0 h-28 w-40 opacity-80">
        <div className="absolute bottom-0 right-0 h-24 w-40 rounded-tl-[70px] bg-orange-100/80" />
        <div className="absolute bottom-0 right-10 h-16 w-10 bg-orange-50" />
        <div className="absolute bottom-16 right-14 h-5 w-5 rounded-full bg-orange-200" />
        <div className="absolute bottom-0 right-16 h-14 w-3 bg-sky-100" />
      </div>
    );
  }

  if (type === 'resume') {
    return (
      <div aria-hidden="true" className="pointer-events-none absolute bottom-20 right-8 hidden h-36 w-32 sm:block">
        <div className="absolute inset-0 rounded-xl border-2 border-violet-300 bg-violet-50/60 p-4">
          <div className="mb-2 h-1.5 w-9 rounded-full bg-orange-200" />
          <div className="mb-1.5 h-1.5 w-full rounded-full bg-green-200" />
          <div className="mb-1.5 h-1.5 w-[90%] rounded-full bg-green-200" />
          <div className="mb-1.5 h-1.5 w-[85%] rounded-full bg-green-200" />
          <div className="mb-1.5 mt-3 h-1.5 w-10 rounded-full bg-violet-300" />
          <div className="mb-1.5 h-1.5 w-full rounded-full bg-green-200" />
          <div className="h-1.5 w-[75%] rounded-full bg-green-200" />
        </div>
        <div className="absolute -right-3 bottom-6 flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-orange-200 bg-white">
          <Search className="h-6 w-6 text-emerald-300" />
        </div>
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none absolute -bottom-2 right-0 h-32 w-40 opacity-80">
      <div className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-md bg-blue-100/90" />
      <div className="absolute bottom-0 right-14 h-20 w-14 bg-blue-50/90" />
      <div className="absolute bottom-12 right-9 flex h-12 w-20 items-center justify-center rounded-md bg-white/80 text-orange-200">
        <Code2 className="h-8 w-8" />
      </div>
      <div className="absolute bottom-20 right-0 h-6 w-28 bg-blue-100/70" />
    </div>
  );
}

function AudienceCard({ card, onSelectTab, onOpenAuth, onOpenDemo }) {
  const Icon = card.icon;

  const handleClick = () => {
    if (card.onClickKey === 'onSelectTab') {
      onSelectTab?.('match');
      onOpenAuth?.();
      return;
    }
    if (card.onClickKey === 'onOpenDemo') {
      onOpenDemo?.();
      return;
    }
    onOpenAuth?.();
  };

  return (
    <article className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-[30px] border-2 border-cyan-200/90 bg-white px-7 pb-7 pt-7 shadow-[0_8px_28px_rgba(14,165,233,0.035)] transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)] sm:px-9 sm:pt-8">
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-blue-500 shadow-sm transition-transform group-hover:scale-105">
          <Icon className="h-7 w-7 fill-current" />
        </div>
        <span className="rounded-full border border-blue-500 px-4 py-1.5 text-sm font-medium text-blue-500">
          {card.status}
        </span>
      </div>

      <div className="relative z-10 mt-7">
        <h3 className="font-heading text-[26px] font-bold tracking-tight text-slate-900 sm:text-[29px]">
          {card.title}
        </h3>
        <p className="mt-3 max-w-[330px] text-[16px] leading-[1.65] text-slate-600 sm:text-[17px]">
          {card.description}
        </p>
      </div>

      <ul className="relative z-10 mt-6 space-y-3 pb-2 text-[15px] text-slate-700 sm:text-[16px]">
        {card.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500">
              <Check className="h-3 w-3 stroke-[3]" />
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <CardIllustration type={card.art} />

      <div className="relative z-10 mt-auto pt-5">
        <button
          type="button"
          onClick={handleClick}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-sky-500 px-5 py-4 text-base font-semibold text-white shadow-sm transition hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
        >
          {card.button}
          {card.button === 'Explore Jobs' ? (
            <ArrowRight className="h-5 w-5" />
          ) : (
            <Bell className="h-4 w-4" />
          )}
        </button>
      </div>
    </article>
  );
}

export default function HeroSection({ onSelectTab, onOpenAuth, onOpenDemo }) {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-white">
      {/* Soft ambient colour washes from the reference design */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-10 h-[430px] w-[1000px] -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-100/50 via-white to-indigo-100/60 blur-3xl" />
        <div className="absolute -left-32 top-56 h-96 w-96 rounded-full bg-cyan-100/30 blur-3xl" />
        <div className="absolute right-0 top-64 h-[450px] w-[500px] rounded-full bg-fuchsia-100/35 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-8 sm:px-8 sm:pb-14 sm:pt-9 lg:px-12">
        {/* Floating notices sit outside the headline's text area, as in the reference */}
        <FloatingNotice
          type="whatsapp"
          className="left-6 top-8 hidden text-left xl:block 2xl:left-10"
        />
        <FloatingNotice
          type="resume"
          className="right-6 top-7 hidden text-left xl:block 2xl:right-10"
        />

        {/* Hero headline */}
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-50/80 px-5 py-2.5 text-sm font-semibold text-blue-600">
            <Bot className="h-5 w-5 fill-blue-500 text-blue-500" />
            <span>AI-Powered Campus Assistant</span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl md:text-[56px] lg:text-[60px]">
            Connect{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              10X Faster.
            </span>
          </h1>

          <p className="mx-auto mt-3 max-w-4xl text-lg leading-relaxed text-slate-600 sm:text-xl md:text-[25px]">
            One platform connecting students, colleges &amp; employers — faster.
          </p>
        </div>

        {/* The title and activity cards share one row on desktop, matching the reference */}
        <div className="mx-auto mt-6 grid max-w-[1370px] grid-cols-1 items-center gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-5">
          <SocialProof className="mx-auto w-fit max-w-full md:mx-0" />

          <div className="flex items-center justify-center gap-3 text-center sm:gap-5">
            <Sparkles className="h-5 w-5 shrink-0 rotate-[-20deg] fill-blue-500 text-blue-500 sm:h-6 sm:w-6" />
            <h2 className="whitespace-nowrap font-heading text-2xl font-bold text-sky-500 sm:text-3xl md:text-[34px]">
              What are you looking for?
            </h2>
            <Sparkles className="h-5 w-5 shrink-0 rotate-12 fill-blue-500 text-blue-500 sm:h-6 sm:w-6" />
          </div>

          <RecruiterProof className="mx-auto w-fit max-w-full md:ml-auto md:mr-0" />
        </div>

        {/* Main audience cards: brought up so all three cards and CTAs are visible sooner */}
        <div className="mx-auto mt-6 grid max-w-[1370px] grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {audienceCards.map((card) => (
            <AudienceCard
              key={card.id}
              card={card}
              onSelectTab={onSelectTab}
              onOpenAuth={onOpenAuth}
              onOpenDemo={onOpenDemo}
            />
          ))}
        </div>

        {/* 4 Stats Metrics Bar matching Figma */}
        <div className="mx-auto mt-12 max-w-[1370px] border-t border-slate-100 pt-8 sm:mt-14 sm:pt-10">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="rounded-2xl border border-blue-100/80 bg-blue-50/30 p-4 text-center sm:p-5">
              <div className="font-heading text-2xl font-extrabold text-[#078BFA] sm:text-3xl lg:text-4xl">
                500+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                Partner Colleges
              </div>
            </div>

            <div className="rounded-2xl border border-indigo-100/80 bg-indigo-50/30 p-4 text-center sm:p-5">
              <div className="font-heading text-2xl font-extrabold text-indigo-600 sm:text-3xl lg:text-4xl">
                100+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                Corporate Recruiters
              </div>
            </div>

            <div className="rounded-2xl border border-emerald-100/80 bg-emerald-50/30 p-4 text-center sm:p-5">
              <div className="font-heading text-2xl font-extrabold text-emerald-600 sm:text-3xl lg:text-4xl">
                5,000+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                Jobs &amp; Internships
              </div>
            </div>

            <div className="rounded-2xl border border-amber-100/80 bg-amber-50/30 p-4 text-center sm:p-5">
              <div className="font-heading text-2xl font-extrabold text-amber-600 sm:text-3xl lg:text-4xl">
                150K+
              </div>
              <div className="mt-1 text-xs font-semibold text-slate-600 sm:text-sm">
                Active Students
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
