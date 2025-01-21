// import { createClient } from 'next-sanity'
// import { apiVersion, dataset, projectId } from '../env'

// // export const client = createClient({
// //   projectId,
// //   dataset,
// //   apiVersion,
// //   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// // })

// const client = createClient({
//   projectId: "dkfr04kb", // replace with actual project ID
//   dataset: "produation", // replace with dataset name
//   apiVersion: "2021-10-21", // optional: specify API version
//   useCdn: true, // use CDN for better performance
// });
import { createClient } from 'next-sanity';

// Configure your Sanity client here
const sanityClient = createClient({
  projectId: 'dkfr04kb', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your Sanity dataset name
  useCdn: true, // true for faster responses, but may not reflect recent data changes
});

export default sanityClient; // Ensure this is a default export
