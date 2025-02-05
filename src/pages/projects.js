import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Projects = ({ data }) => (
  <Layout>
    <Seo title="Projects" />

    <h1>PROJECTS</h1>

    <div className="project-card-grid">
      {data.allMarkdownRemark.edges.map((project) => (
        <article key={project.node.id} className="project-card">
          <Link to={project.node.frontmatter.path}>
            <GatsbyImage
              className="project-card-image"
              image={getImage(project.node.frontmatter.thumbnail)}
              alt={project.node.frontmatter.title}
            />

            <header className="project-card-header">
              <h2>{project.node.frontmatter.title.toUpperCase()}</h2>

              <p>
                <em>{project.node.frontmatter.date}</em>
              </p>
            </header>
          </Link>
        </article>
      ))}
    </div>
  </Layout>
);

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(
      sort: {
        order: [DESC, ASC]
        fields: [frontmatter___date, frontmatter___title]
      }
      limit: 50
      filter: { frontmatter: { path: { regex: "/projects/" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            path
            thumbnail {
              childImageSharp {
                gatsbyImageData(
                  height: 400
                  placeholder: BLURRED
                  formats: AUTO
                )
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
