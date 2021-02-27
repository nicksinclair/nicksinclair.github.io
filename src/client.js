import sanityClient from '@sanity/client';

// const client = sanityClient({
//   projectId: 'q87olzgk',
//   dataset: 'production',
//   useCdn: true,
// });

// export default client;

export default sanityClient({
  projectId: 'q87olzgk',
  dataset: 'production',
  useCdn: true,
});
