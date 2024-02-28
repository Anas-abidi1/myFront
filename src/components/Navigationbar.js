import React from "react";
import { Link } from "react-router-dom";

function Navigationbar() {
  return (
    <>
    <nav>
      <Link to="/">home</Link>
      <Link to="/medecin">medecin</Link>
      
    </nav>
    </>
  );
}

export default Navigationbar;