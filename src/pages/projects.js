import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>PROJECTS</h1>
    {data.allMarkdownRemark.edges.map((project) => (
      <div key={project.node.id}>
        <h3>{project.node.frontmatter.title.toUpperCase()}</h3>
        <small>Updated {project.node.frontmatter.date}</small>
        <br />
        <br />
        <Link to={project.node.frontmatter.path}>Go to Project &rarr;</Link>
        <br />
        <br />
        <hr />
      </div>
    ))}
  </Layout>
);

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            date
            title
            author
          }
        }
      }
    }
  }
`;

export default Projects;
