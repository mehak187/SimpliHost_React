import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AddCannedText() {
  return (
    <>
      <section>
      <div className="myshadow py-3 px-3 mb-3 rounded-3">
        <h2 className="fw-semi mb-0 fs-5">Add Canned Text</h2>
      </div>
        <form action="">
              <div className="row">
                <div className="col-lg-6 col-xl-4 mt-3">
                  <label htmlFor="Name" className="fw-semi">
                    Name
                  </label>
                  <input
                    type="text"
                    id="Name"
                    className="inputstyle focus-none"
                    placeholder="Type Name here"
                  />
                </div>
                <div className="col-lg-6 col-xl-4 mt-3">
                <div className="d-flex align-items-center justify-content-between">
                  <label htmlFor="Trigger" className="fw-semi me-2">
                      Trigger
                    </label>
                    <span className="small">Only 15 chars</span>
                  </div>
                  <input
                    type="text"
                    id="Trigger"
                    className="inputstyle focus-none"
                    placeholder="Type Trigger here"
                  />
                </div>
                <div className="mt-4">
                  <div className="d-sm-flex align-items-center justify-content-between mt-4 border-bottom border-2 pb-3">
                    <div className="d-xl-flex align-items-center me-2">
                      <div className="d-flex me-2 align-items-center">
                      <h4 className="fw-semi me-2 mb-0">
                        Message
                      </h4>
                      <FaChevronRight className=""/>
                      </div>
                      <p className="mb-0 mt-2 mt-xl-0">This is the message for guests or operations. You can customize it by selecting fields with the 'Add Field' button at the top.</p>
                    </div>
                    <Link to="#" className="bluebutton d-inline-block mt-3 mt-sm-0 text-center text-decoration-none opacity-hover rounded-2 text-white">Add Field</Link>
                  </div>
                  <div className="mt-4">
                    Hello{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="Guest First Name"
                    />
                    !
                  </div>
                  <div className="mt-2">
                    Thanks a lot for your interest in{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="Listing Name"
                    />
                    for your trip in
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="Listing City"
                    />
                    !
                  </div>
                  <div className="mt-2">
                    I Wanted to confirm right away that it would be a pleasure
                    to host you from{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="Check-In Date"
                    />
                    to
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="Check-Out Date"
                    />
                    (
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="guests"
                    />
                    for
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="nights"
                    />
                    )
                  </div>
                  <div className="mt-2">
                    Although the
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="listing_type"
                    />
                    is still available at this time, I may have received
                    requests for those dates. I would advise you to book
                    quickly.
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="answers"
                    />
                  </div>
                  <div className="mt-2">
                    <p className="my-2">
                      If you need any additional information, please do not
                      hesitate to ask, it would be my pleasure to answer any
                      questions you may have!
                    </p>
                    <p className="my-2">I look forward to hosting you!</p>
                    <p className="my-2">Best regards,</p>
                    <input
                      type="text"
                      className="focus-none cannedinput my-1 px-2 py-1"
                      placeholder="host_first_name"
                    />
                  </div>
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
        </form>
      </section>
    </>
  );
}

export default AddCannedText;
