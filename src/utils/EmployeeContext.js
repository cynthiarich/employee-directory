import {createContext} from "react";

const employeeContext = createContext({
  search: "",
  type: "",
  results: [],
  allemployees: [],
  onClick: () => undefined,
  onChange: () => undefined
});

export default employeeContext;