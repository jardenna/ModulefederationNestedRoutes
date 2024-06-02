/* eslint-disable react/no-multi-comp */

import { Suspense, lazy } from 'react';
import { AppEventNameEnums, Path } from '../enums';

import useSyncAppRouter from '../hooks/useSyncAppRouter';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const app1Basepath = `/${Path.app1Path}/*`;
const app2Basepath = `/${Path.app2Path}/*`;

const App1Lazy = lazy(() => import('../pages/App1'));
const App2Lazy = lazy(() => import('../pages/App2'));

const AppRouterHandler = () => {
  useSyncAppRouter(Path.app1Path, AppEventNameEnums.App1EventName);
  return (
    <Suspense fallback="Loading App1...">
      <App1Lazy />
    </Suspense>
  );
};

const App2RouterHandler = () => {
  useSyncAppRouter(Path.app2Path, AppEventNameEnums.App2EventName);
  return (
    <Suspense fallback="Loading App2...">
      <App2Lazy />
    </Suspense>
  );
};
const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: app1Basepath,
        element: <AppRouterHandler />,
      },
      {
        path: app2Basepath,
        element: <App2RouterHandler />,
      },
    ],
  },
];

export default routes;
