import { Navbar , Welcome , Dock } from "./components"
// import gsap from "gsap" // Commented out since not used
// import { Draggable }from "gsap/Draggable" // Commented out to fix Vercel build issue
import { Finder, Resume, Safari, Terminal , Text , Image, Contact} from "./windows"

// gsap.registerPlugin(Draggable) // Commented out to fix Vercel build issue
const App = () => {
  return (
  <main>
    <Navbar />
    <Welcome />
    <Dock />

    <Terminal />
    <Safari />
    <Resume />
    <Finder />
    <Text />
    <Image />
    <Contact />
 
  </main>
  )
}

export default App