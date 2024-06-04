import { SubPathEnums } from '../enums';
import About from '../pages/About';
import Info from '../pages/Info';
import Layout from '../pages/Layout';
import Profile from '../pages/Profile';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Profile />,
      },
      {
        path: SubPathEnums.Info,
        element: <Info />,
      },
      {
        path: SubPathEnums.About,
        element: <About />,
      },
    ],
  },
];

export default routes;
