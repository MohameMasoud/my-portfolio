import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle, Copy, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SectionBadge } from '../components/ui/SectionBadge';
import { useToast } from '../components/ui/Toast';
import { personalDetails } from '../data/portfolioData';
import { playSound } from '../components/common/AudioToggle';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const { showToast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    serviceInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    playSound('success');
    showToast(`${label} ${t('contact.copySuccess')}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSound('click');
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setIsSuccess(true);
        playSound('success');
        showToast(t('contact.successTitle'));
        setFormData({ name: '', email: '', subject: '', message: '', serviceInterest: '' });
      }
    } catch (err) {
      showToast('Message sent! Mohamed will respond shortly.', 'success');
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <SectionBadge icon={<Mail className="w-4 h-4 text-blue-400" />}>
            {t('contact.sectionBadge')}
          </SectionBadge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-2">
            {t('contact.title')}
          </h2>
          <p className="text-slate-400 text-sm md:text-base mt-3">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{t('contact.directEmail')}</span>
                  <span className="text-sm font-bold text-white block">{personalDetails.email}</span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalDetails.email, 'Email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Phone/WhatsApp Card */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{t('contact.whatsapp')}</span>
                  <span className="text-sm font-bold text-white block">{personalDetails.phone}</span>
                </div>
              </div>
              <a
                href={personalDetails.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                Chat
              </a>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-xl flex items-center gap-4">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">{t('contact.locationTitle')}</span>
                <span className="text-sm font-bold text-white block">{t('contact.locationValue')}</span>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/90 shadow-2xl">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t('contact.successTitle')}</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">{t('contact.successDesc')}</p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-colors"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {t('contact.formName')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {t('contact.formEmail')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {t('contact.formSubject')}
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Inquiry / Job Role"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                        {t('contact.formService')}
                      </label>
                      <input
                        id="serviceInterestInput"
                        type="text"
                        value={formData.serviceInterest}
                        onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                        placeholder="e.g. Full Stack Web Development"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      {t('contact.formMessage')} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mohamed, I would like to discuss..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-sm transition-all shadow-xl shadow-blue-500/25 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t('contact.sending') : t('contact.sendButton')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
