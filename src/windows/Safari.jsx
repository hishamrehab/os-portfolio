import { useState } from "react";
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
import { blogPosts } from "../constants";

const Safari = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const postsPerPage = 3;

  const totalPosts = blogPosts.length;
  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + postsPerPage);

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

        <PanelLeft className="ml-10 icon" />

        <div className="flex items-center gap-1 ml-5">
          <ChevronLeft
            className={`icon ${currentIndex === 0 ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}
            onClick={goPrev}
          />
          <ChevronRight
            className={`icon ${currentIndex + postsPerPage >= totalPosts ? "opacity-30 cursor-not-allowed" : "cursor-pointer hover:opacity-80"}`}
            onClick={goNext}
          />
        </div>

        <div className="flex-1 flex-center gap-3">
          <ShieldHalf className="icon" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              className="flex-1"
              placeholder="Search or enter doc name..."
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon" />
          <Copy className="icon" />
        </div>
      </div>

      <div className="blog">
        <h2>Frontend Mastery Guides</h2>

        {/* Optional: Show pagination indicator */}
        <div className="text-sm text-gray-500 mb-4 text-center">
          Showing {currentIndex + 1}–{Math.min(currentIndex + postsPerPage, totalPosts)} of {totalPosts}
        </div>

        <div className="space-y-8">
          {visiblePosts.map(({ id, image, title, date, link }) => (
            <div key={id} className="blog-post">
              <div className="col-span-2">
                <img alt={title} src={image} />
              </div>

              <div className="content">
                <p>{date}</p>
                <h3>{title}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Checkout the FULL DOCS
                  <MoveRight className="icon-hover" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Show message if no more to load */}
        {currentIndex + postsPerPage >= totalPosts && totalPosts > postsPerPage && (
          <p className="text-center text-sm text-gray-500 mt-6">
            That's all for now! More guides coming soon.
          </p>
        )}
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;