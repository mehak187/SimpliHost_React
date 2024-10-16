import React from "react";

function AddSpecialIndicators() {
  return (
    <>
      <section>
        <div>
          <h2 className="fw-semi fs-3">Add Special Indicators</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-5">
              <div className="row">
                <div className="col-12 mt-3">
                  <label htmlFor="Name" className="fw-semi">
                    Special Indicator Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Name"
                    className="inputstyle focus-none"
                    placeholder="Type Name here"
                  />
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <label htmlFor="Materials" className="fw-semi">
                      Add Text to ‘Special Instructions’?
                    </label>
                    <div>
                      <span>No</span>
                      <label className="switch mx-2">
                        <input type="checkbox" id="Materials" />
                        <span className="slider round"></span>
                      </label>
                      <span>Yes</span>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="Trigger" className="fw-semi">
                    Default Special Instructions
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Trigger"
                    className="inputstyle focus-none"
                    placeholder="Type here"
                  />
                </div>
                <div className="col-12 mt-3">
                  <p className="mb-0 fw-semi">Special Indicator Icon</p>
                  <label htmlFor="icon" className="greenbtn">
                    Upload Image
                  </label>
                  <br />
                  <input
                    type="file"
                    id="icon"
                    className="inputstyle focus-none d-none"
                    placeholder="Type here"
                  />
                </div>

                <div className="col-12 mt-4">
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
      </section>
    </>
  );
}

export default AddSpecialIndicators;
