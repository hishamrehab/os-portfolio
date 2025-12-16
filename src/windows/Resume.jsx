import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper"

const Resume = () => {
  return (
    <>
    <div id="wndow-hrader">
      <WindowControls target="resume" />
    </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume , "resume");
export default Resume