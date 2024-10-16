import React from "react";

function AddCannedText() {
  return (
    <>
      <section>
        <div>
          <h2 className="fw-semi fs-3">Add Canned Text</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Name" className="fw-semi">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Name"
                    className="inputstyle focus-none"
                    placeholder="Type Name here"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Trigger" className="fw-semi">
                    Trigger
                  </label>
                  <br />
                  <input
                    type="text"
                    id="Trigger"
                    className="inputstyle focus-none"
                    placeholder="Type Trigger here"
                  />
                </div>
                <div className="mt-4">
                  <div className="d-flex"></div>
                  <h4 className="fw-semi mt-4 border-bottom border-3 mb-3">
                    Message
                  </h4>
                  <div className="mt-2">
                    Hello{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="Guest First Name"
                    />
                    !
                  </div>
                  <div className="mt-2">
                    Thanks a lot for your interest in{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="Listing Name"
                    />
                    for your trip in
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="Listing City"
                    />
                    !
                  </div>
                  <div className="mt-2">
                    I Wanted to confirm right away that it would be a pleasure
                    to host you from{" "}
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="Check-In Date"
                    />
                    to
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="Check-Out Date"
                    />
                    (
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="guests"
                    />
                    for
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="nights"
                    />
                    )
                  </div>
                  <div className="mt-2">
                    Although the
                    <input
                      type="text"
                      className="focus-none cannedinput"
                      placeholder="listing_type"
                    />
                    is still available at this time, I may have received
                    requests for those dates. I would advise you to book
                    quickly.
                    <input
                      type="text"
                      className="focus-none cannedinput"
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
                      className="focus-none cannedinput"
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
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddCannedText;
