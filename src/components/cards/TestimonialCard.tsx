import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TestimonialItem } from '../../types';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      className="flex flex-col justify-between p-6 rounded-2xl glass-panel border border-slate-700/60 bg-slate-900/80 shadow-xl relative"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-800 pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>

        {/* Feedback content */}
        <p className="text-xs md:text-sm text-slate-300 italic leading-relaxed mb-6">
          "{testimonial.contentKey}"
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover border border-slate-700"
        />
        <div>
          <h4 className="text-sm font-bold text-white">{testimonial.name}</h4>
          <p className="text-xs text-slate-400">
            {testimonial.roleKey} • <span className="text-blue-400">{testimonial.companyKey}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
};
