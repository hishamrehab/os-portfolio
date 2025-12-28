# 🖥️ Interactive Desktop Portfolio

A modern, interactive portfolio showcasing projects and skills with a custom macOS-inspired desktop interface. Built with React, Vite, and cutting-edge web technologies.

## ✨ Features

- **Desktop-Inspired UI**: Custom macOS-style interface with draggable windows, dock, and menu bar
- **Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices
- **Smooth Animations**: GSAP-powered fluid animations and transitions
- **Interactive Windows**: Multiple draggable, resizable window panels
- **Featured Projects**: Showcase your best work with the integrated project viewer
- **Tech Stack Display**: Terminal-style tech stack showcase
- **Contact & Resume**: Integrated contact form and resume viewer
- **Fast Performance**: Optimized with Vite for instant development and production builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling
- **GSAP** - Advanced animations
- **Zustand** - State management
- **Lucide React** - Icon library

### Development
- **ESLint** - Code quality
- **JavaScript/JSX** - Dynamic components
- **CSS3** - Modern styling

### Deployment
- **Vercel** - Production deployment

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar
│   ├── Dock.jsx        # Application dock
│   ├── Welcome.jsx     # Welcome screen
│   └── WindowControls.jsx
├── windows/            # Window applications
│   ├── Finder.jsx      # Projects showcase
│   ├── Safari.jsx      # Frontend guides
│   ├── Resume.jsx      # Resume viewer
│   ├── Terminal.jsx    # Tech stack display
│   ├── Contact.jsx     # Contact form
│   ├── Image.jsx       # Image viewer
│   └── Text.jsx        # Text file viewer
├── store/              # State management
│   ├── window.jsx      # Window state (Zustand)
│   └── location.js     # Location state
├── hoc/                # Higher-order components
│   └── WindowWrapper.jsx # Window wrapper HOC
├── constants/          # Constants and config
├── App.jsx             # Main app component
├── index.css           # Global styles
└── main.jsx            # Entry point

public/
├── images/             # Image assets
├── icons/              # Icon assets
└── files/              # Document files
```

## 🎮 How to Use

### Opening Applications
Click on app icons in the dock to open windows:
- **Finder** - Browse your featured projects
- **Safari** - Read frontend development guides
- **Resume** - View your resume
- **Terminal** - See your tech stack
- **Contact** - Get in touch

### Window Controls
- **Drag** windows by the header to move them
- **Close** button (red) to close windows
- **Click** title bar to bring window to front (z-index)

### Navigation
- Use the navbar at the top for quick navigation
- Click projects in the Finder to view details
- Use pagination in Safari to browse guides

## 🎨 Customization

### Adding New Content

#### New Project
1. Update `src/constants/index.js` with your project data
2. Add project to the Finder window
3. Create a new window component if needed

#### Tech Stack
Edit `src/constants/index.js` - `techStack` array to update your technologies

#### Navigation Links
Modify `navLinks` and `navIcons` in `src/constants/index.js`

#### Dock Apps
Add entries to `dockApps` array in constants, ensure IDs match `WINDOW_CONFIG`

## 📱 Responsive Breakpoints

- **Mobile** (< 640px) - Optimized touch interface
- **Tablet** (640px - 1024px) - Medium layout
- **Desktop** (> 1024px) - Full experience

## 🚢 Deployment

### Deploy to Vercel

1. Push your code to GitHub:
```bash
git push origin main
```

2. Connect your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your repository
   - Click "Deploy"

3. Vercel will automatically build and deploy on every push

### Production Build

```bash
npm run build
npm run preview
```

## 📊 Available Scripts

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Code Quality
npm run lint             # Run ESLint
```

## 🎯 Key Architecture Decisions

### State Management
- **Zustand** for window state - simple, fast, and minimal boilerplate
- **Immer middleware** for immutable updates

### Component Structure
- **WindowWrapper HOC** - Handles dragging, z-index, and window logic
- **Responsive Components** - Tailwind breakpoints for multi-device support

### Animations
- **GSAP** for complex draggable animations
- **CSS transitions** for simple effects
- **Framer Motion** ready for advanced sequences

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Build Errors
- Clear `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear Vite cache: `npm run dev -- --force`

### Window Not Opening
- Check `WINDOW_CONFIG` in `src/constants/index.js`
- Ensure window ID matches between `dockApps` and `WINDOW_CONFIG`

## 📝 Notes

- **Desktop Focused**: The layout is optimized for desktop viewing but fully responsive
- **No Backend Required**: This is a static portfolio - all data is in constants
- **Easy to Extend**: Add new windows, projects, or features without complex setup

## 🔗 Links

- **Live Demo**: [Your Portfolio URL]
- **GitHub**: [GitHub Repository]
- **Contact**: [Your Contact Info]

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ using React + Vite + Tailwind CSS**
