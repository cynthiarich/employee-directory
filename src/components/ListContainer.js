import React, { useContext } from 'react';
import EmployeeList from './EmployeeList';
import searchContext from '../utils/SearchContext';
import './index.css';

const ListContainer = () => {
    const searches = useContext(searchContext);

    return (
        <div className="row mt-0">
            <div className="col-12 mb-2">
                <div className="navbar navbar-expand-lg mavbar-light bg-light" >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#listNavContent" aria-controls="listNavContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="listNavContent">
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" onChange={(event) => searches.onChange("search", event.target.value)} placeholder="Search" aria-label="Search" value={searches.search}/>
                            <button className="btn btn-outline-secondary my-2 my-sm-0 mr-4" type="submit" onClick={(event) => {
                                event.preventDefault();
                                searches.onClick(event.target.value)
                            }}>Search</button>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => searches.onChange("all", "")} name="filterRadios" id="allRadio" value="all" checked={searches.type === "all"} />
                                <label className="form-check-label mr-2" htmlFor="allRadio">
                                    All
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => searches.onChange("birthday", "")} name="filterRadios" id="bdayRadio" value="birthday" checked={searches.type === "birthday"} />
                                <label className="form-check-label mr-2" htmlFor="bdayRadio">
                                    Birthdays
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input mr-2" type="radio" onChange={() => searches.onChange("anniversary", "")} name="filterRadios" id="annivRadio" value="anniversary" checked={searches.type === "anniversary"} />
                                <label className="form-check-label mr-2" htmlFor="annivRadio">
                                    Anniversaries
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <EmployeeList />
        </div>
    )
}

export default ListContainer;