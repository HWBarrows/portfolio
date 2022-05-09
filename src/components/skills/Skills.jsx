import { GrGroup } from 'react-icons/gr';
import { RiComputerLine } from 'react-icons/ri'
import './Skills.scss'

export default function Skills () {


    return(
        <div className='skillsCompWrapper'>
            

                <div className='social'>
                <div className='iconic'>
                    <h2>Soft Skills</h2>
                    <GrGroup/>
                </div>
                    <p>My transition to a new career in tech was greatly supported by my previous experience in project management.
                    By working as a production coordinator for more than 10 years in countries including China, Denmark, and Germany, I gained valuable experience in: </p>
                    
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
                    <p>The only way to improve any skill is to practice, and practice I have. Because I've created web apps of various complexities and used systematic problem solving techniques, including stack trace analysis and debugging, I'm proficient in the following areas:</p>
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

        </div>
    )
}