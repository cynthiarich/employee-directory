import React, { useContext } from 'react';
import Moment from 'react-moment';
import searchContext from '../utils/SearchContext';
import employeeContext from '../utils/EmployeeContext';

const getMonth = value => {
    let xdate = new Date(value);
    return xdate.getMonth();
}

const EmployeeList = () => {
    const { search, type } = useContext(searchContext);
    const employees = useContext(employeeContext)
    
    const date = new Date();
    let month = date.getMonth();

    let results = [];
    if(type === "birthday"){
        results = employees.filter(employee => {
            let dobMonth = getMonth(employee.dob);
            if(dobMonth === month){
                return employee;
            }
        })
    } else if(type === "anniversary"){
        results = employees.filter(employee => {
            let dobMonth = getMonth(employee.anniversary);
            if(dobMonth === month){
                return employee;
            }
        })   
    } else if(type === "search"){
        results = employees.filter(employee => {
            let eeStr = `${employee.firstName} ${employee.lastName} ${employee.city} ${employee.state}`
            if (eeStr.toLowerCase().includes(search.toLowerCase())){
                return employee;
            }
        })
    } else {
        results = employees.map((employee, index) => employee)
    }

    if (results.length > 0){
        return ( 
            results.map((employee, index) => {
                const date = new Date();
                const offset = employee.timezone.split(":");
                return (
                    <div className="col-12 mb-2 mx-1" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{employee.firstName} {employee.lastName}</h5>
                                <img src={employee.photo} className="img-thumbnail float-left mr-3" alt={`${employee.firstName} ${employee.lastName}`} />
                                <p className="card-text mb-0"><i className="fa fa-globe"></i>&nbsp;{employee.city}, {employee.state}</p>
                                <p className="card-text mb-0"><i className="fa fa-clock-o"></i>&nbsp;Local: <Moment add={{ hours: offset[0] }} format="HH:mm">{date}</Moment></p>
                                <p className="card-text mb-0"><i className="fa fa-envelope"></i>&nbsp;{employee.email}</p>
                                <p className="card-text mb-0"><i className="fa fa-phone"></i>&nbsp;{employee.phone}</p>
                                <p className="card-text mb-0"><i className="fa fa-birthday-cake"></i>&nbsp;Birthday: <Moment format="MMM DD">{employee.dob}</Moment></p>
                                <p className="card-text mb-0"><i className="fa fa-glass"></i>&nbsp;Anniversary: <Moment format="MMM DD">{employee.anniversary}</Moment></p>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
    else {
        return (
            <div className="col-12 mt-5 mx-auto" key="0">
                <h2 className="text-center">No results found, please try another search!</h2>
            </div>
        )
    }
    
}

export default EmployeeList;