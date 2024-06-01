import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { AppBaseEventEnums, PathEnums } from '../enums';

type RouteEvent = CustomEvent<string>;

const useSyncGlobalRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newPath = `${PathEnums.app1Path}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    window.dispatchEvent(
      new CustomEvent(AppBaseEventEnums.App1EventName, { detail: newPath })
    );
    const shellNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };

    window.addEventListener('shell', shellNavigated as EventListener);

    return () => {
      window.removeEventListener('shell', shellNavigated as EventListener);
    };
  }, [location]);
};

export default useSyncGlobalRouter;
