import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import MainLayout from '../layouts/MainLayout';
// import PostList from '../pages/PostList';
import PostDetail from '../pages/PostDetail';
import EditPost from '../pages/EditPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "posts", element: <PostList /> },
      { path: 'posts/:id', element: <PostDetail /> },
      { path: 'posts/:id/edit', element: <EditPost /> },
    ],
  },
]);

export default router;
