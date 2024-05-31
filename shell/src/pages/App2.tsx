import { FC, useEffect, useRef } from 'react';

import { mount } from 'app2/App2Index';
import { useLocation } from 'react-router-dom';
import { Path } from '../enums';

const appBasename = `/${Path.app2Path}`;

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

    remoteAppUnmountHandlerRef.current = mount({
      // Menupoint === where to mount the app depending on code is running if in remote or shell
      mountPoint: wrapperRef.current!,
      initialPathname: location.pathname.replace(appBasename, ''),
    });
    isFirstRun.current = false;
  }, [location]);

  useEffect(() => remoteAppUnmountHandlerRef.current, []);

  return <div ref={wrapperRef} id="app2-mfe" />;
};
export default App1;
