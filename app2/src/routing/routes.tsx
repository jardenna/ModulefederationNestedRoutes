import ContactChat from '../pages/ContactChat';
import Info from '../pages/Info';
import Layout from '../pages/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
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
