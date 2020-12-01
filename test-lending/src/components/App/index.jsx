import { useEffect, useState } from 'react';
// import { popup } from '../../constants/content';
import Comments from '../Comments';
import Description from '../Description';
import Download from '../Download';
import Footer from '../Footer';
import Introduction from '../Introduction';
import Motivation from '../Motivation';
import NotFit from '../NotFit';
import Opportunities from '../Opportunities';
import Popup from '../Popup';
import Sanctions from '../Sanctions';
import './index.scss';

const TIME_TO_SHOW_POPUP = 3000;
const ESCAPE = 'Escape';


function App() {
  const [isPopup, setIsPopup] = useState(false);
  // const [timer, setTimer] = useState([
  //   popup.time.daysNumber, popup.time.hoursNumber,
  //   popup.time.minutesNumber, popup.time.secondsNumber]);

  const closePopup = () => {
    setIsPopup(false);
  }

  const keyPressHandler = (event) => {
    if(isPopup && event.code === ESCAPE) {
      setIsPopup(false);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsPopup(true);
    }, TIME_TO_SHOW_POPUP);
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler)
  })

  return (
    <div className="app">
      <main>
        {isPopup && <Popup closePopup={closePopup} />}
        <Introduction />
        <Description />
        <Opportunities />
        <Motivation />
        <Sanctions />
        <Comments />
        <NotFit />
        <Download />
        <Footer />
      </main>
    </div>
  );
}

export default App;
