import { notFit } from '../../constants/content';
import './index.scss';

function NotFit() {
  return(
    <section className="notFit">
      <div className="notFit-content">
        <div className="notFit-info">
          <h2>{notFit.title}</h2>
          <ul className="notFit-list">
            {notFit.list.map(item => {
              return (
                <li className="notFit-item">{item}</li>
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
