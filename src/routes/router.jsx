import { createBrowserRouter } from "react-router-dom";
import PostDetail from "../pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    // element: <MainLayout />,
    childeren: [
      // { index: true, element: <Home /> },
       { path: "posts", element: <PostList /> },
      // { path: "posts/:id", element: <PostDetail /> },
      // { path: "posts/:id/edit", element: <EditPost /> },
    ],
  },
]);

export default router;
