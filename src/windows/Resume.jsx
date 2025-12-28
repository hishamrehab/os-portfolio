import { Download } from "lucide-react";
import { WindowControls } from "../components";
import WindowWrapper from "../hoc/WindowWrapper"

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Resume = () => {
  return (
    <div className="flex flex-col h-full min-h-[400px]">
      <div id="window-header">
        <WindowControls target="resume" />
        <h2 className="flex-1 text-center font-bold text-sm">Resume.pdf</h2>

        <a
          href="/files/Hisham-Rehab.pdf"
          download
          className="cursor-pointer p-1 hover:bg-gray-100 rounded-md transition-colors"
          title="Download Resume"
        >
          <Download className="size-5 text-gray-600" />
        </a>
      </div>
      <div className="flex-1 overflow-auto bg-gray-100 p-6 flex justify-center items-start">
        <Document
          file="/files/Hisham-Rehab.pdf"
          loading={<div className="p-10 text-center font-medium text-gray-500">Opening Resume...</div>}
          error={<div className="p-10 text-center text-red-500 font-medium">Unable to load PDF. Please download it instead.</div>}
        >
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            className="shadow-2xl border border-gray-200"
            width={550}
          />
        </Document>
      </div>
    </div>
  )
}

const ResumeWindow = WindowWrapper(Resume, "resume");
export default ResumeWindow