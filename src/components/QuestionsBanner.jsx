
import React from 'react';
import { ArrowUpRight, PhoneCall } from 'lucide-react';

export default function QuestionsBanner({ onOpenDemo }) {
  return (
    <section
      id="faq"
      className="relative w-full bg-white px-5 pt-10 pb-8 sm:px-8 sm:pt-12 sm:pb-10 lg:pt-12 lg:pb-10"
    >
      <div className="mx-auto w-full max-w-[1440px] lg:px-[36px]">
        <div className="relative flex min-h-[210px] flex-col items-center justify-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#eaf4ff] via-white to-[#f5f0ff] px-5 py-9 text-center shadow-[0_12px_30px_rgba(105,125,255,0.10)] sm:rounded-[22px] sm:px-10 sm:py-10">

          <h3 className="font-heading text-[23px] font-bold leading-tight tracking-tight text-[#202833] sm:text-[25px]">
            Still have questions?
          </h3>

          <p className="mt-3 max-w-[360px] text-[13px] leading-[1.5] text-[#475569] sm:text-[14px]">
            Our support team is here to help you succeed. Get in
            touch anytime.
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">

            {/* Contact Support */}
            <a
              href="mailto:contactus@campuspe.com"
              className="group inline-flex h-[34px] items-center gap-3 rounded-full bg-[#078BFA] py-1 pl-4 pr-1 text-[11px] font-semibold text-white transition-all duration-200 hover:bg-[#006fe0] hover:shadow-md sm:h-[36px] sm:text-[12px]"
            >
              <span>Contact Support</span>
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white text-[#078BFA] transition-transform group-hover:translate-x-0.5">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>

            {/* Schedule a Call */}
            <button
              type="button"
              onClick={onOpenDemo}
              className="group inline-flex h-[34px] items-center gap-3 rounded-full border border-[#078BFA] bg-white py-1 pl-4 pr-1 text-[11px] font-semibold text-[#078BFA] transition-all duration-200 hover:bg-blue-50 sm:h-[36px] sm:text-[12px]"
            >
              <span>Schedule a Call</span>
              <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#078BFA] text-white transition-transform group-hover:scale-105">
                <PhoneCall className="h-3.5 w-3.5" />
              </span>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}
