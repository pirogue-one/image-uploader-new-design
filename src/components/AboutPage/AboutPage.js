import './AboutPage.scss';
import '../FaqPage/FaqPage.scss';
import { Translation } from 'i18nano';

export default function AboutPage() {
    return (
        <div className='page-container'>
            <div className='paragraph'>
                <h3><Translation path="title-remove-exif" /></h3>
                <p><Translation path="paragraph-remove-exif" /></p>
            </div>
            <div className='paragraph'>
                <h3><Translation path="title-how-it-works" /></h3>
                <div className='paragraph-row'>
                    <div><img className="paragraph-img" src="/globe.png" alt="globe image" />
                        <p><Translation path="paragraph-how-it-works-1" /></p></div>
                    <div><img className="paragraph-img" src="/upload.png" alt="upload image" />
                        <p><Translation path="paragraph-how-it-works-2" /></p></div>
                    <div><img className="paragraph-img" src="/clear.png" alt="clear data image" />
                        <p><Translation path="paragraph-how-it-works-3" /></p></div>
                    <div><img className="paragraph-img" src="/folder.png" alt="save and download image" />
                        <p><Translation path="paragraph-how-it-works-4" /></p></div>
                </div>
            </div>
        </div>
    )
}