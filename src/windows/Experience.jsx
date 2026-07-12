import { Briefcase, Building2, CalendarDays } from "lucide-react";
import { workExperience } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";

const roleThemes = [
  {
    card: "experience-card-blue",
    dot: "experience-dot-blue",
    company: "experience-company-blue",
    badge: "experience-badge-blue",
  },
  {
    card: "experience-card-violet",
    dot: "experience-dot-violet",
    company: "experience-company-violet",
    badge: "experience-badge-violet",
  },
  {
    card: "experience-card-emerald",
    dot: "experience-dot-emerald",
    company: "experience-company-emerald",
    badge: "experience-badge-emerald",
  },
];

const Experience = () => {
  const currentRole = workExperience[0];

  return (
    <>
      <div id="window-header">
        <WindowControls target="experience" />
        <h2>Professional Experience</h2>
      </div>

      <div className="experience-content">
        <div className="experience-hero">
          <div className="experience-hero-icon">
            <Briefcase size={22} />
          </div>
          <div className="experience-hero-copy">
            <p className="experience-hero-label">Career Timeline</p>
            <h3>Front-End Developer</h3>
            <p>
              Enterprise admin portals, CMS-driven apps, and freelance client delivery across
              {" "}
              <strong>{workExperience.length} roles</strong>.
            </p>
          </div>
          <div className="experience-hero-stats">
            <div>
              <span>{workExperience.length}</span>
              <p>Roles</p>
            </div>
            <div>
              <span>2+</span>
              <p>Years</p>
            </div>
            <div>
              <span>20+</span>
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div className="experience-current">
          <span className="experience-pulse" />
          <p>
            Currently at <strong>{currentRole.company}</strong>
          </p>
        </div>

        <ol className="experience-timeline">
          {workExperience.map(({ id, company, role, period, highlights }, index) => {
            const theme = roleThemes[index % roleThemes.length];
            const isCurrent = period.includes("Present");

            return (
              <li key={id} className={`experience-item ${theme.card}`}>
                <div className={`experience-marker ${theme.dot}`}>
                  <span>{workExperience.length - index}</span>
                </div>

                <article className="experience-card">
                  <header className="experience-header">
                    <div className="experience-title-block">
                      <div className="experience-meta">
                        <span className={`experience-company-tag ${theme.company}`}>
                          <Building2 size={14} />
                          {company}
                        </span>
                        {isCurrent && <span className="experience-live-badge">Current</span>}
                      </div>
                      <h4>{role}</h4>
                    </div>

                    <span className={`experience-period ${theme.badge}`}>
                      <CalendarDays size={13} />
                      {period}
                    </span>
                  </header>

                  <ul className="experience-highlights">
                    {highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex}>{highlight}</li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
};

const ExperienceWindow = WindowWrapper(Experience, "experience");

export default ExperienceWindow;
