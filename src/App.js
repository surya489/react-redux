import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="App">
      <h1>React Redux App</h1>
      <Counter />
      <Todo />
    </div>
  )
};

export default App;