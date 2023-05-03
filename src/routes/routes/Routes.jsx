import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../layout/Main";
import OthersPage from "../../layout/OthersPage";
import SignIn from "../../pages/signIn/SignIn";
import SignUp from "../../pages/signUp/SignUp";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    },
    {
      path: '/',
      element: <OthersPage></OthersPage>,
      children: [
        {
          path: '/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/sign-up',
          element: <SignUp></SignUp>
        }
      ]
    }
  ])

  export default router;