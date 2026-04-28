import type { Dispatch } from "react"
import React from "react"
import type { AuthAction } from "./loginStatus"

interface AuthContextType {
  user: string
  dispatch: Dispatch<AuthAction>
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType)

export default AuthContext
