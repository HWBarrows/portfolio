import { NavLink } from "react-router-dom"
import { GoThreeBars} from "react-icons/go";
import './NavBar.scss'
import { useState } from "react";


export default function NavBar(){

    const [visibility, setVisibility] = useState(false)

    return (
        <div className="menu">
            <GoThreeBars className="burger" onClick={()=> setVisibility(!visibility)}/>
            <nav className={visibility? "show": "hide"}> 
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="aboutme">About</NavLink></li>
                <li><NavLink to="skills">Skills</NavLink></li>
                <li><NavLink to="contact">Contact</NavLink></li>
            </nav>
        </div>
        
    )
}