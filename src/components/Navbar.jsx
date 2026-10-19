import React, { useState } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar({ onOpenAuth, onOpenDemo }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoFailed, setLogoFailed] = useState(false);

  const navLinks = [
    { label: 'Colleges', href: '#colleges' },
    { label: 'Employers', href: '#recruiters' },
    { label: 'Jobs', href: '#students' },
    { label: 'Blogs', href: '#blogs' },
  ];

  const handleAuth = () => {
    setMobileMenuOpen(false);
    onOpenAuth?.();
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 lg:px-12 xl:px-[7%]">
        <div className="flex min-h-[76px] items-center justify-between gap-5 py-2 md:min-h-[88px] md:py-0">

          {/* Brand: uses the real logo when the image path is valid, with a graceful fallback */}
          <a
            href="/"
            aria-label="CampusPe Home"
            className="flex min-w-0 shrink-0 items-center"
          >
            {!logoFailed ? (
              <img
                src="/campuspe-logo.svg"
                alt="CampusPe"
                onError={() => setLogoFailed(true)}
                className="block h-10 w-auto object-contain sm:h-12"
              />
            ) : (
              <span className="flex flex-col items-start leading-none">
                <span className="flex items-center gap-1 text-[30px] font-extrabold tracking-[-1.8px] text-[#0866c6] sm:text-[34px] lg:text-[39px]">
                  <GraduationCap className="h-6 w-6 self-start text-[#0756b5] sm:h-7 sm:w-7" />
                  <span>
                    Campus<span className="text-[#0878d8]">Pe</span>
                  </span>
                </span>
                <span className="mt-1 whitespace-nowrap pl-2 text-[7px] tracking-[0.1px] text-[#52749c] sm:text-[8px]">
                  ── Connecting Students, Institutions &amp; Companies ──
                </span>
              </span>
            )}
          </a>

          {/* Desktop links */}
          <nav
            aria-label="Main navigation"
            className="hidden flex-1 items-center justify-center gap-8 lg:flex xl:gap-[4.2rem]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="whitespace-nowrap text-[17px] font-medium text-[#171717] transition-colors duration-200 hover:text-[#0878f9] xl:text-[19px]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop authentication actions */}
          <div className="hidden shrink-0 items-center gap-5 sm:flex lg:gap-7">
            <button
              type="button"
              onClick={handleAuth}
              className="whitespace-nowrap text-[17px] font-medium text-[#171717] transition-colors hover:text-[#0878f9] xl:text-[19px]"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={handleAuth}
              className="whitespace-nowrap rounded-full bg-[#0878f9] px-6 py-3 text-[16px] font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0067e8] hover:shadow-md xl:px-7 xl:text-[18px]"
            >
              Sign Up
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-xl p-2.5 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 pb-5 pt-3 shadow-lg lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-2xl flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMobileMenu}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-[#0878f9]"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex flex-col gap-3 border-t border-slate-100 pt-4 sm:hidden">
              <button
                type="button"
                onClick={handleAuth}
                className="w-full rounded-full border border-slate-200 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                Sign In
              </button>
              <button
                type="button"
                onClick={handleAuth}
                className="w-full rounded-full bg-[#0878f9] py-3 font-semibold text-white transition-colors hover:bg-[#0067e8]"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
