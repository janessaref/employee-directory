import React, { useEffect, useState, useContext } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Container from "../components/Container";
// import Table from "../components/Table";
// import TableRow from "../components/TableRow";

function Gallery() {
    const { store, dispatch } = useContext(EmployeeContext);

    const [employees, setEmployees] = useState([]);
  
    useEffect(() => {
        loadEmployees();
    },[]);

    function loadEmployees() {
        API.getEmployeesList()
            .then(employees => {
                setEmployees(employees);
                dispatch({type: "loading", payload: employees});
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