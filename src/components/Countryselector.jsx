import React from "react";
import { CountryData } from "../data/Data";
function Countryselector(props) {

  function handleOptions() {
    return CountryData.map((country) => {
      return <option value={country.name} >{country.name}</option>;
    });
  }
  return (
    <div className="col ">
      <select className="form-select "  onClick={(e)=>{props.pay(e.target.value)}} aria-label="Default select example" required>
        <option defaultValue >Choisissez un pays</option>
        {handleOptions()}
      </select>
    </div>
  );
}

export default Countryselector;
