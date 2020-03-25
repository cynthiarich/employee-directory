import axios from "axios";


export default {
    getEmployees: function () {
        return axios
            .get("https://randomuser.me/api/?results=10&nat=us")
            .then(res => {
                const employees = res.data.results;
                return employees.map(employee => {
                    return {
                        firstName: employee.name.first,
                        lastName: employee.name.last,
                        city: employee.location.city,
                        state: employee.location.state,
                        latitude: employee.location.coordinates.latitude,
                        longitude: employee.location.coordinates.longitude,
                        timezone: employee.location.timezone.offset,
                        email: employee.email,
                        phone: employee.cell,
                        dob: employee.dob.date,
                        anniversary: employee.registered.date,
                        photo: employee.picture.large
                    };
                });
            });
    }
};