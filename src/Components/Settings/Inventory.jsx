import React from "react";
import { Link } from "react-router-dom";
import info from "../../assets/img/info.png";

function Inventory() {
  return (
    <section>
      <div className="setting-bg pb-4 rounded-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Inventory Settings
        </h2>
        <div className="px-3">
          <form action="">
            <div className="">
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="d-flex my-2 my-lg-0 align-items-center pe-3 ">
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <p className="mb-0 my-lg-0 me-sm-2 d-flex align-items-center text-black me-lg-3 me-0 ps-lg-3">
                      Schedule Inventory every x
                    </p>
                    <div className="d-flex flex-wrap flex-sm-nowrap my-2 my-lg-0 align-items-center ">
                      <div className="me-2">
                        <input
                          type="number"
                          value={1}
                          className="inputstyle bg-white w-100 focus-none"
                        />
                      </div>
                      <div className="mt-3 mt-sm-0 d-flex align-items-center w-100">
                        <select
                          id="Property"
                          className="inputstyle me-2 bg-white w-100 focus-none"
                        >
                          <option value="Days">Days</option>
                          <option value="Weeks">Weeks</option>
                          <option value="Months">Months</option>
                        </select>
                        <img src={info} alt="info" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="d-flex align-items-center flex-wrap">
                    <div className="d-flex my-2 my-lg-0 align-items-center pe-3 ">
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="mb-0 my-lg-0 me-2 d-flex align-items-center text-black me-lg-3 me-0 ps-lg-3">
                        Allow for Inventory to be scheduled on back-to-back
                        reservations?
                      </p>
                      <img src={info} alt="info" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12  mt-5">
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
        </div>
      </div>
    </section>
  );
}

export default Inventory;
