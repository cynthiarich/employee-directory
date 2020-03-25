import React, { useContext, useState } from 'react';
import EmployeeList from './EmployeeList';
import employeeContext from '../utils/EmployeeContext';
import './index.css';

const ListContainer = () => {
    const employees = useContext(employeeContext);
    const [search, updateSearch] = useState({});

    function handleSearch(event){
        updateSearch(event.target.value)
    }

    return (
        <div className="row mt-0">
            <div className="col-12 mb-2">
                <div className="navbar navbar-expand-lg mavbar-light bg-light" >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#listNavContent" aria-controls="listNavContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="listNavContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" onChange={handleSearch} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-secondary my-2 my-sm-0 mr-4" type="submit" onClick={(event) => {
                                event.preventDefault();
                                employees.onClick(search)}}>Search</button>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => employees.onChange("all")} name="filterRadios" id="allRadio" value="all" checked={employees.type === "all"} />
                                <label className="form-check-label mr-2" htmlFor="allRadio">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => employees.onChange("birthday")} name="filterRadios" id="bdayRadio" value="birthday" checked={employees.type === "birthday"}/>
                                <label className="form-check-label mr-2" htmlFor="bdayRadio">
                                    Birthdays
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => employees.onChange("anniversary")} name="filterRadios" id="annivRadio" value="anniversary" checked={employees.type === "anniversary"}/>
                                <label className="form-check-label mr-2" htmlFor="annivRadio">
                                    Anniversaries
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <employeeContext.Provider value={employees}>
                <EmployeeList />
            </employeeContext.Provider>
        </div>
    )
}

export default ListContainer;