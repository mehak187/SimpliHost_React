import React, { useState } from "react";
import { CiFilter } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import PropertyImage from "../../assets/img/property-1.png";

function PropertyItem({ propertyName, id }) {
  return (
    <div className="d-flex align-items-center mb-3">
      <div className="checkbox-wrapper-13">
        <input type="checkbox" id={id} />
      </div>

      <label htmlFor={id} className="d-flex align-items-center ms-2">
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

function SelectProperty1() {
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
    "Property Group 10",
  ];

  return (
    <div>
      <form>
        <div className="dropdown">
        <button
        className="inputstyle text-start form-select focus-none"
        type="button"
        onClick={handleToggleModal}
      >
        Select Property
      </button>
        </div>

        {showModal && (
          <>
            <div className="custom-backdrop" onClick={handleToggleModal}></div>
            <div className="modal modal-lg d-block" tabIndex="-1">
              <div className="property-modal modal-dialog modal-dialog-centered shadow">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title text-dark fw-semi">
                      Select Properties
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={handleToggleModal}
                    ></button>
                  </div>

                  <div className="modal-body">
                    <div className="d-flex align-items-center">
                       <div className="checkbox-wrapper-13">
        <input type="checkbox" id="adminOnlyTask" />
      </div>
                      <label
                        htmlFor="adminOnlyTask"
                        className="text-blue fw-semi ms-2"
                      >
                        Admin Only Task
                      </label>
                    </div>

                    <div className="row mt-3">
                      {[0, 1].map((colIndex) => (
                        <div key={colIndex} className="col-sm-6 my-2 my-sm-0">
                          <div className="border d-flex align-items-center py-2 px-3">
                            <label htmlFor={`inputsearch${colIndex}`}>
                              <FaSearch className="text-blue me-2" />
                            </label>
                            <input
                              type="search"
                              id={`inputsearch${colIndex}`}
                              className="border-0 w-100"
                              placeholder={
                                colIndex === 0
                                  ? "Search Property by name"
                                  : "Search Property by group name" 
                              }
                            />
                          </div>

                          <div className="bg-lgrey border mt-3 rounded-3 p-2">
                            <div className="property-h">
                              {properties.map((property, index) => (
                                <PropertyItem
                                  key={index}
                                  propertyName={property}
                                  id={`propertyGroup${index}`} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="modal-footer d-flex align-items-center justify-content-between">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={handleToggleModal}
                    >
                      Clear
                    </button>
                    <button type="button" className="btn btn-primary">
                     Save
                    </button>
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

export default SelectProperty1;
