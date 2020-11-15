import axios from "axios";

// grabbing the list of our employees using an axios call
 export default {
    getEmployeesList: function() {
            return new Promise((resolve, reject) => {
                // axios call from the randomuser API with query parameters of gender, name, email, picture, date of birth, phone number with employees of US nationality and setting the number of results to 30
                axios.get("https://randomuser.me/api/?inc=gender,name,email,picture,dob,phone&results=30&nat=us").then((res) => {
                    const employees = res.data.results;
                    // maps through each employee in the axios call and grabbing the results
                    const results = employees.map((employee) => {
                    return {
                        firstname: employee.name.first,
                        lastname: employee.name.last,
                        email: employee.email,
                        picture: employee.picture.medium,
                        phone: employee.phone,
                        dob: employee.dob.date
                    };
                    });
                    resolve(results);
                }).catch((err) => reject(err));
        });
      },
};