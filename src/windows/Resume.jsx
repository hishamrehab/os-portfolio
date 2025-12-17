import { Download } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper"

const Resume = () => {
  return (
    <>
    <div id="window-header">
      <WindowControls target="resume" />
      <h2>Resume.pdf</h2>

  <a
  href="files/resume.pdf" 
  download
 className="cursor-pointer"
  title="Download Resume"  
  >
    <Download className="icon"/>
   </a>
    </div>
    </>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow