import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Postlist, { postLoader } from "./components/Postlist.jsx";
import CreatePost, { actionForm } from "./components/CreatePost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "post-list", element: <Postlist />, loader: postLoader },
      { path: "create-post", element: <CreatePost />, action: actionForm },
    ],
  },
  {
    path: "*",
    element: <h1>404 Error page</h1>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
