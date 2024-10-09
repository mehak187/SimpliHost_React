import React from "react";
import { Link } from "react-router-dom";

function Security() {
  return (
    <form action="" className="h-100">
      <div className="h-100 d-flex flex-column">
        <div>
          <h2 className="fs-5 mb-0 text-capitalize text-blue2 fw-bold mt-3 mt-sm-0">
            Password
          </h2>
          <div className="col-xl-8 col-xxl-6">
            <div className=" mt-4">
              <label htmlFor="currentPassword" className="fw-semi w-100">
                Current Password
              </label>
              <input
                type="password"
                id="currentPassword"
                className="inputstyle focus-none"
                placeholder="Type name here"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="forget" className="fw-semi w-100">
                Forgot your password
              </label>
              <Link to="" className="text-decoration-none d-inline-block mt-1">
                Reset password via email
              </Link>
            </div>
            <div className="mt-5">
              <div className=" mt-3">
                <label htmlFor="newPassword" className="fw-semi w-100">
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  className="inputstyle focus-none"
                  placeholder="Type name here"
                />
              </div>
              <div className=" mt-3">
                <label htmlFor="confirmPassword" className="fw-semi w-100">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="inputstyle focus-none"
                  placeholder="Type name here"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" mt-auto">
          <input
            type="submit"
            className="bluebutton rounded-2 text-white"
            value="Save"
          />
        </div>
      </div>
    </form>
  );
}

export default Security;
