import React from "react";
import logoFile from "../../assets/img/logo-file.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
function Preferences() {
  return (
    <div className="setting-bg rounded-3">
      <div className="px-2 px-sm-4 py-3">
        <form action="">
          <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
            Preferences Settings
          </h2>
          <div className="row">
            <div className="col-lg-11 col-xl-8 col-xxl-7">
              <div className="row d-flex align-items-center mt-3">
                <div className="col-lg-4">
                  <label htmlFor="fvrt" className="fw-semi text-nowrap">
                    Favorite Dashboard
                  </label>
                </div>
                <div className="col-lg-8">
                  <select
                    name="fvrt"
                    id="fvrt"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Dashboard
                    </option>
                    <option value="Favourite">Favourite</option>
                    <option value="Reservations">Reservations</option>
                    <option value="Operations">Operations</option>
                    <option value="Forecasting">Forecasting</option>
                    <option value="Taxes">Taxes</option>
                    <option value="Snapshot">Snapshot</option>

                  </select>
                </div>
              </div>
              <div className="row d-flex align-items-center mt-3">
                <div className="col-lg-4">
                  <label htmlFor="home" className="fw-semi text-nowrap">
                    Home Page
                  </label>
                </div>
                <div className="col-lg-8">
                  <select
                    name="home"
                    id="home"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Home Page
                    </option>
                    <option value="Dashboard">Dashboard</option>
                    <option value="Inbox">Inbox</option>
                    <option value="Calendar">Calendar</option>
                    <option value="Properties">Properties</option>
                    <option value="Tasks">Tasks</option>
                    <option value="Checklist">Checklist</option>
                    <option value="Inventory">Inventory</option>
                    <option value="Co-Hosting">Co-Hosting</option>
                    <option value="Smart Devices">Smart Devices</option>
                    <option value="Automations">Automations</option>
                    <option value="Integrations">Integrations</option>
                    <option value="Direct Booking">Direct Booking</option>
                    <option value="Report">Report</option>
                    <option value="Users">Users</option>
                    <option value="Help Center">Help Center</option>
                    <option value="Settings">Settings</option>
                  </select>
                </div>
              </div>
              <div className="row d-flex align-items-center mt-3">
                <div className="col-lg-4">
                  <label htmlFor="Property" className="fw-semi text-nowrap">
                    Property Name Display
                  </label>
                </div>
                <div className="col-lg-8">
                  <select
                    name="Property"
                    id="Property"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Property
                    </option>
                    <option value="tag">Tag Name</option>
                    <option value="address">Address</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <h2 className="fs-6 mt-4 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold">
            Default Calendar
          </h2>
          <div>
            <div className="border-bottom border-1 py-3">
              <h3 className="fw-semi text-capitalize mt-3 fs-6">
                Choose Filter Settings
              </h3>
              <div className="d-flex flex-wrap me-2 align-items-center">
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Pricing</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Reservations</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Cleaning</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Inspections</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Maintenance</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Admin</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Locks</p>
                </div>
              </div>
            </div>
            <div className="border-bottom border-1 py-3">
              <h3 className="fw-semi text-capitalize fs-6">
                Choose Filter Option
              </h3>
              <div className="d-flex flex-wrap me-2 align-items-center">
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Date</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Property Group</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Property</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">City</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Maintenance</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Admin</p>
                </div>
                <div className="d-flex me-4  my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Locks</p>
                </div>
              </div>
            </div>
            <h4 className="fw-semi fs-5 text-capitalize mt-3">
              Live filter preview
            </h4>
            <div className="bg-white px-3 py-3 rounded-3">
              <h5 className="fs-6 fw-semi text-blue">Filters Details</h5>
              <div className="d-flex flex-wrap align-items-center">
                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Select All</p>
                </div>
                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Pricing</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" defaultChecked />
                  </div>
                  <p className="mb-0">Reservations</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Cleaning</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Inspections</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Maintenance</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Admin</p>
                </div>

                <div className="d-flex me-4 my-2 align-items-center">
                  <div className="checkbox-wrapper-13 me-2">
                    <input type="checkbox" />
                  </div>
                  <p className="mb-0">Locks</p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-xxl-3 my-2 col-xl-4 col-lg-6">
                  <div className="border border-1 px-2 py-3 setting-bg rounded-3 filter-det">
                    <div className="filter-det-box px-2">
                      <h6 className="fs-6 fw-semi text-blue">Date</h6>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">Today</p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 my-2 col-xl-4 col-lg-6">
                  <div className="border border-1 px-2 py-3 setting-bg rounded-3 filter-det">
                    <div className="filter-det-box px-2">
                      <h6 className="fs-6 fw-semi text-blue">Property Group</h6>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Owner # 1 Group
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 my-2 col-xl-4 col-lg-6">
                  <div className="border border-1 px-2 py-3 setting-bg rounded-3 filter-det">
                    <div className="filter-det-box px-2">
                      <h6 className="fs-6 fw-semi text-blue">Property</h6>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          401 N Garden
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          401 N Garden
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          401 N Garden
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 my-2 col-xl-4 col-lg-6">
                  <div className="border border-1 px-2 py-3 setting-bg rounded-3 filter-det">
                    <div className="filter-det-box px-2">
                      <h6 className="fs-6 fw-semi text-blue">City</h6>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                      <div className="border my-2 py-2 px-3 border-1 rounded-3 d-flex flex-column flex-sm-row align-items-center justify-content-between">
                        <p className="mb-0 text-center text-sm-center">
                          Lake City
                        </p>
                        <p className="mb-0 text-center text-sm-center">01</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-5">
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
        </form>
      </div>
    </div>
  );
}

export default Preferences;
