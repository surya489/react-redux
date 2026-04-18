import React from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Cart from "./components/Cart";
import CSSConcepts from "./components/CSSConcepts";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Redux App</span>
        </div>
      </nav>
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <Counter />
          </div>
          <div className="col-md-8">
            <Todo />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <Cart />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <CSSConcepts />
          </div>
        </div>
      </div>
    </div>
  )
};

export default App;