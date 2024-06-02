import { AppEventNameEnums, PathEnums } from '../enums';

import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';
import ContactChat from '../pages/ContactChat';
import Info from '../pages/Info';
import Layout from '../pages/Layout';

const appBasename = `/${PathEnums.AppPath}`;

const RouteHandler = () => {
  useSyncGlobalRouter(appBasename, AppEventNameEnums.AppEventName);
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
