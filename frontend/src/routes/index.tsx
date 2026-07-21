import { createBrowserRouter } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";
import Login from "../pages/login";
import Home from "../pages/home";
import Users from "../pages/users";
import NotFound from "../components/NotFound";
import SignUp from "../pages/signup";
import UserDetails from "../pages/userDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseTemplate />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/users/:id',
        element: <UserDetails />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);
