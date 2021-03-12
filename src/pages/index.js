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
      src="../images/headshot.png"
      quality={95}
      formats={['AUTO', 'WEBP', 'AVIF']}
      alt="Nick Sinclair"
      placeholder="blurred"
      style={{ marginBottom: `1.45rem` }}
    />
    <Link to="/projects">Go to Projects &rarr;</Link>
    <p>
      I'm a recent graduate from the{' '}
      <strong>Georgia Institute of Technology</strong> in{' '}
      <strong>Atlanta, GA</strong> where I studied{' '}
      <strong>Industrial Design</strong> with a minor in{' '}
      <strong>Computing & Media</strong>.
    </p>
    <p>
      I love anything having to do with computers, and I thrive being at the
      intersection of <strong>creativity</strong> and{' '}
      <strong>technology</strong>. While in school, I became increasingly
      interested in digital media and visualization, specifically{' '}
      <strong>virtual reality</strong>, <strong>augmented reality</strong>, and{' '}
      <strong>video games</strong>.
    </p>
    <p>
      Some of my personal interests include experimenting with new media to
      create <strong>art</strong>, exploring the open worlds of role-playing{' '}
      <strong>video games</strong>, keeping up with the{' '}
      <strong>basketball</strong> world, and discovering new niches of Atlanta
      with my friends.
    </p>
  </Layout>
);

export default IndexPage;
