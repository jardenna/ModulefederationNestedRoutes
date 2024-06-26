import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import { AppEventNameEnums, PathEnums } from '../enums';
import useSyncGlobalRouter from '../hooks/useSyncGlobalRouter';

const Layout: FC = () => {
  const appBasename = `/${PathEnums.AppPath}`;
  useSyncGlobalRouter(appBasename, AppEventNameEnums.AppEventName);
  return (
    <article>
      <Nav />
      <main>
        <Outlet />
      </main>
    </article>
  );
};

export default Layout;
