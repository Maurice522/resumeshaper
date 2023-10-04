import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/login';
import Signup from './pages/signup';
import { Authdetails } from './pages/authdetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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
