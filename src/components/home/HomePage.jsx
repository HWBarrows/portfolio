import { NavLink } from "react-router-dom"
import { useState } from 'react'
import { GoThreeBars} from "react-icons/go";
import './HomePage.scss'
import AboutMe from '../about/AboutMe.jsx'
import ComputerThings from '../computerThings/ComputerThings.jsx'
import Contact from '../contact/Contact.jsx'
import React, { useRef } from 'react'


export default function HomePage() {
    const [visibility, setVisibility] = useState(false)

    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const contactRef = useRef(null)
    const skWrpRef = useRef(null)
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
                <li onClick={ () => scrollToElement(contactRef)}>Contact</li>
            </ul>
            </div>
            <div className="flexContainer" onClick={ ()=> scrollToElement(skWrpRef)}>
                <div className='prettyWords'></div>  
                
                <div className='skillsWrapper' >
                    <div className='skillsColl1' ref={skWrpRef}>web</div>
                    <div className='skillsColl1'>dev</div>
                </div>
            </div>
            <span ref={aboutRef}/>
             <AboutMe/> 
            <span ref={skillsRef}/>
             <ComputerThings/>
            <span ref={contactRef}/>
             <Contact/>
             
        </div>
    )
    
}