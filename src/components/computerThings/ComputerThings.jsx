import './Computer.scss'
import { RiComputerLine } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";

export default function ComputerThings() {
    return(
        <div className="computerWrapper">
            {/* <div className='stickyTitle'>
             <h1>Skills</h1>
            </div> */}
                <div className='skills'>
                    <div className='iconic'>
                        <h2>Soft Skills</h2> <GrGroup/>
                    </div>
                    {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, est non fuga facilis iure magnam, eveniet optio eius incidunt veniam culpa, reprehenderit expedita! Consectetur, rerum id, minus voluptatum qui perspiciatis vitae ipsum sit veniam a iste eum sapiente. Magni delectus perferendis culpa quasi non distinctio reprehenderit eligendi omnis harum ex.</p> */}
                    
                    <ul className='listWrapper'>
                        
                            <li>Project Management</li>
                            <li>Localization</li>
                            <li>Documentation</li>
                            <li>Employee Training </li>
                            <li>Stakeholder Engagement</li>
                            <li>Compliance Management</li>
                    </ul>
                </div>
             <hr/>
                <div className='skills'>
                    <div className='iconic'>
                    <h2>Hard Skills</h2> <RiComputerLine/>
                    </div>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus rem distinctio a dignissimos, magnam neque recusandae dolorum quae culpa molestias impedit quibusdam rerum officiis ad iure quas laboriosam! Similique veniam nobis modi nulla esse dolor quas. Voluptas consequuntur qui, similique deleniti animi quas magni dignissimos quos aspernatur hic odio.</p> */}
                    <ul className='listWrapper'>
                       
                            <li>JavaScript</li> 
                            <li>React</li>
                            <li>Css, Scss, & Html</li>
                            <li>Node.js</li>
                            <li>MongoDb </li>
                            <li> Git / Github</li>
                            <li>Deployment (Heroku & Azure)</li>
                        
                    
                    </ul>
                    </div>

                <div className='stickyTitle'>
                    <h1>Projects</h1>
                </div>

                    <div className='projectWrapper'>
                            <h2 className='title1 stacking'> <a href="https://hwbarrows.github.io/newGallery/" target="_blank">Goddess Gallery</a></h2>
                        <div className='contentWrapper'>
                        <div className='first text'><p>First Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapOne"></div>
                        </div>
                            <h2 className='title2 stacking'><a href='https://wutangforthechildren.herokuapp.com/'target="_blank">Wu-Tang Forever</a></h2>
                        <div className='contentWrapper'>
                        <div className='second text'><p>Second Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p>
                        
                        </div>
                        <div className="snapshot snapTwo"></div>
                        </div>
                            <h2 className='title3 stacking'><a href="https://hwbarrows.github.io/tipCal/" target="_blank">Tip-Cal</a></h2>
                        <div className='contentWrapper'>
                        <div className='third text'><p>Third Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapThree"></div>
                        </div>

                            <h2 className='title4 stacking'> <a href="https://hwbarrows.github.io/pure-sweetness/" target="_blacnk">Pure Sweetness</a></h2>
                        <div className='contentWrapper'>
                        <div className='fourth text'><p>Fourth Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapFour"></div>
                        
                        </div>
                        <div className='placeholder'></div>
                        </div>
            </div>
                    
    )
}