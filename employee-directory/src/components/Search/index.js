import React, { useContext, useState } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import { SEARCH_EMPLOYEES, CLEAR_SEARCH } from "../../utils/Variables"
import "./style.css";

// User search input function
function Search() {
    const { dispatch } = useContext(EmployeeContext);
    const [search, setSearch] = useState('');
    function searchEmployees(e)  {
        e.preventDefault();
        dispatch({type: SEARCH_EMPLOYEES, payload: search});
    }
    function clearSearch(e)  {
        e.preventDefault();
        dispatch({type: CLEAR_SEARCH});
    }

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
                    onClick={searchEmployees}>
                        Search
                </button>
                <button 
                    className="btn btn-dark ml-2 mt-3" 
                    onClick={clearSearch}>
                        Clear Search
                </button>
            </div>
        </form>
    </div>
    );
};

export default Search;