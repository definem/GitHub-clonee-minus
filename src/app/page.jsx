import React from "react";
import NavBottom from "../../components/NavBottom/navBottom";
import About from "../../components/About/about";
const Home = ({ children }) => {
  return (
    <>
      <NavBottom />
      <About/>
      {children}
    </>
  );
};

export default Home;
