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
      I'm a <strong>product designer</strong> based in{' '}
      <strong>Atlanta, GA</strong>. I went to school at the{' '}
      <strong>Georgia Institute of Technology</strong> where I studied{' '}
      <strong>Industrial Design</strong> with a minor in{' '}
      <strong>Computing & Media</strong>.
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
      My work has primarily centered around simplifying inherently complex
      systems as well as building novel features to address latent needs. I find
      the most difficult yet rewarding aspect of my work is uncovering
      meaningful insights from users that drive continuous product improvement.
    </p>
  </Layout>
);

export default IndexPage;
