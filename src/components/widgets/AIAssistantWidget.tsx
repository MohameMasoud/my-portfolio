import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Bot, User, X, RefreshCw, MessageSquare } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { ChatMessage } from '../../types';
import { playSound } from '../common/AudioToggle';

interface AIAssistantWidgetProps {
  isOpen?: boolean;
  onClose?: () => void;
  isFloating?: boolean;
}

export const AIAssistantWidget: React.FC<AIAssistantWidgetProps> = ({
  isOpen = true,
  onClose,
  isFloating = false,
}) => {
  const { t, isRTL } = useLanguage();
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: isRTL
        ? 'مرحباً! أنا المساعد الذكي لمحمد محمود مسعود. يسعدني الإجابة عن أي استفسار حول خبراته، مهاراته في MERN Stack، أو كيفية توظيفه!'
        : "Hello! I am Mohamed Masoud's AI Assistant powered by Gemini. Ask me anything about Mohamed's skills, experience, projects, or how to hire him!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const quickQueries = [
    t('ai.q1'),
    t('ai.q2'),
    t('ai.q3'),
    t('ai.q4'),
  ];

  const handleSend = async (userText?: string) => {
    const textToSend = userText || input;
    if (!textToSend.trim() || isLoading) return;

    playSound('click');
    const userMsg: ChatMessage = {
      id: Math.random().toString(36).substring(2, 9),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    if (!userText) setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: textToSend }),
      });

      const data = await response.json();
      const aiReply = data.reply || "Mohamed is available for exciting MERN stack roles and freelance projects!";

      const aiMsg: ChatMessage = {
        id: Math.random().toString(36).substring(2, 9),
        sender: 'ai',
        text: aiReply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, aiMsg]);
      playSound('success');
    } catch (err) {
      const fallbackMsg: ChatMessage = {
        id: Math.random().toString(36).substring(2, 9),
        sender: 'ai',
        text: "Mohamed Masoud is a Full Stack MERN Developer specializing in React, Express, Node.js, and MongoDB with 3+ years experience. You can also reach him directly via the contact form!",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen && isFloating) return null;

  const content = (
    <div className={`flex flex-col h-full rounded-2xl glass-panel border border-slate-700/60 shadow-2xl bg-slate-900/95 overflow-hidden text-slate-100 ${isFloating ? 'w-full max-w-md h-[560px]' : 'w-full h-[520px]'}`}>
      {/* Widget Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800 bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900">
        <div className="flex items-center gap-3">
          <div className="relative p-2 rounded-xl bg-blue-500/20 text-blue-400 border border-blue-500/30">
            <Sparkles className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-slate-900" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <span>{t('ai.title')}</span>
              <span className="px-1.5 py-0.5 text-[9px] font-mono uppercase font-bold rounded bg-blue-500/20 text-blue-400 border border-blue-500/30">
                GEMINI 3.6
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">{t('ai.badge')}</p>
          </div>
        </div>
        {isFloating && onClose && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-slate-950/60">
        {messages.map((msg) => (
          <motion.div
            key={msg.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div
              className={`p-2 rounded-xl shrink-0 ${
                msg.sender === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-cyan-400 border border-slate-700'
              }`}
            >
              {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
            </div>
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs md:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-blue-600/90 text-white rounded-tr-none'
                  : 'bg-slate-800/80 text-slate-200 border border-slate-700/60 rounded-tl-none shadow-md'
              }`}
            >
              <p className="whitespace-pre-line">{msg.text}</p>
              <span className="block mt-1 text-[10px] opacity-60 text-right font-mono">
                {msg.timestamp}
              </span>
            </div>
          </motion.div>
        ))}

        {isLoading && (
          <div className="flex items-center gap-3 text-slate-400 text-xs py-2">
            <div className="p-2 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700">
              <Bot className="w-4 h-4 animate-bounce" />
            </div>
            <div className="flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-400" />
              <span>{t('ai.thinking')}</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Questions Pills */}
      <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-900/80 overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="flex items-center gap-2">
          {quickQueries.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors shrink-0"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 border-t border-slate-800 bg-slate-900 flex items-center gap-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t('ai.placeholder')}
          className="flex-1 px-4 py-2.5 rounded-xl bg-slate-950/80 border border-slate-800 text-xs md:text-sm text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white transition-colors shrink-0 shadow-lg shadow-blue-500/20"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );

  if (isFloating) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        {content}
      </div>
    );
  }

  return content;
};
