import { useState } from 'react';
import { popup } from '../../constants/content';
import Button from '../Button';
import './index.scss';

function Form({ button, placeholder, send }) {
  let inputData = '';
  const [buttonText, setButtonText] = useState(button);

  const changeInput = (event) => {
    if (buttonText !== button) setButtonText(button);
    inputData = event.target.value;
  }

  const sendForm = (event) => {
    event.preventDefault();
    if (inputData.length > 0) send(event);
    else setButtonText(popup.button.wrong);
  }

  return (
    <form className="popupForm" onSubmit={sendForm}>
      <input
        type="email"
        placeholder={placeholder}
        className="form-input"
        onChange={changeInput}
      />
      <div className="form-button">
        <Button text={buttonText}/>
      </div>
    </form>
  )
}

export default Form;
