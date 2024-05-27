import './styles/index.scss';

import { RouterProvider, createHashRouter } from 'react-router-dom';

import routes from './routing/routes';

const browserRouter = createHashRouter(routes);
const App = () => <RouterProvider router={browserRouter} />;

export default App;
