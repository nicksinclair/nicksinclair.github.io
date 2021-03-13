/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const projectTemplate = path.resolve('src/templates/projectTemplate.js');
  const resumeTemplate = path.resolve('src/templates/resumeTemplate.js');

  const projectResult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 50
      ) {
        edges {
          node {
            id
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const resumeResult = await graphql(`
    {
      markdownRemark(frontmatter: { path: { eq: "/resume" } }) {
        frontmatter {
          path
        }
        id
      }
    }
  `);

  // Handle errors running GraphQL query
  if (projectResult.errors) {
    reporter.panicOnBuild('Error while running GraphQL query!');
    return;
  }

  projectResult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: projectTemplate,
    });
  });

  createPage({
    path: resumeResult.data.markdownRemark.frontmatter.path,
    component: resumeTemplate,
  });
};
