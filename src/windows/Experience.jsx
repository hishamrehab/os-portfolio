import { Check, Flag } from "lucide-react";
import { workExperience } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper";
import { WindowControls } from "../components";

const Experience = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="experience" />
        <h2>Experience — bash</h2>
      </div>

      <div className="experience-log">
        <div className="prompt">
          <span className="user">hisham@portfolio</span>
          <span className="text-gray-500">:~#</span>
          <span className="command">cat experience.log</span>
        </div>

        <div className="label">
          <p className="company-label">Company</p>
          <p className="details-label">Role</p>
        </div>

        <ul className="roles">
          {workExperience.map(({ id, company, role, period, location, stack, highlights }) => (
            <li key={id}>
              <div className="company-info">
                <Check className="check" size={16} />
                <div>
                  <h3 className="company-title">{company}</h3>
                  <p className="company-meta">{period}</p>
                  {location && <p className="company-meta">{location}</p>}
                </div>
              </div>

              <div className="role-info">
                <h4 className="role-title">{role}</h4>
                <ul className="highlights">
                  {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                {stack?.length > 0 && (
                  <p className="stack">
                    <span>stack:</span> {stack.join(", ")}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={14} /> System: {workExperience.length} roles loaded successfully (3+ years)
          </p>

          <p className="render-time">
            <Flag size={12} className="me-3" />
            Execution time: 0.004ms
          </p>
        </div>
      </div>
    </>
  );
};

const ExperienceWindow = WindowWrapper(Experience, "experience");

export default ExperienceWindow;
