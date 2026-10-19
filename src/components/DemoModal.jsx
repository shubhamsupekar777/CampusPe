import React, { useState } from 'react';
import { X, Check, Building2, Calendar, Phone, Mail, User, ArrowRight } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 font-heading">
              Demo Request Received!
            </h3>
            <p className="text-xs text-slate-500 max-w-xs mx-auto">
              Our campus relations team will reach out within 2 hours to confirm your personalized walkthrough.
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                Institutional & Recruiter Access
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 font-heading">
              Schedule a 1-on-1 Walkthrough
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              See how CampusPe saves 75% on campus hiring time and drives higher placement ratios.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    required
                    type="text"
                    placeholder="Full name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                  <input
                    required
                    type="email"
                    placeholder="hr@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Organization / College</label>
                  <input
                    required
                    type="text"
                    placeholder="Company or College name"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Expected Campus Hires / Year</label>
                <select className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 bg-white">
                  <option>10 - 50 Fresher Hires</option>
                  <option>50 - 200 Fresher Hires</option>
                  <option>200+ Enterprise Hires</option>
                  <option>College / University Placement Cell</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
              >
                <span>Confirm Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
