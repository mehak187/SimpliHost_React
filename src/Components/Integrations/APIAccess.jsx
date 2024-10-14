import React from "react";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
function APIAccess() {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mt-3">
          <h3 className="fs-5  text-capitalize text-black fw-semi">
          API Access
          </h3>
        <Link className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">
          Add Token
        </Link>
      </div>
      <div className="setting-bg rounded-3 mt-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Personal Access Tokens
        </h2>
        <div className="mt-3 py-3 px-3 rounded-3">
          <p>
            Personal access tokens allow you to access your own data via the
            API. Do not give out your personal access tokens to anybody who you
            don’t want to access your files.
          </p>
          <h3 className="fs-5  text-capitalize text-black fw-semi">
            Active API Keys
          </h3>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Comments:</p>
            <p className="fs-6 mb-0">Expires in 1 months</p>
            <p className="fs-6 mb-0">Used 2 hours ago</p>
            <p className="fs-6 text-danger mb-0">Revoke access</p>
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Comments:</p>
            <p className="fs-6 mb-0">Expires in 1 months</p>
            <p className="fs-6 mb-0">Used 2 hours ago</p>
            <p className="fs-6 text-danger mb-0">Revoke access</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-3">
        <Link className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">
          Add New
        </Link>
      </div>
      <div className="setting-bg rounded-3 mt-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Active access tokens
        </h2>
        <div className="mt-3 py-3 px-3 rounded-3">
          <h3 className="fs-5  text-capitalize text-black fw-semi">
            New Access Token
          </h3>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client ID:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client Secret:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="fw-bold mb-0">Token Permissions</p>
            <div className="d-flex align-items-center">
              <div className="checkbox-wrapper-13 d-flex align-items-center me-3">
                <input type="checkbox" id="Read" />
                <label htmlFor="Read">Read</label>
              </div>
              <div className="checkbox-wrapper-13 d-flex align-items-center">
                <input type="checkbox" id="Write" />
                <label htmlFor="Write">Write</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end align-items-center mt-3">
        <Link className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">
          Add New
        </Link>
      </div>
      <div className="setting-bg rounded-3 mt-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Personal Access Tokens
        </h2>
        <div className="mt-3 py-3 px-3 rounded-3">
          <h3 className="fs-5  text-capitalize text-black fw-semi">
            Active API Keys
          </h3>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client ID:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client Secret:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
          <h3 className="fs-6 mt-4  text-capitalize text-black fw-semi">
            Key Permissions
          </h3>
          <h3 className="fs-5 mt-4  text-capitalize text-black fw-semi">
            Price Labs
          </h3>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client ID:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
          <div className="py-3 d-flex align-items-center justify-content-between border-bottom border-1">
            <p className="text-blue2 fw-bold mb-0">Client Secret:</p>
            <p className="fs-6 mb-0">jbsdg3bfsdj8923et289t22sdg34y</p>
            <Link to="#" className="mx-1 tblicon">
              <TbCopy />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default APIAccess;
