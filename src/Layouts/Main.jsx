import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/dashboard-logo.png";
import { IoMdLogOut } from "react-icons/io";
import profile from "../assets/img/profile.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

function Main() {
  const [isLeftVisible, setIsLeftVisible] = useState(false);

  const toggleLeftDisplay = () => {
    setIsLeftVisible(!isLeftVisible);
  };

  const hideLeftDisplay = () => {
    setIsLeftVisible(false);
  };

  function isActive(routes) {
    const location = useLocation();
    return routes.includes(location.pathname) ? "active" : "";
  }
  return (
    <section>
      <div className="main">
        <div className={isLeftVisible ? "left d-block" : "left d-none"}>
          <div className="left-top">
            <div className="d-flex align-items-center justify-content-end">
              <IoCloseCircleSharp
                className="d-md-none hidesidebar fs-4 text-white pointer"
                onClick={hideLeftDisplay}
              />
            </div>
            <Link
              to="/dashboard"
              className="logodiv d-flex align-items-center justify-content-center px-4"
            >
              <img src={logo} alt="" className="w-100" />
            </Link>
          </div>
          <div className="left-mid">
            <div className="list ">
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="/dashboard"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/dashboard"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Dashboard</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inbox"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/inbox"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Inbox</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/calendar"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/calendar"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Calendar</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/properties"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/properties"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Properties</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/tasks"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/tasks"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Tasks</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checklist"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/checklist"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Checklist</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/inventory"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/inventory"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Inventory</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/co-hosting"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/co_hosting"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">CoHosting</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/smart-devices"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/smart_devices"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">SmartDevices</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/automations"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/automations"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Automations</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/integrations"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/integrations"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Integrations</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/direct-booking"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/direct_booking"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">DirectBooking</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/reports"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/reports"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Reports</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/users"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/users"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Users</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help-center"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/help-center"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">HelpCenter</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/settings"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <MdDashboard className="sideicon me-2" />
                      <p className="mb-0">Settings</p>
                    </div>
                  </Link>
                </li>

                {/* <li>
                  <Link
                    to="/employees"
                    className={`sidelink d-flex align-items-center text-white ${isActive(["/employees", "/add_employee", "/edit_employee",, "/employee_detail"])}`}
                  >
                    <div className="d-flex align-items-center">
                      <FaUsers className="sideicon me-2" />
                      <p className="mb-0">Employees</p>
                    </div>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="left-bottom d-flex justify-content-center align-items-center">
            <Link
              to="/"
              className="logouts w-100 border border-1 border-white text-decoration-none text-white px-3 py-2 rounded-3"
            >
              <div className="d-flex align-items-center justify-content-center">
                <IoMdLogOut className="me-2" />
                <p className="mb-0">Logout</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="right-top d-flex align-items-center justify-content-between input-shadow w-100">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <span
                  className="me-2 tog d-flex bg-green align-items-center d-md-none pointer"
                  onClick={toggleLeftDisplay}
                >
                  <GiHamburgerMenu />
                </span>
                <h1 className="fs-5 mb-0 fw-semi">Dashboard</h1>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center">
                  <div className="border-grey d-none d-xl-flex px-2 py-1 rounded-3 me-2">
                    <label
                      htmlFor="search"
                      className="bg-blue rounded-3 d-flex align-items-center text-white px-2 py-2"
                    >
                      <FaSearch />
                    </label>
                    <input
                      type="search"
                      id="search"
                      className="border-0 focus-none ps-2"
                    />
                  </div>
                  <Link
                    to="/"
                    className="not-main rounded-circle new-not position-relative  me-2"
                  >
                    <IoIosNotifications className="fs-4 d-flex align-items-center not-icon" />
                  </Link>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <Link
                      to="/"
                      className="mb-0 text-decoration-none d-flex align-items-center"
                    >
                      <div className="">
                        <img src={profile} alt="" className="profile" />
                      </div>
                      <div className="d-none ms-2 d-sm-block">
                        <h6 className="mb-0 fw-semi text-dark">Beth Here</h6>
                        <span className="font-12 mb-0 text-secondary">
                          Super Admin
                        </span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="right-bottom">
            <div className="bottom-main">
              <div className="content ">
                <div className="container-fluid">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
