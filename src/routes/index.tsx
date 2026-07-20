import { createBrowserRouter } from "react-router-dom";
import BaseTemplate from "./BaseTemplate";
import Login from "../pages/login";
import Home from "../pages/home";
import Users from "../pages/users";
import NotFound from "../components/NotFound";
import SignUp from "../pages/signup";

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
        path: '/users',
        element: <Users />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);
