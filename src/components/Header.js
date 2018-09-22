import React from 'react';
import propTypes from 'prop-types';

import '../style.scss';

const Header = (props) => {
  const { children } = props;
  return (
    <div className="header">
      <h1 className="header-title">{children}</h1>
    </div>
  );
};

Header.defaultProps = {
  children: 'RocketBook',
};

Header.propTypes = {
  children: propTypes.string,
};

export default Header;
