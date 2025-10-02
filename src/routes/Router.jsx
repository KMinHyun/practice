import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RouteSearch from '../components/RouteSearch.jsx';
import App from '../App.jsx';

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <RouteSearch />
      }
   ]
  }
])

function Router() {
  return <RouterProvider router={router} />
}

export default Router;