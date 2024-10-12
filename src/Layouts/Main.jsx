import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

import logo from "../assets/img/dashboard-logo.png";
import profile from "../assets/img/profile.png";
import automations from "../assets/img/automations.png";
import calendar from "../assets/img/calendar.png";
import cohosting from "../assets/img/cohosting.png";
import checklist from "../assets/img/checklist.png";
import dashboard from "../assets/img/dashboard.png";
import directbooking from "../assets/img/directbooking.png";
import inbox from "../assets/img/inbox.png";
import integrations from "../assets/img/integrations.png";
import inventory from "../assets/img/inventory.png";
import properties from "../assets/img/properties.png";
import reports from "../assets/img/reports.png";
import smartdevices from "../assets/img/smartdevices.png";
import tasks from "../assets/img/tasks.png";
import users from "../assets/img/users.png";
import helpcenter from "../assets/img/helpcenter.png";
import slideMin from "../assets/img/slide-min.png";
import logout from "../assets/img/logout.png";
import logoMin from "../assets/img/logo-min.png";
import slideMax from "../assets/img/slide-max.png";

function Main() {
  const location = useLocation(); // Call useLocation at the top

  function isActive(route) {
    return location.pathname.startsWith(route) ? "active" : "";
  }
  const [isMinimized, setIsMinimized] = useState(false);

  // Check the window width on initial load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMinimized(true); // Add min-sidebar class if screen width is below 768px
      } else {
        setIsMinimized(false); // Remove min-sidebar class for larger screens
      }
    };

    // Run the function initially
    handleResize();

    // Attach event listener to handle window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <section>
      <div className={`main ${isMinimized ? "min-sidebar" : ""}`}>
        <div className="left">
          {!isMinimized && (
            <img
              src={slideMin}
              alt="slidemin"
              className="slideMin text-white position-absolute sidebar-adjuster pointer"
              onClick={toggleSidebar}
            />
          )}
          {isMinimized && (
            <img
              src={slideMax}
              alt="slidemax"
              className="slideMax text-white position-absolute sidebar-adjuster pointer"
              onClick={toggleSidebar}
            />
          )}
          <div className="left-top">
            <Link
              to="admin/dashboard"
              className="logodiv d-flex w-100 h-100 align-items-center justify-content-center "
            >
              <img src={logo} alt="" className="w-100 logo-max" />
              <img src={logoMin} alt="" className="w-100 logo-min" />
            </Link>
          </div>
          <div className="left-mid">
            <div className="list">
              <ul className="list-unstyled">
                <li>
                  <Link
                    to="admin/dashboard"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/dashboard"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={dashboard} alt="" className="sideicon" />
                      <p className="mb-0">Dashboard</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/inbox"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/inbox"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={inbox} alt="" className="sideicon" />
                      <p className="mb-0">Inbox</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/calendar"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/calendar"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={calendar} alt="" className="sideicon" />
                      <p className="mb-0">Calendar</p>
                    </div>
                  </Link>
                </li>
                <li>
                    <Link
                    to="/admin/properties"
                    className={`sidelink d-flex align-items-center text-white ${
                      isActive("/admin/properties") || isActive("/admin/add-property-tags")
                        ? "active"
                        : ""
                    }`}
                  >
                    
                    <div className="d-flex align-items-center">
                      <img src={properties} alt="" className="sideicon" />
                      <p className="mb-0">Properties</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/tasks"
                    className={`sidelink d-flex align-items-center text-white ${
                      isActive("/admin/tasks") || isActive("/admin/add-tasks")
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={tasks} alt="" className="sideicon" />
                      <p className="mb-0">Tasks</p>
                    </div>
                  </Link>
                </li>

                <li>
                  <Link
                    to="admin/checklist"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/checklist"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={checklist} alt="" className="sideicon" />
                      <p className="mb-0">Checklist</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/inventory"
                    className={`sidelink d-flex align-items-center text-white ${
                      isActive("/admin/inventory") ||
                      isActive("/admin/add-inventory") ||
                      isActive("/admin/replenish-items") ||
                      isActive("/admin/edit-inventory")
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={inventory} alt="" className="sideicon" />
                      <p className="mb-0">Inventory</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/co-hosting"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/co-hosting"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={cohosting} alt="" className="sideicon" />
                      <p className="mb-0">CoHosting</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/smart-devices"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/smart-devices"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={smartdevices} alt="" className="sideicon" />
                      <p className="mb-0">SmartDevices</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/automations"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/automations"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={automations} alt="" className="sideicon" />
                      <p className="mb-0">Automations</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/integrations"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/integrations"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={integrations} alt="" className="sideicon" />
                      <p className="mb-0">Integrations</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/direct-booking"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/direct-booking"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={directbooking} alt="" className="sideicon" />
                      <p className="mb-0">DirectBooking</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/reports"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/reports"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={reports} alt="" className="sideicon" />
                      <p className="mb-0">Reports</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/users"
                    className={`sidelink d-flex align-items-center text-white ${
                      isActive("/admin/users")||
                      isActive("/admin/user-details")
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={users} alt="" className="sideicon" />
                      <p className="mb-0">Users</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to="admin/help-center"
                    className={`sidelink d-flex align-items-center text-white ${isActive(
                      "/admin/help-center"
                    )}`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={helpcenter} alt="" className="sideicon" />
                      <p className="mb-0">HelpCenter</p>
                    </div>
                  </Link>
                </li>
                <li>
                <Link
                    to="admin/settings"
                    className={`sidelink d-flex align-items-center text-white ${
                      isActive("/admin/settings")||
                      isActive("/admin/add-checklist-category")
                        ? "active"
                        : ""
                    }`}
                  >
                    <div className="d-flex align-items-center">
                      <img src={dashboard} alt="" className="sideicon" />
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
                      <FaUsers className="sideicon" />
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
              className="logouts w-100 border border-1 border-white d-flex align-items-center justify-content-center text-decoration-none text-white px-3 py-2 rounded-3"
            >
              <img src={logout} alt="" className="sideicon" />
              <p className="mb-0">Logout</p>
            </Link>
          </div>
        </div>
        <div className="right">
          <div className="right-top d-flex align-items-center justify-content-between input-shadow w-100">
            <div className="d-flex align-items-center justify-content-between w-100">
              <div className="d-flex align-items-center">
                <h1 className="fs-5 mb-0 fw-semi">Dashboard</h1>
              </div>
              <div className=" d-flex align-items-center justify-content-between ">
                <div className="d-flex align-items-center">
                  <div className="border-grey bg-white d-none d-xl-flex px-2 py-1 rounded-3 me-2">
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
                  <Link to='admin/Notifications'className="not-main rounded-circle new-not position-relative  me-2">
                    <IoIosNotifications className="fs-4 d-flex align-items-center not-icon" />
                  </Link>
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <Link to="admin/profile" className="mb-0 text-decoration-none d-flex align-items-center">
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
            <div className="content">
              <div className="container-fluid h-100">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
