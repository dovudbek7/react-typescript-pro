import { useQuery } from "@tanstack/react-query"
import { CACHE_KEY_TODOS } from "../constants"
import todoService, { type Todo } from "../services/todoService"

// const apiEndPoint = "https://jsonplaceholder.typicode.com/todos"

const useTodos = () => {
  // const fetchTodos = () => axios.get<Todo[]>(apiEndPoint).then(res => res.data)

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: todoService.getAll,
  })
}

export default useTodos
