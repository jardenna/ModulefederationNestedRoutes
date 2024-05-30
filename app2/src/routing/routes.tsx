import { AppBaseName, Path } from '../enums';

import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';
import ContactChat from '../pages/ContactChat';
import Info from '../pages/Info';
import Layout from '../pages/Layout';

const appBasename = `/${Path.app2Path}`;

const RouteHandler = () => {
  useSyncGlobalRouter({
    basename: appBasename,
    eventName: AppBaseName.App2BaseName,
  });
  return <Layout />;
};
const routes = [
  {
    path: '/',
    element: <RouteHandler />,
    children: [
      {
        index: true,
        element: <Info />,
      },
      {
        path: '/info',
        element: <Info />,
      },
      {
        path: '/chat',
        element: <ContactChat />,
      },
    ],
  },
];

export default routes;
