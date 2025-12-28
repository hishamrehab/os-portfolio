export const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
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
    name: "porfolio",
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
  }
];


export const devDocs = [

  {
    id: 1,
    date: "Jul 1, 2025",
    title: "JavaScript Mastery: In-Depth Guide for Modern Development",
    image: "/images/js-guide.png",
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
    title: "The Ultimate Guide to Mastering GSAP Animations",
    image: "/images/blog3.png",
    link: "https://github.com/hishamrehab/GSAP",
  },



];



export const INITIAL_Z_INDEX = 1000;

export const WINDOW_CONFIG = {
  finder: { isOpen: true, zIndex: INITIAL_Z_INDEX, data: null },
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
    items: [
      "OOP",
      "Data Structures & Algorithms",
      "System Design (LLD/HLD)",
      "Responsive Design", "Performance Optimization",
      "Design Patterns",
      "Architecture"
    ],
  }
];



export const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/hishamrehab",
  },
  {
    id: 4,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/hisham-rehab/",
  },
];


const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // Project 1: OnSoftwares
    {
      id: 100,
      name: "OnSoftwares",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-20 right-10",
      windowPosition: "top-[10vh] right-10",
      children: [
        {
          id: 1061,
          name: "Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "OnSoftwares: A cutting-edge fullstack SaaS marketplace connecting verified software products, talents, agencies, and clients.",
            "Innovative features: DNS-based ownership verification, blockchain NFT skill certifications, agency skill inheritance, smart contract escrow payments, reputation scoring, and job matching workflows.",
            "Responsive frontend built with React, Tailwind CSS, Redux Toolkit, React Hook Form + Zod, Framer Motion, and UI libs (Lucide, FontAwesome, Swiper, React-Select).",
            "Backend powered by Directus headless CMS for full CRUD on listings/profiles/certifications/reviews/projects, plus analytics dashboards with Chart.js/ECharts.",
            "Docker-containerized for scalable deployment—showcasing senior fullstack expertise in modern SaaS architecture."
          ]
        },
        {
          id: 1067,
          name: "Key Features.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-30",
          description: [
            "- Verified listings via automated DNS checks",
            "- Blockchain NFT certifications for skills/talents",
            "- Agency inheritance & reputation scoring system",
            "- Secure escrow payments with smart contracts",
            "- SEO-optimized pages & advanced analytics dashboards",
            "- Smooth animations and modular UI components"
          ]
        },
        {
          id: 1068,
          name: "Tech Stack.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-40",
          description: [
            "- Frontend: React, Redux Toolkit, Tailwind CSS, Framer Motion",
            "- Forms/Validation: React Hook Form + Zod/Yup",
            "- UI: Lucide, FontAwesome, Swiper, React-Select",
            "- CMS/Backend: Directus SDK, Axios",
            "- Charts: Chart.js + plugins, ECharts",
            "- Other: React Toastify, SweetAlert2, Lodash, Date-fns",
            "- Build: Vite, Docker for containerization"
          ]
        }
      ]
    },
    // Project: NVESTIA (Private Client)
    {
      id: 1010,  // Or next available
      name: "NVESTIA",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-80 left-60",  // Adjust as needed
      windowPosition: "top-[35vh] right-20",
      children: [
        {
          id: 1061,
          name: "Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "NVESTIA: Private AI-powered investment matchmaking platform for MENA startups, investors, and enablers.",
            "Fullstack prototype: Quality daily matches, secure due diligence vaults with NDA flows, AI entity resolution, premium features.",
            "Backend powered by Directus headless CMS for flexible data modeling, auth, and APIs.",
            "Confidential client project—NDA protected, no public links or source."
          ]
        },
        {
          id: 1062,
          name: "Key Features.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-30",
          description: [
            "- AI-driven matches with scores & rationales",
            "- Due Diligence Vaults: Document management, trust scoring, watermarked sharing, e-NDA signing",
            "- Discovery filters, 'Watch' entities, AI pitch videos",
            "- Premium tiers, calendar sync, admin moderation",
            "- Directus backend: Collections for entities/matches/vaults, role-based permissions, file storage"
          ]
        },
        {
          id: 1063,
          name: "Tech Stack.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-25 left-40",
          description: [
            "- Frontend: React 19, Vite, Redux Toolkit, Tailwind CSS, Framer Motion",
            "- Forms: React Hook Form + Yup",
            "- Backend: Directus (@directus/sdk), PostgreSQL",
            "- AI: Google Generative AI, OpenAI",
            "- Other: Axios, Date-fns, React Router DOM",
            "- Private repos (nvestia-frontend & Directus instance)"
          ]
        }
        // Optional anonymized screenshots can be added here if available
      ]
    },
    // Project 1: FILMPIRE
    {
      id: 101,
      name: "FILMPIRE",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5",
      windowPosition: "top-[5vh] left-10",
      children: [
        {
          id: 1011,
          name: "FILMPIRE Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "FILMPIRE: A refined movie discovery platform for intuitive browsing and personalized cinematic experiences.",
            "Features: Advanced search & filters, user authentication, ratings/reviews, watchlists, dark/light mode, and smart recommendations.",
            "Tech Stack: React, Redux Toolkit, Material UI, Firebase (auth & database), TMDb API.",
            "Fully responsive—your panoramic gateway to great films."
          ],

        },
        {
          id: 1012,
          name: "moviehub.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://movie-app-react-js-a71bd.web.app/",
          position: "top-10 right-20",
        },

        {
          id: 1013,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/hishamrehab/Movies-Website",
          position: "top-20 left-20",
        },



        {
          id: 1014,
          name: "filmpire.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/filmpire1.png",
        },


        {
          id: 1015,
          name: "filmpire.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/filmpire2.png",
        },

        {
          id: 1016,
          name: "filmpire.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/filmpire3.png",
        },


      ],
    },

    // Project 2: Storage Management System
    {
      id: 102,
      name: "Storage Management System",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 left-80",
      windowPosition: "top-[15vh] left-0",
      children: [
        {
          id: 1021,
          name: "Storage Management Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Storage Management System: A modern Google Drive-inspired cloud storage platform for secure file management and seamless organization.",
            "Features include: Intuitive dashboard with storage usage charts, categorized views (Documents, Images, Media, Others), recent uploads timeline, global search, and effortless drag-and-drop uploads via React Dropzone.",
            "Tech Stack: Next.js, React, Tailwind CSS, Shadcn UI (for reusable components), Recharts (visual dashboards), Appwrite (authentication, database & storage backend).",
            "Fully responsive—your personal cloud vault accessible on any device."
          ],
        },
        {
          id: 1022,
          name: "storage.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://storage-management-solutions-system-f29j.vercel.app",
          position: "top-20 left-20",
        },
        {
          id: 1023,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/hishamrehab/Storage-Management-Solutions-System",
          position: "top-30 right-20",
        },
        {
          id: 1024,
          name: "storage.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/storage1.png",
        },
        {
          id: 1025,
          name: "storage.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/storage2.png",
        },

        {
          id: 1026,
          name: "storage.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/storage3.png",
        },
      ],
    },

    // Project 3: Animated Apple iPhone 3D Website
    {
      id: 103,
      name: "Animated Apple iPhone 3D Website",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 right-40",
      windowPosition: "top-[30vh] left-0",
      children: [
        {
          id: 1031,
          name: "Apple iPhone 3D Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "An immersive recreation of the Apple iPhone website with stunning 3D visuals.",
            "Instead of static pages, it features smooth GSAP animations and Three.js 3D effects for interactive product showcases.",
            "Think of it like stepping into an Apple Store online—crafted with React, Tailwind, Three.js, and GSAP.",
          ],
        },
        {
          id: 1032,
          name: "apple-iphone.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://apple-website-three-sigma.vercel.app/",
          position: "top-10 left-20",
        },
        {
          id: 1033,
          name: "github.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/hishamrehab/Apple-iphone-3D-Website",
          position: "top-20 right-20",
        },
        {
          id: 1034,
          name: "iphone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/iphone1.png",
        },

        {
          id: 1035,
          name: "iphone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/iphone2.png",
        },


        {
          id: 1036,
          name: "iphone.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/iphone3.png",
        },

      ],
    },

    // Project 5: SaaS Excellence Platform
    {
      id: 105,
      name: "Xora AI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-100 right-60",
      windowPosition: "top-[45vh] left-10",
      children: [
        {
          id: 1051,
          name: "Project Overview.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "Xora AI: A sleek, futuristic landing page for an advanced AI SaaS platform specializing in creative workflows.",
            "Highlights include dark-mode design, interactive pricing tiers (Core/Overdrive/Team), app mockups showcasing AI tools (video editing, code/audio/photo generation), smooth navigation, and bold hero sections.",
            "Built with modern web tech for a responsive, high-conversion experience—perfect as a professional product storefront.",
            "Fully optimized for desktop/mobile, with neon accents and 3D-inspired visuals."
          ]
        },
        {
          id: 1057,
          name: "Key Features.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-15 left-30",
          description: [
            "- Dark futuristic theme with glowing elements",
            "- Tiered pricing cards with highlighted popular plan",
            "- Multi-platform download prompts (iOS/Android/PC/Web)",
            "- AI feature showcases (video, code, photo, audio generation)",
            "- Clean navigation and FAQ sections"
          ]
        },
        {
          id: 1052,
          name: "Live Demo.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://saas-business-landing-page.web.app/",
          position: "top-10 left-20"
        },
        {
          id: 1053,
          name: "Source Code.url",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://github.com/hishamrehab/SaaS-Excellence-Platform",
          position: "top-20 right-20"
        },
        {
          id: 1054,
          name: "Screenshots.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/sass1.png"
        },

        {
          id: 1055,
          name: "Screenshots.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/sass2.png"
        }
      ]
    }
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      description: [
        "Hey! I’m Hisham 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
        "I specialize in JavaScript, React, and Next.js—and I love making things feel smooth, fast, and just a little bit delightful.",
        "I’m big on clean UI, good UX, and writing code that doesn’t need a search party to debug.",
        "Outside of dev work, you'll find me tweaking layouts at 2AM, sipping overpriced coffee, or impulse-buying gadgets I absolutely convinced myself I needed 😅",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};






export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
};
