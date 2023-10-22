import { router } from "./routes/index";
import { RouterProvider } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "./routes/ErrorPage";

function App() {
  return (
    <>
      <ErrorBoundary fallback={<ErrorPage />}>
        <RouterProvider router={router}></RouterProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
