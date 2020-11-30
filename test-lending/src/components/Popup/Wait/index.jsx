import { popup } from '../../../constants/content';
import '../index.scss';
import close from '../../../assets/icons/close.png';import Form from '../../Form';
;

function Wait({ send, closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup">
        <div className="close-icon-container">
          <img
            src={close} alt="Close icon"
            className="close-icon"
            onClick={closePopup}
            />
        </div>
        <p className="popup-title">
          <span>{popup.title.part1}</span>
          <br />
          <span className="popup-title-colored">{popup.title.part2}</span>
        </p>
        <div className="time-block ">
          <div className="time-part days">
            <div className="time-number">15</div>
            <div className="time-text">{popup.time.days}</div>
          </div>
          <div className="time-divider">{popup.time.divider}</div>
          <div className="time-part hours">
            <div className="time-number">07</div>
            <div className="time-text">{popup.time.hours}</div>
          </div>
          <div className="time-divider">{popup.time.divider}</div>
          <div className="time-part minutes">
            <div className="time-number">45</div>
            <div className="time-text">{popup.time.minutes}</div>
          </div>
          <div className="time-divider">{popup.time.divider}</div>
          <div className="time-part seconds">
            <div className="time-number">12</div>
            <div className="time-text">{popup.time.seconds}</div>
          </div>
        </div>
        <div className="popup-text">
          <span>{popup.text.part1}</span>
          <span className="popup-text-colored">{popup.text.part2}</span>
        </div>
        <Form
          button={popup.button.beFirst}
          placeholder={popup.mail}
          send={send}
        />
      </div>
    </div>
  )
}

export default Wait;
