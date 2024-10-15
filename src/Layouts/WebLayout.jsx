import React from "react";
import logo from "../assets/img/simplihost-navbar.svg"
import feature1 from "../assets/img/feature1.png";
import feature1Active from "../assets/img/feature1Active.png";
import feature2 from "../assets/img/feature2.png";
import feature2Active from "../assets/img/feature2Active.png";
import feature3 from "../assets/img/feature3.png";
import feature3Active from "../assets/img/feature3Active.png";
import feature4 from "../assets/img/feature4.png";
import feature4Active from "../assets/img/feature4Active.png";
import feature5 from "../assets/img/feature5.png";
import feature5Active from "../assets/img/feature5Active.png";
import feature6 from "../assets/img/feature6.png";
import feature6Active from "../assets/img/feature6Active.png";
import feature7 from "../assets/img/feature7.png";
import feature7Active from "../assets/img/feature7Active.png";
import feature8 from "../assets/img/feature8.png";
import feature8Active from "../assets/img/feature8Active.png";
import { FaBars } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

function WebLayout() {
  return (
    <>
      <header className="bg-grey">
      <nav className="navbar web-nav py-3 navbar-expand-lg simplihost-navbar bg-body-tertiary">
        <div className="container-fluid custom-padd">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" className="simplhostnnav-logo" />
          </Link>
          <button
            className="navbar-toggler focus-none pe-0 me-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
           <FaBars className="navbar-toggler-icon text-white opacity-hover" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  me-lg-3 ms-auto mb-2 mb-lg-0">
              <li className="nav-item  mx-1 mx-xl-2">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  mx-1 mx-xl-2">
                <Link className="nav-link" to="/listings">
                  Listings
                </Link>
              </li>
              <li className="nav-item  d-flex flex-wrap dropdown mx-1 mx-xl-2">
                <Link to="feature"
                  className="nav-link pe-1 pe-lg-0"
                >
                  Feature
                </Link>
                <p 
                  className="nav-link mb-0 dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  </p>
                <ul className="dropdown-menu py-0">
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/cohosting"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature1} className="" alt="feature1" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature1Active} className="" alt="feature1" />
                      </div>
                      <p className="mb-0">CoHosting</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/smart-devices"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature2} className="" alt="feature2" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature2Active} className="" alt="feature2" />
                      </div>
                      <p className="mb-0">Smart Devices Integration</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/unified-inbox"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature3} className="" alt="feature3" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature3Active} className="" alt="feature3" />
                      </div>
                      <p className="mb-0">Unified Inbox</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/inventory-management"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature4} className="" alt="feature4" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature4Active} className="" alt="feature4" />
                      </div>
                      <p className="mb-0">Inventory Management</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/maintenance-tracking"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature5} className="" alt="feature5" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature5Active} className="" alt="feature5" />
                      </div>
                      <p className="mb-0">Maintenance Tracking</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/task-and-checklist"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature6} className="" alt="feature6" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature6Active} className="" alt="feature6" />
                      </div>
                      <p className="mb-0">Tasks and Checklists</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/automation"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature7} className="" alt="feature7" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature7Active} className="" alt="feature7" />
                      </div>
                      <p className="mb-0">Automations</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item d-flex align-items-center py-2 border-bottom border-1 fw-semi"
                      to="/direct-booking"
                    >
                      <div className="feature-img me-2 feature">
                        <img src={feature8} className="" alt="feature8" />
                      </div>
                      <div className="feature-img me-2 feature-active">
                        <img src={feature8Active} className="" alt="feature8" />
                      </div>
                      <p className="mb-0">Direct Booking</p>
                    </Link>
                  </li>
              
                </ul>
              </li>
              <li className="nav-item  mx-1 mx-xl-2">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item  dropdown mx-1 mx-xl-2">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu py-0">
                  <li>
                    <Link
                      className="dropdown-item py-2 border-bottom border-1 fw-semi"
                      to="/resources1"
                    >
                      FAQS
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 border-bottom border-1 fw-semi"
                      to="/resources2"
                    >
                      Success Stories
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 fw-semi"
                      to="/resources3"
                    >
                      Help Center
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item  mx-1 mx-xl-2">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="simplihostlogin-btn me-2 px-3 px-lg-2 px-xl-4 py-2"
              type="button"
            >
              Login
            </button>
            <button
              className="simplihosttrail-btn px-2 px-xl-4 py-2"
              type="button"
            >
              Start your Free Trial
            </button>
          </div>
        </div>
      </nav>
      </header>
      <Outlet />
      <section className="footer">
        <div className="footer py-5 border-bottom">
          <div className="container">
            <div className="row">
              <div className="col-xxl-3">
                <div>
                  <Link to="/" className="text-decoration-none">
                    <h3 className="white-color fw-bold">LOGO</h3>
                  </Link>
                  <p className="mb-0 mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xxl-9 mt-4 mt-xxl-0">
                <div className="row">
                  <div className="col-lg-3 col-md-4 col-sm-6">
                    <p className="mb-0 fw-bold">Company</p>
                    <ul className="list-unstyled footer-list">
                      <li>
                        <Link
                          to="/home"
                          className="text-decoration-none white-color"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/listing"
                          className="text-decoration-none white-color"
                        >
                          Listing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/feature"
                          className="text-decoration-none white-color"
                        >
                          Feature
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/pricing"
                          className="text-decoration-none white-color"
                        >
                          Pricing
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/contact"
                          className="text-decoration-none white-color"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-4 mt-sm-0">
                    <p className="mb-0 fw-bold">All features</p>
                    <ul className="list-unstyled footer-list">
                      <li>
                        <Link
                          to="/unified-inbox"
                          className="text-decoration-none white-color"
                        >
                          Unified inbox
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/smart-devices"
                          className="text-decoration-none white-color"
                        >
                          Smart Devices Integration
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cohosting"
                          className="text-decoration-none white-color"
                        >
                          CoHosting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/task-and-checklist"
                          className="text-decoration-none white-color"
                        >
                          Tasks and Checklists
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/guest-messaging"
                          className="text-decoration-none white-color"
                        >
                          Automated Guest Messaging
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/maintenance-tracking"
                          className="text-decoration-none white-color"
                        >
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/inventory-management"
                          className="text-decoration-none white-color"
                        >
                          Inventory Management
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/automation"
                          className="text-decoration-none white-color"
                        >
                          Automation
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/direct-booking"
                          className="text-decoration-none white-color"
                        >
                          Direct Booking
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-4 mt-md-0">
                    <p className="mb-0 fw-bold">HELP CENTER</p>
                    <ul className="list-unstyled footer-list">
                      <li>
                        <Link
                          to="/find-property"
                          className="text-decoration-none white-color"
                        >
                          Find a property
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/how-to-host"
                          className="text-decoration-none white-color"
                        >
                          How To Host?
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wishlist"
                          className="text-decoration-none white-color"
                        >
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/why-us"
                          className="text-decoration-none white-color"
                        >
                          Why Us?
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-6 mt-4 mt-lg-0">
                    <p className="mb-0 fw-bold">CONTACT INFO</p>
                    <ul className="list-unstyled footer-list">
                      <li>Phone: 123456789</li>
                      <li>
                        <a
                          href="mailto:company@email.com"
                          className="text-decoration-none white-color"
                        >
                          company@email.com
                        </a>
                      </li>
                      <li>Location: 100 Smart Street, LA, USA</li>
                      <li>
                        <a
                          href="#"
                          className="text-decoration-none white-color f-size"
                        >
                          <i className="fa-brands fa-square-facebook" />
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none white-color f-size ms-3"
                        >
                          <i className="fa-brands fa-twitter" />
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none white-color f-size ms-3"
                        >
                          <i className="fa-brands fa-instagram" />
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none white-color f-size ms-3"
                        >
                          <i className="fa-brands fa-youtube" />
                        </a>
                        <a
                          href="#"
                          className="text-decoration-none white-color f-size ms-3"
                        >
                          <i className="fa-brands fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-text py-2">
          <div className="container">
            <div className="row py-4">
              <div className="col-md-6">
                <div>
                  <p className="mb-0 white-color text-md-start text-center">
                    © 2024 simplihost.com | All rights reserved
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
                <div>
                  <p className="mb-0 white-color">
                    Created with love by thecreation.design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebLayout;
