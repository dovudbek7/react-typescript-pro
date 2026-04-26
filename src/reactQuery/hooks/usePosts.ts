import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"

interface Posts {
  userId: number
  id: number
  title: string
  body: string
}

interface PostQuery {
  page?: number
  pageSize: number
}

const apiEndPoint = "https://jsonplaceholder.typicode.com/posts"

const usePosts = (query: PostQuery) => {
  const fetchPosts = async ({ pageParam = 0 }: { pageParam?: number }) => {
    const page = query.page || pageParam + 1
    const response = await axios.get<Posts[]>(apiEndPoint, {
      params: {
        _start: (page - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    return response.data
  }

  return useInfiniteQuery({
    queryKey: ["posts", query],
    queryFn: fetchPosts,
    staleTime: 1 * 60 * 1000,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length : undefined
    },
  })
}

export default usePosts
