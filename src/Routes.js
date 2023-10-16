import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Login from './pages/login';
// import Signup from './pages/signup';
import { Authdetails } from './pages/authdetails';
import Landing from './pages/landing';
import Dashboard from './pages/dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },  
  // {
  //   path: "/signup",
  //   element: <Signup/>,
  // },
  {
    path: "/auth",
    element: <Authdetails/>,
  },
]);

function Routes() {
  return (
    <RouterProvider router={router} />
  );
}

export default Routes;
