import Counter from "./components/Counter"
import { useContext } from "react" //we need this hook to use the state of the context
import {CounterContext} from './context/Counter' //this si the actual context of creating a acontect

function App() {

  const counterState = useContext(CounterContext) //takes the state varaible and context and gets it to this component

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Context API </h1>
      <h5>Count is {counterState.count}</h5>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
