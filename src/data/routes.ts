type Route = {
  path: string;
  name: string;
};

const routes: Route[] = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/research",
    name: "research",
  },
  {
    path: "/activities",
    name: "activities",
  },
  {
    path: "/team",
    name: "team",
  },
  {
    path: "/gallery",
    name: "gallery",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

export default routes;
