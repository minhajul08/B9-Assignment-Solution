import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Layout/Root";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/Home',
            element:<h3>home ok</h3>
        }
      ]
    },
   
  ]);
export default router;  