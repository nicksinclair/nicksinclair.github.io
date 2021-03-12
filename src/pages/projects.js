import React, { Suspense, useRef, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useLoader } from 'react-three-fiber';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const ProjectBox = ({ thumbnail }) => {
  const mesh = useRef();

  const texture = useLoader(
    THREE.TextureLoader,
    thumbnail
      ? thumbnail
      : '/static/e9b04ca4a1d476f5866643da5a4535ce/630fb/shape_grid_01.png'
  );

  const [hovered, setHover] = useState(false);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      // {...props}
      ref={mesh}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      scale={hovered ? [3.5, 3.5, 3.5] : [3, 3, 3]}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

const Projects = ({ data }) => (
  <Layout>
    <SEO title="Projects" />
    <h1>PROJECTS</h1>

    <div className="project-grid">
      {data.allMarkdownRemark.edges.map((project) => (
        <Link
          key={project.node.id}
          className="project-link"
          to={project.node.frontmatter.path}
        >
          {console.log(project.node.frontmatter.thumbnail)}
          <Canvas style={{ height: 200, width: '100%' }}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <ProjectBox
                position={[0, 0, 0]}
                thumbnail={
                  project.node.frontmatter.thumbnail?.childImageSharp.fluid.src
                }
              />
            </Suspense>
          </Canvas>
          <h3>{project.node.frontmatter.title.toUpperCase()}</h3>
        </Link>
      ))}
    </div>

    {/* {data.allMarkdownRemark.edges.map((project) => (
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
    ))} */}
  </Layout>
);

export const projectQuery = graphql`
  query ProjectIndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
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
                fluid(maxWidth: 300) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Projects;
