


import React, { useState } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const LOGO_PATHS = [
  '/campuspe-logo.png',
  '/logo.png',
  '/assets/campuspe-logo.png',
];

const groups = [
  {
    title: 'For Students',
    links: [
      ['Explore Colleges', '#students'],
      ['Find Opportunities', '#students'],
      ['Internships', '#students'],
      ['Full-time Jobs', '#students'],
      ['Part-time & Gig', '#students'],
      ['Application Tracker', '#students'],
    ],
  },
  {
    title: 'For Colleges',
    links: [
      ['List Your College', '#colleges'],
      ['Admissions', '#colleges'],
      ['Fee Collection', '#colleges'],
      ['Placements', '#colleges'],
    ],
  },
  {
    title: 'For Employers',
    links: [
      ['Post a Job', '#recruiters'],
      ['Find Talent', '#recruiters'],
      ['Campus Hiring', '#recruiters'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['About Us', '#about'],
      ['Contact Us', '#contact'],
      ['Blogs', '#blogs'],
      ['Careers', '#careers'],
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      ['Privacy Policy', '/privacy-policy'],
      ['Terms & Conditions', '/terms-and-conditions'],
      ['Refund & Cancellation Policy', '/refund-policy'],
      ['Cookie Policy', '/cookie-policy'],
      ['Grievance Redressal', '/grievance-redressal'],
      ['Job & Internship Disclaimer', '/disclaimer'],
    ],
  },
];

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    path: 'M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8 18H5V9h3v9ZM6.5 7.75A1.75 1.75 0 1 1 6.5 4.25a1.75 1.75 0 0 1 0 3.5ZM19 18h-3v-4.38c0-2.63-3-2.43-3 0V18h-3V9h3v1.44c1.4-2.59 6-2.78 6 2.48V18Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    path: 'M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z',
  },
  {
    label: 'X',
    href: 'https://x.com/',
    path: 'M18.9 2H22l-6.78 7.75L23.2 22h-6.25l-4.9-7.45L5.52 22H2.4l7.25-8.29L1.9 2h6.4l4.43 6.78L18.9 2Zm-1.1 18h1.73L7.37 3.9H5.52L17.8 20Z',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    path: 'M13.5 22v-8.2h2.76l.41-3.2H13.5V8.56c0-.93.26-1.56 1.6-1.56h1.7V4.14A22.4 22.4 0 0 0 14.32 4c-2.46 0-4.14 1.5-4.14 4.25v2.35H7.4v3.2h2.78V22h3.32Z',
  },
  {
    label: 'WhatsApp',
    href: 'https://www.whatsapp.com/',
    path: 'M12.1 0C5.53 0 .19 5.34.19 11.91c0 2.1.55 4.15 1.6 5.96L.1 24l6.3-1.65a11.9 11.9 0 0 0 5.69 1.45h.01c6.57 0 11.91-5.34 11.91-11.91A11.83 11.83 0 0 0 12.1 0Zm0 21.78a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-3.74.98 1-3.65-.24-.37a9.85 9.85 0 0 1-1.51-5.25c0-5.46 4.44-9.9 9.9-9.9a9.83 9.83 0 0 1 7 2.9 9.83 9.83 0 0 1 2.9 7c0 5.46-4.44 9.87-9.93 9.87Z',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    path: 'M23.5 6.2a3 3 0 0 0-2.1-2.12C19.54 3.57 12 3.57 12 3.57s-7.54 0-9.4.51A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.12c1.86.51 9.4.51 9.4.51s7.54 0 9.4-.51a3 3 0 0 0 2.1-2.12A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z',
  },
];

function CampusPeLogo() {
  const [logoIndex, setLogoIndex] = useState(0);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <a
      href="/"
      aria-label="CampusPe home"
      className="inline-flex min-h-[56px] items-center"
    >
      {!showFallback ? (
        <img
          src={LOGO_PATHS[logoIndex]}
          alt="CampusPe — Connecting Students, Institutions & Companies"
          className="block h-auto w-[155px] max-w-full object-contain object-left sm:w-[165px]"
          onError={() => {
            if (logoIndex < LOGO_PATHS.length - 1) {
              setLogoIndex((index) => index + 1);
            } else {
              setShowFallback(true);
            }
          }}
        />
      ) : (
        <span className="flex flex-col">
          <span className="text-[30px] font-extrabold leading-none tracking-tight text-[#0878F9]">
            CampusPe
          </span>
          <span className="mt-1 text-[7px] text-[#526783]">
            Connecting Students, Institutions & Companies
          </span>
        </span>
      )}
    </a>
  );
}

function SocialLink({ item }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer"
      aria-label={item.label}
      className="inline-flex h-7 w-7 items-center justify-center text-[#063b78] transition hover:-translate-y-0.5 hover:text-[#0787f9]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-[18px] w-[18px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d={item.path} />
      </svg>
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#fffdfb] text-[#34445d]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[58%] bg-[radial-gradient(ellipse_at_50%_100%,rgba(68,153,245,0.42)_0%,rgba(190,220,250,0.28)_42%,rgba(255,253,251,0)_78%)]"
      />

      <div className="mx-auto max-w-[1360px] px-5 pb-6 pt-8 sm:px-8 lg:px-12">
        {/* Call to action */}
        <section className="mb-10 flex flex-col gap-6 rounded-[24px] border border-[#d8d8d8] bg-white/90 px-6 py-7 shadow-[0_12px_35px_rgba(15,23,42,0.04)] sm:px-10 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[390px]">
            <h2 className="text-[25px] font-bold leading-tight tracking-[-0.03em] text-[#14213d] sm:text-[27px]">
              Ready for what’s next?
            </h2>
            <p className="mt-2 text-[14px] leading-[1.35] text-[#526783]">
              Discover colleges, find opportunities, list your institution, or
              start hiring with CampusPe.
            </p>
          </div>

          <div className="flex flex-wrap gap-2.5">
            <a href="#colleges" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#0787f9] px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#006fe0]">
              Explore Colleges <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#students" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl bg-[#0787f9] px-4 py-2.5 text-[12px] font-semibold text-white shadow-sm transition hover:bg-[#006fe0]">
              Find Opportunities <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#colleges" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#d1dbea] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#24324a] transition hover:border-[#0787f9] hover:text-[#0787f9]">
              List Your College <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <a href="#recruiters" className="inline-flex min-h-10 items-center justify-center gap-2 rounded-xl border border-[#d1dbea] bg-white px-4 py-2.5 text-[12px] font-semibold text-[#24324a] transition hover:border-[#0787f9] hover:text-[#0787f9]">
              Post a Job <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </section>

        <div className="grid grid-cols-2 gap-x-7 gap-y-9 pb-10 sm:grid-cols-3 lg:grid-cols-[1.75fr_0.8fr_0.8fr_0.9fr_0.7fr_1.15fr] lg:gap-x-8">
          <div className="col-span-2 sm:col-span-1">
            <CampusPeLogo />

            <p className="mt-5 max-w-[285px] text-[17px] leading-[1.45] text-[#444]">
              From choosing a college to finding your next opportunity.
            </p>
            <p className="mt-4 max-w-[285px] text-[17px] leading-[1.45] text-[#444]">
              CampusPe connects students, colleges and employers in one place.
            </p>
          </div>

          {groups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="min-w-0"
            >
              <h3 className="mb-3 text-[16px] font-bold leading-tight text-[#242a33] sm:text-[17px]">
                {group.title}
              </h3>

              <ul className="space-y-[9px]">
                {group.links.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[12px] leading-5 text-[#3f4d63] transition-colors hover:text-[#0787f9] sm:text-[12.5px]"
                    >
                      {label}
                    </a>
                  </li>
                ))}

                {group.title === 'Legal & Policies' && (
                  <li className="pt-1">
                    <a
                      href="/policies"
                      className="inline-flex items-center gap-1 text-[12px] font-medium text-[#0787f9] hover:text-[#006fe0]"
                    >
                      View all policies <ArrowRight className="h-3 w-3" />
                    </a>
                  </li>
                )}
              </ul>

              {group.title === 'Legal & Policies' && (
                <div className="mt-6 max-w-[180px] rounded-xl border border-[#a9e7ff] bg-[#f0f8ff]/95 p-3 text-[12px] leading-[1.55] text-[#40516a]">
                  Separate user, institution and employer terms can live inside
                  the full Policies page.
                </div>
              )}
            </nav>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-y border-[#26364b]/60 py-5 text-[12px] text-[#46566c] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href="mailto:contactus@campuspe.com"
              className="inline-flex items-center gap-2 transition hover:text-[#0787f9]"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#8a9bb0] bg-white text-[#0787f9]">
                <Mail className="h-3.5 w-3.5" />
              </span>
              contactus@campuspe.com
            </a>

            <a
              href="tel:+916362606464"
              className="inline-flex items-center gap-2 transition hover:text-[#0787f9]"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-[#8a9bb0] bg-white text-[#0787f9]">
                <Phone className="h-3.5 w-3.5" />
              </span>
              +91 6362606464
            </a>
          </div>

          <div className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#10b981]" />
            <span>Students · Colleges · Employers</span>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[14px] leading-6 text-[#073b78] sm:text-[17px]">
            © 2026 CampusPe Technologies Pvt. Ltd.{' '}
            <a href="/privacy-policy" className="hover:text-[#0787f9]">
              Privacy
            </a>{' '}
            <a href="/terms-and-conditions" className="hover:text-[#0787f9]">
              Terms
            </a>{' '}
            <a href="/grievance-redressal" className="hover:text-[#0787f9]">
              Grievance
            </a>
          </p>

          <div className="flex items-center gap-2.5">
            {socials.map((item) => (
              <SocialLink key={item.label} item={item} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
