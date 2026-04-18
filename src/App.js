import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Cart from "./components/Cart";
import CSSConcepts from "./components/CSSConcepts";
import User from "./components/User";
import { logout } from "./redux/action";

function App() {

  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log("User state updated:", user);
    if (user && user.length > 0) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Redux App</span>
          {isLoggedIn && (
            <span className="navbar-text cursor-pointer" onClick={handleLogout}>Logout</span>
          )}
        </div>
      </nav>
      {isLoggedIn ? (
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
      ) : (
        <div className="container">
          <div className="row mt-4">
            <div className="col-12">
              <User />
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default App;