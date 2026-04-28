import { Link } from "react-router-dom"

const HomePage = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
        necessitatibus!
      </p>
      <Link to="/users">User</Link>
    </>
  )
}

export default HomePage
