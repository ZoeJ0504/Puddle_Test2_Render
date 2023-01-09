import React from "react";
import NavBar from "../components/NavBar";


function Home({ user, setUser }) {

  return (
    <div>
      <NavBar logout={setUser} />
    </div>
  );
}

export default Home;


