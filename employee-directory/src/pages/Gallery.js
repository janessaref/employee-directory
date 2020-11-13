import React, { useEffect, useState } from "react";
import API from "../utils/API";
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
    // <EmployeeContext.Provider value={{ employees }}>
      <div>
        {/* <Row> */}
          {/* <CardContainer /> */}
        {/* </Row> */}
      </div>
    // </EmployeeContext.Provider>
  );
};

export default Gallery;