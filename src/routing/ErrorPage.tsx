import { isRouteErrorResponse, useRouteError } from "react-router-dom"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <>
      <div>Opps...</div>
      <p>{isRouteErrorResponse(error) ? "Invalid page" : "Unexpected error"}</p>
    </>
  )
}

export default ErrorPage
