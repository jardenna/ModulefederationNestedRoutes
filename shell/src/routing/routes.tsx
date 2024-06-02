import { lazy } from 'react';
import { AppEventNameEnums, PathEnums } from '../enums';

import PageNavigationHandler from '../components/PageNavigationHandler';
import HomePage from '../pages/HomePage';
import Layout from '../pages/Layout';

const app1Basepath = `/${PathEnums.app1Path}/*`;
const app2Basepath = `/${PathEnums.app2Path}/*`;

const App1Lazy = lazy(() => import('../pages/App1'));
const App2Lazy = lazy(() => import('../pages/App2'));

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
        element: (
          <PageNavigationHandler
            appPath={PathEnums.app1Path}
            appEventName={AppEventNameEnums.App1EventName}>
            <App1Lazy />
          </PageNavigationHandler>
        ),
      },
      {
        path: app2Basepath,
        element: (
          <PageNavigationHandler
            appPath={PathEnums.app2Path}
            appEventName={AppEventNameEnums.App2EventName}>
            <App2Lazy />
          </PageNavigationHandler>
        ),
      },
    ],
  },
];

export default routes;
