import React, { useState } from "react";
import SelectProperty1 from "../Modals/SelectProperty1";
import SelectProperty2 from "../Modals/SelectProperty2";

function AddNewOwner() {
  return (
    <section>
      <div className="myshadow py-3 px-3 mb-3 rounded-3">
        <h2 className="fw-semi mb-0 fs-5">Add New Owner Details</h2>
      </div>
      <form action="inventory">
        <div className="row">
          <div className="col-lg-4 mt-3">
            <label htmlFor="TaskName" className="fw-semi">
              Item Name
            </label>
            <br />
            <input
              type="text"
              id="TaskName"
              className="inputstyle focus-none"
              placeholder="Type name here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="FirstName" className="fw-semi">
              First Name
            </label>
            <br />
            <input
              type="text"
              id="FirstName"
              className="inputstyle focus-none"
              placeholder="Type First Name here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="LastName" className="fw-semi">
              Last Name
            </label>
            <br />
            <input
              type="text"
              id="LastName"
              className="inputstyle focus-none"
              placeholder="Type Last Name here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Phone" className="fw-semi">
              Phone Number
            </label>
            <br />
            <input
              type="tel"
              id="Phone"
              className="inputstyle focus-none"
              placeholder="Type Phone Number here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Email" className="fw-semi">
              Email
            </label>
            <br />
            <input
              type="text"
              id="Email"
              className="inputstyle focus-none"
              placeholder="Type Email here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Company" className="fw-semi">
              Company
            </label>
            <br />
            <input
              type="text"
              id="Company"
              className="inputstyle focus-none"
              placeholder="Type Company Name here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Address" className="fw-semi">
              Mailing Address
            </label>
            <br />
            <input
              type="tel"
              id="Address"
              className="inputstyle focus-none"
              placeholder="Type Mailing Address here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="City" className="fw-semi">
              Mailing City
            </label>
            <br />
            <input
              type="text"
              id="City"
              className="inputstyle focus-none"
              placeholder="Type Mailing City here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Zip" className="fw-semi">
              Mailing Zip
            </label>
            <br />
            <input
              type="text"
              id="Zip"
              className="inputstyle focus-none"
              placeholder="Type Mailing Zip here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Terms" className="fw-semi">
              Terms
            </label>
            <br />
            <select name="Terms" id="Terms" className="inputstyle form-select focus-none">
              <option value="" selected disabled hidden>
                Select Terms
              </option>
              <option value="Term1">Term1</option>
              <option value="Term2">Term2</option>
              <option value="Term3">Term3</option>
            </select>
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="FeeType" className="fw-semi">
              Fee Type
            </label>
            <br />
            <select
              name="FeeType"
              id="FeeType"
              className="inputstyle focus-none form-select"
            >
              <option value="" selected disabled hidden>
                Select Fee Type
              </option>
              <option value="Type1">Type1</option>
              <option value="Type2">Type2</option>
              <option value="Type3">Type3</option>
            </select>
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Properties" className="fw-semi">
              Properties
            </label>
            <br />
           <SelectProperty1 />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="PropertyGroup" className="fw-semi">
              Property Group
            </label>
            <br />
            <SelectProperty2 />
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
      </form>
    </section>
  );
}

export default AddNewOwner;
