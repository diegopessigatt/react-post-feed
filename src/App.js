import React, { Component, Fragment } from 'react';

import Header from './components/Header';
import Post from './components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
        userName: 'Jane Doe',
        userPostTime: 'há 3 min',
        userPostContent: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris
        molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
        interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum.
        Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam
        venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae
        lectus.`,
      },
      {
        id: 2,
        userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        userName: 'Rubia Savolksi',
        userPostTime: 'há 10 min',
        userPostContent: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. `,
      },
      {
        id: 3,
        userImageUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
        userName: 'Natasha Tec Style',
        userPostTime: 'há 20 min',
        userPostContent: `Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis
        pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere
        posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris
        molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam
        interdum dolor aliquet dolor sollicitudin fermentum.`,
      },
    ],
  };

  render() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        <Post posts={posts} />
      </Fragment>
    );
  }
}

export default App;
