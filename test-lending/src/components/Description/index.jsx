import './index.scss';
import logo from '../../assets/images/Logo-white.svg';
import { description } from '../../constants/content';

function Description() {
  return (
    <section className="description">
      <div className="description-content">
        <div className="description-logo">
          <img src={logo} alt="Logo"/>
        </div>
      <div className="description-text">
        {description.text1}
        <br></br>
        {description.text2}
        </div>
      </div>
    </section>
  )
}

export default Description;
