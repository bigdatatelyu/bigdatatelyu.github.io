type Route = {
  path: string;
  name: string;
};

const routes: Route[] = [
  {
    path: '/',
    name: 'home',
  },
  {
    path: '/about',
    name: 'about',
  },
  {
    path: '/researches',
    name: 'researches',
  },
  {
    path: '/members',
    name: 'our teams',
  },
];

export default routes;
