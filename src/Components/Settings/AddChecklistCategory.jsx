import React from "react";
import logoFile from "../../assets/img/logo-file.png";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
function AddChecklistCategory() {
  return (
    <div className="setting-bg rounded-3">
      <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
        Add Checklist Category
      </h2>
      <div className="px-4">
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6  mt-3">
                  <label htmlFor="categoryName" className="fw-semi">
                    Category Name
                  </label>
                  <input
                    type="text"
                    id="categoryName"
                    className="inputstyle bg-white focus-none"
                    placeholder="Type Na,e here"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="category" className="fw-semi">
                    Add to Checklists
                  </label>
                  <select
                    name="category"
                    id="category"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Checklists
                    </option>
                    <option value="Checklists1">Checklists1</option>
                    <option value="Checklists2">Checklists2</option>
                    <option value="Checklists3">Checklists3</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="tags" className="fw-semi">
                    Link to Photo Tags
                  </label>
                  <select
                    name="tags"
                    id="tags"
                    className="inputstyle bg-white focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Tags
                    </option>
                    <option value="Tag1">Tag1</option>
                    <option value="Tag2">Tag2</option>
                    <option value="Tag3">Tag3</option>
                  </select>
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
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddChecklistCategory;
