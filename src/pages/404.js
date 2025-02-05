import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1>Oops!</h1>
    <h3>
      <em>404: Not Found</em>
    </h3>
    <p>Looks like you're lost. Here's a life ring... ~o</p>
  </Layout>
);

export default NotFoundPage;
