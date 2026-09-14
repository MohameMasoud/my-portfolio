import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, Printer, Briefcase, GraduationCap, Code2, Award, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { personalDetails, experienceData, skillsData } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { t, isRTL } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulated PDF resume download or prompt
    const element = document.createElement('a');
    const file = new Blob([`
==================================================
MOHAMED MAHMOUD MASOUD - FULL STACK MERN DEVELOPER
==================================================
Location: ${personalDetails.locationEn}
Email: ${personalDetails.email}
GitHub: ${personalDetails.github}
LinkedIn: ${personalDetails.linkedin}

PROFILE SUMMARY:
Passionate Full Stack MERN Developer specializing in building modern, scalable,
and high-performance web applications using React.js, Node.js, Express.js, MongoDB, and PostgreSQL.
Instructor mentoring 150+ students in modern web development.

EXPERIENCE:
1. Full Stack MERN Developer (Freelance / Remote) | 2023 - Present
   - Designed and deployed custom MERN stack applications.
   - Optimized MongoDB and PostgreSQL queries.
2. Programming Instructor | 2023 - Present
   - Mentored 150+ students in MERN stack development.
3. Front-End React Developer | 2022 - 2023
   - Built pixel-perfect responsive user interfaces with React & Tailwind.

TECHNICAL SKILLS:
Frontend: React.js, Next.js, Redux, Tailwind CSS, TypeScript, HTML5/CSS3
Backend: Node.js, Express.js, RESTful APIs, WebSockets, JWT
Databases: MongoDB, Mongoose, PostgreSQL, Prisma, Redis
Tools: Git, Docker, Postman, Linux, Vite
    `], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Mohamed_Mahmoud_Masoud_Resume.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 bg-slate-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl glass-panel border border-slate-700/60 shadow-2xl bg-slate-900 text-slate-100 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/90">
            <div>
              <h3 className="text-lg font-bold text-white">{t('resumeModal.title')}</h3>
              <p className="text-xs text-slate-400">{t('resumeModal.subtitle')}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t('resumeModal.downloadBtn')}</span>
              </button>
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors border border-slate-700"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t('resumeModal.printBtn')}</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Body */}
          <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-950/90 text-slate-200" id="printable-resume">
            {/* Resume Header */}
            <div className="border-b border-slate-800 pb-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white mb-1">
                {personalDetails.name}
              </h1>
              <p className="text-blue-400 font-medium text-lg mb-4">
                {isRTL ? personalDetails.titleAr : personalDetails.titleEn}
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.locationEn}</span>
                <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.email}</span>
                <span className="flex items-center gap-1"><Globe className="w-3.5 h-3.5 text-slate-500" /> {personalDetails.github}</span>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-2 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> Professional Summary
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t('about.bio1')} {t('about.bio2')}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4" /> Work Experience
              </h2>
              <div className="space-y-4">
                {experienceData.map(exp => (
                  <div key={exp.id} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <div className="flex flex-wrap items-center justify-between mb-1">
                      <h3 className="font-semibold text-white text-base">{t(exp.roleKey)}</h3>
                      <span className="text-xs text-blue-400 font-mono">{t(exp.periodKey)}</span>
                    </div>
                    <p className="text-xs text-slate-400 mb-2">{t(exp.companyKey)} • {t(exp.locationKey)}</p>
                    <p className="text-xs text-slate-300 mb-3">{t(exp.descriptionKey)}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((s, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] rounded bg-slate-800 text-slate-300 border border-slate-700/50">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Grid */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-400 mb-3 flex items-center gap-2">
                <Award className="w-4 h-4" /> Technical Proficiency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillsData.map((cat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/60">
                    <h4 className="text-xs font-semibold text-slate-300 mb-2">{t(cat.titleKey)}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((s, sIdx) => (
                        <span key={sIdx} className="px-2 py-0.5 text-[11px] rounded bg-blue-500/10 text-blue-300 border border-blue-500/20">
                          {s.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
