import { useReducer, type ReactNode } from "react"
import loginStatus from "../state-management/auth/loginStatus"
import AuthContext from "./authContext"
interface Props {
  children: ReactNode
}
const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(loginStatus, "")

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
