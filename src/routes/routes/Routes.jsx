import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../../layout/Main";

  const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>
    }
  ])

  export default router;