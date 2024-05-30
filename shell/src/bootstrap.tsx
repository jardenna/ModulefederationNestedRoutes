import { init } from '@module-federation/enhanced/runtime';
import { createRoot } from 'react-dom/client';
import App from './App';

const entry = 'http://localhost:4001/mf-manifest.json';
init({
  name: 'shell',
  remotes: [
    {
      name: 'app1',
      alias: 'app1',
      entry,
    },
  ],
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(<App />);
