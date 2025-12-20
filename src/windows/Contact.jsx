import WindowWrapper from "../hoc/WindowWrapper"

const Contact = () => {
  return (
 <>
    <div id="window-header">
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

 <ul>
    {socials.map(({id ,}))}
 </ul>
    </div>
 </>
  )
}


const ContactWindow = WindowWrapper(Contact , "contact");

export default ContactWindow