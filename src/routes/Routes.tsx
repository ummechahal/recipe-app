import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Main from '../components/main/Main';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />,
      },
    ],
  },
]);
