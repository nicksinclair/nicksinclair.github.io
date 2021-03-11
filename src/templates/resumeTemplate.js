import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';

export default function ResumeTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <article className="resume-container">
        <h1>{frontmatter.title.toUpperCase()}</h1>
        <h4>
          <em>Updated {frontmatter.updated}</em>
        </h4>
        <a
          href={`mailto: ${frontmatter.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {frontmatter.email}
        </a>
        <div
          className="resume-content"
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
        updated
        title
        email
        phone
      }
    }
  }
`;
