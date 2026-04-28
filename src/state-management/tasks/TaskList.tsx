import { useContext } from "react"
import TaskContext from "./taskContext"

const useTasks = () => useContext(TaskContext)

const TaskList = () => {
  const { tasks, dispatch } = useTasks()
  return (
    <>
      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            task: { id: Date.now(), title: "Task" + Date.now() },
          })
        }
        className="btn btn-primary"
      >
        Add task
      </button>

      <ul className="list-group">
        {tasks.map(task => (
          <li
            key={task.id}
            className="list-group-item d-flex jusitfy-content-between"
          >
            <span className="flex-grow-1">{task.title}</span>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "DELETE", taskId: task.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList
