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
  }
];


export const blogPosts = [

  {
    id: 1,
    date: "Jul 1, 2025",  
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
    title: "The Ultimate Guide to Mastering GSAP Animations",  
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


// const WORK_LOCATION = {
//   id: 1,
//   type: "work",
//   name: "Work",
//   icon: "/icons/work.svg",
//   kind: "folder",
//   children: [
//     // Project 1: Ultimate MovieHub
//     {
//       id: 101,
//       name: "Ultimate MovieHub",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-10 left-5",
//       windowPosition: "top-[5vh] left-5",
//       children: [
//         {
//           id: 1011,
//           name: "Ultimate MovieHub Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 left-10",
//           description: [
//             "Ultimate MovieHub is a user-friendly movie discovery platform that goes beyond basic listings.",
//             "Instead of cluttered sites, it offers a clean searchable catalog with user authentication, reviews, ratings, dark/light mode, and personalized recommendations.",
//             "Think of it like your personal cinema concierge—built with React, Redux Toolkit, Material UI, Firebase, and IMDb API for a fully responsive experience.",
//           ],
//         },
//         {
//           id: 1012,
//           name: "moviehub.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://movie-app-react-js-a71bd.web.app/",
//           position: "top-10 right-20",
//         },
//         {
//           id: 1013,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/Movies-Website",
//           position: "top-20 left-20",
//         },
//         {
//           id: 1014,
//           name: "moviehub.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/images/movie-cover.png",
//         },
//         {
//           id: 1015,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },

//     // Project 2: Storage Management System
//     {
//       id: 102,
//       name: "Storage Management System",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-52 left-80",
//       windowPosition: "top-[15vh] left-10",
//       children: [
//         {
//           id: 1021,
//           name: "Storage Management Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 left-10",
//           description: [
//             "A powerful storage management system for seamless file handling and organization.",
//             "Instead of basic uploads, it includes user authentication, dynamic dashboards, global search, and reusable components.",
//             "Think of it like your cloud drive on steroids—built with Next.js, Tailwind CSS, Shadcn UI, and Appwrite for modern, responsive usability.",
//           ],
//         },
//         {
//           id: 1022,
//           name: "storage.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://storage-management-solutions-system-f29j.vercel.app",
//           position: "top-20 left-20",
//         },
//         {
//           id: 1023,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/Storage-Management-Solutions-System",
//           position: "top-30 right-20",
//         },
//         {
//           id: 1024,
//           name: "storage.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 left-80",
//           imageUrl: "/storage.png",
//         },
//         {
//           id: 1025,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 left-5",
//         },
//       ],
//     },

//     // Project 3: Animated Apple iPhone 3D Website
//     {
//       id: 103,
//       name: "Animated Apple iPhone 3D Website",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-10 right-40",
//       windowPosition: "top-[25vh] left-5",
//       children: [
//         {
//           id: 1031,
//           name: "Apple iPhone 3D Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 right-10",
//           description: [
//             "An immersive recreation of the Apple iPhone website with stunning 3D visuals.",
//             "Instead of static pages, it features smooth GSAP animations and Three.js 3D effects for interactive product showcases.",
//             "Think of it like stepping into an Apple Store online—crafted with React, Tailwind, Three.js, and GSAP.",
//           ],
//         },
//         {
//           id: 1032,
//           name: "apple-iphone.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://apple-website-three-sigma.vercel.app/",
//           position: "top-10 left-20",
//         },
//         {
//           id: 1033,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/Apple-iphone-3D-Website",
//           position: "top-20 right-20",
//         },
//         {
//           id: 1034,
//           name: "iphone.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/iphone.png",
//         },
//         {
//           id: 1035,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },

//     // Project 4: ShopEase Website
//     {
//       id: 104,
//       name: "ShopEase Website",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-80 left-20",
//       windowPosition: "top-[35vh] left-10",
//       children: [
//         {
//           id: 1041,
//           name: "ShopEase Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 left-10",
//           description: [
//             "A full-featured eCommerce platform for seamless online shopping.",
//             "Instead of basic carts, it includes authentication, product browsing, secure payments, inventory updates, and recommendations.",
//             "Think of it like a complete online store ready to scale—built with React, Bootstrap, Sass, Swiper, and more.",
//           ],
//         },
//         {
//           id: 1042,
//           name: "shopease.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://full-ecommerce-website.web.app/",
//           position: "top-20 right-20",
//         },
//         {
//           id: 1043,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/Ecommerce-Website-React-js",
//           position: "top-30 left-20",
//         },
//         {
//           id: 1044,
//           name: "ecommerce.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 left-80",
//           imageUrl: "/ecommerce1.jpg",
//         },
//         {
//           id: 1045,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 left-20",
//         },
//       ],
//     },

//     // Project 5: SaaS Excellence Platform
//     {
//       id: 105,
//       name: "SaaS Excellence",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-100 right-60",
//       windowPosition: "top-[45vh] left-5",
//       children: [
//         {
//           id: 1051,
//           name: "SaaS Excellence Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 right-10",
//           description: [
//             "A modern landing page for a SaaS platform showcasing excellence in design and functionality.",
//             "Instead of plain HTML, it uses React with Tailwind CSS and Sass for modular, scalable styling and rapid UI development.",
//             "Think of it like a professional storefront for your software—responsive, maintainable, and visually appealing.",
//           ],
//         },
//         {
//           id: 1052,
//           name: "saas.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://saas-business-landing-page.web.app/",
//           position: "top-10 left-20",
//         },
//         {
//           id: 1053,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/SaaS-Excellence-Platform",
//           position: "top-20 right-20",
//         },
//         {
//           id: 1054,
//           name: "saas.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/images/hero.png",
//         },
//         {
//           id: 1055,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },

   

//     // Project 7: Admin Dashboard
//     {
//       id: 107,
//       name: "Admin Dashboard",
//       icon: "/images/folder.png",
//       kind: "folder",
//       position: "top-140 right-80",
//       windowPosition: "top-[5vh] right-5",
//       children: [
//         {
//           id: 1071,
//           name: "Admin Dashboard Project.txt",
//           icon: "/images/txt.png",
//           kind: "file",
//           fileType: "txt",
//           position: "top-5 right-10",
//           description: [
//             "A robust admin dashboard for managing data and insights efficiently.",
//             "Instead of spreadsheets, it offers interactive UI with routing, animations, charts, and icons.",
//             "Think of it like a control center for your app—built with React, Tailwind, Framer Motion, Recharts, and Lucide Icons.",
//           ],
//         },
//         {
//           id: 1072,
//           name: "admin-dashboard.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://admin-dashboard-delta-hazel.vercel.app/",
//           position: "top-10 left-20",
//         },
//         {
//           id: 1073,
//           name: "github.com",
//           icon: "/images/safari.png",
//           kind: "file",
//           fileType: "url",
//           href: "https://github.com/hishamrehab/Admin-dashboard",
//           position: "top-20 right-20",
//         },
//         {
//           id: 1074,
//           name: "dashboard.png",
//           icon: "/images/image.png",
//           kind: "file",
//           fileType: "img",
//           position: "top-52 right-80",
//           imageUrl: "/images/luke.jpg",
//         },
//         {
//           id: 1075,
//           name: "Design.fig",
//           icon: "/images/plain.png",
//           kind: "file",
//           fileType: "fig",
//           href: "https://www.figma.com",
//           position: "top-60 right-20",
//         },
//       ],
//     },

  
//   ],
// };

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "Nike Ecommerce Website Application",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", 
      windowPosition: "top-[5vh] left-5", 
      children: [
        {
          id: 1,
          name: "Nike Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "The Nike eCommerce website is a sleek and modern platform designed for shopping the latest Nike collections.",
            "Instead of a simple online store, it delivers an immersive experience with bold visuals, interactive product displays, and smooth navigation.",
            "Think of it like walking into a flagship Nike store—but right from your phone or laptop.",
            "It's built with Next.js and Tailwind, ensuring fast performance, responsive design, and a clean, premium look.",
          ],
        },
        {
          id: 2,
          name: "nike.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/fZdTYswuZjU?si=Awjl-pIst9e09_UU",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "nike.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-1.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "AI Resume Analyzer",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "AI Resume Analyzer Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 right-10",
          description: [
            "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
            "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
            "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
            "It's built with Next.js and Tailwind, so it runs fast, looks professional, and works seamlessly on any device.",
          ],
        },
        {
          id: 2,
          name: "ai-resume-analyzer.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/iYOz165wGkQ?si=R1hs8Legl200m0Cl",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "ai-resume-analyzer.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/project-2.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "Food Delivery App",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-7",
      children: [
        {
          id: 1,
          name: "Food Delivery App Project.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          description: [
            "Our Food Delivery App is a fast and convenient way to order meals from your favorite restaurants.",
            "Instead of making calls or waiting in line, you can browse menus, customize orders, and track deliveries in real time.",
            "Think of it like having your favorite restaurants in your pocket—ready to deliver anytime, anywhere.",
            "It’s built with React Native, so it works smoothly on both iOS and Android with a clean, modern design.",
          ],
        },
        {
          id: 2,
          name: "food-delivery-app.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://youtu.be/LKrX390fJMw?si=cExkuVhf2DTV9G2-",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "food-delivery-app.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/project-3.png",
        },
        {
          id: 5,
          name: "Design.fig",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "fig",
          href: "https://google.com",
          position: "top-60 right-20",
        },
      ],
    },
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
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/adrian.jpg",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/adrian-2.jpg",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/adrian-3.jpeg",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/adrian.jpg",
      description: [
        "Hey! I’m Adrian 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
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

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/trash-1.png",
    },
    {
      id: 2,
      name: "trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/trash-2.png",
    },
  ],
};






export const locations = {
   work: WORK_LOCATION,
   about: ABOUT_LOCATION,
   resume: RESUME_LOCATION,
   trash: TRASH_LOCATION,
};
