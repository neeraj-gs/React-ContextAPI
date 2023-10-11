import {useContext} from 'react'
import { CounterContext } from '../context/Counter'

const Counter = () => {
   const counterContext = useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>counterContext.setCount(counterContext.count + 1)}>Increemnt</button>
      <button onClick={()=>counterContext.setCount(counterContext.count - 1)}>Decremnt</button>
    </div>
  )
}

export default Counter