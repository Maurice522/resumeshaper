import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import { Authdetails } from './pages/authdetails';
import Landing from './pages/landing';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },  
  {
    path: "/signup",
    element: <Signup/>,
  },
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
