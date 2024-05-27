import { RouterProvider } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RoutingStrategy } from './routing/types';
import { createDynamicAppRouter } from './routing/createDynamicAppRouter';

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}: {
  mountPoint: HTMLElement;
  initialPathname?: string;
  routingStrategy?: RoutingStrategy;
}) => {
  const router = createDynamicAppRouter({ routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  return () => queueMicrotask(() => root.unmount());
};

// eslint-disable-next-line import/prefer-default-export
export { mount };
