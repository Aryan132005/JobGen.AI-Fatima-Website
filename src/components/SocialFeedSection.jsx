import React from 'react';
import { ExternalLink, Sparkles } from 'lucide-react';

const InstagramIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function SocialFeedSection() {
  return (
    <section className="py-20 relative overflow-hidden border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Social Media Community</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold">
            Connect with <span className="gradient-text-primary">Care to Voice</span>
          </h2>
          <p className="text-sm sm:text-base opacity-80 mt-2">
            Follow Fátima Abreu on Instagram & Facebook for daily executive career insights, leadership reels, and community updates.
          </p>
        </div>

        {/* 2 ROWS: Row 1 Instagram | Row 2 Facebook */}
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* ROW 1: INSTAGRAM */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-pink-500/50 transition-all bg-gradient-to-r from-pink-500/5 via-rose-500/5 to-amber-500/5">
            <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white flex items-center justify-center shadow-lg shrink-0">
                <InstagramIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Instagram
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-pink-500/15 text-pink-600 text-xs font-extrabold">
                    @caretovoice
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md leading-relaxed font-medium">
                  Follow for daily executive reels, personal brand tips, and behind-the-scenes coaching perspectives.
                </p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/caretovoice/"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white flex items-center gap-2.5 shadow-xl bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] hover:scale-105 transition-all shrink-0"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* ROW 2: FACEBOOK */}
          <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-blue-500/50 transition-all bg-gradient-to-r from-blue-500/5 via-sky-500/5 to-indigo-500/5">
            <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
              <div className="w-16 h-16 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center shadow-lg shrink-0">
                <FacebookIcon className="w-8 h-8" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-slate-900">
                    Facebook Page
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/15 text-blue-600 text-xs font-extrabold">
                    Care to Voice
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md leading-relaxed font-medium">
                  Join our official Facebook page for executive articles, strategic career discussions, and live announcements.
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/caretovoice"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold text-white flex items-center gap-2.5 shadow-xl bg-[#1877F2] hover:bg-[#166fe5] hover:scale-105 transition-all shrink-0"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Follow on Facebook</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
