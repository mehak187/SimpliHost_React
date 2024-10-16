import React from "react";
import { Link } from "react-router-dom";
import info from "../../assets/img/info.png";

function Tasks() {
  return (
    <section>
      <div className="setting-bg pb-4 rounded-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Tasks Settings
        </h2>
        <div className="px-3">
          <form action="">
            <div className="">
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="row">
                    <div className="col-lg-3 col-xl-2 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                      <label className="me-2">No</label>
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                      <label className="me-2">Yes</label>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex align-items-center">
                      <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                        Allow Cleaning Issues to Auto-Create Tasks
                      </p>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex my-2 my-lg-0 align-items-center ">
                      <div className=" me-2 w-100">
                        <select
                          id="Property"
                          className="inputstyle bg-white w-100 focus-none"
                        >
                          <option value="" selected disabled hidden>
                            Select Task Type
                          </option>
                          <option value="Property1">Property1</option>
                          <option value="Property2">Property2</option>
                          <option value="Property3">Property3</option>
                        </select>
                      </div>
                      <img src={info} alt="info" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="row">
                    <div className="col-lg-3 col-xl-2 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                      <label className="me-2">No</label>
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                      <label className="me-2">Yes</label>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex align-items-center">
                      <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                        Auto Assign Admin Task to Default User
                      </p>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex my-2 my-lg-0 align-items-center ">
                      <div className=" me-2 w-100">
                        <select
                          id="Property"
                          className="inputstyle bg-white w-100 focus-none"
                        >
                          <option value="" selected disabled hidden>
                            Select User
                          </option>
                          <option value="Property1">Property1</option>
                          <option value="Property2">Property2</option>
                          <option value="Property3">Property3</option>
                        </select>
                      </div>
                      <img src={info} alt="info" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="row">
                    <div className="col-lg-3 col-xl-2 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                      <label className="me-2">No</label>
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                      <label className="me-2">Yes</label>
                    </div>
                    <div className="col-lg-8 col-xl-10 d-flex align-items-center">
                      <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                        Damage Inspection Start and Stop
                      </p>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3">
                      <label htmlFor="">
                        Start Time (hours after check-out)
                      </label>
                      <select
                        id="Property"
                        className="inputstyle bg-white w-100 focus-none"
                      >
                        <option value="1hour">1 hour</option>
                        <option value="2hour">2 hour</option>
                        <option value="3hour">3 hour</option>
                        <option value="4hour">4 hour</option>
                      </select>
                    </div>
                    <div className="col-xl-5 col-lg-6 mt-3">
                      <label htmlFor="">
                        Start Time (hours prior to next check-in)
                      </label>
                      <select
                        id="Property"
                        className="inputstyle bg-white w-100 focus-none"
                      >
                        <option value="1hour">1 hour</option>
                        <option value="2hour">2 hour</option>
                        <option value="3hour">3 hour</option>
                        <option value="4hour">4 hour</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row align-items-center py-3 border-bottom border-1">
                <div className="col-xxl-10">
                  <div className="row">
                    <div className="col-lg-3 col-xl-2 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                      <label className="me-2">No</label>
                      <label className="switch me-2">
                        <input type="checkbox" id="Materials" defaultChecked />
                        <span className="slider round"></span>
                      </label>
                      <label className="me-2">Yes</label>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex align-items-center">
                      <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                        Default ‘Cleaning’ Task Duration Time
                      </p>
                    </div>
                    <div className="col-lg-4 col-xl-5 d-flex my-2 my-lg-0 align-items-center ">
                      <div className=" me-2 w-100">
                        <select
                          id="Property"
                          className="inputstyle bg-white w-100 focus-none"
                        >
                          <option value="1hour">1 hour</option>
                          <option value="2hour">2 hour</option>
                          <option value="3hour">3 hour</option>
                          <option value="4hour">4 hour</option>
                        </select>
                      </div>
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

export default Tasks;
