import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import PropertyImage from '../../assets/img/property-1.png';

function PropertyItem({ propertyName }) {
  return (
    <div className="d-flex align-items-center mb-3">
      <input type="checkbox" className="chk" />
      <label className="d-flex align-items-center ms-2">
        <div>
          <img src={PropertyImage} alt="property" className="md1-img" />
        </div>
        <div className="ps-2">
          <p className="mb-0 fw-semi">{propertyName}</p>
        </div>
      </label>
    </div>
  );
}

function SelectPropertiesModal() {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const properties = [
    "Property Group 1",
    "Property Group 2",
    "Property Group 3",
    "Property Group 4",
    "Property Group 5",
    "Property Group 6",
    "Property Group 7",
    "Property Group 8",
    "Property Group 9",
    "Property Group 10"
  ];

  return (
    <div>
      <form>
        <div className="dropdown">
          <button
            className="bg-white border w-100 py-2 px-3 rounded-3 dropdown-toggle d-flex align-items-center justify-content-center"
            type="button"
            onClick={handleToggleModal}
          >
            <CiFilter /> Filter
          </button>
        </div>

        {showModal && (
          <>
            <div className="custom-backdrop" onClick={handleToggleModal}></div>
            <div className="modal modal-lg d-block" tabIndex="-1">
              <div className="modal-dialog modal-dialog-centered shadow">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-semi">Select Properties</h5>
                    <button type="button" className="btn-close" onClick={handleToggleModal}></button>
                  </div>

                  <div className="modal-body">
                    <div>
                      <input type="checkbox" className="chk" />
                      <label className="text-blue fw-semi ms-2">Admin Only Task</label>
                    </div>

                    <div className="row mt-3">
                      {[0, 1].map((colIndex) => (
                        <div key={colIndex} className="col-6">
                          <div className="border d-flex align-items-center py-2 px-3">
                            <label htmlFor={`inputsearch${colIndex}`}>
                              <FaSearch className="text-blue me-2" />
                            </label>
                            <input
                              type="search"
                              id={`inputsearch${colIndex}`}
                              className="border-0 w-100"
                              placeholder="Search Property by name"
                            />
                          </div>

                          <div className="bg-lgrey border mt-3 rounded-3 p-2">
                            <div className="property-h">
                              {properties.map((property, index) => (
                                <PropertyItem key={index} propertyName={property} />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-footer d-flex align-items-center justify-content-between">
                    <button type="button" className="btn btn-light" onClick={handleToggleModal}>
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">Apply Filters</button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default SelectPropertiesModal;
