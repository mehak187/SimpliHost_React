import React from "react";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";

function FilterRow() {
  return (
    <div className="row align-items-center justify-content-between">
      <div className="col-12 col-xl-6 ">
        <div className="row">
          <div className="col-sm-7 col-xl-7 col-xxl-6">
            <div className="border-grey h-100 d-flex custom-rounded">
              <input
                for="search"
                type="search"
                className="ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2"
                placeholder="Type to search checklist"
              />
              <label
                htmlFor="search"
                className="px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg"
              >
                <FaSearch className="" />
              </label>
            </div>
          </div>
          <div className="col-xl-4 mt-3 mt-sm-0 col-sm-5 col-12">
            <div className="d-flex h-100 rounded-2 ps-2 align-items-center border-grey">
              <CiFilter className="text-grey  fs-4" />
              <select
                name=""
                className="form-select px-1 text-grey small border-0 w-100 focus-none"
                id=""
              >
                <option value="Admin">Admin</option>
                <option value="Amenity">Amenity</option>
                <option value="Cleaning">Cleaning</option>
                <option value="Inspection">Inspection</option>
                <option value="Maintenance">Maintenance</option>
                <option value="Pet">Pet</option>
                <option value="Seasonal">Seasonal</option>
                <option value="Property">Property</option>
                <option value="Property Group">Property Group</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
        <Link
          to="/admin/checklistTab"
          className="px-sm-4 mt-3 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2"
        >
          Add Checklist
        </Link>
      </div>
    </div>
  );
}

export default FilterRow;
