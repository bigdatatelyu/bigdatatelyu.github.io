type Route = {
  path: string;
  name: string;
};

const routes: Route[] = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/about",
    name: "About",
  },
  {
    path: "/achievements",
    name: "Achievements",
  },
  {
    path: "/activities",
    name: "Activities",
  },
  {
    path: "/team",
    name: "Team",
  },
  {
    path: "/gallery",
    name: "Gallery",
  },
  // {
  //   path: "/contact",
  //   name: "Contact",
  // },
];

export default routes;
