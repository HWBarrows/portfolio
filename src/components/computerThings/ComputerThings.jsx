import './Computer.scss'

export default function ComputerThings() {
    return(
        <div className="computerWrapper">
            {/* <div className='stickyTitle'>
             <h1>Skills</h1>
            </div> */}
                <div className='social'>
                    <h2>Soft</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, est non fuga facilis iure magnam, eveniet optio eius incidunt veniam culpa, reprehenderit expedita! Consectetur, rerum id, minus voluptatum qui perspiciatis vitae ipsum sit veniam a iste eum sapiente. Magni delectus perferendis culpa quasi non distinctio reprehenderit eligendi omnis harum ex.</p>
                    
                    <div className='listWrapper'>
                        
                            <div>Project Management</div>
                            <div>Localization</div>
                        
                        
                            <div>Documentation</div>
                            <div>Compliance Management</div>
                        
                    
                       
                            <div>Employee Training </div>
                            <div>Stakeholder Engagement</div>
                        
                    
                    </div>

                </div>
             <hr/>
                <div className='digital'>
                    <h2>Hard</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus rem distinctio a dignissimos, magnam neque recusandae dolorum quae culpa molestias impedit quibusdam rerum officiis ad iure quas laboriosam! Similique veniam nobis modi nulla esse dolor quas. Voluptas consequuntur qui, similique deleniti animi quas magni dignissimos quos aspernatur hic odio.</p>
                    <div className='listWrapper'>
                        <ul>
                            <div>JavaScript & React</div>
                            <div>Css, Scss, & Html</div>
                        </ul>
                        <ul>
                            <div>Node JS</div>
                            <div>MongoDb </div>
                        </ul>
                    
                        <ul>
                            <div> Git & Github</div>
                            <div>Deployment: Heroku & Azure</div>
                        </ul>
                    
                    </div>
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