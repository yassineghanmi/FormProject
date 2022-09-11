import React from "react";
import Bodyform from "./Bodyform";

function Form() {
  return (
    <div className="container-sm mt-5 px-5 " style={{ width: "50rem" }}>
      <div className="card row d-flex justify-content-center">
        <div className="card-header text-light text-center bg-dark">
          <h2 className="fw-bold">Contacts</h2>
        </div>
        <div className="card-body ">
          <Bodyform/>
        </div>
      </div>
    </div>
  );
}

export default Form;
