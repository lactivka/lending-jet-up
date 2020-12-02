import { popup } from '../../../constants/content';
import '../index.scss';
import close from '../../../assets/icons/close.png';import Form from '../../Form';
import Timer from '../Timer';
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
        <Timer />
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
