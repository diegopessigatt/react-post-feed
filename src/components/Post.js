import React, { Component } from 'react';
import propTypes from 'prop-types';

import PostHeader from './PostHeader';

import '../style.scss';

class Post extends Component {
  render() {
    const { posts } = this.props;
    return (
      posts.map(post => (
        <div key={post.id} className="post-container">
          <div className="post-content">
            <PostHeader
              userName={post.userName}
              userImageUrl={post.userImageUrl}
              userPostTime={post.userPostTime}
            />
            <div className="row" />
            <p className="post-content">{post.userPostContent}</p>
          </div>
        </div>
      )));
  }
}

Post.propTypes = {
  posts: propTypes.arrayOf(propTypes.shape({
    userName: propTypes.string,
    userImageUrl: propTypes.string,
    userPostTime: propTypes.string,
    userPostContent: propTypes.string,
  })).isRequired,
};

export default Post;
