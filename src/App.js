import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Cart from "./components/Cart";
import CSSConcepts from "./components/CSSConcepts";
import User from "./components/User";
import Weather from "./components/Weather";
import { logout, toggleTheme } from "./redux/action";

function App() {

  const user = useSelector(state => state.user);
  const color = useSelector(state => state.color);
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (user && user.length > 0) {
      setIsLoggedIn(true);
    }
  }, [user]);

  const handleThemeToggle = () => {
    const newColor = color === "light" ? "dark" : "light";
    dispatch(toggleTheme(newColor));
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsLoggedIn(false);
  }

  return (
    <div className={`App ${color === 'dark' ? 'bg-dark text-light' : 'bg-light'}`} style={{ minHeight: '100vh' }}>
      <nav className={`navbar ${color === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-primary'} mb-4`}>
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Redux App</span>
          <div>
            {isLoggedIn && (
              <span className="navbar-text me-3 cursor-pointer" onClick={handleLogout} style={{ cursor: 'pointer' }}>Logout</span>
            )}
            <span className="navbar-text cursor-pointer" onClick={handleThemeToggle} style={{ cursor: 'pointer' }}>
              {color === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </span>
          </div>
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
            <div className="col-md-6">
              <Cart />
            </div>
            <div className="col-md-6">
              <Weather />
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