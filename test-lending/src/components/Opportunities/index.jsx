import { opportunities } from '../../constants/content';
import './index.scss';

function Opportunities() {
  return (
    <section className="opportunities">
      <div className="opportunities-content">
      <h2>{opportunities.title}</h2>
      <div className="opportunities-list">
        {opportunities.list.map(item => {
          return (
            <div className="opportunities-item" key={item}>
              <div className={`opportunities-icon ${item}`}></div>
              <div className="descript">{opportunities[item]}</div>
            </div>
          )
        })}
      </div>
      </div>
    </section>
  )
}

export default Opportunities;
