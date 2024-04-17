import ClipboardJS from "clipboard";
import './WalletItem.scss';
import { useId, useState } from 'react';
import QRCode from "react-qr-code";

export default function WalletItem({ walletName, walletAddress }) {
    const btnId = useId();
    const textId = useId();

    new ClipboardJS("#" + CSS.escape(btnId));

    const [style, setStyle] = useState("hidden");

    function showQr() {
      setStyle("qrWrapper");
    }
  
    function hideQr() {
      setStyle("hidden")
    }
    return (
       <div className="walletItem">
      <p>{walletName}:</p>
      <div className="walletWrapper">
        <p id={textId}>{walletAddress}</p>
        <div className="imagesWrapper">
          <img id={btnId} data-clipboard-target={"#" + CSS.escape(textId)} src="/copy_1621635.png" alt="Copy" />
          <img src="/qr-code.png" alt="Qr-code" onClick={showQr}/>
          <div className={style} onClick={hideQr}>
            <div className="qr">
              <QRCode value={walletAddress} size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%", backgroundColor: "#FFFFFF" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}