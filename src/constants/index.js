export const navLinks = [
  {id : 1 , name : "Portfolio"},
  {id : 2 , name : "Contact"},
  {id : 3 , name : "Projects"},
];


export const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];



export const dockApps = [
  {
    id: "finder",
    name: "Portfolio", 
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles",
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", 
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];


export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};



export const techStack = [
  {
    category: "Core Frontend",
    items: ["React.js", "Next.js (App & Pages Router)", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Advanced & 3D",
    items: ["Three.js", "GSAP", "Framer Motion"],
  },
  {
    category: "State & Data",
    items: ["React Query (TanStack Query)", "Redux Toolkit + RTK Query", "Zustand"],
  },
  {
    category: "Styling & Components",
    items: ["Tailwind CSS", "Shadcn/UI", "Radix UI Primitives", "Sass/SCSS", "Material UI", "Styled Components", "CSS Modules", "Bootstrap"],
  },
  {
    category: "Backend & CMS",
    items: ["Node.js", "Directus (Headless CMS)", "REST & GraphQL APIs", "JWT & OAuth"],
  },
  {
    category: "Databases & DevOps",
    items: ["PostgreSQL", "MySQL", "SQLite", "Docker & Docker Compose", "Vercel", "Netlify", "GitHub Actions", "Firebase", "Git"],
  },
  {
    category: "Fundamentals",
    items: ["OOP", "Data Structures & Algorithms", "System Design (LLD/HLD)", "Responsive Design", "Performance Optimization"],
  },
];

