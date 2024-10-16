import React from "react";
import logoFile from "../../assets/img/logo-file.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
function CoHosting() {
  return (
    <div className="setting-bg rounded-3">
      <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
        General Settings
      </h2>
      <div className="px-4">
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6 me-lg-2 mt-3">
                  <label htmlFor="ExpenseType" className="fw-semi">
                    Select Expense Type
                  </label>
                  <select
                    name="ExpenseType"
                    id="ExpenseType"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Expense Type
                    </option>
                    <option value="Expense1">Expense1</option>
                    <option value="Expense2">Expense2</option>
                    <option value="Expense3">Expense3</option>
                  </select>
                </div>
                <div className="col-lg-6 me-lg-2 mt-3">
                  <label className="fw-semi">Company Logo</label>
                  <p>
                    Shown on invoices and reports (able to edit on individual
                    invoices if needed)
                  </p>
                  <label
                    htmlFor="logo"
                    className="d-inline-flex bg-white flex-column px-4 py-5 align-items-center border border-1 rounded-3 px-3 py-2"
                  >
                    <img src={logoFile} alt="logoFile" />
                    <p className="mt-2 mb-0 text-center">Click and upload</p>
                    <input type="file" id="logo" className="d-none" />
                  </label>
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="invoiceName" className="fw-semi">
                    Name on Invoice
                  </label>
                  <input
                    type="text"
                    id="invoiceName"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="invoiceNumeric" className="fw-semi">
                    Starting Invoice (Numeric)
                  </label>
                  <input
                    type="text"
                    id="invoiceNumeric"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="companyAddress" className="fw-semi">
                    Company Address
                  </label>
                  <input
                    type="text"
                    id="companyAddress"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="companyCity" className="fw-semi">
                    Company City
                  </label>
                  <input
                    type="text"
                    id="companyCity"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="companyZip" className="fw-semi">
                    Company Zip
                  </label>
                  <input
                    type="text"
                    id="companyZip"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="companyPhone" className="fw-semi">
                    Company Phone
                  </label>
                  <input
                    type="text"
                    id="companyPhone"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-lg-6  mt-3">
                  <label htmlFor="companyEmail" className="fw-semi">
                    Company Email
                  </label>
                  <input
                    type="text"
                    id="companyEmail"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type here"
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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CoHosting;
