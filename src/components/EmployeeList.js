import React, { useContext } from 'react';
import Moment from 'react-moment';
import employeeContext from '../utils/EmployeeContext';

const EmployeeList = () => {
    const { search, type, results } = useContext(employeeContext);
    
    console.log("==============search=============")
    console.log(search)
    console.log("==============type=============")
    console.log(type)
    console.log("==============results=============")
    console.log(results)
    
    return ( 
        results.map((employee, index) => {
            const date = new Date();
            const offset = employee.timezone.split(":");
            return (
                <div className="col-12 mb-2 ml-3 mr-3" key={index}>
                    <div className="card" >
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

export default EmployeeList;