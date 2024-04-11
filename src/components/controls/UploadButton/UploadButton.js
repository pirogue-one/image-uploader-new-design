import './UploadButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'

export default function UploadButton({ onClick }) { 
  return (
    <button className="upload-file-button" onClick={onClick}>
      <FontAwesomeIcon icon={faCloudArrowUp} className="upload-file-button-icon" />
      Upload
    </button>
  )
}
