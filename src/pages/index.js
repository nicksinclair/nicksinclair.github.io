import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <StaticImage
      className="headshot"
      src="../images/headshot_02.png"
      width={700}
      quality={100}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Nick Sinclair"
      placeholder="blurred"
      style={{ marginBottom: `1.45rem` }}
    />

    <Link to="/projects">Go to Projects &rarr;</Link>

    <h2>Hi, I'm Nick!</h2>

    <p>
      I'm a <strong>software engineer</strong> based in{' '}
      <strong>Atlanta, GA</strong>. I graduated from the{' '}
      <strong>Georgia Institute of Technology</strong> where I studied{' '}
      <strong>industrial design</strong> with a minor in{' '}
      <strong>computer science</strong>.
    </p>

    <p>
      I love anything having to do with computers, and I thrive being at the
      intersection of <strong>creativity</strong> and{' '}
      <strong>technology</strong>. While in school, I became increasingly
      interested in digital media and visualization, specifically{' '}
      <strong>generative art</strong>, <strong>mixed reality</strong>, and{' '}
      <strong>video games</strong>.
    </p>

    <p>
      I currently work at <strong>Hypar</strong>, where we're building an
      approachable and collaborative space planning tool for architects and
      designers.
    </p>
  </Layout>
);

export default IndexPage;
