import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Authdetails } from './pages/authdetails';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';
import CreateLive from './pages/createLive';
import Test from './pages/test';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },  
  {
    path: "/create",
    element: <CreateLive/>,
  },
  {
    path: "/auth",
    element: <Authdetails/>,
  },
  {
    path: "/test",
    element: <Test/>,
  },
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
