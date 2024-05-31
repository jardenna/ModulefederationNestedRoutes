import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';

const Layout: FC = () => {
  useSyncGlobalRouter();
  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
};
export default Layout;
