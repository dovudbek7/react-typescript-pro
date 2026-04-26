import React, { useState } from "react"
import usePosts from "./hooks/usePosts"

const PostList = () => {
  const pageSize = 10
  const [page] = useState(1)
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ page, pageSize })

  if (isLoading) return <p>Loading...</p>

  if (error) return <p>{error.message}</p>
  return (
    <>
      <ul className="list-group">
        {data?.pages?.map((pageData, index) => (
          <React.Fragment key={index}>
            {pageData.map(post => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        className="btn btn-primary mt-1"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  )
}

export default PostList
