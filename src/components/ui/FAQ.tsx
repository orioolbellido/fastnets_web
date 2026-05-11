'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export default function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-[#2A2A2A]">
      {items.map((item, i) => (
        <div key={i}>
          <button
            id={`faq-${i}`}
            className="w-full flex items-center justify-between py-5 text-left gap-4 group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className={`text-sm font-medium transition-colors ${openIndex === i ? 'text-[#F5F0E8]' : 'text-[#A89F91] group-hover:text-[#F5F0E8]'}`}>
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === i ? 45 : 0 }}
              transition={{ duration: 0.2 }}
              className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                openIndex === i ? 'border-[#2563EB] bg-[#2563EB]/10' : 'border-[#2A2A2A]'
              }`}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M5 2v6M2 5h6" stroke={openIndex === i ? '#2563EB' : '#6B7280'} strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="text-sm text-[#6B7280] leading-relaxed pb-5 pr-8">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
