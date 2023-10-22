import HomePage from "./HomePage";
import RepoDetail from "./RepoDetail";
import NotFound from "./NotFound";
import Repositories from "./Repositories";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    exact: true,
  },
  {
    path: "*",
    element: <NotFound />,
    exact: true,
  },
  {
    path: "repositories",
    element: <Repositories />,
    exact: true,
  },
  {
    path: "repositories/:repo",
    element: <RepoDetail />,
    exact: true,
  },
]);
