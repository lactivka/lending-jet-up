import { notFit } from '../../constants/content';
import './index.scss';

function NotFit() {
  return(
    <section className="notFit">
      <div className="notFit-content">
        <div className="notFit-info">
          <h2>{notFit.title}</h2>
          <ul className="notFit-list">
            {notFit.list.map((item, index) => {
              return (
                <li className="notFit-item" key={`item-${index}`}>{item}</li>
              )
            })}
          </ul>
        </div>
        <div className="notFit-image"></div>
      </div>
    </section>
  )
}

export default NotFit;
