import './LoginModal.scss';
import { Translation } from 'i18nano';
import GoogleIcon from './google_icon.png';
import FbIcon from './fb_icon.png';
import AppleIcon from './apple_icon.png';


export default function LoginModal() {
    return (
        <div className="login-modal-wrapper">
            <div className="login-modal">
                <h3 className="login-modal-title">Log in</h3>
                <div className="input-container">
                    <label for="email">Email
                    </label>
                    <input type="text" name="email"></input>
                </div>
                <div className="input-container">
                    <label for="email"><Translation path="password" />
                    </label>
                    <input type="text" name="email"></input>
                </div>
                <button className="login-btn"><Translation path="login-btn" /></button>
                <div className="login-divider">or</div>
                <div className="socials">
                    <div className="social-btn">
                        <img className="social-btn-img" src={GoogleIcon} />
                    </div>
                    <div className="social-btn">
                        <img className="social-btn-img" src={FbIcon} />
                    </div>
                    <div className="social-btn">
                        <img className="social-btn-img" src={AppleIcon} />
                    </div>
                </div>
                <p><Translation path="sign-up-link" /></p>
            </div>
        </div>
    )
}
