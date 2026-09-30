import React, { useState } from 'react';
import { BookOpen, Star, Download, ShoppingCart, Check, Sparkles, X, ChevronRight } from 'lucide-react';

const CORE_SKILLS = [
  "Audit What Drives Your Core Career Decisions",
  "Build Unshakeable Executive Confidence in the AI Era",
  "Navigate Corporate Uncertainty & Organizational Shifts",
  "Command Market Value & Leverage Authentic Personal Brand",
  "Redefine High Performance Beyond External Expectations",
  "Pivot Career Trajectory Without Sacrificing Stability",
  "Master Sustainable Leadership Equilibrium & Boundaries",
  "Design a 90-Day High-Impact Execution Roadmap"
];

const CHAPTERS = [
  { num: '01', title: 'Uncovering Internal Decision Friction', summary: 'Identify hidden pressures, industry expectations, and core values driving your current trajectory.' },
  { num: '02', title: 'Executive Self-Leadership in Market Shifts', summary: 'Building psychological grounding, AI era adaptability, and clear decision-making frameworks.' },
  { num: '03', title: 'Career Positioning & Strategic Pivots', summary: 'Evaluating high-upside opportunities and structuring high-conviction career moves.' },
  { num: '04', title: 'Courage Over Comfort: Sustainable Impact', summary: 'Breaking free from golden handcuffs, setting firm boundaries, and leading with authentic voice.' }
];

export default function BookSection({ onAddToCart, onOpenBooking }) {
  const [showSampleModal, setShowSampleModal] = useState(false);
  const bookImageUrl = "https://static.wixstatic.com/media/68c1c8_ba18aae42a4143ae829b2ff0693662bc~mv2.avif/v1/fill/w_532,h_848,al_c,q_85,enc_avif,quality_auto/Be%20the%20Reason%20You%20Thrive%20-%20Book.avif";

  return (
    <section id="book" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-book">
      
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Book Render Graphic */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group cursor-pointer max-w-xs sm:max-w-sm">
              
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-500" />

              {/* Real Book Cover Container */}
              <div className="relative rounded-2xl overflow-hidden glass-panel border-amber-500/40 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500">
                <img
                  src={bookImageUrl}
                  alt="Be The Reason You Thrive Book Cover"
                  className="w-full h-auto object-cover max-h-[460px]"
                />
              </div>

            </div>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold opacity-85 text-slate-700">4.9 / 5.0 (350+ Executive Reader Reviews)</span>
            </div>
          </div>

          {/* Right Book Details */}
          <div className="lg:col-span-7">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Published Book by Fátima Y. Abreu Arellano</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-3 leading-tight">
              "Be the Reason You Thrive"
            </h2>
            <p className="text-sm font-semibold text-amber-700 uppercase tracking-widest mb-6">
              Executive Personal Brand Alignment & Purpose-Driven Leadership
            </p>

            <p className="text-base sm:text-lg opacity-85 mb-8 leading-relaxed text-slate-700">
              A comprehensive blueprint for leaders seeking to align internal conviction with external career strategy, navigate organizational pivots, and build an authentic executive brand.
            </p>

            {/* Chapters list */}
            <div className="space-y-3 mb-8">
              {CHAPTERS.map((ch, idx) => (
                <div key={idx} className="glass-panel p-4 rounded-xl flex items-start gap-4 hover:border-amber-500/50 transition-colors">
                  <span className="text-sm font-bold text-amber-600 font-mono shrink-0 pt-0.5">{ch.num}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">{ch.title}</h4>
                    <p className="text-xs opacity-75 text-slate-600 mt-0.5">{ch.summary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onAddToCart({ id: 'care-puzzle-hoodie', title: 'CARE Puzzle — Premium Pullover Hoodie', price: 59.99 })}
                className="gradient-btn px-6 py-3.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-xl"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Explore Store Items</span>
              </button>

              <a
                href="https://www.amazon.com/dp/B0D1234567"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-xs font-bold text-amber-800 hover:bg-amber-500/20 transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>Get Book on Amazon &rarr;</span>
              </a>

              <button
                onClick={() => setShowSampleModal(true)}
                className="gradient-btn-outline px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>Read Free Excerpt</span>
              </button>
            </div>
          </div>

        </div>

        {/* 8 Core Skills Walkaways Grid */}
        <div className="pt-12 border-t border-[var(--border-subtle)]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-serif-heading text-2xl font-bold mb-2">8 Executive Skills You Will Master</h3>
            <p className="text-xs sm:text-sm opacity-85 text-slate-600">Key capabilities developed throughout the chapters of this book.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CORE_SKILLS.map((skill, idx) => (
              <div key={idx} className="glass-panel p-4 rounded-xl border border-slate-200 flex items-start gap-3 hover:border-amber-500/40 transition-all shadow-xs">
                <Check className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span className="text-xs font-semibold text-slate-800 leading-snug">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Free Sample Chapter Modal */}
      {showSampleModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-8 border border-amber-500/40 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowSampleModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-amber-500" />
              <span className="text-xs font-bold uppercase tracking-wider text-amber-500">
                Chapter 1 Strategy Excerpt
              </span>
            </div>

            <h3 className="font-serif-heading text-2xl font-bold mb-4">
              Uncovering Internal Decision Friction
            </h3>

            <div className="text-sm opacity-90 space-y-4 leading-relaxed mb-6 font-serif-heading">
              <p>
                "Executive clarity is not something you passively wait for; it is actively cultivated by eliminating industry noise and aligning internal purpose with strategic positioning."
              </p>
              <p>
                "When high corporate achievement no longer yields personal fulfillment, it is not a sign of failure—it is an explicit signal to evaluate strategic alignment. What drove your career choices five years ago may no longer serve your future trajectory."
              </p>
              <p>
                "To command long-term career authority, you must examine the quiet assumptions behind your daily effort. Who are you building for? And what changes when you decide to be the primary architect of your own career?"
              </p>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  const content = `BE THE REASON YOU THRIVE by Fátima Abreu\n==================================================\nCHAPTER 1: Uncovering Internal Decision Friction\n\n"Executive clarity is not something you passively wait for; it is actively cultivated by eliminating industry noise and aligning internal purpose with strategic positioning."\n\n"When high corporate achievement no longer yields personal fulfillment, it is not a sign of failure—it is an explicit signal to evaluate strategic alignment. What drove your career choices five years ago may no longer serve your future trajectory."\n\n"To command long-term career authority, you must examine the quiet assumptions behind your daily effort. Who are you building for? And what changes when you decide to be the primary architect of your own career?"\n\n--------------------------------------------------\nCopyright (c) Care to Voice by Fátima Abreu.\n`;
                  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'BeTheReasonYouThrive_Chapter1_Excerpt.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
                className="glass-panel border border-amber-500/40 px-5 py-2.5 rounded-full text-xs font-bold text-amber-400 hover:bg-amber-500/10 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-amber-500" />
                <span>Download Excerpt (.TXT)</span>
              </button>

              <a
                href="https://www.amazon.com/dp/B0D1234567"
                target="_blank"
                rel="noreferrer"
                className="gradient-btn px-6 py-2.5 rounded-full text-xs font-bold flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                <span>Get Full Book on Amazon</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
