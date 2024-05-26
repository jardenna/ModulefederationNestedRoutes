import { NavLink, Outlet } from 'react-router-dom';

import { FC } from 'react';

const Layout: FC = () => {
  return (
    <>
      <nav style={{ marginBottom: '3rem' }}>
        <NavLink to="/contact" style={{ marginRight: '1rem' }}>
          Contact from app1
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
