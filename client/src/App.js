import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom"
import Riddle from "./pages/Riddle"
import SpotDifference from "./pages/SpotDifference";
import ThreeDPuzzles from "./pages/ThreeDPuzzle";
import Home2 from "./pages/Home2";

function App() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  return (
    <div className="App">
      {user ? (
        <Home user={user} setUser={setUser} />
      ) : (
        <Login setUser={setUser} />
      )}
      <Routes>
        <Route path="/home" element={<Home2 />} />
        <Route path="/riddles" element={<Riddle user={user} />} />
        <Route path="/spot_the_difference" element={<SpotDifference user={user} />} />
        <Route path="/3d_puzzle" element={<ThreeDPuzzles user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
