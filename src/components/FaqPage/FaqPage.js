import { Translation } from 'i18nano';
import './FaqPage.scss';

export default function FaqPage() {
    return (
    <div className='page-container'>
        <div className='paragraph'>
            <h3><Translation path="title-about" /></h3>
            <p><Translation path="paragraph-about" /></p>
        </div>
        <div className='paragraph'>
            <h3><Translation path="title-rules" /></h3>
            <p><Translation path="paragraph-rules" /></p>
        </div>
        <div className='paragraph'>
            <h3><Translation path="title-privacy-policy" /></h3>
            <p><Translation path="paragraph-privacy-policy" /></p>
        </div>
    </div>
    )
}
