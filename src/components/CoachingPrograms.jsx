import React, { useState } from 'react';
import { Target, Users, Zap, CheckCircle2, ArrowRight, ShieldCheck, Award, Sparkles, Calculator, Maximize2, X, Compass, Lightbulb, TrendingUp } from 'lucide-react';
import careerFramework from '../assets/career_framework.jpg';
import careerRoadmap from '../assets/career_clarity_roadmap.jpg';

const SERVICES = [
  {
    id: 'coaching',
    tabTitle: 'Executive Coaching & AI Career Alignment',
    icon: Target,
    badge: 'FOR EXECUTIVES & RISING LEADERS',
    heading: 'Command Your Career Trajectory & Executive Authority',
    subtitle: 'High-impact 1-on-1 advisory designed to audit your career momentum, position your executive brand, and secure high-value alignment.',
    image: careerFramework,
    secondaryImage: careerRoadmap,
    packages: [
      {
        title: 'Executive Advisory Session (1-on-1)',
        desc: 'A high-conviction 60-minute strategic audit to solve immediate pivot challenges, evaluate offer positioning, or resolve career friction.',
        badge: 'Strategic Intensive'
      },
      {
        title: '90-Day Executive Elevation Track',
        desc: 'Structured 3-month coaching partnership focused on personal brand positioning, board readiness, and strategic industry visibility.',
        badge: 'Signature Track'
      },
      {
        title: 'Future-Proof Career & AI Audit',
        desc: 'Comprehensive evaluation of your skills against AI shifts, identifying high-upside growth areas and building an untouchable career moat.',
        badge: 'AI Preparedness'
      }
    ],
    frameworkSteps: [
      {
        step: '01',
        title: 'STRATEGIC AUDIT',
        desc: 'Evaluating Career Velocity & Market Moat',
        points: ['Identify Hidden Career Friction', 'Audit Current Market Leverage', 'Map Personal Value Proposition', 'Establish High-Yield Goals']
      },
      {
        step: '02',
        title: 'AI & MARKET REALIGNMENT',
        desc: 'Future-Proofing Capability & Positioning',
        points: ['Evaluate Tech & AI Shift Impact', 'Identify High-Upside Niches', 'Optimize Executive Narrative', 'Target High-Yield Opportunities']
      },
      {
        step: '03',
        title: 'EXECUTIVE BRAND POWER',
        desc: 'Authority & Industry Visibility',
        points: ['Refine Executive LinkedIn & Portfolio', 'Build Boardroom Presence', 'Develop Strategic Industry Networks', 'Command Compensation Authority']
      },
      {
        step: '04',
        title: 'LONG-TERM EQUILIBRIUM',
        desc: 'Sustainable High Performance & Ownership',
        points: ['Build a 90-Day Action Roadmap', 'Secure Stakeholder Alignment', 'Protect Personal Well-being & Focus', 'Maintain Unshakeable Direction']
      }
    ],
    features: [
      'Comprehensive 360° Executive Career & Compensation Audit',
      'Personalized 90-Day Strategic Positioning & Advancement Plan',
      'Direct 1-on-1 Executive Advisory with Fátima Abreu',
      'AI & Market Impact Readiness Assessment for Senior Roles',
      'Negotiation & Executive Offer Strategy Frameworks',
      'Direct Priority Support & Voice Note Accountability'
    ],
    outcome: 'Eliminate career friction, command executive compensation, and establish an authentic, future-ready personal brand.',
    ctaText: 'Book Strategy Session'
  },
  {
    id: 'consulting',
    tabTitle: 'Enterprise Total Rewards & Workforce Advisory',
    icon: Users,
    badge: 'STRATEGY. CULTURE. RETENTION.',
    heading: 'Workforce Strategy That Retains Top Talent',
    subtitle: 'Enterprise-grade Total Rewards, executive incentive architecture, and workforce transformation consulting built for modern organizations.',
    image: 'https://static.wixstatic.com/media/68c1c8_82d056f3a13343a4a83525b098ec1584~mv2.avif/v1/fill/w_834,h_556,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Total%20Rewards%20%26%20Worforce%20Services.avif',
    linkedinUrl: 'https://www.linkedin.com/in/fatima-abreu-arellano/',
    consultingPillars: [
      {
        title: '1. EXECUTIVE & TOTAL REWARDS ARCHITECTURE',
        desc: 'Designing market-competitive pay bands, incentive structures, equity plans, and executive compensation governance.'
      },
      {
        title: '2. TALENT RETENTION & VALUE PROPOSITION',
        desc: 'Crafting holistic employee value propositions, wellbeing benefits, and culture frameworks that keep peak performers engaged.'
      },
      {
        title: '3. CROSS-BORDER & GLOBAL MOBILITY',
        desc: 'International transfer policies, expat compensation structures, cross-border compliance advisory, and relocation strategies.'
      },
      {
        title: '4. GOVERNANCE & BOARD ADVISORY',
        desc: 'Compensation committee governance, regulatory pay equity audits, executive risk management, and board alignment.'
      },
      {
        title: '5. HR ANALYTICS & TALENT OPTIMIZATION',
        desc: 'Advanced pay equity diagnostics, attrition predictive modeling, and data-driven workforce planning.'
      },
      {
        title: '6. CHANGE MANAGEMENT & LEADERSHIP TRANSFORMATION',
        desc: 'Leading cross-functional organizational restructuring, HR technology adoption, and executive change messaging.'
      }
    ],
    features: [
      'Total Rewards Strategy & Value Proposition Redesign',
      'Workforce Performance Architecture & Incentive Systems',
      'AI & Technology Impact Assessment on Corporate Roles',
      'Executive Retention & Organizational Alignment Frameworks',
      'Change Management Advisory for Board & Leadership Teams',
      'Global Reward Governance & Benchmarking Diagnostics'
    ],
    outcome: 'Build an agile, future-ready enterprise workforce aligned with organizational growth objectives and high retention metrics.',
    ctaText: 'Schedule Corporate Consultation'
  }
];

export default function CoachingPrograms({ onOpenBooking, onOpenCalculator, activeTabProp, onTabChange, hideTabs = false }) {
  const [activeTab, setActiveTab] = useState(activeTabProp || 'coaching');
  const [isZoomModalOpen, setIsZoomModalOpen] = useState(false);
  const [activeZoomImage, setActiveZoomImage] = useState(null);

  React.useEffect(() => {
    if (activeTabProp) {
      setActiveTab(activeTabProp);
    }
  }, [activeTabProp]);

  const handleTabClick = (id) => {
    setActiveTab(id);
    if (onTabChange) onTabChange(id);
  };

  const openZoomImage = (imgSrc) => {
    setActiveZoomImage(imgSrc);
    setIsZoomModalOpen(true);
  };

  const currentService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

  return (
    <section id="coaching" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-coaching">
      <div id="consulting" className="absolute -top-24 left-0" />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{activeTab === 'coaching' ? '1-on-1 Executive Coaching' : 'Corporate Advisory Services'}</span>
          </div>

          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold mb-6">
            {activeTab === 'coaching' ? (
              <>Strategic Advisory & <span className="gradient-text-primary">Executive Coaching</span></>
            ) : (
              <>Enterprise Total Rewards & <span className="gradient-text-primary">Workforce Advisory</span></>
            )}
          </h2>

          <p className="text-base sm:text-lg opacity-85">
            {activeTab === 'coaching'
              ? 'Empowering ambitious executives and senior leaders to audit career trajectory, build authority, and navigate AI shifts.'
              : 'Equipping global enterprises and growing organizations with market-leading compensation architecture and talent retention strategies.'}
          </p>
        </div>

        {/* Filter Tabs (Only shown when not dedicated single-page mode) */}
        {!hideTabs && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {SERVICES.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleTabClick(item.id)}
                  className={`px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2.5 ${
                    isActive
                      ? 'gradient-btn shadow-lg shadow-amber-500/20'
                      : 'glass-panel opacity-80 hover:opacity-100 hover:border-amber-500/50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-500'}`} />
                  <span>{item.tabTitle}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Tab Content Display */}
        {currentService && (
          <div className="glass-panel rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-7">
                <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-widest text-amber-500 mb-4">
                  {currentService.badge}
                </span>

                <h3 className="font-serif-heading text-2xl sm:text-4xl font-bold mb-4 leading-tight">
                  {currentService.heading}
                </h3>

                <p className="text-sm sm:text-base opacity-85 mb-8 leading-relaxed">
                  {currentService.subtitle}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {currentService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm opacity-90 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={onOpenBooking}
                    className="gradient-btn px-7 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 shadow-xl"
                  >
                    <span>{currentService.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={onOpenCalculator}
                    className="gradient-btn-outline px-6 py-3.5 rounded-full text-xs font-semibold flex items-center gap-2"
                  >
                    <Calculator className="w-4 h-4 text-amber-500" />
                    <span>Calculate 90-Day Trajectory Score</span>
                  </button>
                </div>
              </div>

              {/* Right Image Display & Outcome Box */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                
                {/* Clickable Image Box */}
                <div 
                  className="rounded-2xl overflow-hidden glass-panel shadow-xl cursor-pointer group/img transition-all hover:shadow-2xl border border-slate-200 relative"
                  onClick={() => openZoomImage(currentService.image)}
                >
                  <img
                    src={currentService.image}
                    alt={currentService.heading}
                    className="w-full h-auto max-h-[380px] object-contain bg-white/95 p-2 transform group-hover/img:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 backdrop-blur-md opacity-90 group-hover/img:opacity-100">
                    <Maximize2 className="w-3 h-3 text-amber-400" />
                    <span>Click to Zoom HD</span>
                  </div>
                </div>

                <div className="glass-panel p-5 rounded-2xl relative">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-500 mb-2">
                    <Award className="w-4 h-4" />
                    <span>Strategic Impact</span>
                  </div>
                  <p className="text-xs sm:text-sm opacity-85 leading-relaxed mb-4">
                    "{currentService.outcome}"
                  </p>

                  <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] opacity-75 font-medium">
                    <span className="flex items-center gap-1 text-amber-500">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified Methodology
                    </span>
                    <span>Direct Access to Fátima</span>
                  </div>
                </div>

              </div>

              {/* 4-Step Executive Framework */}
              {currentService.frameworkSteps && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-slate-200">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-extrabold uppercase tracking-wider text-amber-700 flex items-center gap-2">
                      <Compass className="w-4 h-4" />
                      <span>Executive Advancement 4-Step Framework:</span>
                    </h4>
                    {currentService.secondaryImage && (
                      <button
                        onClick={() => openZoomImage(currentService.secondaryImage)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
                      >
                        <Maximize2 className="w-3 h-3" />
                        <span>View Roadmap Diagram</span>
                      </button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentService.frameworkSteps.map((step, sIdx) => (
                      <div key={sIdx} className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-amber-500/50 hover:shadow-md transition-all flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="w-8 h-8 rounded-full bg-amber-500 text-slate-950 font-bold text-xs flex items-center justify-center shadow-xs">
                              {step.step}
                            </span>
                            <Sparkles className="w-4 h-4 text-amber-500" />
                          </div>
                          <h5 className="font-serif-heading text-sm font-extrabold text-slate-900 mb-1">
                            {step.title}
                          </h5>
                          <p className="text-[11px] font-semibold text-amber-700 mb-3 leading-snug">
                            {step.desc}
                          </p>
                          <ul className="space-y-1.5 border-t border-slate-100 pt-3">
                            {step.points.map((pt, pIdx) => (
                              <li key={pIdx} className="text-xs text-slate-700 font-medium flex items-start gap-1.5">
                                <span className="text-amber-500 font-bold">•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Core Program Packages */}
              {currentService.packages && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-4">Advisory Pathways:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {currentService.packages.map((pkg, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-left">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-700 block mb-1">{pkg.badge}</span>
                        <h5 className="font-serif-heading text-sm font-bold mb-1 text-slate-900">{pkg.title}</h5>
                        <p className="text-xs opacity-80 text-slate-700 leading-snug">{pkg.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Consulting Pillars */}
              {currentService.consultingPillars && (
                <div className="lg:col-span-12 col-span-full mt-8 pt-6 border-t border-slate-200">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-amber-700 mb-4">6 Enterprise Consulting Pillars:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentService.consultingPillars.map((pil, pIdx) => (
                      <div key={pIdx} className="p-4 rounded-2xl bg-white border border-slate-200 text-left shadow-xs hover:border-amber-500/40 transition-all">
                        <h5 className="font-serif-heading text-xs font-bold mb-1.5 text-amber-800 tracking-wide">{pil.title}</h5>
                        <p className="text-xs text-slate-700 leading-relaxed">{pil.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* FULLSCREEN IMAGE ZOOM MODAL */}
      {isZoomModalOpen && activeZoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsZoomModalOpen(false)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setIsZoomModalOpen(false)}
              className="absolute -top-12 right-0 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 text-xs font-bold flex items-center gap-1 backdrop-blur-md transition-all"
            >
              <X className="w-5 h-5" />
              <span>Close View</span>
            </button>
            <img
              src={activeZoomImage}
              alt="High Definition Framework & Roadmap Diagram"
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl bg-white shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white/80 text-xs font-semibold mt-4 text-center">
              Executive Career Clarity Framework & Roadmap — Care to Voice by Fátima Abreu
            </p>
          </div>
        </div>
      )}

    </section>
  );
}
