import React, { useEffect, useState } from "react";
import API from "../utils/API";
import EmployeeContext from "../utils/EmployeeContext";
import Container from "../components/Container";
// import Table from "../components/Table";
// import TableRow from "../components/TableRow";

function Gallery() {
    const [employees, setEmployees] = useState([]);
    // const [employee, setEmployee] = useState({});

    useEffect(() => {
        // loadEmployees();
    });

    function loadEmployees() {
        API.getEmployeesList()
        .then((employees) => {
            setEmployees(employees);
            setEmployees(employees[0]);
        })
        .catch(err => console.log(err));
  };

  return (
    <EmployeeContext.Provider value={{ employees }}>
      <div>
          <Container />
      </div>
    </EmployeeContext.Provider>
  );
};

export default Gallery;