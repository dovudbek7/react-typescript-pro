import "./App.css"
import HomePage from "./HomePage"
function App() {
  // const [count, setCount] = useState(0)
  // const [tasks, taskDispatch] = useReducer(tasksReducer, [])
  // const [user, authDispatch] = useReducer(loginStatus, "")

  return (
    <>
      {/* <AuthProvider>
        <TasksProvider>
          <Navbar />
          <Counter />
        </TasksProvider>
      </AuthProvider> */}
      <HomePage />
    </>
  )
}

export default App
// function tasksReducer(prevState: any[], ...args: AnyActionArg): any[] {
//   throw new Error("Function not implemented.")
// }
