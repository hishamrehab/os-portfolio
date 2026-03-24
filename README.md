# 🖥️ Interactive Desktop Portfolio

> A macOS-inspired interactive portfolio built with React 19, Vite, GSAP, and Tailwind CSS 4 — featuring a fully functional virtual desktop experience with draggable windows, an animated dock, and rich project showcases.

**Live Demo:** [hisham-rehab.vercel.app](https://hisham-rehab.vercel.app) &nbsp;|&nbsp; **GitHub:** [hishamrehab/os-portfolio](https://github.com/hishamrehab/os-portfolio)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture Deep Dive](#architecture-deep-dive)
- [Window System](#window-system)
- [Applications](#applications)
- [Customization Guide](#customization-guide)
- [Responsive Design](#responsive-design)
- [Deployment](#deployment)
- [Scripts Reference](#scripts-reference)
- [Troubleshooting](#troubleshooting)

---

## Overview

This portfolio simulates a macOS-style desktop environment entirely in the browser. Rather than a traditional scrollable page, visitors interact with a **virtual OS**:

- A top **menu bar** with live clock, navigation links, and system icons
- A bottom **dock** with magnification physics (like real macOS)
- **Draggable application windows** that open, close, focus, and layer correctly via z-index management
- A **welcome screen** with variable-weight font animation on hover
- Desktop **file icons** for quick project access

All data — projects, tech stack, guides, socials — lives in a single `constants/index.js` file, making the portfolio trivially easy to update.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖱️ **Draggable Windows** | All windows use GSAP `Draggable` for smooth drag interactions |
| 🎬 **Open Animations** | Windows animate in with a scale + opacity + y-offset entrance via GSAP |
| 📚 **Z-index Focus System** | Clicking any window brings it to front via Zustand-managed `nextZIndex` counter |
| 🚀 **Animated Dock** | Gaussian proximity magnification on hover (physics-based scaling with GSAP) |
| 🔤 **Variable Font Welcome** | Per-character font-weight animation driven by mouse proximity (GSAP) |
| 📁 **Finder (Projects)** | macOS Finder–style multi-folder project browser with inline sub-windows |
| 📖 **Safari (Dev Guides)** | Paginated blog reader for frontend mastery guides |
| 💻 **Terminal (Skills)** | Tech stack viewer formatted like a terminal listing |
| 📄 **Resume** | Embedded PDF viewer powered by `react-pdf` |
| 📬 **Contact** | Social link cards for GitHub and LinkedIn |
| 🖼️ **Image Viewer** | In-window image preview for project screenshots |
| 📝 **Text Viewer** | In-window `.txt` file reader for project descriptions |
| 📱 **Responsive** | Gracefully adapts to tablet/mobile with appropriate messaging |

---

## 🛠️ Tech Stack

### Core
| Package | Version | Purpose |
|---|---|---|
| `react` | `^19.2.0` | UI library |
| `react-dom` | `^19.2.0` | DOM rendering |
| `vite` | `^7.2.4` | Build tool & dev server |
| `@vitejs/plugin-react` | `^5.1.1` | React Fast Refresh + JSX |

### Styling
| Package | Version | Purpose |
|---|---|---|
| `tailwindcss` | `^4.1.17` | Utility-first CSS (v4 with Vite plugin) |
| `@tailwindcss/vite` | `^4.1.17` | Tailwind CSS 4 Vite integration |

> **Note:** This project uses **Tailwind CSS v4** which is configured via the Vite plugin — no `tailwind.config.js` is needed. Custom theme tokens (`--font-georama`, `--font-roboto`, `--breakpoint-3xl`) and utilities are defined inside `src/index.css` using `@theme`, `@utility`, and `@layer` directives.

### Animations
| Package | Version | Purpose |
|---|---|---|
| `gsap` | `^3.14.1` | Draggable windows, dock magnification, welcome text |
| `@gsap/react` | `^2.1.2` | `useGSAP` hook for React integration |

### State Management
| Package | Version | Purpose |
|---|---|---|
| `zustand` | `^5.0.9` | Global window open/close/focus state |
| `immer` | `^11.0.1` | Immutable state updates via Zustand middleware |

### UI / Utilities
| Package | Version | Purpose |
|---|---|---|
| `lucide-react` | `^0.560.0` | Icon set (used in Safari, Finder, etc.) |
| `react-tooltip` | `^5.30.0` | Dock icon tooltips |
| `react-pdf` | `^10.2.0` | Inline resume PDF rendering |
| `dayjs` | `^1.11.19` | Live clock in the Navbar |
| `clsx` | `^2.1.1` | Conditional classname utility |

### Fonts
- **Georama** — variable-weight sans-serif (100–900, supports italic), used for the welcome screen text animation and general body
- **Roboto Mono** — monospace, used in the Terminal (Skills) window

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── images/           # Wallpaper, project screenshots, folder/file icons
│   ├── icons/            # System icons (wifi, search, github, linkedin, etc.)
│   └── files/            # Hosted document files (e.g., resume PDF)
│
├── src/
│   ├── components/       # Shared UI components
│   │   ├── Dock.jsx      # Bottom dock with GSAP magnification
│   │   ├── Home.jsx      # Desktop file/folder icons
│   │   ├── Navbar.jsx    # Top menu bar with clock & nav links
│   │   ├── Welcome.jsx   # Hero welcome screen with variable font animation
│   │   ├── WindowControls.jsx  # Traffic-light close/minimize/maximize dots
│   │   └── index.js      # Barrel export
│   │
│   ├── windows/          # Application window components
│   │   ├── Contact.jsx   # Contact / social links window
│   │   ├── Finder.jsx    # Projects browser (macOS Finder style)
│   │   ├── Image.jsx     # Image preview window
│   │   ├── Resume.jsx    # PDF resume viewer
│   │   ├── Safari.jsx    # Frontend dev guides browser
│   │   ├── Terminal.jsx  # Tech stack viewer
│   │   ├── Text.jsx      # Text file viewer
│   │   └── index.js      # Barrel export
│   │
│   ├── hoc/
│   │   └── WindowWrapper.jsx   # HOC that adds drag, z-index, and open/close animation
│   │
│   ├── store/
│   │   ├── window.jsx    # Zustand store — window open/close/focus/z-index
│   │   └── location.jsx  # Finder sidebar location/breadcrumb state
│   │
│   ├── constants/
│   │   └── index.js      # All application data (projects, guides, dock apps, socials, tech stack)
│   │
│   ├── App.jsx           # Root component — mounts all windows + layout
│   ├── App.css           # App-level styles (minimal)
│   ├── index.css         # Global styles, Tailwind config, all component styles
│   └── main.jsx          # Entry point (ReactDOM.createRoot)
│
├── index.html            # Vite HTML entry
├── vite.config.js        # Vite + React + Tailwind v4 plugins
├── eslint.config.js      # ESLint flat config (React Hooks + Refresh rules)
├── vercel.json           # Vercel deployment config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** `>= 18` (Node 20 LTS recommended)
- **npm** `>= 9`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/hishamrehab/os-portfolio.git
cd os-portfolio/portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open **[http://localhost:5173](http://localhost:5173)** in your browser.

> The portfolio is optimized for desktop/tablet viewports (≥ 640 px). A polite on-screen notice appears on mobile, as the draggable window experience requires a larger screen.

---

## 🏗️ Architecture Deep Dive

### Data Layer — `src/constants/index.js`

All portfolio content lives in one place. This is the **single source of truth** for the entire app:

| Export | Type | Purpose |
|---|---|---|
| `navLinks` | `Array` | Navbar links (name + window target type) |
| `navIcons` | `Array` | Navbar system icon images |
| `dockApps` | `Array` | Dock icons (id, name, icon filename, `canOpen`) |
| `devDocs` | `Array` | Safari window — frontend guide articles |
| `INITIAL_Z_INDEX` | `Number` | Base z-index for all windows (`1000`) |
| `WINDOW_CONFIG` | `Object` | Initial state map for every window (`isOpen`, `zIndex`, `data`) |
| `techStack` | `Array` | Terminal window — categorized skills list |
| `socials` | `Array` | Contact window — GitHub & LinkedIn cards |
| `WORK_LOCATION` | `Object` | Finder sidebar — projects tree (nested folders & files) |

### State Layer — `src/store/window.jsx`

A single **Zustand** store (with Immer middleware) manages all window state:

```js
{
  windows: {
    finder:   { isOpen: false, zIndex: 1000, data: null },
    safari:   { isOpen: false, zIndex: 1000, data: null },
    contact:  { isOpen: false, zIndex: 1000, data: null },
    terminal: { isOpen: false, zIndex: 1000, data: null },
    resume:   { isOpen: false, zIndex: 1000, data: null },
    photos:   { isOpen: false, zIndex: 1000, data: null },
    txtfile:  { isOpen: false, zIndex: 1000, data: null },
    imgfile:  { isOpen: false, zIndex: 1000, data: null },
  },
  nextZIndex: 1001,
}
```

**Actions:**

| Action | Effect |
|---|---|
| `openWindow(key, data?)` | Sets `isOpen = true`, assigns `nextZIndex`, increments counter |
| `closeWindow(key)` | Sets `isOpen = false`, resets `zIndex` and `data` |
| `focusWindow(key)` | Reassigns `zIndex = nextZIndex++` to bring window to front |

### HOC Layer — `src/hoc/WindowWrapper.jsx`

`WindowWrapper(Component, windowKey)` is a **Higher-Order Component** factory. It wraps any window component and handles:

1. **Show/Hide** — `useLayoutEffect` toggles `display: block / none` based on `isOpen`
2. **Entrance Animation** — `useGSAP` fires `gsap.fromTo(el, { scale: 0.8, opacity: 0, y: 40 }, ...)` whenever `isOpen` becomes `true`
3. **Draggable** — `Draggable.create(el, { onPress: () => focusWindow(windowKey) })` enables drag from any point on the window; clicking also brings it to focus
4. **Z-index** — the `zIndex` from store is applied inline via `style={{ zIndex }}`

Every window component (Finder, Safari, Terminal, etc.) is wrapped with this HOC before export:
```js
const SafariWindow = WindowWrapper(Safari, "safari");
export default SafariWindow;
```

---

## 🪟 Window System

### How Windows Open

1. User clicks a **Dock icon** or a **Navbar link**
2. `useWindowStore().openWindow(key)` is called
3. Zustand updates `isOpen = true` and assigns `nextZIndex`
4. `WindowWrapper`'s `useLayoutEffect` sets `display: block`
5. `useGSAP` detects `isOpen` change and fires the entrance animation

### How Windows Stack (Z-Index)

- All windows start at `zIndex: 1000`
- Each `openWindow` / `focusWindow` call increments a shared `nextZIndex` counter
- Clicking anywhere on a window calls `focusWindow` (via GSAP `Draggable` `onPress`), ensuring it always surfaces to top

### Traffic Light Controls

`WindowControls.jsx` renders the three macOS-style colored dots. The **red close button** calls `closeWindow(target)` via the Zustand store. Minimize and maximize are cosmetic only.

---

## 📱 Applications

### 📁 Finder — Projects Browser

Mimics macOS Finder with a **sidebar** (location list) and **content panel** (folder/file grid).

- **Sidebar locations:** Work, Personal, Downloads — sourced from nested constants
- **Content panel:** Renders folders and files as icon+label items
- **Folder navigation:** Double-clicking a folder opens it in a new floating sub-window
- **File types supported:**
  - `txt` — Opens `Text` window with description array rendered as paragraphs
  - `url` — Navigates to `href` in a new browser tab
  - `img` — Opens `Image` window with a full preview

### 🌐 Safari — Dev Guides Reader

A paginated article browser styled like Safari's reading list:
- Displays **Georama**-rendered article cards with image, date, title, and external link
- Pagination: 1 post/page on mobile, 2 on tablet+
- Arrows disable when at the start/end of the list
- A "That's all for now!" message appears on the last page

### 💻 Terminal — Tech Stack

Displays skills in a **terminal-style** list with green checkmarks, organized by category (Core Frontend, Advanced UI & 3D, State Management, Styling, Backend & APIs, Databases & DevOps, Professional Engineering).

### 📄 Resume — PDF Viewer

Uses `react-pdf` to embed and render a PDF resume directly inside a window. No download required.

### 📬 Contact

Two social link cards (GitHub, LinkedIn) with brand colors, hover lift animation, and external link navigation.

### 🖼️ Image Viewer

Displays project screenshots opened from the Finder. Full image within the window frame with `object-contain` fitting.

### 📝 Text Viewer

Renders project descriptions opened from `txt` files in Finder. Each string in the `description` array is rendered as a separate paragraph.

---

## 🎨 Customization Guide

All content is driven from `src/constants/index.js`. No React knowledge needed for data updates.

### Add a Project

Find the `WORK_LOCATION` export and add a new folder entry inside the `children` array:

```js
{
  id: 110,                        // Unique numeric ID
  name: "My New Project",
  icon: "/images/folder.png",
  kind: "folder",
  position: "top-20 left-40",    // Desktop icon position (Tailwind classes)
  windowPosition: "top-10 left-5", // Finder sub-window position
  children: [
    {
      id: 1101,
      name: "Project Overview.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-5 left-10",
      description: [
        "First paragraph of project description.",
        "Second paragraph with more details.",
      ]
    },
    {
      id: 1102,
      name: "Live Demo.url",
      icon: "/images/safari.png",
      kind: "file",
      fileType: "url",
      href: "https://yourproject.vercel.app",
      position: "top-15 left-30",
    },
    {
      id: 1103,
      name: "screenshot.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-25 left-50",
      imageUrl: "/images/myproject1.png",
    }
  ]
}
```

> Don't forget to place your screenshot images in `public/images/`.

### Add a Dev Guide (Safari)

Add an entry to the `devDocs` array:

```js
{
  id: 8,
  date: "Jan 1, 2026",
  title: "My Frontend Guide Title",
  image: "/images/my-guide-cover.png",
  link: "https://github.com/hishamrehab/my-guide",
}
```

### Update Tech Stack (Terminal)

Edit the `techStack` array. Each entry has a `category` and `items` array:

```js
{
  category: "Testing",
  items: ["Vitest", "React Testing Library", "Playwright"],
}
```

### Update Socials (Contact)

Edit the `socials` array. Each entry needs `text`, `icon`, `bg` (background hex), and `link`:

```js
{
  id: 3,
  text: "Twitter / X",
  icon: "/icons/twitter.svg",
  bg: "#000000",
  link: "https://twitter.com/yourhandle",
}
```

### Add a Dock App

1. Add to `dockApps` in constants:
```js
{
  id: "myapp",      // Must match WINDOW_CONFIG key
  name: "My App",
  icon: "myapp.png",
  canOpen: true,
}
```

2. Add to `WINDOW_CONFIG`:
```js
myapp: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null }
```

3. Create `src/windows/MyApp.jsx` and wrap it:
```js
const MyAppWindow = WindowWrapper(MyApp, "myapp");
export default MyAppWindow;
```

4. Style it in `src/index.css` using `#myapp { ... }`

5. Import and mount in `src/App.jsx`

---

## 📱 Responsive Design

The portfolio uses **Tailwind CSS v4** breakpoint utilities:

| Breakpoint | Width | Behavior |
|---|---|---|
| Mobile (`< 640px`) | `max-sm:` | Desktop hidden, welcome overlay with mobile notice shown |
| Tablet (`640px – 1024px`) | `sm:` `max-lg:` | Dock hidden, windows fill more width |
| Desktop (`> 1024px`) | Default | Full experience — dock, windows, welcome screen |
| Ultra-wide (`≥ 1920px`) | `3xl:` | Larger dock icons (`size-20`) |

A `small-screen` notice appears on mobile informing users that the experience is designed for desktop/tablet screens.

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

```bash
# 1. Push your code
git add .
git commit -m "feat: update portfolio"
git push origin main
```

Vercel auto-deploys on every push to `main`. The `vercel.json` at the root handles SPA routing.

### Manual Production Build

```bash
npm run build    # Outputs to /dist
npm run preview  # Serves /dist locally for validation
```

---

## 📊 Scripts Reference

```bash
npm run dev      # Start Vite dev server (http://localhost:5173)
npm run build    # Production build → /dist
npm run preview  # Preview production build locally
npm run lint     # Run ESLint across the project
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- --port 3000
```

### Build Errors — Clean Install
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vite Cache Issues
```bash
npm run dev -- --force
```

### Window Not Opening
- Verify the dock app `id` matches a key in `WINDOW_CONFIG`
- Ensure the window component is mounted in `App.jsx`
- Check browser console for "Window not found for app X" errors

### React-PDF Rendering Blank
- Confirm the PDF path is correct and the file exists in `public/`
- `react-pdf` v10 requires a worker — ensure `pdfjs-dist` is not version-mismatched

---

## 📝 Key Design Decisions

### Why Zustand + Immer?
Zustand gives us **minimal boilerplate** compared to Redux while remaining fast and predictable. Immer middleware lets us write **mutable-style updates** (direct assignment on draft state) that are automatically converted to immutable operations — perfect for the nested window state.

### Why GSAP instead of Framer Motion for Draggable?
GSAP's `Draggable` plugin is battle-tested for complex drag scenarios and integrates cleanly with `useGSAP`. It provides accurate bounds, touch support, and physics-feel without additional bundle weight since GSAP is already used for all other animations.

### Why a HOC instead of a hook for windows?
`WindowWrapper` as an HOC cleanly bundles the `ref`, DOM manipulation, and GSAP context into a single reusable wrapper without requiring each window component to repeat the boilerplate. The `displayName` assignment ensures React DevTools shows meaningful names.

### Why Tailwind CSS v4?
v4 brings **Vite-native CSS processing** (no PostCSS pipeline needed), faster builds, and the ability to define theme tokens inside CSS rather than a JS config file — keeping the toolchain minimal.

---

## 🔗 Links

- **Live Portfolio:** [hisham-rehab.vercel.app](https://hisham-rehab.vercel.app)
- **GitHub:** [github.com/hishamrehab](https://github.com/hishamrehab)
- **LinkedIn:** [linkedin.com/in/hisham-rehab](https://www.linkedin.com/in/hisham-rehab/)

---

## 📄 License

This project is open source and available under the **MIT License**.

---

<div align="center">

**Built with ❤️ by Hisham Rehab**

*React 19 · Vite 7 · GSAP 3 · Tailwind CSS 4 · Zustand 5*

</div>
