import { NavLink } from "react-router-dom"
import React, { useState, useRef } from 'react'
import { GoThreeBars} from "react-icons/go";
import './HomePage.scss'
import AboutMe from '../about/AboutMe.jsx'
import ComputerThings from '../computerThings/ComputerThings.jsx'
import Contact from '../contact/Contact.jsx'
import Skills from "../skills/Skills.jsx";


export default function HomePage() {
    const [visibility, setVisibility] = useState(false)

    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const projectRef = useRef(null)
    const contactRef = useRef(null)
    
    const scrollToElement = (reference)=> reference.current.scrollIntoView({behavior:"smooth"})
    const scrollToCenter = (reference) => reference.current.scrollIntoView({behavior:"smooth"})

    return (
        <div>
            <span ref={homeRef}/>
            <div className='menu' >
            <GoThreeBars className="burger" onClick={()=> setVisibility(!visibility)}/>  
            <ul className={visibility? "show": "hide"}>
                <li onClick={ () => scrollToElement(homeRef)}>Home</li>
                <li onClick={ () => scrollToElement(aboutRef)}>About</li>
                <li onClick={ () => scrollToElement(skillsRef)}>Skills</li>
                <li onClick={ () => scrollToElement(projectRef)}>Projects</li>
                <li onClick={ () => scrollToElement(contactRef)}>Contact</li>
            </ul>
            </div>
            <div className="flexContainer">
                <div className='prettyWords'></div>  
                
                <div className='skillsWrapper' >
                    <div className='skillsColl1'>web</div>
                    <div className='skillsColl1'>dev</div>
                </div>
            </div>
            <span ref={aboutRef}/>
             <AboutMe/> 
            <span ref={skillsRef}/>
            <Skills/>
            <span ref={projectRef}/>
             <ComputerThings/>
            <span ref={contactRef}/>
             <Contact/>
             
        </div>
    )
    
}