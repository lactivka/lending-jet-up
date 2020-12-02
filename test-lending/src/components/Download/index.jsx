import { download } from '../../constants/content';
import './index.scss';
import downloadApple from '../../assets/icons/downloadApple.png';
import downloadAndroid from '../../assets/icons/downloadAndroid.png';
import downloadImage from '../../assets/images/Mobile_log_in.png';
import downloadAppleMob from '../../assets/icons/downloadApple-mobile.png';
import downloadAndroidMob from '../../assets/icons/downloadAndroid-mobile.png';


function Download() {
  return (
    <section className="download">
      <div className="download-content">
        <img src={downloadImage} alt="Mobile phone" className="download-image" />
        <div className="download-info">
          <h3>{download.title}</h3>
          <div className="download-buttons">
            <img src={downloadApple} alt="Button Apple" className="download-button" />
            <img src={downloadAndroid} alt="Button Android" className="download-button" />
            <img src={downloadAppleMob} alt="Button Apple" className="download-button-mobile" />
            <img src={downloadAndroidMob} alt="Button Android" className="download-button-mobile" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download;
