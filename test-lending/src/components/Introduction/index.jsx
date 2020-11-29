import './index.scss';
import logo from '../../assets/images/Logo-red.svg';
import Button from '../Button/index';
import { introduction } from '../../constants/content';

function Introduction() {
  return (
    <section className="introduction">
      <div className="introduction-content">
        <div className="introduction-info">
          <div className="introduction-logo">
            <img src={logo} alt="Logo"/>
          </div>
          <h1>
            <span className="colored-header">{introduction.h1.start}</span>
            <span>{introduction.h1.end}</span>
          </h1>
          <p className="introduction-text">{introduction.text}</p>
          <Button></Button>
        </div>
        <div className="introduction-image"></div>
      </div>
    </section>
  );
}

export default Introduction;
