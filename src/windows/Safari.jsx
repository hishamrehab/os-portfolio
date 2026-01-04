import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper";
import { devDocs } from "../constants";

const Safari = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive posts per page based on screen size
  const getPostsPerPage = () => {
    if (windowWidth < 640) return 1;    // Mobile: 1 post
    if (windowWidth < 1024) return 2;   // Tablet: 2 posts
    return 2;                            // Desktop: 3 posts
  };

  const postsPerPage = getPostsPerPage();
  const totalPosts = devDocs.length;
  const visiblePosts = devDocs.slice(currentIndex, currentIndex + postsPerPage);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goNext = () => {
    if (currentIndex + postsPerPage < totalPosts) {
      setCurrentIndex(currentIndex + postsPerPage);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - postsPerPage);
    }
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />

        {/* <PanelLeft className="ml-10 icon max-sm:hidden" /> */}

        <div className="flex items-center gap-1 ml-5 max-sm:ml-3">
          <ChevronLeft
            className={`icon max-sm:p-0.5 ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}
            onClick={goPrev}
          />
          <ChevronRight
            className={`icon max-sm:p-0.5 ${currentIndex + postsPerPage >= totalPosts ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}
            onClick={goNext}
          />
        </div>

    
      </div>

      <div className="blog">
        <h2 className="text-lg sm:text-xl max-sm:text-base">Frontend Mastery Guides</h2>

        {/* Show pagination indicator */}
        <div className="text-xs sm:text-sm text-gray-500 mb-4 text-center max-sm:mb-3">
          Showing {currentIndex + 1}–{Math.min(currentIndex + postsPerPage, totalPosts)} of {totalPosts}
        </div>

        <div className="space-y-6 sm:space-y-8 max-sm:space-y-4">
          {visiblePosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post max-sm:grid-cols-1 sm:grid-cols-12">
              <div className="col-span-3 max-sm:col-span-1 max-sm:h-40 sm:h-auto">
                <img alt={title} src={image} className="max-sm:w-full max-sm:h-full" />
              </div>

              <div className="content sm:col-span-8 max-sm:col-span-1 max-sm:space-y-2">
                <p className="text-xs sm:text-xs max-sm:text-xs">{date}</p>
                <h3 className="text-base sm:text-base max-sm:text-sm">{title}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-xs max-sm:text-xs"
                >
                  Checkout the FULL DOCS
                  <MoveRight className="icon-hover max-sm:w-3 max-sm:h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no more to load */}
        {currentIndex + postsPerPage >= totalPosts && totalPosts > postsPerPage && (
          <p className="text-center text-xs sm:text-sm text-gray-500 mt-4 sm:mt-6 max-sm:mt-4">
            That's all for now! More guides coming soon.
          </p>
        )}
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;