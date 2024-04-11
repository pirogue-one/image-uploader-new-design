import { Translation } from 'i18nano'
import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Logo() {
    return (
       <ul className='navbar'>
        <Link to="/faq"><li className='navbar-item'>FAQ</li></Link>
        <Link to="/"><li className='navbar-item'><Translation path="nav-donate" /></li></Link>
        <Link to="/"><li className='navbar-item'><Translation path="nav-explanation" /></li></Link>

       </ul>
    )
}