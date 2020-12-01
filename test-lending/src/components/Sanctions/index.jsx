import './index.scss';
import { sanctions } from '../../constants/content';

function Sanctions() {
  return (
    <section className="sanctions">
      <div className="sanctions-content">
        <div className="sanctions-description">
          <h2>{sanctions.title}</h2>
          <div className="sanctions-image-mobile"></div>
          <p className="description-part1">{sanctions.text.part1}</p>
          <p>{sanctions.text.part2}</p>
        </div>
        <div className="sanctions-image"></div>
      </div>
    </section>
  )
}

export default Sanctions;
