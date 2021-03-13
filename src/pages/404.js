import * as React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Oops! 404: Not Found</h1>
    <p>Looks like you're lost. Here's a life ring... ~o</p>
  </Layout>
);

export default NotFoundPage;
