// Absolute imports
import React, { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';

// Relative imports
import sanityClient from '../client';

const builder = imageUrlBuilder(sanityClient);

const urlFor = source => {
  return builder.image(source);
};

const About = () => {
  const [authorData, setAuthorData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          image{
            asset->{
              _id,
              url
            }
          },
          bio
        }`,
      )
      .then(data => {
        setAuthorData(data[0]);
      })
      .catch(console.error);
  });

  if (!authorData) return <div>Loading...</div>;

  return (
    <main className="content">
      <img src={urlFor(authorData.image).url()} alt={authorData.name} />
      <article>
        <BlockContent
          blocks={authorData.bio}
          projectId={sanityClient.projectId}
          dataset={sanityClient.dataset}
        />
      </article>
    </main>
  );
};

export default About;
