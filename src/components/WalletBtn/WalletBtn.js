import { Translation } from 'i18nano';
import { Link } from 'react-router-dom';
import ClipboardJS from "clipboard";
import { useState } from 'react';
import QRCode from "react-qr-code";
import "./WalletBtn.scss";


export default function Wallets () {
    new ClipboardJS("#copyBtn");

    const [style, setStyle] = useState("hidden");

  function showQr() {
    setStyle("qrWrapper");
  }

  function hideQr() {
    setStyle("hidden")
  }

    return (
        <div className="walletsContainer">
            <div className="walletContainer">
                <div className="wallet">
                    <p>BTC:</p><p className="walletText" id="copy">bc1qyxga2qf0rc70zar9ftxdms7vxct374v6sakskg</p>
                    <img id="copyBtn" data-clipboard-target="#copy" src="/copy_1621635.png" alt="Copy" />
                    <img src="/qr-code.png" alt="Qr-code" onClick={showQr} />
                    <div className={style} onClick={hideQr}>
            <div className="qr">
              <QRCode value="bc1qyxga2qf0rc70zar9ftxdms7vxct374v6sakskg" size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor: "#FFFFFF" }} />
            </div>
          </div>
                </div>
            </div>
            <Link to="/donate"><p className='donateBtn'><Translation path="nav-donate" /></p></ Link >
        </div>
    )
}