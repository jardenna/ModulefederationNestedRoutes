import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppEventNameEnums } from '../enums';

type RouteEvent = CustomEvent<string>;

const useSyncGlobalRouter = (
  basePath: string,
  eventName: AppEventNameEnums
) => {
  const location = useLocation();
  const navigate = useNavigate();
  const newPath = `${basePath}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(eventName, { detail: newPath }));
    const shellNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };

    window.addEventListener(
      AppEventNameEnums.ShellEventName,
      shellNavigated as EventListener
    );

    return () => {
      window.removeEventListener(
        AppEventNameEnums.ShellEventName,
        shellNavigated as EventListener
      );
    };
  }, [location]);
};

export default useSyncGlobalRouter;
