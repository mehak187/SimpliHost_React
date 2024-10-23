import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import SelectProperty1 from "../Modals/SelectProperty1";

function AddItems() {
  return (
    <section>
      <div className="myshadow py-3 px-3 mb-3 rounded-3">
        <h2 className="fw-semi mb-0 fs-5">Add Inventory Item</h2>
      </div>
      <form action="inventory">
        <div className="row">
          <div className="col-lg-12 col-xl-10 col-xxl-8">
            <div className="row">
              <div className="col-lg-6 mt-3">
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
              <div className="col-lg-6 mt-3">
                <label htmlFor="TaskName" className="fw-semi">
                  Item Description
                </label>
                <br />
                <input
                  type="text"
                  id="TaskName"
                  className="inputstyle focus-none"
                  placeholder="Type description here"
                />
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="Property" className="fw-semi">
                  Type
                </label>
                <br />
                <select
                  name="Property"
                  id="Property"
                  className="inputstyle form-select focus-none"
                >
                  <option value="" selected disabled hidden>
                    Select Type
                  </option>
                  <option value="Bathroom">Bathroom</option>
                  <option value="Kitchen">Kitchen</option>
                  <option value="Bedroom">Bedroom</option>
                  <option value="Laundry">Laundry</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="Property" className="fw-semi">
                  Property
                </label>
                <br />
                <SelectProperty1 />
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="TaskType" className="fw-semi">
                  Item Size
                </label>
                <br />
                <select
                  name="TaskType"
                  id="TaskType"
                  className="inputstyle form-select focus-none"
                >
                  <option value="" selected disabled hidden>
                    Select Size
                  </option>
                  <option value="Each">Each</option>
                  <option value="Unit">Unit</option>
                  <option value="Battle">Battle</option>
                  <option value="Box">Box</option>
                  <option value="Roll">Roll</option>
                  <option value="Container">Container</option>
                  <option value="Bundle">Bundle</option>
                  <option value="Misc">Misc</option>
                </select>
              </div>
              <h2 className="fw-semi fs-5 mt-4">Inventory Stock</h2>
              <div className="col-lg-6 mt-3">
                <label htmlFor="count" className="fw-semi">
                  Initial Count
                </label>
                <br />
                <input
                  type="text"
                  id="count"
                  placeholder="Type here"
                  className="inputstyle focus-none"
                />
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="TaskType" className="fw-semi">
                  Vendors
                </label>
                <br />
                <select
                  name="TaskType"
                  id="TaskType"
                  className="inputstyle form-select focus-none"
                >
                  <option value="" selected disabled hidden>
                    Select Vendor
                  </option>
                  <option value="Vendor1">Vendor1</option>
                  <option value="Vendor2">Vendor2</option>
                  <option value="Vendor3">Vendor3</option>
                </select>
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="purchaseLink" className="fw-semi">
                  Purchase Link
                </label>
                <br />
                <input
                  type="text"
                  id="purchaseLink"
                  placeholder="Type here"
                  className="inputstyle py-3 focus-none"
                />
              </div>
              <div className="col-lg-6 mt-3">
                <label htmlFor="lastDate" className="fw-semi">
                  Last Purchase Date
                </label>
                <br />
                <Calendar showIcon className="impdate focus-none py-2" />
              </div>
              <div className="col-12 mt-3">
                <div className="d-flex align-items-center">
                  <label htmlFor="Capture" className=" me-3">
                    Low Stock alert
                  </label>
                  <label className="switch">
                    <input type="checkbox" id="Capture" />
                    <span className="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="col-lg-6 mt-3">
                <div className="d-flex align-items-center">
                  <label htmlFor="lastDate" className="fw-semi me-2">
                    Send alert when stock is at alert or below
                  </label>
                  <br />
                  <input
                    type="number"
                    id="lastDate"
                    className="inputstyle w-50 focus-none"
                  />
                </div>
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
  );
}

export default AddItems;
