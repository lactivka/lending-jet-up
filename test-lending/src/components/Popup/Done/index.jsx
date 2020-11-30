import { popup } from '../../../constants/content';
import Button from '../../Button';
import '../index.scss';

function Done({ closePopup }) {
  return (
    <div className="popup-container">
      <div className="popup-done">
        <div className="popup-title title-done">{popup.thanks.title}</div>
        <div className="popup-text">
          <span>{popup.thanks.text.part1}</span>
          <span className="popup-text-colored">{popup.thanks.text.part2}</span>
        </div>
        <Button text={popup.button.ok} action={closePopup} />
      </div>
    </div>
  )
}

export default Done;
