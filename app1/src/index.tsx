import { RoutingStrategyEnums } from './enums';

import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('app1Root') as HTMLElement;
  mount({
    mountPoint: localRoot,
    routingStrategy: RoutingStrategyEnums.Browser,
  });
});
