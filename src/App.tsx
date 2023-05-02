import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./Counter";
import { useStore } from "./hooks/useStore";
import { Link } from "react-router-dom";

const Component = () => {
  const { useStateSelector } = useStore();
  const [mom] = useStateSelector<string>("himom", "himom");
  const [count, setCount] = useStateSelector<number>("counter", 0);
  return (
    <div>
      {mom} <h1>Component</h1>
      <div>
        <Counter />
        <br />
        <br />
        <br />
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>+1 count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <Component />
      <Link to="/about">go to about</Link>
      {/* <button onClick={() => setCounter(counter + 1)}>add</button>
      {counter} */}
      <h1>APP</h1>
      <button onClick={() => setShow(!show)}>show more</button>
      {show && (
        <>
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </>
      )}
    </div>
  );
}

export default App;
