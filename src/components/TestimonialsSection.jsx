import React, { useState } from 'react';
import { Star, Quote, Sparkles, Building2, UserCheck, ChevronLeft, ChevronRight } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'VP of Global Talent Strategy',
    company: 'Enterprise Tech Corporation',
    category: 'Workforce Transformation',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80',
    quote: 'Fátima’s strategic advisory during our AI integration and corporate restructuring was game-changing. She helped us preserve human leadership culture while scaling productivity.',
    highlight: 'Mastered executive AI transition & culture retention'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'Senior Managing Director',
    company: 'Global Capital & Advisory',
    category: 'Executive Coaching',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&auto=format&fit=crop&q=80',
    quote: 'Working with Fátima gave me the exact leverage needed after 15 years in high-finance. I shifted from operational burnout to commanding executive board positioning.',
    highlight: 'Commanded executive board readiness after 15 years in finance'
  },
  {
    id: 3,
    name: 'Elena Rostova',
    role: 'Chief Operating Officer',
    company: 'BioTech Innovations',
    category: 'Career Strategy',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&auto=format&fit=crop&q=80',
    quote: 'Care to Voice delivers unparalleled executive clarity. Fátima combines enterprise Total Rewards precision with powerful 1-on-1 personal brand alignment.',
    highlight: 'Enterprise Total Rewards precision with authentic brand alignment'
  },
  {
    id: 4,
    name: 'Marcus Vance',
    role: 'Head of Global Rewards',
    company: 'International Supply Logistics',
    category: 'Workforce Transformation',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&auto=format&fit=crop&q=80',
    quote: 'Fátima’s total rewards incentive architecture directly elevated our executive retention by 38% while streamlining performance alignment across 4 global regions.',
    highlight: 'Boosted executive retention metrics by 38% globally'
  }
];

export default function TestimonialsSection({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = ['All', 'Workforce Transformation', 'Executive Coaching', 'Career Strategy'];

  const filtered = activeCategory === 'All'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.category === activeCategory);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filtered.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
  };

  const currentItem = filtered[currentIndex] || filtered[0];

  return (
    <section className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-testimonials">
      {/* Background glow elements */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Impact & Endorsements</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[var(--text-main)] mb-4">
            Endorsed by <span className="gradient-text-emerald">Global Executives & Enterprises</span>
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-sub)]">
            See how Fátima’s executive coaching and enterprise workforce consulting unlock measurable growth and clarity.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-lg shadow-emerald-500/20'
                  : 'glass-panel border border-[var(--border-subtle)] text-slate-300 hover:border-emerald-500'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Testimonial Card */}
        {currentItem && (
          <div className="max-w-4xl mx-auto glass-panel p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] shadow-2xl relative">
            <Quote className="w-12 h-12 text-emerald-500/20 absolute top-6 right-6 pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Author Bio & Avatar */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left border-b md:border-b-0 md:border-r border-[var(--border-subtle)] pb-6 md:pb-0 md:pr-8">
                <img
                  src={currentItem.avatar}
                  alt={currentItem.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/40 shadow-xl mb-4"
                />
                <h3 className="font-serif-heading text-lg font-bold text-white mb-1">
                  {currentItem.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-400 mb-1">{currentItem.role}</p>
                <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-400" />
                  <span>{currentItem.company}</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Right Column: Quote & Highlight */}
              <div className="md:col-span-8 flex flex-col justify-between">
                <span className="inline-block px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-4 w-max">
                  "{currentItem.highlight}"
                </span>
                
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-serif-heading italic mb-6">
                  "{currentItem.quote}"
                </p>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center gap-2">
                    {filtered.map((_, idx) => (
                      <span
                        key={idx}
                        className={`h-2 rounded-full transition-all ${
                          idx === currentIndex ? 'w-6 bg-emerald-500' : 'w-2 bg-slate-700'
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevSlide}
                      className="p-2 rounded-full glass-panel hover:border-emerald-500 text-slate-300 hover:text-white transition-all"
                      aria-label="Previous Testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 rounded-full glass-panel hover:border-emerald-500 text-slate-300 hover:text-white transition-all"
                      aria-label="Next Testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="gradient-btn px-8 py-4 rounded-full text-xs font-bold text-slate-950 shadow-xl hover:scale-105 transition-transform"
          >
            Schedule Executive Strategy Audit
          </button>
        </div>

      </div>
    </section>
  );
}
