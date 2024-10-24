import React, { useState, useEffect } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";
import DateCalendarPicker from "../Dashboard/Common/DateCalendarPicker";

const dummyData = {
  checkboxes: [
    { label: "Type here", count: 1, isChecked: false },
    { label: "Type here", count: 1, isChecked: false },
  ],
  propertyGroup: [
    { label: "Property A", isChecked: false },
    { label: "Property B", isChecked: true },
    { label: "Property C", isChecked: false },
  ],
  property: [
    { label: "Property A", isChecked: false },
    { label: "Property B", isChecked: true },
    { label: "Property C", isChecked: false },
  ],
  status: [
    { label: "In Stock", count: 245, isChecked: true },
    { label: "Low Stock", count: 10, isChecked: false },
    { label: "Out of Stock", count: 90, isChecked: false },
  ],
};

function FilterRow() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [checkboxes, setCheckboxes] = useState([]);
  const [property, setproperty] = useState([]);
  const [propertyGroup, setpropertyGroup] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setCheckboxes(dummyData.checkboxes);
    setproperty(dummyData.property);
    setpropertyGroup(dummyData.propertyGroup);
    setStatus(dummyData.status);
  }, []);

  const handleCheckboxChange = (type, index) => {
    const updatedState = type.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );

    if (type === checkboxes) setCheckboxes(updatedState);
    if (type === property) setproperty(updatedState);
    if (type === propertyGroup) setpropertyGroup(updatedState);
    if (type === status) setStatus(updatedState);
  };

  const renderCheckboxes = (data, group) => {
    return data.map((item, index) => {
      const uniqueId = `${group}-${index}`;
      return (
        <div
          key={index}
          className={`d-flex align-items-center mt-2 border p-2 rounded-3 ${
            item.isChecked ? "checked-bg" : ""
          }`}
          style={{ backgroundColor: item.isChecked ? "#32F0CD" : "transparent" }}
        >
             <div className="checkbox-wrapper-13">
          <input
            id={uniqueId}
            type="checkbox"
            className="chk mb-1 me-2"
            checked={item.isChecked}
            onChange={() => handleCheckboxChange(data, index)}
          />
      </div>

          <label htmlFor={uniqueId} className="d-flex justify-content-between w-100">
            <h6 className="mb-0 fw-semi">{item.label}</h6>
            {item.count !== undefined && <p className="mb-0">{item.count}</p>}
          </label>
        </div>
      );
    });
  };

  return (
    <>
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-xl-6 ">
          <div className="row">
            <div className="col-sm-7 col-xl-7 col-xxl-6">
              <div className="border-grey h-100 d-flex custom-rounded">
                <input
                  id="search"
                  type="search"
                  className="ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2"
                  placeholder="Type to search inventory"
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
              <div
                className="d-flex pointer h-100 rounded-2 ps-2 align-items-center border-grey form-select px-1 text-grey focus-none"
                onClick={() => setShowModal(true)}
              >
                <CiFilter className="text-grey  fs-4" />
                <span>Filter</span>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
          <Link  onClick={() => setShowModal2(true)}
            className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white me-sm-2 text-decoration-none py-2"
          >
            Replenish Item
          </Link>
          <Link
            to="/admin/add-inventory"
            className="px-sm-4 mt-3 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2"
          >
            Add Item
          </Link>
        </div>
      </div>

      <div>
        {showModal && (
          <>
            <div
              className="custom-backdrop"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="modal modal-lg d-block" tabIndex="-1">
              <div className="modal-dialog filter-modal modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-blue fw-semi" id="exampleModalLabel">
                      Quick Filters
                    </h5>
                    <button
                      type="button"
                      className="bg-transparent border-0 text-danger fs-4"
                      onClick={() => setShowModal(false)}
                    >
                      <IoMdCloseCircle className="text-secondary" />
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="row mt-3 flex-wrap">
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Type</h6>
                          {renderCheckboxes(checkboxes, "type")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Property Group</h6>
                          {renderCheckboxes(propertyGroup, "propertyGroup")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Property</h6>
                          {renderCheckboxes(property, "property")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Status</h6>
                          {renderCheckboxes(status, "status")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="bg-transparent border-0 text-blue text-decoration-underline"
                      onClick={() => setShowModal(false)}
                    >
                      Clear
                    </button>
                    <button
                      type="button"
                      className="btn bg-blue text-white px-5"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div>
        {showModal2 && (
          <>
            <div
              className="custom-backdrop"
              onClick={() => setShowModal2(false)}
            ></div>
            <div className="modal modal-lg d-block" tabIndex="-1">
              <div className="modal-dialog filter-modal modal-dialog-centered">
                <div className="modal-content">
                  <form action="/admin/replenish-items">
                  <div className="modal-header">
                    <h5 className="modal-title text-blue fw-semi" id="exampleModalLabel">
                      Quick Filters
                    </h5>
                    <button
                      type="button"
                      className="bg-transparent border-0 text-danger fs-4"
                      onClick={() => setShowModal2(false)}
                    >
                      <IoMdCloseCircle className="text-secondary" />
                    </button>
                  </div>
                  <div className="modal-body">
                  <div className="d-sm-flex align-items-center justify-content-end">
                    <div className="d-flex align-items-center">
                      <h6 className="text-nowrap mb-0 fw-semi">Date Range:</h6>
                      <select
                        className="form-select shadow-none ms-2"
                      >
                        <option value="">Today</option>
                        <option value="">Tomorrow</option>
                        <option value="">Last Week</option>
                        <option value="">This Week</option>
                        <option value="">Next Week</option>
                        <option value="">Last Month</option>
                        <option value="">This Month</option>
                        <option value="">Last Quarter</option>
                        <option value="">This Quarter</option>
                        <option value="">Last Year</option>
                        <option value="">This Year</option>
                        <option value="">Date Range</option>
                        <option value="">Specific Date</option>
                      </select>
                    </div>
                    <div className="ms-sm-2 mt-sm-0 mt-2">
                      <DateCalendarPicker/>
                    </div>
                  </div>
                    <div className="row mt-3 flex-wrap">
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Type</h6>
                          {renderCheckboxes(checkboxes, "type")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Status</h6>
                          {renderCheckboxes(status, "status")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Property Group</h6>
                          {renderCheckboxes(propertyGroup, "propertyGroup")}
                        </div>
                      </div>
                      <div className="col-lg-3 col-sm-6 mb-3">
                        <div className="bg-lightgrey border p-3 rounded-3 h-100">
                          <h6 className="fw-semi mb-0 text-blue">Property</h6>
                          {renderCheckboxes(property, "property")}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-footer d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="bg-transparent border-0 text-blue text-decoration-underline"
                      onClick={() => setShowModal2(false)}
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      className="btn bg-blue text-white px-5"
                    >
                      Apply
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default FilterRow;
