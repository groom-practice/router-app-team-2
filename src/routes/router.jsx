import { createBrowserRouter } from 'react-router-dom';

import EditPost from '../pages/EditPost';

const router = createBrowserRouter([
  {
    path: '/',
    children: [{ path: 'posts/:id/edit', element: <EditPost /> }],
  },
]);

export default router;
