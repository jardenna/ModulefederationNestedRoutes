import { FC, useEffect, useRef } from 'react';

import { loadRemote } from '@module-federation/enhanced/runtime';
import { useLocation } from 'react-router-dom';
import { Path } from '../enums';

const appBasename = `/${Path.app1Path}`;

const App1: FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isFirstRun = useRef(true);

  const remoteAppUnmountHandlerRef = useRef(() => {});
  // Mount app1 MFE
  useEffect(() => {
    if (!isFirstRun.current) {
      return;
    }

    loadRemote('app1/App1Index').then((module: any) => {
      remoteAppUnmountHandlerRef.current = module.mount({
        // Menupoint === where to mount the app depending on code is running if in remote or shell
        mountPoint: wrapperRef.current!,
        initialPathname: location.pathname.replace(appBasename, ''),
      });
    });

    isFirstRun.current = false;
  }, [location]);

  useEffect(() => remoteAppUnmountHandlerRef.current, []);

  return <div ref={wrapperRef} id="app1-mfe" />;
};
export default App1;
