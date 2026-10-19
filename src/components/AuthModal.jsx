import React, { useState } from 'react';
import { X, Sparkles, Check, ArrowRight, Lock, Mail, User } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  const [authMode, setAuthMode] = useState('signup'); // 
  const [userRole, setUserRole] = useState('student'); 
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 relative overflow-hidden text-left"
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
              Welcome to CampusPe!
            </h3>
            <p className="text-xs text-slate-500">
              Redirecting you to your personalized dashboard...
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center font-black text-xs">
                C
              </div>
              <span className="text-sm font-bold text-slate-900 font-heading">
                Campus<span className="text-blue-600">Pe</span>
              </span>
            </div>

            <h3 className="text-2xl font-black text-slate-900 font-heading">
              {authMode === 'signup' ? 'Create your account' : 'Welcome back'}
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Join 150,000+ students and 100+ top corporate recruiters.
            </p>

            <div className="mt-5 p-1 bg-slate-100 rounded-xl flex gap-1 text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setUserRole('student')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  userRole === 'student' ? 'bg-white text-blue-600 shadow-sm' : 'hover:text-slate-900'
                }`}
              >
                I'm a Student
              </button>
              <button
                type="button"
                onClick={() => setUserRole('recruiter')}
                className={`flex-1 py-2 rounded-lg transition-all ${
                  userRole === 'recruiter' ? 'bg-white text-blue-600 shadow-sm' : 'hover:text-slate-900'
                }`}
              >
                I'm a Recruiter
              </button>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
              {authMode === 'signup' && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      required
                      type="text"
                      placeholder="e.g. Rohan Sharma"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {userRole === 'recruiter' ? 'Work Email' : 'Email or College ID'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    required
                    type="email"
                    placeholder={userRole === 'recruiter' ? 'hr@company.com' : 'name@college.edu.in'}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    required
                    type="password"
                    placeholder="••••••••"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-500/25 transition-all flex items-center justify-center gap-1.5 mt-2 cursor-pointer"
              >
                <span>{authMode === 'signup' ? 'Get Started Free' : 'Sign In'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="mt-5 text-center text-xs text-slate-500">
              {authMode === 'signup' ? (
                <span>
                  Already have an account?{' '}
                  <button 
                    onClick={() => setAuthMode('signin')}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Log In
                  </button>
                </span>
              ) : (
                <span>
                  Don't have an account?{' '}
                  <button 
                    onClick={() => setAuthMode('signup')}
                    className="font-bold text-blue-600 hover:underline"
                  >
                    Sign Up Free
                  </button>
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
