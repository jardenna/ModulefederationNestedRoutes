import { FC } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { AppEventNameEnums, PathEnums } from '../enums';
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';

const Layout: FC = () => {
  const appBasename = `/${PathEnums.AppPath}`;
  useSyncGlobalRouter(appBasename, AppEventNameEnums.AppEventName);
  return (
    <>
      <nav>
        <NavLink to="form">Contact form</NavLink>
        <NavLink to="chat">Contact Chat</NavLink>
      </nav>

      <Outlet />
    </>
  );
};
export default Layout;
