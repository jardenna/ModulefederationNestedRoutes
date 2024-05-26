import { FC, Suspense, lazy } from 'react';

const App1Btn = lazy(() => import('app1/App1Btn'));
const HomePage: FC = () => {
  return (
    <div>
      <h1>Home</h1>

      <Suspense fallback="Loading App btn...">
        <App1Btn />
      </Suspense>
    </div>
  );
};
export default HomePage;
