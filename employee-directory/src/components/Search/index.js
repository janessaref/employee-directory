import React, { useContext, useState, useEffect } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
import { SEARCH_EMPLOYEES, CLEAR_SEARCH } from "../../utils/Variables"
import "./style.css";

// User search input function
function Search() {
    // variable for dispatch to grab and execute specific actions
    const { dispatch } = useContext(EmployeeContext);
    // variable for the state of our search value
    const [search, setSearch] = useState('');

    // allows to see filtered results with every letter change in the search input
    useEffect(() => {
            dispatch({type: SEARCH_EMPLOYEES, payload: search});
    }, [search]);

    // search employees function, the dispatch we call to filter the results
    function searchEmployees(e)  {
        e.preventDefault();
        dispatch({type: SEARCH_EMPLOYEES, payload: search});
        setSearch(search);
    };

    // clears the search input field and returns to the initial state
    function clearSearch(e)  {
        e.preventDefault();
        dispatch({type: CLEAR_SEARCH});
        setSearch("");
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