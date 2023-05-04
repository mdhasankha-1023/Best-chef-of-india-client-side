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
import PrivetRoutes from "../privetRoutes/PrivetRoutes";
import BlogPage from "../../pages/blogPage/BlogPage";

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
          path: '/blog',
          element: <BlogPage></BlogPage>
        },
        {
          path: '/chef-recipes/:id',
          element: <PrivetRoutes><ChefRecipes></ChefRecipes></PrivetRoutes>,
          loader: ({params}) => fetch(`https://best-chef-of-india-server-mdhasankhan-123.vercel.app/all-chefs/${params.id}`)
        }
      ]
    }
  ])

  export default router;