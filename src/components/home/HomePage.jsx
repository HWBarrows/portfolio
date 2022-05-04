import './HomePage.scss'
import AboutMe from '../about/AboutMe.jsx'
import ComputerThings from '../computerThings/ComputerThings.jsx'
import Contact from '../contact/Contact.jsx'
import NavBar from '../navBar/NavBar.jsx'
import React, { useRef } from 'react'


export default function HomePage() {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const skillsRef = useRef(null)
    const contactRef = useRef(null)
    const skWrpRef = useRef(null)
    const scrollToElement = (reference)=> reference.current.scrollIntoView({behavior:"smooth"})
    const scrollToCenter = (reference) => reference.current.scrollIntoView({behavior:"smooth"})

    return (
        <div>
            {/* <NavBar/> */}
            <ul>
                <li onClick={ () => scrollToElement(aboutRef)}>Hi everybody</li>
                <li></li>
                <li></li>
            </ul>

            <div className="flexContainer" onClick={ ()=> scrollToCenter(skWrpRef)}>
                <div className='prettyWords' ref={homeRef}></div>  
                
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