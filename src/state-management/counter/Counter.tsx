import useCounterStore from "./store"

const Counter = () => {
  // const [value, dispatch] = useReducer(countReducers, 0)
  const { counter, increment, reset } = useCounterStore()

  return (
    <div>
      Counter( {counter})
      <button className="btn btn-primary mx-1" onClick={() => increment()}>
        Increment
      </button>
      <button className="btn btn-primary " onClick={() => reset()}>
        Reset
      </button>
    </div>
  )
}

export default Counter
