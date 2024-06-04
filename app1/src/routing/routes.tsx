import { SubPathEnums } from '../enums';
import Contact from '../pages/Contact';
import ContactChat from '../pages/ContactChat';
import ContactForm from '../pages/ContactForm';
import Layout from '../pages/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Contact />,
      },
      {
        path: SubPathEnums.Form,
        element: <ContactForm />,
      },
      {
        path: SubPathEnums.Chat,
        element: <ContactChat />,
      },
    ],
  },
];

export default routes;
