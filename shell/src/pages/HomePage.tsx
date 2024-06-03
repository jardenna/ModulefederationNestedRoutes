import { FC, Suspense, lazy } from 'react';

import { loadRemote } from '@module-federation/enhanced/runtime';
import App1Btn from 'app1/App1Btn';

const NavigationBtn = lazy(
  () =>
    loadRemote<{ default: typeof App1Btn }>('app1/App1Btn', {
      from: 'runtime',
    }) as Promise<{ default: typeof App1Btn }>
);

const HomePage: FC = () => (
  <div>
    <h1>Home</h1>

    <Suspense fallback="Loading App btn...">
      <NavigationBtn />
    </Suspense>
  </div>
);
export default HomePage;
