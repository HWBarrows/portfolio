import React, { useState, useRef } from 'react'
import { GoThreeBars} from "react-icons/go";
import './HomePage.scss'
import AboutMe from '../about/AboutMe.jsx'
import ComputerThings from '../computerThings/ComputerThings.jsx'
import Contact from '../contact/Contact.jsx'



export default function HomePage() {
    const [visibility, setVisibility] = useState(false)

    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    
    const scrollToElement = (reference)=> reference.current.scrollIntoView({behavior:"smooth"})
    

    return (
        <div>
            <span ref={homeRef}/>
            <div className='menu'>
            <GoThreeBars className="burger" onClick={()=> setVisibility(!visibility)}/>
            <ul className={visibility? "show": "hide"}>
                <li onClick={ () => scrollToElement(homeRef)}>Home</li>
                <li onClick={ () => scrollToElement(aboutRef)}>About</li>
                <li onClick={ () => scrollToElement(projectRef)}>Projects</li>
                <li onClick={ () => scrollToElement(contactRef)}>Contact</li>
            </ul>
            </div>
            <div className="flexContainer">
                <div className='cardWrapper'></div>
                
            </div>
            <span ref={aboutRef}/>
             <AboutMe/> 
            <span ref={projectRef}/>
             <ComputerThings/>
            <span ref={contactRef}/>
             <Contact/>
             
        </div>
    )
    
}