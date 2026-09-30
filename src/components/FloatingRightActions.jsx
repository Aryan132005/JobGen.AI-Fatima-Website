import React from 'react';
import { Sparkles, Bot, Calendar } from 'lucide-react';

export default function FloatingRightActions({ onOpenQuiz, onOpenChatbot, onOpenBooking }) {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 font-sans pointer-events-auto select-none animate-fadeIn">
      
      {/* Row 1: Executive Career Quiz */}
      <button
        onClick={onOpenQuiz}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-100 hover:bg-amber-200 border-2 border-amber-500 text-xs font-black text-amber-950 shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        title="Take AI Executive Career Assessment Quiz"
      >
        <Sparkles className="w-4 h-4 text-amber-700 animate-pulse shrink-0" />
        <span>Executive Career Quiz</span>
      </button>

      {/* Row 2: Ask Fatima AI Guide */}
      <button
        onClick={onOpenChatbot}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 text-xs font-extrabold hover:from-amber-300 hover:to-amber-400 transition-all duration-300 shadow-xl hover:scale-105 cursor-pointer"
        title="Chat with Fátima Executive AI Assistant"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping inline-block shrink-0"></span>
        <Bot className="w-4 h-4 text-slate-950 shrink-0" />
        <span>Ask Fátima AI Guide</span>
      </button>

      {/* Row 3: Book Strategy Audit */}
      <button
        onClick={onOpenBooking}
        className="gradient-btn flex items-center gap-2 px-4.5 py-2.5 rounded-full text-xs font-bold text-white shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
        title="Book 1-on-1 Executive Strategy Audit"
      >
        <Calendar className="w-4 h-4 text-white shrink-0" />
        <span>Book Strategy Audit</span>
      </button>

    </div>
  );
}
