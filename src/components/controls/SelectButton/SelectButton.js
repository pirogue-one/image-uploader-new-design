import { Fragment, useRef, useState } from 'react'
import './SelectButton.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  fileUploadImage  from './upload_image.png'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

export default function SelectButton({ mode, progress, onSelect, onUploadImages }) {
  // mode in ('select', 'upload', 'progress')
  const hiddenFileInput = useRef(null)
  const [isHovered, setIsHovered] = useState(false)

  const clickHandler = () => {
    if (mode === 'select') hiddenFileInput.current.click()
    if (mode === 'upload') onUploadImages()
  }

  const handleChange = (event) => {
    onSelect([...event.target.files])
  }

  const handleClick = (event) => {
    event.target.value = null
  }

  const getButtonClass = () => {
    if (isHovered && mode !== 'progress') return ' hovered'
    if (mode === 'progress') return ' animate'
    return ''
  }

  const mouseEnterHandler = () => {
    setIsHovered(true)
  }

  const mouseLeaveHandler = () => {
    setIsHovered(false)
  }

  console.log(fileUploadImage)

  return (
    <Fragment>
      <div className="select-file-button-wrapper">
        <button
          className={'select-file-button' + getButtonClass()}
          onClick={clickHandler}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
        >
          <div className={'select-file-button-circle-border' + getButtonClass()} />
          {/* <div className="select-file-button-circle-border-hover" /> */}
        </button>
        <div className={'icon' + getButtonClass()} onClick={clickHandler} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
          {mode === 'select' && <img className="select-file-button-icon" alt="Upload" src={fileUploadImage} />}
          {((mode === 'upload') || (mode === 'progress' && progress === 0)) && <FontAwesomeIcon icon={faUpload} className="select-file-button-icon" />}
          {(mode === 'progress' && progress > 0) && <p className='select-file-button-progress'>{progress}</p>}
        </div>
        <input
          accept="image/*"
          type='file'
          className="file-input"
          multiple
          ref={hiddenFileInput}
          onChange={handleChange}
          onClick={handleClick}
        />
      </div>
    </Fragment>
  );
}
