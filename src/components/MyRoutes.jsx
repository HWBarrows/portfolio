import { Route, Routes } from 'react-router-dom'
import AboutMe from './about/AboutMe.jsx'
import ComputerThings from './computerThings/ComputerThings.jsx'
import HomePage from './home/HomePage.jsx'
import Contact from './contact/Contact.jsx'


export default function MyRoutes (){
    return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/aboutme" element={<AboutMe/>}/>
        <Route path="/skills" element={<ComputerThings/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
            
    )
}