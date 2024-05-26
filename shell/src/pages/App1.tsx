import { FC, useEffect, useRef } from 'react';

import { mount } from 'app1/App1Index';
import { useLocation } from 'react-router-dom';
import { Path } from '../enums';

const app1Basename = `${Path.app1RoutingPrefix}`;

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
      initialPathname: location.pathname.replace(app1Basename, ''),
    });

    isFirstRun.current = false;
  }, [location]);

  useEffect(() => remoteAppUnmountHandlerRef.current, []);

  return <div ref={wrapperRef} id="app1-mfe" />;
};
export default App1;
