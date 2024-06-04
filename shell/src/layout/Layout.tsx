import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';

const Layout: FC = () => (
  <section className="container">
    <Nav />
    <Outlet />
  </section>
);

export default Layout;
