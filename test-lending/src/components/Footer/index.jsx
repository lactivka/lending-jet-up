import { useState } from 'react';
import './index.scss';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as VK } from '../../assets/icons/vk.svg';
import { footer } from '../../constants/content';
import placeholder from '../../assets/icons/placeholder.png';

function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const onHover = (event) => {
    setHoveredIcon(event.target.id);
  }

  const onLeave = () => {
    setHoveredIcon(null);
  }

  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <p className="social-title">{footer.socialTitle}</p>
          <div className="social-icons">
                <Facebook
                  className={`social-icon ${hoveredIcon === 'facebook-footer' ? 'hovered' : null}`}
                  id="facebook-footer"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <Instagram
                  className={`social-icon ${hoveredIcon === 'instagram-footer' ? 'hovered' : null}`}
                  id="instagram-footer"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <Twitter
                  className={`social-icon ${hoveredIcon === 'twitter-footer' ? 'hovered' : null}`}
                  id="twitter-footer"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <VK
                  className={`social-icon vk ${hoveredIcon === 'vk-footer' ? 'hovered' : null}`}
                  id="vk-footer"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
              </div>
        </div>
        <div className="footer-address">
          <div className="address-info">
            <p>{footer.city}</p>
            <p>{footer.address}</p>
          </div>
          <img src={placeholder} alt="Placeholder" className="placeholder" />
        </div>
      </div>
    </section>
  )
}

export default Footer;
