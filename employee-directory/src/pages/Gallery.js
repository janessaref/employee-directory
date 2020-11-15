import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Container from "../components/Container";
import { ALL_EMPLOYEES } from "../utils/Variables";

// for our employee directory page displaying the data through the API call
function Gallery() {
    const { dispatch } = useContext(EmployeeContext);
  
    useEffect(() => {
        loadEmployees();
    },[]);

    function loadEmployees() {
        API.getEmployeesList()
            .then(employees => {
                dispatch({type: ALL_EMPLOYEES, payload: employees});
            })
            .catch(err => console.log(err));
  };

  return (
      <div>
          <Container />
      </div>
  );
};

export default Gallery;