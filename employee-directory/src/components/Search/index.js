import React, { useContext, useState, useEffect } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import { SEARCH_EMPLOYEES, CLEAR_SEARCH } from "../../utils/Variables"
import "./style.css";

// User search input function
function Search() {
    const { dispatch } = useContext(EmployeeContext);
    const [search, setSearch] = useState('');
    // useEffect

  return (
    <div className="container">
        <form>
            <div className="form-group text-center">
                <label for="formGroupExampleInput">Search</label>
                <input 
                    type="text" 
                    value={search} 
                    onChange={e => setSearch(e.target.value)} 
                    className="form-control" 
                    id="searchInput" 
                    placeholder="Search Employee by Name"
                />
                <button 
                    className="btn btn-dark mr-2 mt-3" 
                    onClick={() => dispatch({type: SEARCH_EMPLOYEES, payload: search})}>
                        Search
                </button>
                <button 
                    className="btn btn-dark ml-2 mt-3" 
                    onClick={() => dispatch({type: CLEAR_SEARCH})}>
                        Clear Search
                </button>
            </div>
        </form>
    </div>
    );
};

export default Search;