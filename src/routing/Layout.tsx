import { Outlet } from "react-router-dom"
import RouteNavbar from "./RouteNavbar"

const Layout = () => {
  return (
    <>
      <RouteNavbar />

      <div className="main">
        <Outlet />
      </div>
    </>
  )
}

export default Layout
