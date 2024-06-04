import { lazy } from 'react';
import PageNavigationHandler from '../components/PageNavigationHandler';
import { AppEventNameEnums, PathEnums } from '../enums';
import Layout from '../layout/Layout';
import HomePage from '../pages/HomePage';

const app1Basepath = `/${PathEnums.App1Path}/*`;
const app2Basepath = `/${PathEnums.App2Path}/*`;

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
            appPath={PathEnums.App1Path}
            appEventName={AppEventNameEnums.App1EventName}>
            <App1Lazy />
          </PageNavigationHandler>
        ),
      },
      {
        path: app2Basepath,
        element: (
          <PageNavigationHandler
            appPath={PathEnums.App2Path}
            appEventName={AppEventNameEnums.App2EventName}>
            <App2Lazy />
          </PageNavigationHandler>
        ),
      },
    ],
  },
];

export default routes;
