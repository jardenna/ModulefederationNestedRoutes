import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';
import Contact from '../pages/Contact';
import ContactChat from '../pages/ContactChat';
import ContactForm from '../pages/ContactForm';
import Layout from '../pages/Layout';

const RouteHandler = () => {
  useSyncGlobalRouter({ basename: '/contact' });
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
        path: '/form',
        element: <ContactForm />,
      },
      {
        path: '/chat',
        element: <ContactChat />,
      },
    ],
  },
];

export default routes;
