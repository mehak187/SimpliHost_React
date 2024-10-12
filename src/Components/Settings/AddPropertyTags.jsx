import React from 'react';
import deleteTag from "../../assets/img/deleteTag.png";
import { Link } from "react-router-dom";


function AddPropertyTags() {
  return (
    <div>
    <div className="setting-bg rounded-3">
      <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
      Add Property Tags
      </h2>
      <div className="mt-4 px-3">
        <p className="fs-5 fw-semi">Tag properties with keywords for filtering and search in Simplihost.</p>
        <h4 className="fw-normal fs-5">Existing Properties Tags</h4>
        <div className="mt-3 d-flex flex-wrap align-items-center me-2">
          <div className="px-2 py-2 me-2 my-2 rounded-3 d-flex px-3 py-2 bg-tag align-items-center">
            <p className="mb-0 me-2">High Street</p>
            <Link to="#" className="pointer">
              <img src={deleteTag} alt="deleteTag" className="immg-fluid"/>
            </Link>
          </div>
          <div className="px-2 py-2 me-2 my-2 rounded-3 d-flex px-3 py-2 bg-tag align-items-center">
            <p className="mb-0 me-2">Garden Stret</p>
            <Link to="#" className="pointer">
              <img src={deleteTag} alt="deleteTag" className="immg-fluid"/>
            </Link>
          </div>
          <div className="px-2 py-2 me-2 my-2 rounded-3 d-flex px-3 py-2 bg-tag align-items-center">
            <p className="mb-0 me-2">22nd Street</p>
            <Link to="#" className="pointer">
              <img src={deleteTag} alt="deleteTag" className="immg-fluid"/>
            </Link>
          </div>
          <div className="px-2 py-2 me-2 my-2 rounded-3 d-flex px-3 py-2 bg-tag align-items-center">
            <p className="mb-0 me-2">Forest Drive</p>
            <Link to="#" className="pointer">
              <img src={deleteTag} alt="deleteTag" className="immg-fluid"/>
            </Link>
          </div>
          <div className="px-2 py-2 me-2 my-2 rounded-3 d-flex px-3 py-2 bg-tag align-items-center">
            <p className="mb-0 me-2">26th Street</p>
            <Link to="#" className="pointer">
              <img src={deleteTag} alt="deleteTag" className="immg-fluid"/>
            </Link>
          </div>
          
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row pb-4 ">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="checkin" className="w-100 fw-semi">
                    Add Tag
                  </label>
                  <input
                    type="text"
                    id="checkin"
                    className="inputstyle mt-1 bg-white focus-none"
                    placeholder="Type Tag"
                  />
                </div>
              </div>
              <div className="col-12 mb-4 mt-5">
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
          </div>
        </form>
      </div>
    </div>
 
  </div>
  )
}

export default AddPropertyTags