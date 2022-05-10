import React,{ useState, useRef } from 'react'
import './Computer.scss'
import { BiWinkSmile } from "react-icons/bi";


export default function ComputerThings({skillsRef}) {

 const [title1style, setTitle1Style]= useState(null)
 const [title2Style, setTitle2Style] = useState(null)
 const [title3Style, setTitle3Style] = useState(null)
 const [title4Style, setTitle4Style] = useState(null)

 const project1ref = useRef(null)
 const project2ref = useRef(null)
 const project3ref = useRef(null)
 const project4ref = useRef(null)

 const scrollToElement = (reference)=> reference.current.scrollIntoView({behavior:"smooth", block:"center"})
    return(
        <div className="computerWrapper" ref={skillsRef}>
            
                
                <div className='stickyTitle'>
                    <h1>Projects</h1>
                    
                    
                </div>
                    <div className='projectWrapper'>

                    <div className='contentWrapper'>
                        <div className='projectIntro'>
                            <p>A <a href='https://www.goodreads.com/quotes/309485-nobody-tells-this-to-people-who-are-beginners-i-wish' target="_blank">quote</a> from the writer and podcast host, Ira Glass, describes the process a creative individual must go through in order to improve in their craft. One can only improve through consistent practice. For me, each time my code breaks is an opportunity to learn more about development. And by creating projects of varying complexities, I've developed greater skills in error catching, API calls, asynchronous programming,responsive design, frameworks, and libraries.</p>
                            <p>The current site you're visiting, hallieb.tech, is a full-stack, fully responsive web app with a REST API via Mongodb. It build upon lessons learned via a 12 month web development course from DCI Digital Career Institute gGmbH</p>
                        </div>
                    </div>
                            
                            <h2 id="title1" className={`stacking ${title1style}`} onClick={()=> scrollToElement(project1ref)}>Goddess Gallery</h2>
                        
                        <div className='contentWrapper' onMouseEnter={()=> setTitle1Style('active')} onMouseLeave={()=> setTitle1Style(null)}>
                        <div className='first text' >
                            <p>The <a href="https://github.com/HWBarrows/gallery-site" target="_blank">original version</a> of this web app was a bootcamp project to practice using flexbox and grid. Unsatisfied with the layout, structure, and overall look, I decided to create something that was more visually appealing.</p>
                            <p>The result is a full responsive website, constructed with only old school Vanilla JavaScript, composed of images representing my modern interpretation of classic female deities from around the world.</p>
                            <a href='https://hwbarrows.github.io/newGallery/' target="_blank" className='bottomLink'>Link to live site</a>
                            </div>
                        <div className="snapshot snapOne" ref={project1ref}></div>
                        </div>

                            <h2 id='title2' className={`stacking ${title2Style}`} onClick={()=> scrollToElement(project2ref)}>Wu-Tang Forever</h2>

                        <div className='contentWrapper' onMouseEnter={()=> setTitle2Style('active')} onMouseLeave={()=> setTitle2Style(null)}>
                        <div className='second text'><p>To practice routing with React, I created this tribute page to Wu-Tang Clan, using quotes and filler text. With a band as large as Wu-Tang, I was able to think of a creative way to dynamically populate the text for each member.</p>
                        <p>The app is responsive, with conditional styling based on the user's location and imbedded video. Hosted on Heroku, this project was also a practice in deployment. Hosting on a free dyno from Heroku does increase the loading time, so please be patient when visiting the live site.</p>
                        <a href='https://wutangforthechildren.herokuapp.com/' target="_blank" className='bottomLink'>Link to live site</a>
                        </div>
                        <div className="snapshot snapTwo" ref={project2ref}></div>
                        </div>

                            <h2 id='title3' className={`stacking ${title3Style}`} onClick={()=> scrollToElement(project3ref)}>Tip-Cal</h2>

                        <div className='contentWrapper' onMouseEnter={()=> setTitle3Style('active')} onMouseLeave={()=> setTitle3Style(null)}>
                        <div className='third text'><p>Tipping is a large part of American culture and no one likes fighting over the bill. To make splitting the check between friends simpler and ensure waitstaff receive appropriate compensation for a job well done, just enter the bill amount, total number of guests, and percentage amount for tip</p>
                        <p>I've personally used this app and can promise, it makes things so much easier</p>
                        <a href='https://hwbarrows.github.io/tipCal/' target="_blank" className='bottomLink'>Link to live site</a>
                        </div>
                        <div className="snapshot snapThree" ref={project3ref}></div>
                        </div>

                            <h2 id='title4' className={`stacking ${title4Style}`} onClick={()=> scrollToElement(project4ref)}>Pure Sweetness</h2>

                        <div className='contentWrapper'onMouseEnter={()=> setTitle4Style('active')} onMouseLeave={()=> setTitle4Style(null)}>
                        <div className='fourth text'><p>Pure Sweetness is a frontend mock-up of a social media site, with a focus on only supplying positive content. Created in response to reports that negative content increases engagement, I wanted to imagine how a product that aims to do the exact opposite would look and function.</p>
                        <p>The responsive layout was achieved using CSS Grid and Bootstrap</p>
                        <a href='https://hwbarrows.github.io/pure-sweetness/' target="_blank" className='bottomLink'>Link to live site</a>
                        </div>
                        <div className="snapshot snapFour" ref={project4ref}></div>
                        
                        </div>
                        <div className='placeholder'></div>
                        </div>
            </div>
                    
    )
}