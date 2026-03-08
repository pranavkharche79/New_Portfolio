# 🚀 Pranav | Developer Portfolio

A modern, accessible, production-ready developer portfolio built with **React**, **TypeScript**, **TailwindCSS**, and **Three.js**. Features an interactive 3D hero, project gallery powered by JSON, video playback for demos, dark/light themes, and full responsiveness.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4?logo=tailwindcss)
![Three.js](https://img.shields.io/badge/Three.js-r170-black?logo=three.js)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

- **3D Interactive Hero** — Floating geometric shapes (torus knot + spheres) that react to pointer/touch via `@react-three/fiber`
- **Projects from JSON** — Load, filter, and display projects from `/public/data/projects.json`
- **Video Demos** — Embedded `react-player` supporting YouTube, Vimeo, and direct links
- **Dark / Light Mode** — System-preference-aware toggle, persisted in localStorage
- **Framer Motion** — Smooth staggered entrances, modal animations, and micro-interactions
- **Fully Responsive** — Mobile-first Tailwind breakpoints (sm → md → lg)
- **Accessible** — ARIA attributes, focus management, keyboard navigation, semantic HTML
- **SEO Ready** — Meta tags, Open Graph, semantic headings
- **Code-Split** — Three.js, Framer Motion, and react-player are loaded in separate chunks
- **CI/CD** — GitHub Actions workflow for lint → typecheck → test → build

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript (strict) |
| Build | Vite 5 |
| Styling | TailwindCSS v4 (JIT) |
| 3D | @react-three/fiber + @react-three/drei |
| Animation | Framer Motion |
| Video | react-player |
| Testing | Vitest + React Testing Library |
| Lint | ESLint + Prettier |

---

## 🏁 Getting Started

### Prerequisites

- **Node.js** 20+ (recommended: 22+)
- **npm** 10+

### Install & Run

```bash
# Clone the repo
git clone https://github.com/yourusername/new-portfolio.git
cd new-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview    # preview the production build locally
```

### Lint & Type Check

```bash
npm run lint       # ESLint
npm run typecheck  # TypeScript strict check
npm run format     # Prettier
```

### Run Tests

```bash
npm run test       # Run all tests once
npm run test:watch # Watch mode
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.tsx        # Sticky nav, mobile menu, theme toggle
│   ├── Hero3D.tsx        # 3D scene (lazy loaded)
│   ├── ProjectsGrid.tsx  # Projects grid with filters
│   ├── ProjectCard.tsx   # Individual project card
│   ├── ProjectModal.tsx  # Detail modal with carousel & video
│   ├── VideoPlayer.tsx   # react-player wrapper
│   ├── About.tsx         # About section with skills
│   ├── Contact.tsx       # Contact form & links
│   ├── Footer.tsx        # Footer
│   ├── ThemeProvider.tsx  # Dark/light mode context
│   └── __tests__/        # Unit tests
├── lib/
│   └── getProjects.ts    # Fetch & cache projects JSON
├── types/
│   └── project.ts        # Project TypeScript interface
├── App.tsx               # Main app component
├── main.tsx              # Entry point
└── index.css             # Design tokens & global styles
```

---

## 📝 Adding a New Project

Edit `/public/data/projects.json` and add a new object:

```json
{
  "id": "my-new-project",
  "title": "My New Project",
  "short": "One-liner description for the card.",
  "description": "Full description for the modal.",
  "tech": ["React", "Node.js", "PostgreSQL"],
  "year": 2025,
  "thumbnail": "/assets/projects/my-project-thumb.jpg",
  "images": ["/assets/projects/my-project-1.jpg"],
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "githubUrl": "https://github.com/you/my-project",
  "liveUrl": "https://my-project.example.com",
  "isAI": false
}
```

### Field Reference

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `id` | string | ✅ | Unique slug |
| `title` | string | ✅ | Display title |
| `short` | string | ✅ | Card description (1-2 lines) |
| `description` | string | ✅ | Full modal description |
| `tech` | string[] | ✅ | Technology tags |
| `year` | number | ✅ | Project year |
| `thumbnail` | string | ✅ | Card thumbnail path |
| `images` | string[] | ✅ | Gallery images (can be empty `[]`) |
| `videoUrl` | string | ❌ | YouTube/Vimeo/direct video link |
| `githubUrl` | string | ✅ | GitHub repository URL |
| `liveUrl` | string | ❌ | Live deployment URL |
| `isAI` | boolean | ✅ | `true` = AI-assisted project badge |

### Image Guidelines

- **Thumbnail**: 16:9 aspect ratio, min 600×340px, JPG/WebP
- **Gallery images**: 16:9, min 1200×675px
- Place images in `/public/assets/projects/`

### Supported Video Formats

- YouTube: `https://www.youtube.com/watch?v=VIDEO_ID`
- Vimeo: `https://vimeo.com/VIDEO_ID`
- Direct: `https://example.com/video.mp4`

---

## 🎨 Customizing the Hero 3D Scene

Edit `src/components/Hero3D.tsx`:

- **Colors**: Change `color` props on `<MeshDistortMaterial>` (uses hex)
- **Shapes**: Swap `<torusKnotGeometry>` for `<boxGeometry>`, `<sphereGeometry>`, etc.
- **Speed**: Adjust `speed` and `distort` props for animation intensity
- **Particles**: Change `count` prop on `<Particles>` for density

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Repository
3. Framework preset: **Vite**
4. Click **Deploy**

No environment variables needed.

### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts:
# "predeploy": "npm run build",
# "deploy": "gh-pages -d dist"

# Set base in vite.config.ts:
# base: "/your-repo-name/"

npm run deploy
```

---

## 📋 Scripts Reference

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run format` | Run Prettier |
| `npm run typecheck` | TypeScript strict check |
| `npm run test` | Run unit tests |
| `npm run test:watch` | Run tests in watch mode |

---

## 📄 License

MIT © Pranav
