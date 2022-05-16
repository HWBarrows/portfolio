import { IconContext } from "react-icons";
import { BsLinkedin, BsGithub, BsTwitter} from "react-icons/bs"
import Form from './Form.jsx'
import './Contact.scss'


export default function Contact ({contactRef}){
    return (
        
            <div className='contactWrapper' ref={contactRef}>
                <div className='contactTitle'>
                    <h1>Contact</h1>
                </div>
                 <div className="justify">
                <IconContext.Provider value={{ className: "iconContext" }}>
                 <div className='contactIconWrapper'>
                    <a href="https://www.linkedin.com/in/hallie-barrows/" target="_blank"><div className='contactIconic'><p>Professional</p> <BsLinkedin/></div></a>
                    <a href="https://twitter.com/mechy_techie" target="_blank"><div className='contactIconic'><p>Witty</p><BsTwitter/></div></a>
                    <a href="https://github.com/HWBarrows" target="_blank"><div className='contactIconic'><p>Techy</p><BsGithub/></div></a>
              </div>
              </IconContext.Provider>
              </div>
              <Form/>
            </div>
            
    )
}