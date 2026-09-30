# 🎙️ Care to Voice — Executive Career Coaching & Workforce Advisory

[![Render Live](https://img.shields.io/badge/Render%20Live-care--to--voice--jobgen--ai.onrender.com-amber?style=for-the-badge&logo=render&logoColor=white)](https://care-to-voice-jobgen-ai.onrender.com/)
[![Spotify Podcast](https://img.shields.io/badge/Spotify-Care%20to%20Voice%20Podcast-1DB954?style=for-the-badge&logo=spotify&logoColor=white)](https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x)
[![YouTube](https://img.shields.io/badge/YouTube-@FatimaCaretoVoice-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@FatimaCaretoVoice)
[![Instagram](https://img.shields.io/badge/Instagram-@caretovoice-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/caretovoice)
[![Facebook](https://img.shields.io/badge/Facebook-Care%20to%20Voice-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/caretovoice)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-F%C3%A1tima%20Abreu-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/fatima-abreu-arellano/)

---

> **Empowering Leaders. Transforming Organizations. Aligning Career & Compensation.**  
> Official executive web platform for **Fátima Y. Abreu Arellano** — Author of *"Be The Reason You Thrive"*, Executive Leadership Coach, and Enterprise Total Rewards & Workforce Strategy Principal.

---

## 🔗 Official Platforms & Media Links

| Channel | Direct Access Link | Description |
| :--- | :--- | :--- |
| 🚀 **Render Web App** | [https://care-to-voice-jobgen-ai.onrender.com/](https://care-to-voice-jobgen-ai.onrender.com/) | Live Executive Platform |
| 🎙️ **Spotify Podcast** | [Listen on Spotify](https://open.spotify.com/show/2LuHJAZ3Kc1DDHOAyAib2x) | *Care to Voice Podcast Series* |
| 📺 **YouTube Channel** | [Watch on YouTube](https://www.youtube.com/@FatimaCaretoVoice) | Keynotes, Masterclasses & Shorts |
| 📸 **Instagram** | [@caretovoice](https://www.instagram.com/caretovoice) | Daily Executive Reels & Insights |
| 📘 **Facebook** | [Care to Voice Facebook](https://www.facebook.com/caretovoice) | Community Articles & Updates |
| 💼 **LinkedIn** | [Fátima Y. Abreu Arellano](https://www.linkedin.com/in/fatima-abreu-arellano/) | Executive Network & Advisory |

---

## 🌟 Executive Platform Features & Architecture

### 1. 🎯 Dedicated Standalone Service Pages
- **1-on-1 Executive Coaching**: High-impact advisory designed for senior professionals, board candidates, and leaders navigating career momentum and AI readiness.
- **Enterprise Total Rewards Consulting**: Corporate incentive architecture, cross-border workforce alignment, compensation governance, and retention strategies.

### 2. ⚡ Bottom-Right Floating Executive Action Stack
- **AI Career Quiz**: Interactive 2-minute readiness diagnostic to evaluate personal market leverage.
- **Ask Fátima AI Guide**: Conversational AI assistant providing instant answers on executive coaching, consulting, book excerpts, and podcasts.
- **Book Strategy Audit**: Direct booking integration for 1-on-1 strategic executive audits.

### 3. 🎬 Multimedia & Community Hub
- **Spotify Podcast Player**: Direct streaming integration for top episodes and podcast deep dives.
- **YouTube Video Showcase**: High-production keynote videos and short-form executive strategy reels.
- **Thrive Book Showcase**: Interactive preview of Fátima Abreu's published work, *"Be The Reason You Thrive"*.

---

## 🛠️ Technology Stack & Dependencies

- **Frontend Framework**: React 18 with Vite
- **Styling**: Tailored Modern Vanilla CSS + Glassmorphic Utility Design Tokens
- **Icons & Visual Assets**: Lucide React Iconography + High-Res SVG & WebP Media
- **Deployment Platform**: Render Static Site (`render.yaml` Blueprint automation)

---

## 🚀 Local Development Setup

```bash
# Clone the repository
git clone https://github.com/Aryan132005/JobGen.AI-Fatima-Website.git

# Navigate into project directory
cd "fatiam website Jobgen.ai"

# Install dependencies
npm install

# Start local dev server
npm run dev
```

Local server starts at: `http://localhost:5173/`

---

## 📦 Deployment Blueprint (`render.yaml`)

This project includes a native `render.yaml` blueprint for 1-click automated build and deployment:

```yaml
services:
  - type: web
    name: care-to-voice-jobgen-ai
    env: static
    buildCommand: npm install && npm run build
    staticPublishPath: ./dist
    routes:
      - type: rewrite
        source: /*
        destination: /index.html
```

---

© 2026 **Care to Voice by Fátima Y. Abreu Arellano**. All rights reserved.
