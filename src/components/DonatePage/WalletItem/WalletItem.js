import ClipboardJS from "clipboard";
import './WalletItem.scss';
import { useId } from 'react';

export default function WalletItem({ walletName, walletAddress }) {
    const btnId = useId();
    const textId = useId();
    new ClipboardJS("#" + CSS.escape(btnId));
    return (
        <div className="walletItem">
            <p>{walletName}:</p>
            <div>
                <p id={textId}>{walletAddress}</p>
                <img id={btnId} data-clipboard-target={"#" + CSS.escape(textId)} src="/copy_1621635.png" alt="Copy" />
            </div>
        </div>
    )
}