import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';

export default function ProjectTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article className="project-container">
        <h1>{frontmatter.title.toUpperCase()}</h1>

        <Link to="/projects">&larr; Back to Projects</Link>

        <h3>{frontmatter.summary}</h3>

        <h4>
          <em>Updated {frontmatter.date}</em>
        </h4>

        <div
          className="project-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
}

export const projectQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        date
        title
        summary
        author
      }
    }
  }
`;
