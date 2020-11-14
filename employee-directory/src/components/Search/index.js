import React, { useContext, useState } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import "./style.css";

function Search() {
    const { dispatch } = useContext(EmployeeContext);
    const [search, setSearch] = useState('');
  return (
    <div className="container">
        <form>
            <div className="form-group text-center">
                <label for="formGroupExampleInput">Search</label>
                <input type="text" value={search} onChange={event => setSearch(event.target.value)} className="form-control" id="searchInput" placeholder="Search Employee by Name"/>
                <button className="btn btn-dark mr-2 mt-3" onClick={() => dispatch({type: "search", payload: search})}>Search</button>
                <button className="btn btn-dark ml-2 mt-3" onClick={() => dispatch({type: "clear"})}>Clear Search</button>
            </div>
        </form>
    </div>
    );
};

export default Search;