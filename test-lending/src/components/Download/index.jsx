import { download } from '../../constants/content';
import './index.scss';
import downloadApple from '../../assets/icons/downloadApple.png';
import downloadAndroid from '../../assets/icons/downloadAndroid.png';
import downloadImage from '../../assets/images/Mobile_log_in.png';

function Download() {
  return (
    <section className="download">
      <div className="download-content">
        {/* <div className="download-image"></div> */}
        <img src={downloadImage} alt="Mobile phone" className="download-image" />
        <div className="download-info">
          <h3>{download.title}</h3>
          <div className="download-buttons">
            <img src={downloadApple} alt="Button Apple"/>
            <img src={downloadAndroid} alt="Button Android"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download;
