import React from "react";
import "./style.css";

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid">
  <div className="container">
    <h1 className="display-4 text-center">Employee Directory</h1>
    {/* <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p> */}
  </div>
</div>
  );
}

export default Header;