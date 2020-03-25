import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import ListContainer from '../components/ListContainer'
import employeeContext from '../utils/EmployeeContext'

const Home = () => {
    const [employees, setEmployees] = useState({
        search: "",
        type: "all",
        results: [],
        allemployees: [],
        onClick: (search) => {
            setEmployees({
                ...employees,
                search
            })
        },
        onChange: (type) => {
            setEmployees({
                ...employees,
                type
            })
        }
    });

    useEffect(() => {
        API.getEmployees()
        .then((res) => {
            setEmployees({
                ...employees,
                results: res,
                allemployees: res
            });
            
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
       <employeeContext.Provider value={employees}>
           <Jumbotron />
           <ListContainer />
       </employeeContext.Provider>
        
    )


}

export default Home;