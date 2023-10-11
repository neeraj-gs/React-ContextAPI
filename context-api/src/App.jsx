import Counter from "./components/Counter"

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Context API </h1>
      <h5>Count is 0</h5>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
