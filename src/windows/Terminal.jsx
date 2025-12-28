import { Check, Flag } from "lucide-react";
import { techStack } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper"
import { WindowControls } from "../components";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Skills — bash</h2>
      </div>


      <div className="techstack">
        <div className="prompt">
          <span className="user">hisham@portfolio</span>
          <span className="text-gray-500">:~#</span>
          <span className="command">fetch-skills --all</span>
        </div>

        <div className="label">
          <p className="cat-label">Group</p>
          <p className="tech-label">Stack</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category}>
              <div className="cat-info">
                <Check className="check" size={16} />
                <h3 className="category-title">{category}</h3>
              </div>
              <ul className="items-list">
                {items.map((item, index) => (
                  <li key={index} className="tech-item">
                    {item}{index < items.length - 1 ? "," : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>


        <div className="footnote">
          <p>
            <Check size={14} /> System: All modules loaded successfully (100%)
          </p>

          <p className="render-time">
            <Flag size={12} className="me-3" />
            Execution time: 0.006ms
          </p>
        </div>
      </div>
    </>
  )
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");


export default TerminalWindow