import React, { useRef, useState } from 'react';
import {
  ArrowUp,
  Check,
  Zap,
  LockKeyhole,
  FileText,
  FileType,
} from 'lucide-react';


export default function ResumeUploadSection({ onResumeSelected }) {
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);

  const acceptFile = (file) => {
    if (!file) return;
    const allowedExtensions = ['pdf', 'doc', 'docx'];
    const extension = file.name.split('.').pop()?.toLowerCase();
    const maxSize = 10 * 1024 * 1024;

    if (!allowedExtensions.includes(extension)) {
      setError('Please upload a PDF, DOC, or DOCX file.');
      setSelectedFile(null);
      return;
    }
    if (file.size > maxSize) {
      setError('Your file must be 10 MB or smaller.');
      setSelectedFile(null);
      return;
    }

    setError('');
    setSelectedFile(file);
    onResumeSelected?.(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    acceptFile(event.dataTransfer.files?.[0]);
  };

  const statuses = [
    {
      title: 'Resume analyzed',
      subtitle: 'Ready in 4s',
      tone: 'emerald',
      icon: Check,
    },
    {
      title: 'Skills matched',
      subtitle: 'Deep taxonomy',
      tone: 'indigo',
      icon: Check,
    },
    {
      title: 'Experience matched',
      subtitle: 'Contextual seniority',
      tone: 'violet',
      icon: Check,
    },
    {
      title: '1,000+ sources searched',
      subtitle: 'Real-time aggregators',
      tone: 'blue',
      icon: Check,
    },
  ];

  const toneStyles = {
    emerald: {
      icon: 'border-emerald-300 bg-emerald-50 text-emerald-500',
      subtitle: 'text-emerald-500',
      dot: 'bg-emerald-500',
    },
    indigo: {
      icon: 'border-indigo-300 bg-indigo-50 text-indigo-500',
      subtitle: 'text-indigo-500',
      dot: 'bg-indigo-500',
    },
    violet: {
      icon: 'border-violet-300 bg-violet-50 text-violet-500',
      subtitle: 'text-violet-500',
      dot: 'bg-violet-500',
    },
    blue: {
      icon: 'border-blue-300 bg-blue-50 text-blue-500',
      subtitle: 'text-blue-500',
      dot: 'bg-blue-500',
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#f7f9fc] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-[50px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute left-[12%] top-[38%] h-72 w-72 rounded-full bg-sky-100/60 blur-[100px]" />
        <div className="absolute right-[13%] top-[34%] h-80 w-80 rounded-full bg-violet-100/70 blur-[110px]" />
        <div className="absolute left-1/2 top-[5%] h-40 w-[34rem] -translate-x-1/2 rounded-full bg-white/90 blur-[75px]" />
      </div>

      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center text-center">
        <div className="inline-flex h-[29px] items-center gap-2 rounded-full border border-indigo-100 bg-white/90 px-3.5 shadow-[0_3px_12px_rgba(72,93,180,0.08)]">
          <span className="h-2 w-2 rounded-full bg-[#8878ff] shadow-[0_0_0_4px_rgba(136,120,255,0.10)]" />
          <span className="text-[12px] font-bold tracking-[0.02em] text-[#0785ff]">
            TRY IT LIVE
          </span>
          <span className="mx-0.5 h-3.5 w-px bg-slate-200" />
          <span className="text-[12px] font-medium text-slate-400">v2.4 AI Engine</span>
        </div>

        <h2 className="mt-3.5 text-[32px] font-extrabold leading-[1.16] tracking-[-0.035em] text-[#101522] sm:text-[38px] md:text-[40px]">
          Upload your resume.
          <span className="block text-[#087fff]">Find jobs that fit.</span>
        </h2>
        <p className="mt-3.5 max-w-[650px] text-[16px] font-medium leading-[1.55] text-[#50617a] sm:text-[18px]">
          Upload once. CampusPe reads your skills, experience, and preferences —
          <br className="hidden sm:block" /> then finds relevant jobs across 1,000+ sources.
        </p>

        <div className="relative mt-7 w-full max-w-[532px] sm:mt-7">
          <div className="absolute -left-[60px] top-[36px] z-10 hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 text-left shadow-[0_12px_30px_rgba(42,65,115,0.10)] sm:flex md:-left-[60px]">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-lime-200 bg-lime-50 text-lime-600">
              <Zap size={15} fill="currentColor" strokeWidth={1.8} />
            </span>
            <span>
              <span className="block whitespace-nowrap text-[12px] font-bold leading-4 text-[#182033]">
                98% Match Rate
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-[10px] font-medium text-[#73829b]">
                AI semantic rank
              </span>
            </span>
          </div>

          <div className="rounded-[30px] border border-white/90 bg-white/80 p-4 shadow-[0_18px_55px_rgba(83,92,170,0.18)] sm:p-[22px]">
            <div
              onDragEnter={(event) => {
                event.preventDefault();
                setIsDragging(true);
              }}
              onDragOver={(event) => event.preventDefault()}
              onDragLeave={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget)) {
                  setIsDragging(false);
                }
              }}
              onDrop={handleDrop}
              className={`relative flex min-h-[230px] flex-col items-center justify-center rounded-[17px] border-2 border-dashed px-4 py-6 transition-colors sm:min-h-[246px] sm:px-8 ${
                isDragging
                  ? 'border-[#0785ff] bg-sky-50/80'
                  : 'border-[#d3dcff] bg-white/45'
              }`}
            >
              <span aria-hidden="true" className="absolute left-[7px] top-[7px] h-[10px] w-[10px] rounded-tl border-l-2 border-t-2 border-[#c8d3ff]" />
              <span aria-hidden="true" className="absolute right-[7px] top-[7px] h-[10px] w-[10px] rounded-tr border-r-2 border-t-2 border-[#c8d3ff]" />
              <span aria-hidden="true" className="absolute bottom-[7px] left-[7px] h-[10px] w-[10px] rounded-bl border-b-2 border-l-2 border-[#c8d3ff]" />
              <span aria-hidden="true" className="absolute bottom-[7px] right-[7px] h-[10px] w-[10px] rounded-br border-b-2 border-r-2 border-[#c8d3ff]" />

              <FileText className="mb-2 h-7 w-7 text-[#087fff] sm:hidden" />
              <h3 className="text-[25px] font-extrabold leading-tight tracking-[-0.03em] text-[#11182a] sm:text-[29px]">
                Upload your resume
              </h3>
              <p className="mt-2.5 max-w-[440px] text-[12px] font-medium leading-[1.45] text-[#647793] sm:text-[13px]">
                PDF, DOC, or DOCX · Up to 10MB · We'll use it to understand your skills
                <br className="hidden sm:block" /> and experience.
              </p>

              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="hidden"
                onChange={(event) => acceptFile(event.target.files?.[0])}
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="mt-4 inline-flex min-h-[41px] items-center justify-center gap-2 rounded-full bg-[#0785ff] px-7 text-[12px] font-bold text-white shadow-[0_8px_18px_rgba(0,119,255,0.30)] transition hover:-translate-y-0.5 hover:bg-[#0074ed] focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                {selectedFile ? 'Choose another resume' : 'Upload resume'}
                <ArrowUp size={15} strokeWidth={2.6} />
              </button>

              <p className="mt-4 text-[11px] font-medium text-[#7485a0]">
                {selectedFile ? selectedFile.name : 'or drag and drop your file here'}
              </p>
              <div className="mt-1.5 flex items-center gap-1.5">
                {['PDF', 'DOC', 'DOCX'].map((type) => (
                  <span
                    key={type}
                    className="rounded-[5px] border border-[#5bb8ff] px-2 py-[2px] text-[10px] font-semibold leading-[14px] text-[#0785ff]"
                  >
                    {type}
                  </span>
                ))}
              </div>
              {error && (
                <p role="alert" className="mt-2 text-xs font-semibold text-rose-600">
                  {error}
                </p>
              )}
            </div>
          </div>

          <div className="absolute -bottom-[9px] -right-[46px] z-10 hidden items-center gap-2.5 rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2.5 text-left shadow-[0_12px_30px_rgba(42,65,115,0.10)] sm:flex md:-right-[46px]">
            <span className="flex h-[30px] w-[30px] items-center justify-center rounded-[10px] border border-orange-200 bg-orange-50 text-orange-600">
              <LockKeyhole size={13} strokeWidth={2.2} />
            </span>
            <span>
              <span className="block whitespace-nowrap text-[12px] font-bold leading-4 text-[#182033]">
                ATS Compliant
              </span>
              <span className="mt-0.5 block whitespace-nowrap text-[10px] font-medium text-[#73829b]">
                Standardized parser
              </span>
            </span>
          </div>
        </div>

        {/* Four processing/status cards */}
        <div className="relative mt-7 grid w-full max-w-[804px] grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-1/2 hidden h-[2px] -translate-y-1/2 bg-gradient-to-r from-emerald-100 via-indigo-100 to-blue-100 lg:block" />
          {statuses.map((status) => {
            const Icon = status.icon;
            const tone = toneStyles[status.tone];
            return (
              <div
                key={status.title}
                className="relative z-[1] flex min-h-[74px] items-center gap-3 rounded-[16px] border border-[#e8edf5] bg-white/90 px-3 py-3 text-left shadow-[0_5px_16px_rgba(28,50,90,0.035)] sm:px-3.5"
              >
                <span className={`flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-[10px] border ${tone.icon}`}>
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[12px] font-bold leading-[1.3] text-[#202a40] sm:text-[12px]">
                    {status.title}
                  </span>
                  <span className={`mt-1 flex items-center gap-1.5 text-[9px] font-medium leading-3 ${tone.subtitle}`}>
                    {status.tone === 'emerald' && <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />}
                    {status.subtitle}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
