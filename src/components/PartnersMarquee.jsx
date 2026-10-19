
import React from "react";

const partners = [
  {
    name: "Startup India",
    tag: "DPIIT Recognised",
    icon: "🚀",
  },
  {
    name: "AICTE Approved",
    tag: "Academic Network",
    icon: "🏛️",
  },
  {
    name: "Digital India",
    tag: "Govt Initiative",
    icon: "⚡",
  },
  {
    name: "DigiLocker",
    tag: "Verified Credentials",
    icon: "🔒",
  },
  {
    name: "NASSCOM",
    tag: "Industry Partner",
    icon: "💼",
  },
  {
    name: "MSME India",
    tag: "Registered Enterprise",
    icon: "🇮🇳",
  },
];

export default function PartnersMarquee() {
  // Duplicate the partners to create a seamless loop.
  const items = [...partners, ...partners];

  return (
    <section className="overflow-hidden border-y border-slate-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className="mb-8 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
          Trusted by partners across India
        </p>

        <div className="partners-marquee relative">
          <div className="partners-track flex w-max items-center gap-6 sm:gap-8">
            {items.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex w-64 shrink-0 items-center gap-3
                  rounded-2xl border border-slate-200 bg-white
                  px-5 py-4 shadow-sm transition-all duration-300
                  hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center
                  justify-center rounded-xl bg-blue-50 text-2xl">
                  {partner.icon}
                </span>

                <div className="text-left">
                  <h3 className="font-bold tracking-tight text-slate-800">
                    {partner.name}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    {partner.tag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
