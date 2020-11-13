import React from "react";
import "./style.css";

function Search() {
  return (
    <div className="container">
        <form>
            <div className="form-group text-center">
                <label for="formGroupExampleInput">Search</label>
                <input type="text" className="form-control" id="searchInput" placeholder="Search"/>
            </div>
        </form>
    </div>
    );
};

export default Search;