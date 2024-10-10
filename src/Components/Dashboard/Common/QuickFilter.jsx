import React, { useState, useEffect } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

// Dummy data for the filters
const dummyData = {
  checkboxes: [
    { label: "Booked", count: 245, isChecked: false },
    { label: "Cancelled", count: 10, isChecked: false },
    { label: "Staying", count: 90, isChecked: false },
    { label: "Completed", count: 30, isChecked: false }
  ],
  platforms: [
    { label: "AirBnb", isChecked: false },
    { label: "VRBO", isChecked: true },
    { label: "Booking.com", isChecked: false },
    { label: "Direct", isChecked: false },
    { label: "Manual", isChecked: false }
  ],
  properties: [
    { label: "Property A", count: 100, isChecked: false },
    { label: "Property B", count: 190, isChecked: false },
    { label: "Property C", count: 80, isChecked: false }
  ],
  propertyGroups: [
    { label: "Property A", count: 100, isChecked: false },
    { label: "Property B", count: 190, isChecked: false },
    { label: "Property C", count: 80, isChecked: false }
  ],
  pets: [
    { label: "With Pets", count: 100, isChecked: false },
    { label: "No Pets", count: 190, isChecked: false }
  ]
};

function QuickFilter() {
  const [checkboxes, setCheckboxes] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [properties, setProperties] = useState([]);
  const [propertyGroups, setPropertyGroups] = useState([]);
  const [pets, setPets] = useState([]);
  const [showModal, setShowModal] = useState(false); // Modal state

  // Load data from dummy JSON on component mount
  useEffect(() => {
    setCheckboxes(dummyData.checkboxes);
    setPlatforms(dummyData.platforms);
    setProperties(dummyData.properties);
    setPropertyGroups(dummyData.propertyGroups);
    setPets(dummyData.pets);
  }, []);

  // Handle checkbox toggle
  const handleCheckboxChange = (type, index) => {
    const updatedState = type.map((item, i) =>
      i === index ? { ...item, isChecked: !item.isChecked } : item
    );

    if (type === checkboxes) setCheckboxes(updatedState);
    if (type === platforms) setPlatforms(updatedState);
    if (type === properties) setProperties(updatedState);
    if (type === propertyGroups) setPropertyGroups(updatedState);
    if (type === pets) setPets(updatedState);
  };

  const renderCheckboxes = (data, type) => {
    return data.map((item, index) => (
      <div
        key={index}
        className={`d-flex align-items-center mt-2 border p-2 rounded-3 ${item.isChecked ? 'checked-bg' : ''}`}
        style={{ backgroundColor: item.isChecked ? '#32F0CD' : 'transparent' }}
      >
        <input
          type="checkbox"
          className="chk mb-1 me-2"
          checked={item.isChecked}
          onChange={() => handleCheckboxChange(type, index)}
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
          className="bg-white border py-2 px-3 rounded-3 dropdown-toggle d-flex align-items-center justify-content-between"
          type="button"
          onClick={() => setShowModal(true)} // Open modal
        >
          <CiFilter /> Filter
        </button>
      </div>

      {showModal && ( // Conditional rendering of modal and backdrop
        <>
          <div className="custom-backdrop" onClick={() => setShowModal(false)}></div>
          <div className="modal modal-xl d-block" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-blue fw-semi" id="exampleModalLabel">Quick Filters</h5>
                  <button
                    type="button"
                    className="bg-transparent border-0 text-danger fs-4"
                    onClick={() => setShowModal(false)} // Close modal
                  >
                    <IoMdCloseCircle />
                  </button>
                </div>

                <div className="modal-body">
                  <div className='d-sm-flex align-items-center justify-content-end'>
                    <div className='d-flex align-items-center'>
                      <h6 className='text-nowrap fw-semi'>Date Range:</h6>
                      <select name="" id="" className='form-select shadow-none ms-2'>
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
                    <div className='ms-sm-2 mt-sm-0 mt-2'>
                      <input type="date" className='form-control' />
                    </div>
                  </div>

                  <div className="d-flex mt-3 flex-wrap">
                    <div className="filter-col bg-lightgrey border p-3 rounded-4">
                      <h6 className="fw-semi mb-0 text-blue">Status</h6>
                      {renderCheckboxes(checkboxes, checkboxes)}
                    </div>

                    {/* Additional filter section - Platform */}
                    <div className="filter-col bg-lightgrey border p-3 rounded-4">
                      <h6 className="fw-semi mb-0 text-blue">Platform</h6>
                      {renderCheckboxes(platforms, platforms)}
                    </div>

                    {/* Additional filter section - Properties */}
                    <div className="filter-col bg-lightgrey border p-3 rounded-4">
                      <h6 className="fw-semi mb-0 text-blue">Properties</h6>
                      {renderCheckboxes(properties, properties)}
                    </div>

                    {/* Additional filter section - Property Groups */}
                    <div className="filter-col bg-lightgrey border p-3 rounded-4">
                      <h6 className="fw-semi mb-0 text-blue">Property Groups</h6>
                      {renderCheckboxes(propertyGroups, propertyGroups)}
                    </div>

                    {/* Additional filter section - Pets */}
                    <div className="filter-col bg-lightgrey border p-3 rounded-4">
                      <h6 className="fw-semi mb-0 text-blue">Pets</h6>
                      {renderCheckboxes(pets, pets)}
                    </div>
                  </div>
                </div>

                <div className="modal-footer d-flex align-items-center justify-content-between">
                  <button type="button" className="bg-transparent border-0 text-blue text-decoration-underline" onClick={() => setShowModal(false)}>Clear</button>
                  <button type="button" className="btn bg-blue text-white">Apply</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default QuickFilter;
