import { useState } from 'react';
import Done from './Done';
import './index.scss';
import Wait from './Wait';

function Popup({ closePopup }) {
  const [isWait , setIsWait] = useState(true);

  const send = (event) => {
    event.preventDefault();
    setIsWait(false);
  }

  return (
    <>
    {isWait && <Wait send={send} closePopup={closePopup} />}
    {!isWait && <Done closePopup={closePopup} />}
    </>
  )
}

export default Popup;
