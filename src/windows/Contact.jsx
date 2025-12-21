import { WindowControls } from "../components";
import { socials } from "../constants";
import WindowWrapper from "../hoc/WindowWrapper"

const Contact = () => {
  return (
 <>
    <div id="window-header">
      <WindowControls target="contact" />
      <h2>Contact Me</h2>
    </div>

    <div className="p-5 space-y-5">
        <img src="/images/contact.png"  alt="Hisham Rehab" />
 
 <h3>
     Let's Connect
 </h3>
 <p>
    Got an idea? A bug to squash ? Or jsut wanna talk texh?
    I'm in! Reach out to me at:
 </p>

<p>hishamrehab309@gmail.com</p>
 <ul>
    {socials.map(({id , bg , link , icon , text }) => (
      <li key={id} style={{
         backgroundColor:bg 
      }}>
         <a href={link} {...(link.startsWith('mailto:') ? {} : {target: '_blank', rel: 'noopener noreferrer'})} title={text}>
            <img src={icon} alt={text} className="size-5" style={text === "Gmail" ? {filter: 'brightness(0) invert(1)'} : {}} />
            <p>{text}</p>
         </a>
      </li>
    ) )}
 </ul>
    </div>
 </>
  )
}


const ContactWindow = WindowWrapper(Contact , "contact");

export default ContactWindow