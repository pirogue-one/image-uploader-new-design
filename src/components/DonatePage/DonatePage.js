import './DonatePage.scss';
import WalletItem from './WalletItem/WalletItem';



const walletsList = [
    {
        name: "Bitcoin",
        address : "bc1qyxga2qf0rc70zar9ftxdms7vxct374v6sakskg"
    },
    {
        name: "USDT Trc20",
        address: "TS89rSKz7QrJGccNDXwTjXugoLyYfudsjH"
    }
]

export default function DonatePage() {
    return (
        <div className="container">
        <div className="donateContainer">
            {walletsList.map(item => (<WalletItem walletName={item.name} walletAddress={item.address} />) )}
        </div>
    </div>
    )
}