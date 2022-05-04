import './App.scss'
// import HomePage from './components/HomePage.jsx'
import MyRoutes from '../components/MyRoutes.jsx'
import NavBar from './navBar/NavBar.jsx'
// import AboutMe from './AboutMe'

export default function App (){
    return (
         
            <div className='happyAppy'>
                <NavBar/>
                <MyRoutes/>
            </div>
         
    )
}