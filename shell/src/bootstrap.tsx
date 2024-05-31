import { init } from '@module-federation/enhanced/runtime';
import { createRoot } from 'react-dom/client';
import App from './App';

init({
  name: 'shell',
  remotes: [
    {
      name: 'app1',
      alias: 'app1',
      entry: 'http://localhost:4001/mf-manifest.json',
    },
    {
      name: 'app2',
      alias: 'app2',
      entry: 'http://localhost:4002/remoteEntry.js',
    },
  ],
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
