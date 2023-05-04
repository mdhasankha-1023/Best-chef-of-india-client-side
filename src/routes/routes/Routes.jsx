import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../layout/Main";
import OthersPage from "../../layout/OthersPage";
import SignIn from "../../pages/signIn/SignIn";
import SignUp from "../../pages/signUp/SignUp";
import ErrorPage from "../../pages/errorPage/ErrorPage";
import ChefRecipes from "../../pages/chefRecipes/ChefRecipes";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>
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
        },
        {
          path: '/chef-recipes',
          element: <ChefRecipes></ChefRecipes>
        }
      ]
    }
  ])

  export default router;