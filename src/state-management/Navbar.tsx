import LoginStatus from "./auth/loginStatus.tsx"
import useCounterStore from "./counter/store"
import TaskList from "./tasks/TaskList"

const Navbar = () => {
  // const { tasks } = useTasks()
  const { counter } = useCounterStore()
  return (
    <>
      <LoginStatus />
      <nav className="navbar d-flex justify-content-between">
        <span className="badge text-bg-secondary">{counter}</span>
      </nav>
      <TaskList />
    </>
  )
}

export default Navbar
