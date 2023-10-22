import HomePage from "./HomePage";
import RepoDetail from "./RepoDetail";
import NotFound from "./NotFound";
import Repositories from "./Repositories";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
    exact: true,
  },

  {
    path: "repositories",
    element: <Repositories />,
    errorElement: <ErrorPage />,
    exact: true,
  },
  {
    path: "repositories/:repo",
    element: <RepoDetail />,
    errorElement: <ErrorPage />,
    exact: true,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
    exact: true,
  },
]);
