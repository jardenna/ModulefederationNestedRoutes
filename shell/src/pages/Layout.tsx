import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { PathEnums } from '../enums';

const Layout: FC = () => (
  <section className="container">
    <nav>
      <NavLink to={PathEnums.app1Path}>Contact from app1</NavLink>
      <NavLink to={PathEnums.app2Path}>Contact from app2</NavLink>
    </nav>
    <Outlet />
  </section>
);

export default Layout;
