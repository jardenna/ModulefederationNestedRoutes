import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

type RouteEvent = CustomEvent<string>;

const useSyncAppRouter = ({
  basepath,
  eventName,
}: {
  basepath: string;
  eventName: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const appNavigated = ({ detail }: RouteEvent) => {
      if (detail === location.pathname) {
        return;
      }
      navigate(detail);
    };

    window.addEventListener(eventName, appNavigated as EventListener);

    return () => {
      window.removeEventListener(eventName, appNavigated as EventListener);
    };
  }, [location, navigate, basepath]);

  useEffect(() => {
    if (location.pathname.startsWith(basepath)) {
      window.dispatchEvent(
        new CustomEvent('shell', {
          detail: location.pathname.replace(basepath, ''),
        })
      );
    }
  }, [location, navigate, basepath]);
};

export default useSyncAppRouter;
