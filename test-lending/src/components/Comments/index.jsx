import { useState } from 'react';
import { comments } from '../../constants/content';
import './index.scss';
import userPhoto from '../../assets/images/user_photo.png';

function Comments() {
  const [selectedUser /*, setSelectedUser*/] = useState('user1');
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
                <div className="social-icon facebook"></div>
                <div className="social-icon instagram"></div>
                <div className="social-icon twitter"></div>
                <div className="social-icon vk"></div>
              </div>
            </div>
          </div>
          <div className="comment-text">{comments[selectedUser].comment}</div>
          <div className="switcher">
            <div className={`bullet ${selectedUser === 'user1' ? 'selected' : null}`} id="user1"></div>
            <div className={`bullet ${selectedUser === 'user2' ? 'selected' : null}`} id="user2"></div>
            <div className={`bullet ${selectedUser === 'user3' ? 'selected' : null}`} id="user3"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Comments;
