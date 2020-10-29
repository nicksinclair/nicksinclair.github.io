import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'q87olzgk',
  dataset: 'production',
  useCdn: true,
});
