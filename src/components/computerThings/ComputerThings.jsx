import React,{ useState } from 'react'
import './Computer.scss'


export default function ComputerThings({skillsRef}) {
//     const active = (x)=>{
//        setTitleStyle({color: "#CD6479", textDecoration: "underline"})
//     }
// //{color: "#CD6479", textDecoration: "underline"}
//     const inactive = (x)=> {
//         setTitleStyle({color: "grey", textDecoration: "none", fontSize:"1.5em"})
//     }
//  const [titleStyle, setTitleStyle ]= useState({color:"black"})
//  const title1 = useRef(null)
//  const title2 = useRef(null)
 const [title1style, setTitle1Style]= useState(null)
 const [title2Style, setTitle2Style] = useState(null)
 const [title3Style, setTitle3Style] = useState(null)
 const [title4Style, setTitle4Style] = useState(null)
    
    return(
        <div className="computerWrapper" ref={skillsRef}>
            
                
                <div className='stickyTitle'>
                    <h1>Projects</h1>
                    
                </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe sed beatae illum quia accusantium rem officia? Nemo blanditiis necessitatibus temporibus qui impedit cumque aliquid, laboriosam culpa rem laudantium hic autem, odit exercitationem magnam explicabo nulla quibusdam sapiente nisi deserunt et doloribus nesciunt repudiandae. Blanditiis quidem dicta aliquam. Hic, quia eum!</p>
                    <div className='projectWrapper'>
                            <h2 id="title1" className={`stacking ${title1style}`} >Goddess Gallery</h2>
                        <div className='contentWrapper'onMouseEnter={()=> setTitle1Style("active")} onMouseLeave={()=> setTitle1Style("inactive")}>
                        <div className='first text'>
                            <p>The <a href="https://github.com/HWBarrows/gallery-site" target="_blank">original version</a> of this web app was a bootcamp project to practice using flexbox and grid. Unsatisfied with the layout, structure, and overall look, I decided to create something that was more visually appealing.</p>
                            <p>The result is a full responsive website, constructed with only old school Vanilla JavaScript, composed of images representing my modern interpretation of classic female deities from around the world.</p>
                            <a href='https://hwbarrows.github.io/newGallery/' target="_blank">Link to live site</a>
                            </div>
                        <div className="snapshot snapOne"></div>
                        </div>
                            <h2 id='title2' className={`stacking ${title2Style}`}>Wu-Tang Forever</h2>
                        <div className='contentWrapper' onMouseEnter={()=> setTitle2Style('active')} onMouseLeave={()=> setTitle2Style('inactive')}>
                        <div className='second text'><p>Second Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapTwo"></div>
                        </div>
                            <h2 id='title3' className={`stacking ${title3Style}`}>Tip-Cal</h2>
                        <div className='contentWrapper' onMouseEnter={()=> setTitle3Style('active')} onMouseLeave={()=> setTitle3Style('inactive')}>
                        <div className='third text'><p>Third Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapThree"></div>
                        </div>

                            <h2 id='title4' className={`stacking ${title4Style}`} >Pure Sweetness</h2>
                        <div className='contentWrapper'onMouseEnter={()=> setTitle4Style('active')} onMouseLeave={()=> setTitle4Style('inactive')}>
                        <div className='fourth text'><p>Fourth Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapFour"></div>
                        
                        </div>
                        <div className='placeholder'></div>
                        </div>
            </div>
                    
    )
}