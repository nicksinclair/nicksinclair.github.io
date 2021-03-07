import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import Nav from './nav';

const Header = ({ siteTitle }) => (
  <header>
    <div className="sticky-container">
      <h1 className="site-title" style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <Nav />
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
