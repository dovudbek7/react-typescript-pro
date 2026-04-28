import { createBrowserRouter } from "react-router-dom"
import HomePage from "../HomePage"
import UserList from "./UserList"
import UserDetail from "./UserDetail"
import Layout from "./Layout"
import ErrorPage from "./ErrorPage"
import LoginPage from "./LoginPage"
import PriveteRoutes from "./PriveteRoutes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/login", element: <LoginPage /> },
    ],
  },
  {
    element: <PriveteRoutes />,
    children: [
      {
        path: "/users",
        element: <UserList />,
        children: [{ path: ":id", element: <UserDetail /> }],
      },
    ],
  },

  // {path: '/', element: <HomePage/>}
])

export default router
