This repository is a small React + Vite portfolio site (desktop focused) using Tailwind, GSAP animations and Zustand for UI state.

Quick commands
- dev: `npm run dev` — starts Vite dev server with HMR
- build: `npm run build` — production bundle
- preview: `npm run preview` — preview production build
- lint: `npm run lint` — runs ESLint

Key directories and files
- `src/` — contains app sources (App.jsx, main.jsx, index.css)
- `src/components/` — small components: `Navbar.jsx`, `Welcome.jsx`, `Dock.jsx`
- `src/constants/index.js` — UI constants; `navLinks`, `navIcons`, `dockApps`, and `WINDOW_CONFIG`
- `src/store/Window.js` — Zustand store; `openWindow`, `closeWindow`, `focusWindow`, and `windows` object
- `public/images`, `public/icons` — static assets; referenced in JS as `/images/...` or `/icons/...`

High-level architecture & data flow
- Single-page app composed of three main components: `Navbar`, `Welcome`, and `Dock` assembled in `App.jsx`.
- UI state for floating windows is centralized in the `Window` store (Zustand + immer). The store mutates `windows` keyed by the IDs defined in `WINDOW_CONFIG`.
- `Dock.jsx` maps `dockApps` from `constants` to interactive icons; clicks call `useWindowStore` actions (`openWindow`, `closeWindow`) and rely on a matching `window` entry in `WINDOW_CONFIG`.
- Animations use `@gsap/react` and `gsap` directly with `useRef` and `useGSAP` callback hooks. Animations manipulate DOM nodes and their inline styles (e.g., font variation, scale/y transforms).
	- App-level GSAP plugin registration: `src/App.jsx` registers the `Draggable` plugin via `gsap.registerPlugin(Draggable)` so animations relying on it expect it to be registered globally.

Project-specific conventions and gotchas (be precise)
- Asset paths: Use the `public` folder with leading `/` paths — e.g. `<img src="/images/logo.svg"/>`. Avoid import bundling for these static assets.
- `dockApps` ⇄ `WINDOW_CONFIG` sync: When adding a new app icon, ensure the `id` appears in `WINDOW_CONFIG`. Dock assumes `windows[id]` exists and will log `Window not found for app {id}` if missing.
- `canOpen` flag: Mark an app as disabled by setting `canOpen: false` in `dockApps` — Dock disables the button and applies styling `opacity-60`.
- Zustand store API: `openWindow(windowKey, data)`, `closeWindow(windowKey)`, `focusWindow(windowKey)`, and `windows` state. `nextZIndex` flows up when opening/focusing.
- Animation pattern: For text animation, the Welcome component splits text into spans with `renderText()` and uses `fontVariationSettings` to animate weight. Follow the same span-per-character approach when building similar effects.
- Tooltip integration: `react-tooltip` is used in Dock — `data-tooltip-id` on DOM elements and `<Tooltip id="dock-tooltip"/>` at the root enables it.
- Tailwind special utilities: `index.css` uses `@utility` and `@theme` directives and custom classes like `size-14`. When you add styles or classes, verify Tailwind plugin settings and naming match existing patterns.

Adding a new window/app (practical steps)
1. Add a new `dockApps` entry in `src/constants/index.js` with `id`, `name`, `icon`, `canOpen`.
2. Add a corresponding entry to `WINDOW_CONFIG` with default `{ isOpen:false, zIndex: INITIAL_Z_INDEX, data:null }` and the same `id`.
3. Add the window UI component (e.g., `Windows/Finder.jsx`) and ensure it reads `useWindowStore()` to open/close and render conditionally based on `windows[id].isOpen`.
4. Style accessibility: Put critical assets in `public/images|icons` and reference with leading `/`.

Debugging tips
- If Dock click prints `Window not found for app ...`, double-check `id` name is the same in `dockApps` and `WINDOW_CONFIG`.
- If animations don't run, confirm `useGSAP` / `useRef` is returning a DOM element and that `gsap` and `@gsap/react` are installed.
- For missing image errors, ensure path matches public folder and casing is correct (Windows is case-insensitive; servers may be case-sensitive).

Linting & formatting
- Run `npm run lint` to catch style/ESLint issues; the repo uses standard ESLint plus React specific plugins.

What's out-of-scope / not found
- There is no test harness or dedicated CI workflow in this repo. If tests are needed, add a test runner and update `package.json`.
- There is no global `WindowRenderer` component in `src/` — new windows must be rendered in new components that consult the `useWindowStore` state.

If anything here is unclear or you want extra examples (e.g. adding a Finder window component or a Windows renderer example), tell me which part to expand and I'll add concise examples inline.
