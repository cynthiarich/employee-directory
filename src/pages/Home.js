import React, { useEffect, useState } from 'react';
import API from '../utils/API';
import Jumbotron from '../components/Jumbotron';
import ListContainer from '../components/ListContainer';
import employeeContext from '../utils/EmployeeContext';
import searchContext from '../utils/SearchContext';

const Home = () => {
    const [employees, setEmployees] = useState([]);
    const [searches, setSearch] = useState({
        search: "",
        type: "all",
        onClick: (search) => {
            setSearch({
                ...searches,
                search
            });
        },
        onChange: (type, search) => {
            if (type === "search" && search === ""){
                type = "all";
            }
            setSearch({
                ...searches,
                search,
                type
            });
        }
    })

    useEffect(() => {
        API.getEmployees()
            .then((res) => {
                setEmployees(res);
            })
    }, []);


    return (
        <employeeContext.Provider value={employees}>
            <searchContext.Provider value={searches}>
                <Jumbotron />
                <ListContainer />
            </searchContext.Provider>
        </employeeContext.Provider>

    )


}

export default Home;