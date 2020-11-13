import React from "react";

const EmployeeContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    image: "",
    phone: "",
    dob: ""
});
  
  export default EmployeeContext;