import React from 'react';
import { ArrowRight, GraduationCap, Building2, Briefcase } from 'lucide-react';

export default function PreFooterCta({ onOpenAuth, onOpenDemo }) {
  return (
    <section className="border-t border-slate-200/80 bg-slate-50/70 py-12 sm:py-14">
      {/* <div className="relative mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          
          <div>
            <h3 className="font-heading text-xl sm:text-2xl font-black text-neutral-800 tracking-tight">
              Ready for what's next?
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Join thousands of students and colleges securing top tier placements every month.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            
            <button
              type="button"
              onClick={onOpenAuth}
              className="inline-flex items-center gap-1.5 rounded-full bg-[#078BFA] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-md cursor-pointer"
            >
              <GraduationCap className="w-4 h-4" />
              <span>For Students</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 rounded-full bg-indigo-600 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md cursor-pointer"
            >
              <Building2 className="w-4 h-4" />
              <span>For Colleges</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              type="button"
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-md cursor-pointer"
            >
              <Briefcase className="w-4 h-4" />
              <span>For Recruiters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div> */}
    </section>
  );
}
