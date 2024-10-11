import React from "react";
import logo from "../assets/img/simplihost-navbar.svg"
import { Outlet, Link } from "react-router-dom";

function WebLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg simplihost-navbar bg-body-tertiary">
        <div className="container-fluid custom-padd">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              className="simplhostnnav-logo"
            />
          </Link>
          <button
            className="navbar-toggler focus-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item mx-xl-3">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-1 mx-xl-3">
                <Link className="nav-link" to="/listing">
                  Listings
                </Link>
              </li>
              <li className="nav-item dropdown mx-1 mx-xl-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Feature
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/feature1">
                      Feature1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/feature2">
                      Feature2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/feature3">
                      Feature3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-1 mx-xl-3">
                <Link className="nav-link" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item dropdown mx-1 mx-xl-3">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/resources1">
                      Resources1
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/resources2">
                      Resources2
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/resources3">
                      Resources3
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item mx-1 mx-xl-3">
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
                          to="/tasks-checklists"
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
                          to="/maintenance"
                          className="text-decoration-none white-color"
                        >
                          Maintenance
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/inventory"
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
