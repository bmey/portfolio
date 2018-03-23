import asyncComponent from "./AsyncComponent";

export const notFoundRoute = {
  component: asyncComponent(() => import("./pages/notFound/NotFound")),
};

export const appRoutes = [
  {
    path: "/",
    text: "Home",
    component: asyncComponent(() => import("./pages/home/Home")),
    exact: true,
  },
  {
    path: "/work",
    text: "Work",
    component: asyncComponent(() => import("./pages/work/Work")),
  },
  {
    path: "/about",
    text: "About",
    component: asyncComponent(() => import("./pages/about/About")),
  },
  {
    path: "/contact",
    text: "Contact",
    component: asyncComponent(() => import("./pages/contact/Contact")),
  },
];
