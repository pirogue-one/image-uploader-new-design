import { Translation } from 'i18nano'
import { Link } from "react-router-dom";
import './Navbar.scss'

export default function Logo() {
    return (
        <div className='group-nav'>
            <ul className='navbar'>
                <Link to="/faq"><li className='navbar-item'>FAQ</li></Link>
                <Link to="/donate"><li className='navbar-item'><Translation path="nav-donate" /></li></Link>
                <Link to="/about"><li className='navbar-item'><Translation path="nav-explanation" /></li></Link>

            </ul>

            <div className="hamburger-menu navbar-mob">

                <input id="menu__toggle" type="checkbox" />
                <label className="menu__btn" htmlFor="menu__toggle">
                    <span></span>
                </label>

                <ul className="menu__box">
                    <Link to="/faq"><li className='navbar-item'>FAQ</li></Link>
                    <Link to="/donate"><li className='navbar-item'><Translation path="nav-donate" /></li></Link>
                    <Link to="/about"><li className='navbar-item'><Translation path="nav-explanation" /></li></Link>
                </ul>
            </div>
        </div>
    )
}