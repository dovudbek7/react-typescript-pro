import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"

import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { RouterProvider } from "react-router-dom"
import router from "./routing/routes.tsx"
// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       retry: 3,
//       staleTime: 2 * 1000,
//       refetchOnReconnect: true,
//       refetchOnMount: true,
//       refetchOnWindowFocus: true,
//     },
//   },
// })

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools />
    </QueryClientProvider> */}
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </StrictMode>,
)
