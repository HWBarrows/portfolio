import './HomePage.scss'
// import React, { useState } from 'react'
// import AboutMe from './AboutMe.jsx'
import AboutMe from '../about/AboutMe.jsx'
import ComputerThings from '../computerThings/ComputerThings.jsx'
import Contact from '../contact/Contact.jsx'


export default function HomePage() {
  
    // const [ extend, setExtend ] = useState(false) 
    
    // const showOff = ()=> {
    //     setExtend(!extend)
    // }

    return (
        <div className='snapContainer'>
            

            <div className="flexContainer">
                <div className='prettyWords'>  
                </div>
                <div className='skillsWrapper'>
                <div className='skillsColl1'>web</div>
                <div className='skillsColl1'>dev</div>
                </div>
            </div>
            {/* <div className='prettyBoxes'></div> */}
             <AboutMe/> 
             <ComputerThings/>
             <Contact/>
             {/* this is where the other components can be imported and returned as part of an extend page */}
                {/* useReducer can collect the states of the different elements so that once opened stays open unless 
                explicitly told to close */}
        </div>
    )
    
}