interface LoginAction {
  type: "LOGIN"
  username: string
}
interface LogoutAction {
  type: "LOGOUT"
}

export type AuthAction = LoginAction | LogoutAction
const loginStatus = (state: string = "", action: AuthAction): string => {
  switch (action.type) {
    case "LOGIN":
      return state + action.username
    case "LOGOUT":
      return ""
  }
}

export default loginStatus
