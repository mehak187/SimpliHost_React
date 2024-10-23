import React, { useState, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import DateCalendarPicker from "../Dashboard/Common/DateCalendarPicker";

const dummyData = {
  checkboxes: [
    { label: "Cleaning", count: 245, isChecked: false },
    { label: "Maintenance", count: 10, isChecked: false },
    { label: "Admin", count: 90, isChecked: false },
    { label: "Inspection", count: 30, isChecked: false },
  ],
  assignedto: [
    { label: "George", isChecked: false },
    { label: "Betty", isChecked: true },
  ],
  status: [
    { label: "In Progress", count: 100, isChecked: false },
    { label: "Overdue", count: 190, isChecked: false },
    { label: "Completed", count: 80, isChecked: false },
    { label: "Not Started", count: 80, isChecked: false },
  ],
};

function PropertyQuickFilter() {
  const [showModal, setShowModal] = useState(false); 
  const [checkboxes, setCheckboxes] = useState([]);
  const [assignedto, setAssignedTo] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    setCheckboxes(dummyData.checkboxes);
    setAssignedTo(dummyData.assignedto);
    setStatus(dummyData.status);
  }, []);

  const handleCheckboxChange = (type, index) => {
    const updatedState = type.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );

    if (type === checkboxes) setCheckboxes(updatedState);
    if (type === assignedto) setAssignedTo(updatedState);
    if (type === status) setStatus(updatedState);
  };

  const renderCheckboxes = (data) => {
    return data.map((item, index) => (
      <div
        key={index}
        className={`d-flex align-items-center mt-2 border p-2 rounded-3 ${
          item.isChecked ? "checked-bg" : ""
        }`}
        style={{ backgroundColor: item.isChecked ? "#32F0CD" : "transparent" }}
      >
        <input
          type="checkbox"
          className="chk mb-1 me-2"
          checked={item.isChecked}
          onChange={() => handleCheckboxChange(data, index)}
        />
        <label className="d-flex justify-content-between w-100">
          <h6 className="mb-0 fw-semi">{item.label}</h6>
          {item.count !== undefined && <p className="mb-0">{item.count}</p>}
        </label>
      </div>
    ));
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="bg-white border w-100 py-2 px-3 rounded-3 dropdown-toggle d-flex align-items-center justify-content-center"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <CiFilter /> Filter
        </button>
      </div>

      {showModal && (
        <>
          <div
            className="custom-backdrop"
            onClick={() => setShowModal(false)}
          ></div>
          <div className="modal modal-lg d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title text-blue fw-semi"
                    id="exampleModalLabel"
                  >
                    Quick Filters
                  </h5>
                  <button
                    type="button"
                    className="bg-transparent border-0 text-danger fs-4"
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdCloseCircle />
                  </button>
                </div>

                <div className="modal-body">
                  <div className="d-sm-flex align-items-center justify-content-end">
                    <div className="d-flex align-items-center">
                      <h6 className="text-nowrap fw-semi">Date Range:</h6>
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
                    <div className="col-lg-4 col-sm-6 mb-3">
                      <div className="bg-lightgrey border p-3 rounded-4 h-100">
                        <h6 className="fw-semi mb-0 text-blue">Type</h6>
                        {renderCheckboxes(checkboxes)}
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 mb-3">
                      <div className="bg-lightgrey border p-3 rounded-4 h-100">
                        <h6 className="fw-semi mb-0 text-blue">Assigned to</h6>
                        {renderCheckboxes(assignedto)}
                      </div>
                    </div>

                    <div className="col-lg-4 col-sm-6 mb-3">
                      <div className="bg-lightgrey border p-3 rounded-4 h-100">
                        <h6 className="fw-semi mb-0 text-blue">Status</h6>
                        {renderCheckboxes(status)}
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
                  <button type="button" className="btn bg-blue text-white px-5">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default PropertyQuickFilter;
