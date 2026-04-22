import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const apiEndPoint = "https://jsonplaceholder.typicode.com/todos"

const useTodos = () => {
  const fetchTodos = () => axios.get<Todo[]>(apiEndPoint).then(res => res.data)

  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  })
}

export default useTodos
