import React from 'react';
import { Award, CheckCircle2, HeartHandshake, Sparkles, Compass, Lightbulb, TrendingUp, ShieldCheck, ArrowRight, Shield, Target } from 'lucide-react';

const EXECUTIVE_PILLARS = [
  {
    title: '1. Executive Personal Branding',
    desc: 'Audit and refine your leadership identity to ensure your strategic value commands recognition across your industry and boardrooms.'
  },
  {
    title: '2. AI & Future-Work Readiness',
    desc: 'Align your core capabilities with rising AI paradigms, ensuring you stay indispensable as automation reshapes corporate structures.'
  },
  {
    title: '3. Strategic Career Pivot Positioning',
    desc: 'Transition from reactive execution to high-conviction decision making with a customized 90-day trajectory map.'
  },
  {
    title: '4. Enterprise Total Rewards & Advisory',
    desc: 'Equip organizations with modern incentive structures, leadership clarity, and culture that retains top executive talent.'
  },
  {
    title: '5. Sustainable High-Performance Leadership',
    desc: 'Build psychological resilience, unshakeable focus, and work-life alignment without sacrificing health or integrity.'
  }
];

export default function AboutSection({ onOpenBooking }) {
  const profilePhotoUrl = "https://static.wixstatic.com/media/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg/v1/crop/x_0,y_123,w_1067,h_1276/fill/w_856,h_1053,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/68c1c8_4c4ba09289284e7f9711a6eb51186fbb~mv2.jpg";
  const signatureUrl = "https://static.wixstatic.com/media/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png/v1/fill/w_619,h_240,al_c,lg_1,q_85,enc_avif,quality_auto/68c1c8_45dc32b7aa9b4f4483c9cc92bb2b8db4~mv2.png";

  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-about">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group max-w-sm sm:max-w-md w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/30 via-rose-500/20 to-amber-500/30 rounded-3xl blur-2xl opacity-70 group-hover:opacity-100 transition duration-500" />
              
              <div className="relative rounded-3xl overflow-hidden glass-panel shadow-2xl">
                <img
                  src={profilePhotoUrl}
                  alt="Fátima Y. Abreu Arellano - Executive Strategist & Founder"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6 founder-card-footer border-t border-[var(--border-subtle)]">
                  <h4 className="text-xl font-bold font-serif-heading">Fátima Y. Abreu Arellano</h4>
                  <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mt-0.5">Executive Advisor & Principal Strategist</p>
                  <p className="text-[11px] opacity-75 mt-1">Author of <em>"Be the Reason You Thrive"</em></p>
                </div>
              </div>
            </div>

            {/* Signature */}
            <div className="mt-6 w-48 opacity-90">
              <img src={signatureUrl} alt="Fatima Signature" className="w-full h-auto founder-signature-img" />
            </div>
          </div>

          {/* Right Column: Experience & Positioning */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-600 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Leadership Profile</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6 leading-tight">
              Architecting High-Impact <span className="gradient-text-primary">Executive Careers</span>
            </h2>

            <div className="space-y-4 text-base opacity-85 leading-relaxed font-sans mb-8">
              <p>
                I am <strong>Fátima Y. Abreu Arellano</strong>, Founder & Principal Executive Strategist at Care to Voice. Leveraging extensive global leadership experience directing Total Rewards, Workforce Transformation, and Performance Architecture across international enterprises, I equip high-achieving leaders with the strategic clarity needed to excel.
              </p>
              <p>
                As AI and market disruptions redefine corporate value, I combine data-backed enterprise advisory with tailored 1-on-1 executive positioning to ensure your career trajectory remains resilient, lucrative, and deeply aligned with your core purpose.
              </p>
            </div>

            {/* Experience Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold">Enterprise Workforce Strategy</h4>
                  <p className="text-xs opacity-75">Designing high-retention total rewards and executive talent frameworks.</p>
                </div>
              </div>

              <div className="glass-panel p-4 rounded-xl flex items-start gap-3">
                <Target className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold">AI Career Positioning</h4>
                  <p className="text-xs opacity-75">Helping leaders pivot, differentiate, and command industry authority.</p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="gradient-btn px-8 py-4 rounded-full text-sm font-bold shadow-xl"
            >
              Schedule Executive Strategy Call
            </button>
          </div>

        </div>

        {/* 5 Core Pillars Grid */}
        <div className="mt-16 pt-16 border-t border-[var(--border-subtle)]">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold mb-3">
              The 5 Pillars of <span className="gradient-text-primary">Strategic Career Advancement</span>
            </h3>
            <p className="text-sm sm:text-base opacity-85">
              Our proven methodology for driving executive alignment, brand power, and organizational impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXECUTIVE_PILLARS.map((p, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-[var(--border-subtle)] hover:border-amber-500/40 transition-all shadow-sm">
                <h4 className="font-serif-heading text-base font-bold text-amber-700 mb-2">{p.title}</h4>
                <p className="text-xs leading-relaxed opacity-85 text-slate-700">{p.desc}</p>
              </div>
            ))}

            {/* Book Callout Card */}
            <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-rose-500/5 to-amber-500/10 border border-amber-500/40 flex flex-col justify-between shadow-md">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-1">Published Strategy Guide</span>
                <h4 className="font-serif-heading text-base font-bold mb-2">Be the Reason You Thrive</h4>
                <p className="text-xs opacity-85 mb-4 text-slate-700">"Master self-leadership, career pivot positioning, and internal alignment."</p>
              </div>
              <a href="#book" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800">
                <span>Explore Book & Chapters</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
