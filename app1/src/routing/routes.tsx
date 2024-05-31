import { AppBaseName, Path } from '../enums';

import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';
import Contact from '../pages/Contact';
import ContactChat from '../pages/ContactChat';
import ContactForm from '../pages/ContactForm';
import Layout from '../pages/Layout';

const appBasename = `/${Path.app1Path}`;

const RouteHandler = () => {
  useSyncGlobalRouter({
    basename: appBasename,
    eventName: AppBaseName.App1BaseName,
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
        element: <Contact />,
      },
      {
        path: 'form',
        element: <ContactForm />,
      },
      {
        path: 'chat',
        element: <ContactChat />,
      },
    ],
  },
];

export default routes;
