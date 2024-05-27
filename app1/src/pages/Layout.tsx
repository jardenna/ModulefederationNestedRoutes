import { NavLink, Outlet } from 'react-router-dom';

import { FC } from 'react';

const Layout: FC = () => (
  <>
    <nav>
      <NavLink to="form">Contact form</NavLink>
      <NavLink to="chat">Contact Chat</NavLink>
    </nav>

    <Outlet />
  </>
);
export default Layout;
