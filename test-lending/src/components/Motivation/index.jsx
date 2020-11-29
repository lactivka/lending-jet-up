import { motivation } from '../../constants/content';
import './index.scss';
import motivationImage from '../../assets/images/Mobile_with_calendar.png';

function Motivation() {
  return (
    <section className="motivation">
      <div className="motivation-content">
        <h2>{motivation.title}</h2>
        <p className="motivation-description">{motivation.text}</p>
        <div className="motivation-info">
          {/* <div className="motivation-image"></div> */}
          <img src={motivationImage} alt="Mobile phone" className="motivation-image" />
          <div className="motivation-list">
            {
              motivation.list.map(item => {
                return (
                  <div className="motivation-item" key={item}>
                    <div className="item-header">
                      <div className={`motivation-icon ${item}`}></div>
                      <h3>{motivation[item].title}</h3>
                    </div>
                    <div className="descript">{motivation[item].text}</div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Motivation;
