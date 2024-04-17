import './DonatePage.scss';
import WalletItem from './WalletItem/WalletItem';



const walletsList = [
    {
        name: "BTC",
        address : "bc1qyxga2qf0rc70zar9ftxdms7vxct374v6sakskg"
    },
    {
        name: "ETH",
        address: "0x693BAFC6c0207CCD60aAD2f7524624A808d0675e"
    },
    {
        name: "USDT",
        address: "TS89rSKz7QrJGccNDXwTjXugoLyYfudsjH"
    },
    {
        name: "TRX",
        address: "TS89rSKz7QrJGccNDXwTjXugoLyYfudsjH"
    },
    {
        name: "LTC",
        address: "ltc1qte6vha4fwkxeqayjt5s0wrt4da7960mmgl5cg3"
    },
    {
        name: "TON",
        address: "EQCLVgousJbTARR_FF_ehUpPdmZEYm22wmA2oGoxh-4KM2Al"
    },
    {
        name: "BNB",
        address: "0x693BAFC6c0207CCD60aAD2f7524624A808d0675e"
    },
    {
        name: "XRP",
        address: "r8F6boPqAAUGXvvPH1zNAScb7B7NYGFMq"
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