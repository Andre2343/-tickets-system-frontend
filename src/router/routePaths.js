import UrlPattern from 'url-pattern';

const routePaths = {
  home: '/',
  payment: '/payment/:id',
  login: '/login',
  signUp: '/sign-up',
};

export const routePatterns = Object.entries(routePaths).reduce(
  (p, [key, pattern]) => ({ ...p, [key]: new UrlPattern(pattern) }),
  {},
);

export default routePaths;
