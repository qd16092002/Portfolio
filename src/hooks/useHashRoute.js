import { useEffect, useState } from 'react';

/**
 * Minimal hash-based router. Hash routing is used deliberately: the site is
 * served from a GitHub Pages project subpath, where client-side path routing
 * would 404 on refresh/deep-link without a server rewrite.
 *
 * Routes:
 *   #/project/<id>  -> { name: 'project', id }
 *   anything else   -> { name: 'home', section }  (section = '', 'about', ...)
 */
const parse = () => {
  const raw = window.location.hash.replace(/^#/, '');
  const match = raw.match(/^\/project\/([\w-]+)/);
  if (match) return { name: 'project', id: match[1] };
  return { name: 'home', section: raw.replace(/^\//, '') };
};

export const useHashRoute = () => {
  const [route, setRoute] = useState(parse);

  useEffect(() => {
    const onChange = () => setRoute(parse());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
};

export default useHashRoute;
