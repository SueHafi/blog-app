import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage";
import NewBlogPage from "./components/NewBlogPage";
import ArticlePage from "./components/ArticlePage";
import Root from "./Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/articles/new",
        element: <NewBlogPage />,
      },
      {
        path: "/articles/1",
        element: <ArticlePage />,
      },
    ],
  },
]);
