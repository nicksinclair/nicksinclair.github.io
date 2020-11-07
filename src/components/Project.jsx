// Absolute imports
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

// Relative Imports
import sanityClient from '../client';
import Header from './Header';

const urlFor = source => {
  return builder.image(source);
};

const builder = imageUrlBuilder(sanityClient);

const Project = () => {
  const [projectData, setProjectData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == $slug]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "name": author->name,
        }`,
        { slug },
      )
      .then(data => {
        setProjectData(data[0]);
      })
      .catch(console.error);
  }, [slug]);

  if (!projectData) return <div>Loading...</div>;

  return (
    <main className="content">
      <div>
        <Header title={projectData.title} />
        <div>
          <h4>{projectData.name}</h4>
        </div>
      </div>
      <img src={urlFor(projectData.mainImage).url()} alt={projectData.title} />
      <div>
        <BlockContent
          blocks={projectData.body}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </div>
    </main>
  );
};

export default Project;
