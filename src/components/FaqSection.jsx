import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles, HelpCircle, Calendar } from 'lucide-react';
import logger from '../utils/logger';

const FAQS = [
  {
    id: 1,
    category: 'Executive Coaching',
    question: 'What is the Executive Strategy Audit & 90-Day Advancement Track?',
    answer: 'It is an exclusive executive advisory experience tailored for senior leaders, directors, and ambitious executives. It combines 360° career momentum audits with strategic personal branding to position you for high-leverage roles, board seats, and market differentiation.'
  },
  {
    id: 2,
    category: 'Executive Coaching',
    question: 'How does Fátima address AI career shifts and future-proofing?',
    answer: 'Fátima evaluates your core executive competencies against market AI disruption, helping you identify high-upside strategic niches, optimize your executive brand narrative, and build an untouchable personal career moat.'
  },
  {
    id: 3,
    category: 'Workforce Advisory',
    question: 'What corporate advisory services does Care to Voice deliver to enterprises?',
    answer: 'Fátima advises enterprise leadership teams on Total Rewards Architecture, Executive Pay Governance, Global Mobility, Workforce Transformation, and Change Management during major digital or organizational transitions.'
  },
  {
    id: 4,
    category: 'Published Guide',
    question: 'Where can I access "Be The Reason You Thrive"?',
    answer: 'You can order author-signed editions and guided digital tools directly from our Thrive Store on this website, or order globally via Amazon and major booksellers.'
  },
  {
    id: 5,
    category: 'Media & Podcasts',
    question: 'Where can I stream the Care to Voice Podcast episodes?',
    answer: 'All episodes are streamed on Spotify, Apple Podcasts, and embedded in our Social Media Hub right here on the website. Each episode provides high-conviction executive insights.'
  },
  {
    id: 6,
    category: 'Consultation & Advisory',
    question: 'What takes place during the initial Executive Strategy Call?',
    answer: 'The initial consultation is a confidential 1-on-1 strategic session with Fátima to audit your current career momentum, evaluate advisory alignment, and construct your recommended 90-day trajectory map.'
  }
];

export default function FaqSection({ onOpenBooking }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [openId, setOpenId] = useState(1);

  const categories = ['All', 'Executive Coaching', 'Workforce Advisory', 'Published Guide', 'Consultation & Advisory'];

  const filteredFaqs = FAQS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (id) => {
    const nextId = openId === id ? null : id;
    setOpenId(nextId);
    logger.event('faq_toggled', { id, isOpening: !!nextId });
  };

  return (
    <section className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-400 mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>Executive Insights & Knowledge Base</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-4">
            Strategic Clarity & <span className="gradient-text-emerald">Executive FAQ</span>
          </h2>
          <p className="text-sm text-slate-400">
            Clear answers regarding Fátima’s executive coaching, enterprise workforce consulting, and advisory process.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
          <input
            type="text"
            placeholder="Search executive questions or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass-panel border border-[var(--border-subtle)] rounded-full pl-11 pr-4 py-3.5 text-xs focus:outline-none focus:border-emerald-500"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                  : 'glass-panel border border-[var(--border-subtle)] text-[var(--text-sub)] hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="glass-panel rounded-2xl border border-[var(--border-subtle)] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[var(--text-main)] hover:text-emerald-500 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-emerald-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-2 text-xs sm:text-sm text-[var(--text-sub)] leading-relaxed border-t border-[var(--border-subtle)] animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="glass-panel p-8 rounded-2xl text-center text-[var(--text-sub)] text-xs">
              No matching questions found for "{searchQuery}". Schedule a consultation directly for personalized details.
            </div>
          )}
        </div>

        {/* Bottom Booking CTA */}
        <div className="mt-12 text-center glass-panel p-6 rounded-3xl border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif-heading text-lg font-bold text-[var(--text-main)]">Ready for Executive Strategy & Positioning?</h4>
            <p className="text-xs text-[var(--text-sub)]">Schedule your confidential 1-on-1 Strategy Session with Fátima Abreu.</p>
          </div>
          <button
            onClick={onOpenBooking}
            className="gradient-btn px-6 py-3 rounded-full text-xs font-bold shrink-0 shadow-lg flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Schedule Strategy Session</span>
          </button>
        </div>

      </div>
    </section>
  );
}
