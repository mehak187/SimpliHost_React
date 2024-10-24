import React from "react";
import SelectProperty1 from "../Modals/SelectProperty1";
function AddNewExpenses() {
  return (
    <section>
      <div className="myshadow py-3 px-3 mb-3 rounded-3">
        <h2 className="fw-semi mb-0 fs-5">Add New Expenses Details</h2>
      </div>
      <form action="inventory">
        <div className="row">
          <div className="col-lg-4 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Expense Name
            </label>
            <br />
            <input
              type="text"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="Type name here"
            />
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="ExpenseType" className="fw-semi">
              Expense Type
            </label>
            <br />
            <select
              name="ExpenseType"
              id="ExpenseType"
              className="inputstyle  form-select focus-none"
            >
              <option value="" selected disabled hidden>
                Select Expense Type
              </option>
              <option value="Maintenance">Maintenance</option>
              <option value="Repairs">Repairs</option>
              <option value="Supplies">Supplies</option>
              <option value="Utilities">Utilities</option>
              <option value="Misc">Misc</option>

            </select>
          </div>
          <div className="col-lg-4 mt-3 d-flex align-items-center">
            <input
              type="number"
              id=""
              placeholder="00"
              className="inputstyle me-2 mt-3 w-100 focus-none"
            />
            <select name="" id="" className="inputstyle form-select mt-3 w-100 focus-none">
              <option value="days">Days</option>
              <option value="weeks">Weeks</option>
              <option value="months">Months</option>
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
            <label htmlFor="Owner" className="fw-semi">
              Select Owner
            </label>
            <br />
            <select name="Owner" id="Owner" className="inputstyle form-select focus-none">
              <option value="" selected disabled hidden>
                Select Owner
              </option>
              <option value="Owner1">Owner1</option>
              <option value="Owner2">Owner2</option>
              <option value="Owner3">Owner3</option>
            </select>
          </div>
          <div className="col-lg-4 mt-3">
            <label htmlFor="Expense" className="fw-semi">
              Add Expense Amount
            </label>
            <br />
            <input
              type="text"
              id="Expense"
              className="inputstyle focus-none"
              placeholder="Type Add Expense Amount here"
            />
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

export default AddNewExpenses;
