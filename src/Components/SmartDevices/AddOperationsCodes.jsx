import React from "react";
import SelectProperty1 from "../Modals/SelectProperty1";
import { Calendar } from "primereact/calendar";

function AddOperationsCodes() {
  return (
    <>
      <section>
        <div>
          <h2 className="fw-semi fs-3">Add Operations Details</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="CodeName" className="fw-semi">
                    Code Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="CodeName"
                    className="inputstyle focus-none"
                    placeholder="Type Code Name here"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Code" className="fw-semi">
                    Code
                  </label>
                  <br />
                  <select
                    name="Code"
                    id="Code"
                    className="inputstyle focus-none form-select"
                  >
                    <option value="" selected disabled hidden>
                      Select Code
                    </option>
                    <option value="Code1">Code1</option>
                    <option value="Code2">Code2</option>
                    <option value="Code3">Code3</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex w-50 align-items-center justify-content-between">
                    <label htmlFor="Materials" className="fw-semi">
                      Set Time / Date?
                    </label>
                    <label className="switch me-3">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="StartDate" className="fw-semi">
                    Start Date/Time
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="EndDate" className="fw-semi">
                    End Date/Time
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Group" className="fw-semi">
                    Select Property/Property Group
                  </label>
                  <br />
                 <SelectProperty1 />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="User" className="fw-semi">
                    Attach Users
                  </label>
                  <br />
                  <select
                    name="User"
                    id="User"
                    className="inputstyle form-select focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Users
                    </option>
                    <option value="User1">User1</option>
                    <option value="User2">User2</option>
                    <option value="User3">User3</option>
                  </select>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex align-items-center">
                    <input
                      type="reset"
                      className="graybutton rounded-2 me-4 text-black"
                      value="Cancel"
                    />
                    <input
                      type="submit"
                      className="bluebutton rounded-2 text-white"
                      value="Save"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddOperationsCodes;
