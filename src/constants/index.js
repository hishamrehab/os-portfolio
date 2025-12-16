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
    name: "Frontend Mastery", 
    icon: "finder.png",
    canOpen: true,
  },
 {
    id: "safari",
    name: "Dev Docs",        
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


export const blogPosts = [

  {
    id: 1,
    date: "Jul 1, 2025",  // Example date; update as needed
    title: "JavaScript Mastery: In-Depth Guide for Modern Development",
    image: "/images/js-guide.png",  // Add your image
    link: "https://github.com/hishamrehab/JavaScript-Guide",
  },

  {
    id: 2,
    date: "Jun 15, 2025",
    title: "React Mastery: Comprehensive Guide with Real-World Examples",
    image: "/images/react-guide.png",
    link: "https://github.com/hishamrehab/React-Guide",
  },


   {
    id: 3,
    date: "May 20, 2025",
    title: "Next.js Mastery: Building Scalable Apps from Scratch",
    image: "/images/nextjs-guide.png",
    link: "https://github.com/hishamrehab/nextjs-guide",
  },
 {
    id: 4,
    date: "Sep 9, 2025",
    title: "React Typescript Explained: What It Is, Why It Matters, and How to Master It",  // Existing, fits well
    image: "/images/blog1.png",
    link: "https://github.com/hishamrehab/React-Typescript",
  },
  
  {
    id: 7,
    date: "Apr 10, 2025",
    title: "Tailwind CSS Mastery: Efficient Styling for Modern Web Apps",
    image: "/images/tailwind-guide.png",
    link: "https://github.com/hishamrehab/Tailwind-CSS",
  },
 
  {
    id: 2,
    date: "Aug 28, 2025",
    title: "The Ultimate Guide to Mastering Three.js for 3D Development",  // Existing
    image: "/images/blog2.png",
    link: "https://jsmastery.com/blog/the-ultimate-guide-to-mastering-three-js-for-3d-development",
  },
  {
    id: 3,
    date: "Aug 15, 2025",
    title: "The Ultimate Guide to Mastering GSAP Animations",  // Existing
    image: "/images/blog3.png",
    link: "https://github.com/hishamrehab/GSAP",
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
    items: ["React.js", "Next.js", "TypeScript", 
      "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    category: "Advanced UI & 3D Interactions",
    items: ["Three.js", "GSAP", "Framer Motion"],
  },
  {
    category: "State Management & Data Fetching",
    items: ["React Query (TanStack Query)", "Redux Toolkit + RTK Query", "Zustand"],
  },
  {
    category: "Styling & Components",
    items: [
      "Tailwind CSS",
       "Shadcn/UI",
        "Radix UI",
         "Sass/SCSS",
          "Material UI",
          "Styled Components",
          "CSS Modules", 
        "Bootstrap"
      ],
  },
  {
    category: "Backend & APIs",
    items: [
       "Node.js",
      "REST & GraphQL APIs",
      "Authentication (JWT, OAuth2)",
      "Headless CMS (Directus)"
    ],
  },
  {
    category: "Databases & DevOps",
    items: [
      "PostgreSQL",
       "MySQL", 
       "SQLite", 
      "Docker & Docker Compose", 
    "Vercel & Netlify",
       "CI/CD (GitHub Actions)",
       "Firebase",
        "Git"
      ],
  },
  {
    category: "Professional Engineering",
    items: ["OOP",
       "Data Structures & Algorithms", 
       "System Design (LLD/HLD)", 
       "Responsive Design", "Performance Optimization"],
  },
];

