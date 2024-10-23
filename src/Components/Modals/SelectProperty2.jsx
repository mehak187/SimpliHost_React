import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import PropertyImage from "../../assets/img/property-1.png";

function PropertyItem({ propertyName, isSelectable, isChecked, onChange }) {
  return (
    <div className="d-flex align-items-center my-3">
      {isSelectable && (
        <div className="checkbox-wrapper-13">
          <input
            type="checkbox"
            id={propertyName}
            checked={isChecked}
            onChange={onChange}
          />
        </div>
      )}
      <label htmlFor={propertyName} className="d-flex align-items-center ms-2">
        <img src={PropertyImage} alt="property" className="md1-img" />
        <div className="ps-2">
          <p className="mb-0 fw-semi">{propertyName}</p>
        </div>
      </label>
    </div>
  );
}

function SelectProperty2() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState([]);
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

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  const handleCheckboxChange = (propertyName) => {
    setSelectedProperties((prevSelected) =>
      prevSelected.includes(propertyName)
        ? prevSelected.filter((name) => name !== propertyName)
        : [...prevSelected, propertyName]
    );
  };

  return (
    <div>
      <button
        className="inputstyle text-start form-select focus-none"
        type="button"
        onClick={handleToggleModal}
      >
        Select Property
      </button>

      {showModal && (
        <>
          <div className="custom-backdrop" onClick={handleToggleModal}></div>
          <div className="modal modal-lg d-block" tabIndex="-1">
            <div className="property-modal modal-dialog modal-dialog-centered shadow">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title text-dark fw-semi">
                    Select Property Group
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleToggleModal}
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="d-flex align-items-center">
                    <div className="checkbox-wrapper-13 me-2">
                      <input type="checkbox" id="all" />
                    </div>
                    <label htmlFor="all" className="text-blue fw-semi ms-2">
                      All Property Group
                    </label>
                  </div>

                  <div className="row mt-3">
                    <div className="col-sm-6 my-2">
                      <div className="border d-flex align-items-center py-2 px-3">
                        <label htmlFor="inputsearch">
                          <FaSearch className="text-blue me-2" />
                        </label>
                        <input
                          type="search"
                          id="inputsearch"
                          className="border-0 w-100"
                          placeholder="Search"
                        />
                      </div>

                      <div className="bg-lgrey border mt-3 rounded-3 px-2">
                        {properties.map((property, index) => (
                          <PropertyItem
                            key={index}
                            propertyName={property}
                            isSelectable
                            isChecked={selectedProperties.includes(property)}
                            onChange={() => handleCheckboxChange(property)}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="col-sm-6 my-2">
                      <h3 className="fs-5 fw-semi">Selected Properties</h3>
                      <div className="mt-3 bg-lgrey border rounded-3 px-2">
                        {selectedProperties.length > 0 ? (
                          selectedProperties.map((property, index) => (
                            <PropertyItem key={index} propertyName={property} />
                          ))
                        ) : (
                          <p className="mb-0 py-2">No properties selected.</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer d-flex align-items-center justify-content-between">
                  <button
                    type="reset"
                    className="p-0 border-0 bg-transparent text-black"
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
    </div>
  );
}

export default SelectProperty2;
