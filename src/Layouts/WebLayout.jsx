import React, { useRef } from "react";
import logo from "../assets/img/simplihost-navbar.svg";
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
import loginpic from "../assets/img/loginpic.svg";
import googlesignin from "../assets/img/googlesignin.svg";
import signinfacebook from "../assets/img/signinfacebook.svg";
import emailverfication from "../assets/img/emailverfication.svg";
import callverification from "../assets/img/callverification.svg";
import phoneverification from "../assets/img/phoneverification-pic.svg";
import emailconfirmation from "../assets/img/emailconfirmation-pic.svg";
import wellcome from "../assets/img/wellcome-pic.svg";
import { FaBars } from "react-icons/fa";
import { Outlet, Link, useLocation } from "react-router-dom";

function WebLayout() {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    if (e.target.value.length === 1 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  function isFeatureActive() {
    const paths = [
      "/feature",
      "/cohosting",
      "/smart-devices",
      "/unified-inbox",
      "/inventory-management",
      "/maintenance-tracking",
      "/task-and-checklist",
      "/automation",
      "/direct-booking",
    ];
    return paths.some((path) => isActive(path));
  }

  return (
    <>
      <header className="bg-grey">
        <nav className="navbar web-nav py-3 navbar-expand-lg simplihost-navbar bg-body-tertiary">
          <div className="container custom-padd">
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  me-lg-3 ms-auto mb-2 mb-lg-0">
                <li className="nav-item  mx-1 mx-xl-2">
                  <Link
                    className={`nav-link ${isActive("/") ? "active" : ""}`}
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item  mx-1 mx-xl-2">
                  <Link
                    className={`nav-link  pe-1 pe-lg-0 ${
                      isActive("/listings") ? "active" : ""
                    }`}
                    to="/listings"
                  >
                    Listings
                  </Link>
                </li>
                <li className="nav-item d-flex flex-wrap dropdown mx-1 mx-xl-2">
                  <Link
                    to="/feature"
                    className={`nav-link pe-1 pe-lg-0 ${
                      isFeatureActive() ? "active" : ""
                    }`}
                  >
                    Feature
                  </Link>
                  <p
                    className="nav-link mb-0 pe-0 dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  ></p>
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
                          <img
                            src={feature1Active}
                            className=""
                            alt="feature1"
                          />
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
                          <img
                            src={feature2Active}
                            className=""
                            alt="feature2"
                          />
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
                          <img
                            src={feature3Active}
                            className=""
                            alt="feature3"
                          />
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
                          <img
                            src={feature4Active}
                            className=""
                            alt="feature4"
                          />
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
                          <img
                            src={feature5Active}
                            className=""
                            alt="feature5"
                          />
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
                          <img
                            src={feature6Active}
                            className=""
                            alt="feature6"
                          />
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
                          <img
                            src={feature7Active}
                            className=""
                            alt="feature7"
                          />
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
                          <img
                            src={feature8Active}
                            className=""
                            alt="feature8"
                          />
                        </div>
                        <p className="mb-0">Direct Booking</p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item  mx-1 mx-xl-2">
                  <Link
                    className={`nav-link  pe-1 pe-lg-0 ${
                      isActive("/pricing") ? "active" : ""
                    }`}
                    to="/pricing"
                  >
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
                        to="#"
                      >
                        FAQS
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item py-2 border-bottom border-1 fw-semi"
                        to="#"
                      >
                        Success Stories
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item py-2 fw-semi" to="#">
                        Help Center
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item  mx-1 mx-xl-2">
                  <Link
                    className={`nav-link  pe-1 pe-lg-0 ${
                      isActive("/contact-us") ? "active" : ""
                    }`}
                    to="/contact-us"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
                className="simplihostlogin-btn me-2 px-3 px-lg-2 px-xl-4 py-2"
                type="button"
              >
                Login
              </button>
              <button
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
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
      <div
        className="modal fade"
        id="loginModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div />
              <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">
                Welcome back!
              </h1>
              <div>
                <button
                  type="button"
                  className="btn-close modal-close focus-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="login-size mx-auto">
                  <img
                    src={loginpic}
                    alt="Login-pic"
                    className="rounded-circle"
                  />
                </div>
                <p className="mb-0 fw-bold fs-4 text-center mt-3">Login</p>
                <div className="mt-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control focus-none p-2 siminput-bg"
                    id="email"
                    placeholder="Type Here"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control focus-none p-2 siminput-bg"
                    id="password"
                    placeholder="Type Here"
                  />
                </div>
                <div className="d-sm-flex justify-content-between mt-3">
                  <div className="mb-3 d-flex align-items-center">
                    <input
                      type="checkbox"
                      id="rememberPassword"
                      className="custom-checkboxlogin"
                    />
                    <label htmlFor="rememberPassword" className="ms-2 fw-semi">
                      Remember Password
                    </label>
                  </div>
                  <div>
                    <a href="#" className="text-decoration-none">
                      Forget Password
                    </a>
                  </div>
                </div>
                <div className="my-3">
                  <button type="submit" className="login-btn w-100 fw-bold">
                    Log In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="signupModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header d-sm-flex justify-content-between align-items-center">
              <div />
              <h1 className="modal-title fs-4 fw-bold" id="exampleModalLabel">
                Welcome To SimpliHost👋
              </h1>
              <div>
                <button
                  type="button"
                  className="btn-close modal-close focus-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="fname" className="form-label fw-bold">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control focus-none p-2 siminput-bg"
                        id="fname"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="lname" className="form-label fw-bold">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control focus-none p-2 siminput-bg"
                        id="lname"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="pnumber" className="form-label fw-bold">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control focus-none p-2 siminput-bg"
                        id="pnumber"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="semail" className="form-label fw-bold">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control focus-none p-2 siminput-bg"
                        id="semail"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label htmlFor="spassword" className="form-label fw-bold">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control focus-none p-2 siminput-bg"
                        id="spassword"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mt-3">
                      <label
                        htmlFor="srpassword"
                        className="form-label fw-bold"
                      >
                        Re-Enter Password
                      </label>
                      <input
                        type="password"
                        className="form-control focus-none p-2 siminput-bg"
                        id="srpassword"
                        placeholder="Type Here"
                      />
                    </div>
                  </div>
                  <div className="col-12 mt-3">
                    <div className="mb-3 d-flex align-items-center">
                      <input
                        type="checkbox"
                        id="agree"
                        className="custom-checkboxlogin"
                      />
                      <label htmlFor="agree" className="ms-2 fw-semi">
                        I agree to the Terms of Service and Privacy Policy.
                      </label>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="signup-btn fw-semi"
                      data-bs-toggle="modal"
                      data-bs-target="#selectverificationModal"
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="signingoogle-btn fw-semi d-flex align-items-center justify-content-center"
                    >
                      <div className="signin-icon">
                        <img
                          src={googlesignin}
                          alt="google-pic"
                          className="me-3"
                        />
                      </div>
                      Sign In with Google
                    </button>
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <button
                      type="button"
                      className="signinfacebook-btn fw-semi d-flex align-items-center justify-content-center"
                    >
                      <div className="signin-icon">
                        <img
                          src={signinfacebook}
                          alt="google-pic"
                          className="me-3"
                        />
                      </div>
                      Sign In with facebook
                    </button>
                  </div>
                  <p className="mb-0 mt-2 text-center">
                    Do you have an account?
                    <span className="ms-2">
                      <a
                        data-bs-toggle="modal"
                        data-bs-target="#loginModal"
                        className="text-decoration-none pointer"
                      >
                        Sign in
                      </a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="selectverificationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <h1
                className="modal-title fs-4 fw-bold blue-color"
                id="exampleModalLabel"
              >
                Select Verification
              </h1>
              <button
                type="button"
                className="btn-close modal-close focus-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="d-flex align-items-center justify-content-between verfication-bg p-2">
                  <div className="d-flex align-items-center">
                    <div className="verficationpic-size">
                      <img
                        src={emailverfication}
                        alt="Email"
                        className="w-100 p-2"
                      />
                    </div>
                    <div className="ms-2">
                      <p className="mb-0 fw-bold">Email</p>
                      <p className="mb-0 color-black">
                        Select Email Verification
                      </p>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between verfication-bg p-2 mt-2">
                  <div className="d-flex align-items-center">
                    <div className="verficationpic-size">
                      <img
                        src={callverification}
                        alt="Email"
                        className="w-100 p-2"
                      />
                    </div>
                    <div className="ms-2">
                      <p className="mb-0 fw-bold">Phone</p>
                      <p className="mb-0 color-black">
                        Select Phone Call Verification
                      </p>
                    </div>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input focus-none"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="login-btn w-100 fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#textconfirmationModal"
                  >
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="textconfirmationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div />
              <div>
                <h1
                  className="modal-title fs-4 fw-bold blue-color"
                  id="exampleModalLabel"
                >
                  Identify Verification
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close modal-close focus-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="confirmation-size mx-auto">
                  <img
                    src={phoneverification}
                    alt="Verification"
                    className="w-100 p-4"
                  />
                </div>
                <p className="mb-0 fw-bold fs-4 text-center mt-2">
                  Text Confirmation
                </p>
                <p className="mb-0 color-black text-center mt-2">
                  A code was sent to xxx-xxx-2121
                </p>
                <div className="d-flex justify-content-center mt-5">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="inbox-size ms-2"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" className="send-btn blue-color fw-semi">
                    Send again
                  </button>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="login-btn w-100 fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#emailconfirmationModal"
                  >
                    Done
                  </button>
                </div>
                <p className="mb-0 mt-3 text-center fw-semi">
                  Having problems?
                  <span className="ms-2">
                    <a href="#" className="text-decoration-none">
                      Let us help and contact us!
                    </a>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="emailconfirmationModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div />
              <div>
                <h1
                  className="modal-title fs-4 fw-bold blue-color"
                  id="exampleModalLabel"
                >
                  Identify Verification
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close modal-close focus-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <form>
                <div className="confirmation-size mx-auto">
                  <img
                    src={emailconfirmation}
                    alt="Verification"
                    className="w-100 p-3"
                  />
                </div>
                <p className="mb-0 fw-bold fs-4 text-center mt-2">
                  Email Confirmation
                </p>
                <p className="mb-0 color-black text-center mt-2">
                  A code was sent to miona.alshlowi@gmail.com
                </p>
                <div className="d-flex justify-content-center mt-5">
                  {[...Array(6)].map((_, index) => (
                    <input
                      key={index}
                      type="text"
                      maxLength="1"
                      className="inbox-size ms-2"
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  ))}
                </div>
                <div className="d-flex justify-content-center mt-5">
                  <button type="submit" className="send-btn blue-color fw-semi">
                    Send again
                  </button>
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    className="login-btn w-100 fw-bold"
                    data-bs-toggle="modal"
                    data-bs-target="#wellcomeModal"
                  >
                    Done
                  </button>
                </div>
                <p className="mb-0 mt-3 text-center fw-semi">
                  Having problems?
                  <span className="ms-2">
                    <a href="#" className="text-decoration-none">
                      Let us help and contact us!
                    </a>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="wellcomeModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-between align-items-center">
              <div />
              <div>
                <h1
                  className="modal-title fs-4 fw-bold blue-color"
                  id="exampleModalLabel"
                >
                  Create your account
                </h1>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close modal-close focus-none"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
            </div>
            <div className="modal-body">
              <div className="simplihost-size mx-auto">
                <img src={wellcome} alt="Well-come" className="w-100" />
              </div>
              <p className="mb-0 fw-bold fs-4 text-center mt-3">
                Welcome to simpliHost
              </p>
              <p className="mb- mt-3 text-center">
                Woohoo! You’re on your way to saving time and money. Let's get
                started and make property management a breeze!
              </p>
              <form>
                <div className="mt-4">
                  <button type="submit" className="login-btn w-100 fw-bold">
                    Continue
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebLayout;
