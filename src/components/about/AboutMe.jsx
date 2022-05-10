import './AboutMe.scss'
import React, { forwardRef, useRef } from 'react'
import { IconContext } from "react-icons";
import { GrGroup } from 'react-icons/gr';
import { RiComputerLine, RiTeamLine } from 'react-icons/ri'

export default function AboutMe (){
    
    return(
        <div className="aboutWrapper">
            <IconContext.Provider value={{ className: "top-react-icons" }}>
            <div className='summary'>
                <h1>About</h1>
                <p> In November of 2021, I looked at a JavaScript event object for the first time. Seeing that it was possible to break an event down to the exact pixel clicked, I finally understood the power of programming.</p>
                <p>Since that fateful November day, I've been passionately learning as much as I can about new and emerging technologies and creating fun projects along the way.</p>
                <p>My previous career in project management left me well prepared for a new career in web development. Clear communication, adaptability, critical thinking, and a systematic approach to problem solving are beneficial for working with both people and computers. By combining skills in both areas, especially the ones listed below, I aim to create systems that are easy to use for people around the world.</p>
                
                {/* <p>Born in New York City, educated in Copenhagen, currently residing in Berlin, the digital products I create reflect my international background:</p>
                <h4>Colorful. Clear. Creative.</h4> */}

                
            

                <div className='social'>
                <div className='iconic'>
                    <h2>Soft Skills</h2>
                    <RiTeamLine/>
                </div>
                    {/* <p>My transition to a new career in tech was greatly supported by my previous experience in project management.
                    By working as a production coordinator for more than 10 years in countries including China, Denmark, and Germany, I gained valuable experience in: </p> */}
                    
                    <ul className='listWrapper'>
                        
                            
                            <li>Localization</li>
                            <li>Documentation</li>
                            <li>Compliance Management</li>
                            <li>Employee Training </li>
                            <li>Stakeholder Engagement</li>
                    </ul>

                {/* </div> */}
             <hr/>

                
                {/* <div className='social'> */}
                <div className='iconic'>
                    <h2>Hard Skills</h2>
                    <RiComputerLine/>
                </div>
                    {/* <p>The only way to improve any skill is to practice, and practice I have. Because I've created web apps of various complexities and used systematic problem solving techniques, including stack trace analysis and debugging, I'm proficient in the following areas:</p> */}
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
                    
                    
                </div>

                <p>Born in New York City, educated in Copenhagen, currently residing in Berlin, the digital products I create reflect my international background:</p>
                <h4>Colorful. Clear. Creative.</h4>

            </div>
            </IconContext.Provider>
            </div>
    )
}