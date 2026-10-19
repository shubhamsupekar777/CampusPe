import React from 'react';
import { MessageSquare, PhoneCall, Sparkles, ArrowRight, HelpCircle } from 'lucide-react';

export default function QuestionsBanner({ onOpenDemo }) {
  return (
    <section id="faq" className="relative isolate w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
        
        <div className="rounded-[28px] bg-gradient-to-r from-blue-50/80 via-sky-50/60 to-indigo-50/80 border border-blue-200/90 p-8 sm:p-12 text-center shadow-lg shadow-blue-500/5 relative overflow-hidden">
          
          <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 flex items-center justify-center text-[#078BFA] shadow-md shadow-blue-500/10 mx-auto mb-4">
            <HelpCircle className="w-7 h-7" />
          </div>

          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-neutral-800 tracking-tight">
            Still have questions?
          </h3>

          <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
            Need guidance on cutoff predictions, corporate placement drives, or institutional onboarding? Our experts are available 24/7.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#078BFA] px-7 py-3.5 text-xs font-bold text-white shadow-md shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-lg sm:text-sm cursor-pointer"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Talk to Counselor</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg sm:text-sm cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Support</span>
            </a>

          </div>

          <p className="mt-6 text-xs text-slate-500">
            Average response time: <strong>under 5 minutes</strong> • 100% Free Consultation
          </p>

        </div>

      </div>
    </section>
  );
}
