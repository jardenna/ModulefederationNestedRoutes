import { Suspense, lazy } from 'react';

import useSyncAppRouter from '../hooks/useSyncAppRouter';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const App1Lazy = lazy(() => import('../pages/App1'));

const AppRouterHandler = () => {
  useSyncAppRouter({ basepath: '/contact' });
  return (
    <Suspense fallback="Loading App1...">
      <App1Lazy />
    </Suspense>
  );
};
export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/contact/*',
        element: <AppRouterHandler />,
      },
    ],
  },
];
