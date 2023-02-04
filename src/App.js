import "./App.css";
import useStore from "./app/store";
function App() {
  const counter = useStore((state) => state.counter);

  const incrementCounter = useStore((state) => state.incrementCounter);
  const decrementCounter = useStore((state) => state.decrementCounter);
  const resetCounter = useStore((state) => state.resetCounter);
  return (
    <div className="app">
      <center>
        <h1>{counter}</h1>
        <div className="buttons">
          <button onClick={incrementCounter}>Increment</button>
          <button onClick={decrementCounter}>Decrement</button>
          <button onClick={resetCounter}>Reset</button>
        </div>
      </center>
    </div>
  );
}

export default App;
