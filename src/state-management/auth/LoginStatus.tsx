import useAuthStore from "./store"

const LoginStatus = () => {
  // const { user, dispatch } = useAuth()
  const { user, login, logout } = useAuthStore()
  if (user) {
    return (
      <>
        <div>
          <span>{user}</span>
          <button onClick={() => logout()} className="btn btn-primary">
            Logout
          </button>
        </div>
      </>
    )
  }
  return (
    <>
      <button className="btn btn-primary" onClick={() => login(user)}>
        {" "}
        Login
      </button>
    </>
  )
}

export default LoginStatus
