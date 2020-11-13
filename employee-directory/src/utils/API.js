import axios from "axios";

const names = [];

 export default {
    getEmployeesByName: function() {
        return new Promise((resolve, reject) => {
          axios.get("https://randomuser.me/api/?results=20").then((res) => {
            const employees = res.data.results;
            const results = employees.map((employee) => {
              return {
                firstname: employee.name.first,
                lastname: employee.name.last,
                email: employee.email,
                image: employee.picture.thumbnail
              };
            });
            names.push(results);
            resolve(results);
          }).catch((err) => reject(err));
        });
      },
      // Return a Promise to simulate an async call
      getEmployeesList: function() {
        return new Promise((resolve) => {
          resolve(names);
        });
      }
};