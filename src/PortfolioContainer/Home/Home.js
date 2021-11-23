import React from "react";
import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import About from "../AboutMe/AboutMe";
import Design from "../Design/Design";

import "./Home.css";

function Home() {
  return (
    <div className="contenedor-home">
      <Profile />
      <Footer />
      <About />
      <Design />
    </div>
  );
}

export default Home;
