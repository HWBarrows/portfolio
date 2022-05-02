import './Computer.scss'

export default function ComputerThings() {
    return(
        <div className="computerWrapper">
            {/* <div className='stickyTitle'>
             <h1>Skills</h1>
            </div> */}
                <div className='social'>
                    <h2>Soft Skills</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, est non fuga facilis iure magnam, eveniet optio eius incidunt veniam culpa, reprehenderit expedita! Consectetur, rerum id, minus voluptatum qui perspiciatis vitae ipsum sit veniam a iste eum sapiente. Magni delectus perferendis culpa quasi non distinctio reprehenderit eligendi omnis harum ex.</p>
                    
                    <ul className='listWrapper'>
                        
                            <li>Project Management</li>
                            <li>Localization</li>
                            <li>Documentation</li>
                            <li>Compliance Management</li>
                            <li>Employee Training </li>
                            <li>Stakeholder Engagement</li>
                    </ul>

                </div>
             <hr/>
                <div className='social'>
                    <h2>Hard Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus rem distinctio a dignissimos, magnam neque recusandae dolorum quae culpa molestias impedit quibusdam rerum officiis ad iure quas laboriosam! Similique veniam nobis modi nulla esse dolor quas. Voluptas consequuntur qui, similique deleniti animi quas magni dignissimos quos aspernatur hic odio.</p>
                    <ul className='listWrapper'>
                        
                            <li>JavaScript & React</li>
                            <li>Css, Scss, & Html</li>
                            <li>Node JS</li>
                            <li>MongoDb </li>
                            <li> Git & Github</li>
                            <li>Deployment: Heroku & Azure</li>
                        </ul>
                    
                    
                    </div>

                <div className='stickyTitle'>
                    <h1>Projects</h1>
                </div>

                    <div className='projectWrapper'>
                            <h2 className='title1 stacking'>Goddess Gallery</h2>
                        <div className='contentWrapper'>
                        <div className='first text'><p>First Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapOne"></div>
                        </div>
                            <h2 className='title2 stacking'>Wu-Tang Forever</h2>
                        <div className='contentWrapper'>
                        <div className='second text'><p>Second Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapTwo"></div>
                        </div>
                            <h2 className='title3 stacking'>Tip-Cal</h2>
                        <div className='contentWrapper'>
                        <div className='third text'><p>Third Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapThree"></div>
                        </div>

                            <h2 className='title4 stacking'>Pure Sweetness</h2>
                        <div className='contentWrapper'>
                        <div className='fourth text'><p>Fourth Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et dicta consectetur, perferendis reiciendis possimus consequuntur?</p></div>
                        <div className="snapshot snapFour"></div>
                        
                        </div>
                        <div className='placeholder'></div>
                        </div>
            </div>
                    
    )
}