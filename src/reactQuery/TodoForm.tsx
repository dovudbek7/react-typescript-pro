import { useRef } from "react"
import useAddTodos from "./hooks/useAddTodos"

const TodoForm = () => {
  //   const queryClient = QueryClient()
  const ref = useRef<HTMLInputElement>(null)
  const addTodo = useAddTodos(() => {
    if (ref.current) ref.current.value = ""
  })

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form
        className="row bm-3 mb-2"
        onSubmit={event => {
          event.preventDefault()
          if (ref.current && ref.current.value)
            addTodo.mutate({
              id: 0,
              title: ref.current?.value,
              completed: false,
              userId: 1,
            })
        }}
      >
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button
            //   disabled={addTodo.isPending}
            className="btn btn-primary"
          >
            {/* {addTodo.isPending ? "Adding..." : "Add"} */} Add
          </button>
        </div>
      </form>
    </>
  )
}

export default TodoForm
