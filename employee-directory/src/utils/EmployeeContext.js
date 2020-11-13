import React from "react";

const EmployeeContext = React.createContext({
    firstname: "",
    lastname: "",
    email: "",
    image: "",
});
  
  export default EmployeeContext;