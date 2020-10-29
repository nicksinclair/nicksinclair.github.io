// Absolute imports
import React, { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';

// Relative imports
import sanityClient from '../client';
import Thumbnail from './Thumbnail';

const Projects = () => {
  const [projectsData, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        }
      }`,
      )
      .then(data => setProjects(data))
      .catch(console.error);
  }, []);

  return (
    <main className="content">
      <h2>PROJECTS</h2>

      <div className="project-thumbnails">
        {projectsData &&
          projectsData.map(project => (
            <Thumbnail
              link={`/projects/${project.slug.current}`}
              image={project.mainImage.asset.url}
              title={project.title}
              category="Web App"
            />
          ))}
      </div>
    </main>
  );
};

export default Projects;
