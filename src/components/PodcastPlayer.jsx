import React from 'react';
import { ExternalLink, Radio, ArrowRight } from 'lucide-react';

const SpotifyIcon = ({ className = "w-4 h-4" }) => (
  <svg className={`${className} fill-current`} viewBox="0 0 24 24">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.341c-.219.359-.692.475-1.052.256-2.879-1.76-6.502-2.158-10.771-1.18-.409.094-.816-.164-.909-.572-.094-.408.164-.816.572-.909 4.673-1.07 8.667-.611 11.908 1.365.36.219.475.692.252 1.05zm1.472-3.279c-.275.449-.861.593-1.31.318-3.297-2.028-8.324-2.614-12.222-1.431-.502.152-1.034-.131-1.187-.633-.152-.502.131-1.034.633-1.187 4.455-1.353 10.004-.7 13.768 1.616.449.276.593.862.318 1.315zm.131-3.418C15.205 8.3 8.788 8.082 5.097 9.202c-.611.185-1.258-.168-1.442-.779-.185-.612.168-1.258.779-1.442 4.248-1.289 11.332-1.042 15.918 1.681.549.326.732 1.037.406 1.586-.326.548-1.037.731-1.586.405z"/>
  </svg>
);

const SPOTIFY_SHOW_URL = "https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x";

const EPISODES = [
  {
    id: 1,
    title: 'Episode 1: Navigating AI Transformation & Strategic Shift',
    duration: '24 min',
    date: 'Sep 2026',
    spotifyUrl: 'https://open.spotify.com/episode/7gzTMXApwqbrkKSOLD9r5a',
    description: 'How to maintain your competitive edge, build adaptability, and navigate corporate technology evolution.'
  },
  {
    id: 2,
    title: 'Episode 2: Breaking Free From Golden Handcuffs & Finding Purpose',
    duration: '19 min',
    date: 'Aug 2026',
    spotifyUrl: 'https://open.spotify.com/episode/1CYX8VKULsDXmc6X7Zd3LI',
    description: 'Recognizing when external success no longer yields internal alignment, and structuring your next pivot.'
  },
  {
    id: 3,
    title: 'Episode 3: Executive Leadership & High-Retention Culture',
    duration: '31 min',
    date: 'Jul 2026',
    spotifyUrl: 'https://open.spotify.com/episode/7r63a7TujMLwDBmjBlZ77r',
    description: 'Structuring compensation, employee value propositions, and corporate environments that retain top talent.'
  },
  {
    id: 4,
    title: 'Episode 4: Eliminating Career Friction & 90-Day Trajectory',
    duration: '26 min',
    date: 'Jun 2026',
    spotifyUrl: 'https://open.spotify.com/episode/1yp4prKNML7hAaAAZKncOJ',
    description: 'Practical framework to audit career momentum, eliminate internal doubts, and execute strategic goals.'
  },
  {
    id: 5,
    title: 'Episode 5: Choosing Courage Over Comfort in High-Stakes Roles',
    duration: '22 min',
    date: 'May 2026',
    spotifyUrl: 'https://open.spotify.com/episode/4WAXhP2TVB0zJCqDy9QhQ6',
    description: 'Why stepping into discomfort is the fastest catalyst for genuine personal clarity and executive growth.'
  },
  {
    id: 6,
    title: 'Episode 6: Executive Voice & Personal Brand Authority',
    duration: '28 min',
    date: 'Apr 2026',
    spotifyUrl: 'https://open.spotify.com/episode/16LfoDVEjDsctm5d6sjJ1B',
    description: 'Building an authentic personal brand, establishing industry authority, and leading with unshakeable conviction.'
  }
];

export default function PodcastPlayer() {
  const podcastHeroImageUrl = "https://static.wixstatic.com/media/68c1c8_1342928a601641e7ac4e5a3fecf67179~mv2.avif/v1/fill/w_600,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Care%20to%20Voice%20Podcast%20-%20Hero%20image.avif";

  return (
    <section id="podcast" className="py-24 relative overflow-hidden border-t border-[var(--border-subtle)] section-multicolor-podcast">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* PODCAST HERO BANNER (Layout matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 items-center mb-16 max-w-5xl mx-auto">
          
          {/* Left: Yellow Care to Voice Artwork */}
          <div className="md:col-span-5 flex justify-center">
            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noreferrer"
              className="relative group max-w-sm w-full block cursor-pointer"
            >
              <div className="absolute -inset-3 bg-gradient-to-tr from-amber-500/30 via-emerald-500/20 to-amber-500/30 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
              <div className="relative rounded-2xl overflow-hidden glass-panel shadow-2xl border border-amber-500/30">
                <img
                  src={podcastHeroImageUrl}
                  alt="Care to Voice Podcast — Hosted by Fátima Abreu"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          </div>

          {/* Right: Podcast Text Content & Listen on Spotify Button */}
          <div className="md:col-span-7 text-left">
            <h2 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight">
              Listen to the Podcast
            </h2>

            <p className="text-base sm:text-xl text-slate-700 font-medium leading-relaxed mb-2">
              Conversations on navigating change, making decisions, and choosing your next direction.
            </p>

            <p className="text-base sm:text-xl text-slate-900 font-extrabold italic mb-8">
              No noise. Just perspective.
            </p>

            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#A89F91] hover:bg-[#968d7f] text-white font-extrabold text-sm sm:text-base tracking-wider shadow-xl hover:scale-105 transition-all"
            >
              <span>LISTEN ON SPOTIFY &gt;</span>
            </a>
          </div>

        </div>

        {/* EPISODES GRID (1 to 6 - Direct Spotify Links) */}
        <div className="pt-12 border-t border-[var(--border-subtle)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2">
                <SpotifyIcon className="w-3.5 h-3.5 fill-emerald-600" />
                <span>Spotify Podcast Episodes</span>
              </div>
              <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-slate-900">
                Explore All Episodes (1 - 6)
              </h3>
            </div>

            <a
              href={SPOTIFY_SHOW_URL}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full bg-[#1DB954] hover:bg-[#1aa34a] text-slate-950 text-xs font-extrabold inline-flex items-center gap-2 shadow-md hover:scale-105 transition-all"
            >
              <SpotifyIcon className="w-4 h-4 fill-slate-950" />
              <span>Open Channel on Spotify</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EPISODES.map((ep) => (
              <a
                key={ep.id}
                href={ep.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-200 hover:border-emerald-500/80 transition-all flex flex-col justify-between group shadow-sm hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-full bg-[#1DB954] text-slate-950 font-extrabold text-xs flex items-center justify-center shadow-md">
                      {ep.id}
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold">{ep.duration} • {ep.date}</span>
                  </div>

                  <h4 className="font-serif-heading font-bold text-base text-slate-900 leading-snug mb-2 group-hover:text-emerald-600 transition-colors">
                    {ep.title}
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                    {ep.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span className="flex items-center gap-1.5">
                    <SpotifyIcon className="w-4 h-4 fill-emerald-600" />
                    <span>Open Episode on Spotify</span>
                  </span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
