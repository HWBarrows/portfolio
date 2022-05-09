import React,{ useRef, useState } from 'react'
import './Computer.scss'
import { GrGroup } from 'react-icons/gr';
import { RiComputerLine } from 'react-icons/ri'

export default function ComputerThings({skillsRef}) {
    const active = (x)=>{
       setTitleStyle({color: "#CD6479", textDecoration: "underline"})
    }
//{color: "#CD6479", textDecoration: "underline"}
    const inactive = (x)=> {
        setTitleStyle({color: "grey", textDecoration: "none", fontSize:"1.5em"})
    }
 const [titleStyle, setTitleStyle ]= useState({color:"black"})
 const title1 = useRef(null)
 const title2 = useRef(null)
    
    return(
        <div className="computerWrapper" ref={skillsRef}>
            
                <div className='iconic'>
                    <h2>Soft Skills</h2>
                    <GrGroup/>
                </div>

                <div className='social'>
                    
                    <p>My transition to a new career in tech was greatly supported by my previous experience in project management.
                    By working as a production coordinator for more than 10 years in countries including China, Denmark, and Germany, I gained valuable experience in: </p>
                    
                    <ul className='listWrapper'>
                        
                            
                            <li>Localization</li>
                            <li>Documentation</li>
                            <li>Compliance Management</li>
                            <li>Employee Training </li>
                            <li>Stakeholder Engagement</li>
                    </ul>

                </div>
             <hr/>

                <div className='iconic'>
                    <h2>Hard Skills</h2>
                    <RiComputerLine/>
                </div>
                <div className='social'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus rem distinctio a dignissimos, magnam neque recusandae dolorum quae culpa molestias impedit quibusdam rerum officiis ad iure quas laboriosam! Similique veniam nobis modi nulla esse dolor quas. Voluptas consequuntur qui, similique deleniti animi quas magni dignissimos quos aspernatur hic odio.</p>
                    <ul className='listWrapper'>
                            
                            <li>HTML</li>
                            <li>CSS, SCSS</li>
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

                <div className='stickyTitle'>
                    <h1>Projects</h1>
                    
                </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sed beatae illum quia accusantium rem officia? Nemo blanditiis necessitatibus temporibus qui impedit cumque aliquid, laboriosam culpa rem laudantium hic autem, odit exercitationem magnam explicabo nulla quibusdam sapiente nisi deserunt et doloribus nesciunt repudiandae. Blanditiis quidem dicta aliquam. Hic, quia eum!</p>
                    <div className='projectWrapper'>
                            <h2 className='title1 stacking' style={titleStyle} >Goddess Gallery</h2>
                        <div className='contentWrapper'onMouseEnter={()=> active(title1)} onMouseLeave={()=> inactive(title1)}>
                        <div className='first text'>
                            <p>The <a href="https://github.com/HWBarrows/gallery-site" target="_blank">original version</a> of this web app was a bootcamp project to practice using flexbox and grid. Unsatisfied with the layout, structure, and overall look, I decided to create something that was more visually appealing.</p>
                            <p>The result is a full responsive website, constructed with only old school Vanilla JavaScript, composed of images representing my modern interpretation of classic female deities from around the world.</p>
                            <a href='https://hwbarrows.github.io/newGallery/' target="_blank">Link to live site</a>
                            </div>
                        <div className="snapshot snapOne"></div>
                        </div>
                            <h2 className='title2 stacking'style={titleStyle} >Wu-Tang Forever</h2>
                        <div className='contentWrapper'onMouseEnter={()=> active(title2)} onMouseLeave={inactive}>
                        <div className='second text'><p>Second Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapTwo"></div>
                        </div>
                            <h2 className='title3 stacking'style={titleStyle}>Tip-Cal</h2>
                        <div className='contentWrapper'onMouseEnter={active} onMouseLeave={inactive}>
                        <div className='third text'><p>Third Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapThree"></div>
                        </div>

                            <h2 className='title4 stacking'style={titleStyle}>Pure Sweetness</h2>
                        <div className='contentWrapper'onMouseEnter={active} onMouseLeave={inactive}>
                        <div className='fourth text'><p>Fourth Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapFour"></div>
                        
                        </div>
                        <div className='placeholder'></div>
                        </div>
            </div>
                    
    )
}