import './AboutMe.scss'
import React, { useState } from 'react'
import { IconContext } from "react-icons";
import { RiComputerLine, RiTeamLine } from 'react-icons/ri'

export default function AboutMe (){

    const [mySummary, setMySummary] = useState("summary")
    const [lists, setLists] = useState("noShow")

    function changePositions (){
        setMySummary("noShow")
        setLists("summary")
        
    }
    function goBack(){
        setMySummary("summary")
        setLists("noShow")
    }
    
    return(
        <div className="aboutWrapper">
            <IconContext.Provider value={{ className: "top-react-icons" }}>
            <div className={mySummary}>
                <h1>About Me</h1>
                <p>In 2021, I enrolled in a full-stack web development course and looked at a JavaScript event object for the first time. Seeing that it was possible to break an event down to the exact pixel clicked, I finally understood the power of programming and was completely hooked.</p>
                <p>I grew up in New York City, where I worked as a production coordinator for many years. The skills gained in such an international and high energy environment has made the transition to web development easier than I imagined; clear communication, adaptability, critical thinking, and a systematic approach to problem solving. By combining skills in both areas, I aim to create systems that are easy to use for people around the world. <span onClick={()=> changePositions()}>Continue...</span></p>
                </div>
                
                <div className={lists}>
                
                 <div className='iconic'>
                    <h2>Technical Skills</h2>
                    <RiComputerLine/>
                </div>
                   
                    <ul className='listWrapper'>
                            
                            <li>HTML</li>
                            <li>CSS & SCSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Node JS</li>
                            <li>MongoDb </li>
                            <li>Git & Github</li>
                            <li>Azure</li>
                            <li>Sharepoint</li>
                        </ul>
                    <hr/>

                    <div className='iconic'>
                    <h2>Communication Skills</h2>
                    <RiTeamLine/>
                </div>
                    <ul className='listWrapper'>
                        
                            
                            <li>Localization</li>
                            <li>Documentation</li>
                            <li>Compliance Management</li>
                            <li>Employee Training </li>
                            <li>Stakeholder Engagement</li>
                    </ul>
                    <span onClick={()=> goBack()}>...Previous</span>
                </div>

                

            
            </IconContext.Provider>
            </div>
    )
}