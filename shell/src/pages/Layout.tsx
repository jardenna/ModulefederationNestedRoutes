import { NavLink, Outlet } from 'react-router-dom';

import { FC } from 'react';
import { Path } from '../enums';

const Layout: FC = () => (
  <section className="container">
    <nav>
      <NavLink to={Path.app1Path}>Contact from app1</NavLink>
      <NavLink to={Path.app2Path}>Contact from app2</NavLink>
    </nav>
    <Outlet />
  </section>
);

export default Layout;
