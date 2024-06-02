import { FC, Suspense, lazy } from 'react';

const App1Btn = lazy(() => import('app1/App1Btn'));
const HomePage: FC = () => (
  <div>
    <h1>Hodme</h1>
    <Suspense fallback="Loading App btn...">
      <App1Btn />
    </Suspense>
  </div>
);
export default HomePage;
