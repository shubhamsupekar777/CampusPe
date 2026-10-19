// import React from 'react';
// import { 
//   GraduationCap, 
//   Mail, 
//   MapPin, 
//   Phone,
//   Globe,
//   Share2
// } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12 text-left">
          
//           {/* Brand Info Column */}
//           <div className="col-span-2">
//             <a href="#" className="flex items-center gap-2.5 mb-4 group">
//               <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
//                 <span className="font-extrabold text-lg tracking-tight">C</span>
//                 <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute top-1.5 right-1.5 ring-1 ring-white"></span>
//               </div>
//               <span className="text-2xl font-black tracking-tight text-slate-900 font-heading">
//                 Campus<span className="text-blue-600">Pe</span>
//               </span>
//             </a>

//             <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-sm mb-6">
//               CampusPe Technologies Private Limited — India's premier AI-powered campus assistant for student placements, college discovery, and intelligent recruiter shortlisting.
//             </p>

//             <div className="space-y-2 text-xs text-slate-500 font-medium">
//               <div className="flex items-center gap-2">
//                 <Mail className="w-3.5 h-3.5 text-blue-600" />
//                 <span>support@campuspe.com</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Phone className="w-3.5 h-3.5 text-blue-600" />
//                 <span>+91 (080) 4568-9000</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <MapPin className="w-3.5 h-3.5 text-blue-600" />
//                 <span>Indiranagar, Bengaluru, Karnataka 560038</span>
//               </div>
//             </div>
//           </div>

//           {/* Col 1: For Students */}
//           <div>
//             <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
//               For Students
//             </h5>
//             <ul className="space-y-2.5 text-xs">
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">College Discovery</a></li>
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">Cutoff Predictor</a></li>
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">AI Resume Parser</a></li>
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">1-Click Job Matches</a></li>
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">Internship Finder</a></li>
//               <li><a href="#students" className="hover:text-blue-600 transition-colors">Placement Practice Tests</a></li>
//             </ul>
//           </div>

//           {/* Col 2: For Colleges */}
//           <div>
//             <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
//               For Colleges
//             </h5>
//             <ul className="space-y-2.5 text-xs">
//               <li><a href="#colleges" className="hover:text-blue-600 transition-colors">TPO Automation Portal</a></li>
//               <li><a href="#colleges" className="hover:text-blue-600 transition-colors">Placement Analytics</a></li>
//               <li><a href="#colleges" className="hover:text-blue-600 transition-colors">NIRF Ranking Booster</a></li>
//               <li><a href="#colleges" className="hover:text-blue-600 transition-colors">Student Batch Tracking</a></li>
//               <li><a href="#colleges" className="hover:text-blue-600 transition-colors">Verified Verification API</a></li>
//             </ul>
//           </div>

//           {/* Col 3: For Recruiters */}
//           <div>
//             <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
//               For Recruiters
//             </h5>
//             <ul className="space-y-2.5 text-xs">
//               <li><a href="#recruiters" className="hover:text-blue-600 transition-colors">Post Campus Drive</a></li>
//               <li><a href="#recruiters" className="hover:text-blue-600 transition-colors">AI Skill Assessments</a></li>
//               <li><a href="#recruiters" className="hover:text-blue-600 transition-colors">Pan-India Talent Pool</a></li>
//               <li><a href="#recruiters" className="hover:text-blue-600 transition-colors">Proctored Coding Tests</a></li>
//               <li><a href="#recruiters" className="hover:text-blue-600 transition-colors">Recruiter Pricing</a></li>
//             </ul>
//           </div>

//           {/* Col 4: Legal & Policies */}
//           <div>
//             <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4 font-heading">
//               Legal & Policies
//             </h5>
//             <ul className="space-y-2.5 text-xs">
//               <li><a href="#" className="hover:text-blue-600 transition-colors">Terms of Service</a></li>
//               <li><a href="#" className="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="hover:text-blue-600 transition-colors">Data Security (ISO 27001)</a></li>
//               <li><a href="#" className="hover:text-blue-600 transition-colors">Student Honor Code</a></li>
//               <li><a href="#" className="hover:text-blue-600 transition-colors">Grievance Officer</a></li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom Bar */}
//         <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
//           <div className="flex items-center gap-1">
//             <span>© 2026 CampusPe Technologies Private Limited. All rights reserved.</span>
//           </div>

//           {/* Social Icons */}
//           <div className="flex items-center gap-4 text-slate-400">
//             <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 0-3.3 1.65 1.65 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z"/></svg>
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="X (Twitter)">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-600 transition-colors" aria-label="Instagram">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
//             </a>
//             <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-600 transition-colors" aria-label="YouTube">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
//             </a>
//             <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 transition-colors" aria-label="GitHub">
//               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
//             </a>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }



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

        {/* Footer columns */}
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

        {/* Contact information */}
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

        {/* Copyright and social links */}
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
