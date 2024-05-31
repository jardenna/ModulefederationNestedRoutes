import { useLocation, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

type RouteEvent = CustomEvent<string>;

const useSyncGlobalRouter = ({
  basename,
  eventName,
}: {
  basename: string;
  eventName: string;
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const newPath = `${basename}${location.pathname === '/' ? '' : location.pathname}`;

  useEffect(() => {
    window.dispatchEvent(new CustomEvent(eventName, { detail: newPath }));
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
