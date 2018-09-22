import React from 'react';
import propTypes from 'prop-types';

import '../style.scss';

const PostHeader = (props) => {
  const { userName, userImageUrl, userPostTime } = props;
  return (
    <div className="post-header">
      <img className="avatar" alt="avatar" src={userImageUrl} />
      <div className="post-header-content">
        <p className="user-name">{userName}</p>
        <p className="user-post-time">{userPostTime}</p>
      </div>
    </div>
  );
};

PostHeader.propTypes = {
  userName: propTypes.string.isRequired,
  userImageUrl: propTypes.string.isRequired,
  userPostTime: propTypes.string.isRequired,
};

export default PostHeader;
