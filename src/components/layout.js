/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header';
import '../stylesheets/scss/layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="site-container">
      <Header
        siteTitle={data.site.siteMetadata?.title.toUpperCase() || `Title`}
      />

      <main
        className="content"
        style={{
          maxWidth: `70ch`,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        {children}
      </main>

      <footer>
        <h3>In Progress!</h3>
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
