import React from 'react';
import './index.css';
import PropTypes from 'prop-types';


export const Profile = (user) => {
    return (
        <div className="profile">
        <div className="description">
          <img
            src={user.avatar}
            alt="Аватар пользователя"
            className="avatar"
          />
          <p className="name">{user.name}</p>
          <p className="tag">{user.tag}</p>
          <p className="location">{user.location}</p>
        </div>
      
        <ul className="stats">
          <li>
            <span className="label">Followers<br></br></span>
            <span className="quantity">{user.stats.followers}</span>
          </li>
          <li>
            <span className="label">Views<br></br></span>
            <span className="quantity">{user.stats.views}</span>
          </li>
          <li>
            <span className="label">Likes<br></br></span>
            <span className="quantity">{user.stats.likes}</span>
          </li>
        </ul>
      </div>
      )
}

Profile.defaultProps = {
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
}

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.number
}