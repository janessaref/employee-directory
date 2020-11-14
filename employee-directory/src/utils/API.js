import axios from "axios";

 export default {

    
    getEmployeesList: function() {
        return new Promise((resolve, reject) => {

            axios.get("https://randomuser.me/api/?inc=gender,name,email,picture,dob,phone&results=3&nat=us").then((res) => {
                const employees = res.data.results;
                const results = employees.map((employee) => {
                  return {
                    firstname: employee.name.first,
                    lastname: employee.name.last,
                    email: employee.email,
                    picture: employee.picture.thumbnail,
                    phone: employee.phone,
                    dob: employee.dob.date
                  };
                });
                console.log(results)
                resolve(results);
            }).catch((err) => reject(err));
        
        });
      },
};