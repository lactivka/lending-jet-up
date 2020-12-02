import { useState } from 'react';
import { comments } from '../../constants/content';
import './index.scss';
import userPhoto from '../../assets/images/user_photo.png';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as VK } from '../../assets/icons/vk.svg';

function Comments() {
  const [selectedUser, setSelectedUser] = useState('user1');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const onClick = (event) => {
    setSelectedUser(event.target.id);
  }

  const onHover = (event) => {
    setHoveredIcon(event.target.id);
  }

  const onLeave = () => {
    setHoveredIcon(null);
  }

  return (
    <section className="comments">
      <div className="comments-content">
        <h2><pre>{comments.title}</pre></h2>
        <div className="comment-block">
          <div className="user-data">
            <img src={userPhoto} alt="User" className="user-photo" />
            <div className="user-info">
              <p className="user-name">{comments[selectedUser].name}</p>
              <p className="user-position">{comments[selectedUser].position}</p>
              <div className="social-icons">
                <Facebook
                  className={`social-icon ${hoveredIcon === 'facebook' ? 'hovered' : null}`}
                  id="facebook"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <Instagram
                  className={`social-icon ${hoveredIcon === 'instagram' ? 'hovered' : null}`}
                  id="instagram"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <Twitter
                  className={`social-icon ${hoveredIcon === 'twitter' ? 'hovered' : null}`}
                  id="twitter"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
                <VK
                  className={`social-icon vk ${hoveredIcon === 'vk' ? 'hovered' : null}`}
                  id="vk"
                  onMouseOver={onHover}
                  onMouseOut={onLeave}
                />
              </div>
            </div>
          </div>
          <div className="comment-text">{comments[selectedUser].comment}</div>
          <div className="switcher">
            <div
              className={`bullet ${selectedUser === 'user1' ? 'selected' : null}`}
              id="user1"
              onClick={onClick}
            >
            </div>
            <div
              className={`bullet ${selectedUser === 'user2' ? 'selected' : null}`}
              id="user2"
              onClick={onClick}
            >
            </div>
            <div
              className={`bullet ${selectedUser === 'user3' ? 'selected' : null}`}
              id="user3"
              onClick={onClick}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments;
