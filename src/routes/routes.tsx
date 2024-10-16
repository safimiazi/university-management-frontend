import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminPaths } from "./admin.routes";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "about",
          element: <About />,
        },
      ],
    },
    {
      path: "/admin",
      element: <App />,
      children: adminPaths
    },
    {
        path: "register",
        element: <Register/>
    },
    {
        path: "login",
        element: <Login/>
    }
  ]);


  export default router;