import React from "react";
import PropertyOne from "../../assets/img/property-1.png";
import PropertyTwo from "../../assets/img/property-2.png";
import { BsThreeDots } from "react-icons/bs";

function EditImages() {
  const images = [
    { src: PropertyTwo, alt: "Property Two", isCover: true },
    { src: PropertyOne, alt: "Property One", isCover: false },
    { src: PropertyTwo, alt: "Property Two", isCover: false },
    { src: PropertyOne, alt: "Property One", isCover: false },
  ];

  const handleDrag = () => {};

  return (
    <div className="container pt-5 pb-4">
      <div className="row">
        <div className="col-lg-6">
          <div>
            <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">
              Step 05
            </p>
          </div>
          <h2 className="step-font mt-4">How’s This Looking?</h2>
          <p className="fw-normal lh-2 mt-3">
            Drag to reorder and make sure everything’s picture-perfect!
          </p>
          <div>
            <label
              htmlFor="up-more"
              className="bg-lblue text-blue rounded-pill py-2 px-4 fw-semi"
            >
              Upload more photos
            </label>
            <input type="file" id="up-more" className="d-none" />
          </div>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-3">
          <div className="pet-height bg-lgrey rounded-3 border">
            <div className="p-3">
              <div className="row">
                {images.map((image, index) => (
                  <div className="col-sm-6 mb-2" key={index}>
                    <div className="position-relative">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="img-property"
                      />
                      {image.isCover && (
                        <div className="position-cover">
                          <label
                            htmlFor="cover"
                            className="btn bg-white rounded-3 border ex-small"
                          >
                            Cover Photo
                          </label>
                          <input type="file" id="cover" className="d-none" />
                        </div>
                      )}
                      <div className="position-drop">
                        <div className="dropdown">
                          <button
                            className="btn bg-white shadow rounded-circle py-1 px-2"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <BsThreeDots className="mb-1" />
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item ex-small" href="#">
                                Edit
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item ex-small" href="#">
                                Move Backward
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item ex-small" href="#">
                                Move Forward
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item ex-small" href="#">
                                Make Cover Photo
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item ex-small" href="#">
                                Delete
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditImages;
