import { createHashRouter, createMemoryRouter } from 'react-router-dom';
import routes from './routes';
import { RoutingStrategyTypes } from './types';

interface createDynamicAppRouterProps {
  routingStrategy?: RoutingStrategyTypes;
  initialPathname?: string;
}

function createDynamicAppRouter({
  routingStrategy,
  initialPathname,
}: createDynamicAppRouterProps) {
  // If you run from local return createHashRouter else return createMemoryRouter
  if (routingStrategy === 'browser') {
    return createHashRouter(routes);
  }

  const initialEntries = [initialPathname || '/'];

  return createMemoryRouter(routes, { initialEntries });
}

export default createDynamicAppRouter;
