import { createHashRouter, createMemoryRouter } from 'react-router-dom';

import { RoutingStrategyEnums } from '../enums';
import { RoutingStrategy } from '../types';
import routes from './routes';

interface createDynamicAppRouterProps {
  routingStrategy?: RoutingStrategy;
  initialPathname?: string;
}

function createDynamicAppRouter({
  routingStrategy,
  initialPathname,
}: createDynamicAppRouterProps) {
  // If you run from local return createHashRouter else return createMemoryRouter
  if (routingStrategy === RoutingStrategyEnums.Browser) {
    return createHashRouter(routes);
  }

  const initialEntries = [initialPathname || '/'];

  return createMemoryRouter(routes, { initialEntries });
}

export default createDynamicAppRouter;
