/**
 * Resolves a path in /public against the deployment base path, so the site
 * works both at a domain root and under a GitHub Pages project subpath.
 */
export const asset = (path) => `${process.env.PUBLIC_URL}${path}`;

export default asset;
