import React, { useState } from 'react';
import { Play, Eye, Clock, ExternalLink, X, Film, Sparkles } from 'lucide-react';

const YouTubeIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const YOUTUBE_VIDEOS = [
  {
    id: 'video-main',
    title: 'Care to Voice — Strategic Leadership & Career Alignment Masterclass',
    youtubeId: '1ZzmPt5W-IU',
    videoUrl: 'https://www.youtube.com/watch?v=1ZzmPt5W-IU',
    embedUrl: 'https://www.youtube.com/embed/1ZzmPt5W-IU?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/1ZzmPt5W-IU/hqdefault.jpg',
    duration: '15:40',
    views: '12.4k views',
    category: 'Full Masterclass',
    type: 'video',
    description: 'Full masterclass by Fatima Y. Abreu on discovering true career direction, self-leadership, and navigating workforce transformation.'
  },
  {
    id: 'short-1',
    title: 'Sports & High Performance Mindset in Leadership',
    youtubeId: 'D_qpDFjbpU0',
    videoUrl: 'https://www.youtube.com/shorts/D_qpDFjbpU0',
    embedUrl: 'https://www.youtube.com/embed/D_qpDFjbpU0?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/D_qpDFjbpU0/hqdefault.jpg',
    duration: '0:58',
    views: '8.2k views',
    category: 'Shorts',
    type: 'short',
    description: 'Applying high-performance sports discipline, focus, and resilience to corporate career pivots and leadership.'
  },
  {
    id: 'short-2',
    title: 'Breaking Free From Golden Handcuffs & Finding Purpose',
    youtubeId: 'lrFsHNfIPqI',
    videoUrl: 'https://www.youtube.com/shorts/lrFsHNfIPqI',
    embedUrl: 'https://www.youtube.com/embed/lrFsHNfIPqI?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/lrFsHNfIPqI/hqdefault.jpg',
    duration: '0:45',
    views: '14.5k views',
    category: 'Shorts',
    type: 'short',
    description: 'How to evaluate whether external success matches your internal values before taking your next big career move.'
  },
  {
    id: 'short-3',
    title: 'Navigating AI & Evolving Workforce Expectations',
    youtubeId: 'xHAx9XMdj_k',
    videoUrl: 'https://www.youtube.com/shorts/xHAx9XMdj_k',
    embedUrl: 'https://www.youtube.com/embed/xHAx9XMdj_k?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/xHAx9XMdj_k/hqdefault.jpg',
    duration: '0:52',
    views: '9.8k views',
    category: 'Shorts',
    type: 'short',
    description: 'Key strategies for staying indispensable and aligned in an AI-driven global job market.'
  },
  {
    id: 'short-4',
    title: 'Lead From The Inside Out: The CARE Framework',
    youtubeId: 'zHDQoEyvfEA',
    videoUrl: 'https://www.youtube.com/shorts/zHDQoEyvfEA',
    embedUrl: 'https://www.youtube.com/embed/zHDQoEyvfEA?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/zHDQoEyvfEA/hqdefault.jpg',
    duration: '0:55',
    views: '11.1k views',
    category: 'Shorts',
    type: 'short',
    description: 'Comfort, Ambition, Renewal, and Equilibrium — the core 4 pillars of self-leadership.'
  },
  {
    id: 'short-5',
    title: 'Choosing Courage Over Comfort in Career Decisions',
    youtubeId: 'irBGnpgrFP4',
    videoUrl: 'https://www.youtube.com/shorts/irBGnpgrFP4',
    embedUrl: 'https://www.youtube.com/embed/irBGnpgrFP4?autoplay=1',
    thumbnail: 'https://img.youtube.com/vi/irBGnpgrFP4/hqdefault.jpg',
    duration: '0:48',
    views: '15.3k views',
    category: 'Shorts',
    type: 'short',
    description: 'Why stepping into discomfort is the single fastest way to unlock genuine career clarity.'
  }
];

export default function YouTubeSection() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = ['All', 'YouTube Videos', 'Shorts'];

  const filteredVideos = activeTab === 'All'
    ? YOUTUBE_VIDEOS
    : (activeTab === 'YouTube Videos'
        ? YOUTUBE_VIDEOS.filter(v => v.type === 'video')
        : YOUTUBE_VIDEOS.filter(v => v.type === 'short'));

  return (
    <section id="youtube" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)]">
      
      {/* Background Subtle Red Radial Accent Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-bold uppercase tracking-widest text-red-500 mb-3 shadow-md">
              <YouTubeIcon className="w-4 h-4 text-red-500 fill-red-500/20" />
              <span>Official YouTube Channel</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold tracking-tight">
              YouTube <span className="text-red-500">Videos & Shorts</span>
            </h2>
            <p className="text-sm opacity-80 max-w-2xl mt-2 leading-relaxed font-medium">
              Explore Fátima Abreu's official YouTube videos and high-impact Shorts on career clarity, leadership, and executive growth.
            </p>
          </div>

          <a
            href="https://www.youtube.com/@FatimaCaretoVoice"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center justify-center gap-2.5 shadow-xl transition-all duration-300 transform hover:scale-105 shrink-0"
          >
            <YouTubeIcon className="w-4 h-4 fill-white" />
            <span>Visit @FatimaCaretoVoice</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all shrink-0 border ${
                activeTab === cat
                  ? 'bg-red-600 text-white border-red-500 shadow-lg shadow-red-600/30'
                  : 'glass-panel text-[var(--text-main)] border-[var(--border-subtle)] hover:border-red-500/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video) => (
            <div
              key={video.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-[var(--border-subtle)] shadow-xl"
            >
              {/* Thumbnail Container */}
              <div
                onClick={() => setSelectedVideo(video)}
                className="relative aspect-video overflow-hidden group cursor-pointer block bg-slate-900"
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-bold flex items-center gap-1">
                  <Clock className="w-3 h-3 text-red-400" />
                  <span>{video.duration}</span>
                </div>

                {/* Category / Type Badge */}
                <div className={`absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider border backdrop-blur-md ${
                  video.type === 'short'
                    ? 'bg-red-600/90 text-white border-red-400'
                    : 'bg-black/75 text-red-400 border-red-500/30'
                }`}>
                  {video.category}
                </div>
              </div>

              {/* Info Body */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3
                    onClick={() => setSelectedVideo(video)}
                    className="font-bold text-sm sm:text-base leading-snug line-clamp-2 mb-2 group-hover:text-red-500 transition-colors cursor-pointer"
                  >
                    {video.title}
                  </h3>
                  <p className="text-xs opacity-75 line-clamp-2 leading-relaxed mb-4">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-[var(--border-subtle)] text-[11px] font-semibold opacity-80">
                  <span className="flex items-center gap-1.5 text-amber-500">
                    <Eye className="w-3.5 h-3.5" />
                    {video.views}
                  </span>

                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1"
                    >
                      <span>Play Video</span>
                      <Play className="w-3 h-3 fill-red-500" />
                    </button>

                    <a
                      href={video.videoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-slate-500 hover:text-red-500"
                      title="Open on YouTube"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl glass-panel rounded-3xl overflow-hidden border border-red-500/40 shadow-2xl flex flex-col">
            
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <YouTubeIcon className="w-5 h-5 text-red-500 fill-red-500" />
                <h3 className="font-bold text-sm sm:text-base text-white line-clamp-1 pr-4">
                  {selectedVideo.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedVideo(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Iframe Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={selectedVideo.embedUrl}
                title={selectedVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <p className="text-slate-300 font-medium line-clamp-1">
                {selectedVideo.description}
              </p>

              <a
                href={selectedVideo.videoUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-red-600 hover:bg-red-700 text-white font-bold inline-flex items-center gap-2 shrink-0 self-end sm:self-auto"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
