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
                <p><Translation path="paragraph-how-it-works-1" /></p>
                <p><Translation path="paragraph-how-it-works-2" /></p>
                <p><Translation path="paragraph-how-it-works-3" /></p>
                <p><Translation path="paragraph-how-it-works-4" /></p>
                
            </div>
        </div>
    )
}