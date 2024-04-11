import './Header.scss'
import LangSelector from '../controls/LangSelector/LangSelector'
import MainMenu from './MainMenu/MainMenu'
import { Link } from "react-router-dom";
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import { Translation } from 'i18nano';
import LoginModal from './LoginModal/LoginModal';

export default function Header({ setLang }) {
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>
      <Navbar />
      <MainMenu />
      <div className='login-wrapper'>
        <p className='login'><Translation path="login"/></p>
      <LangSelector setLang={ setLang } />
      </div>
      <LoginModal />
    </div>
  )
}
