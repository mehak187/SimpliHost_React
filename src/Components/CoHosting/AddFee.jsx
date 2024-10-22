import React from "react";
import platform1 from "../../assets/img/platform2.png";
import platform2 from "../../assets/img/platform2.png";
import platform3 from "../../assets/img/platform3.png";
import platform4 from "../../assets/img/platform4.png";

function AddFee() {
  return (
    <section>
      <div className="myshadow py-3 px-3 mb-3 rounded-3">
        <h2 className="fw-semi mb-0 fs-5">Add Fee Details</h2>
      </div>
      <h3 className="mt-4 fw-semi mb-0 fs-5">
        Define Your Reserrvation Commission
      </h3>
      <form action="inventory">
        <div className="row border-bottom border-1 pb-4">
          <div className="col-lg-6 col-xxl-4 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Fee Name
            </label>
            <br />
            <input
              type="text"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="Type name here"
            />
          </div>
          <div className="col-12 mt-3 d-flex align-items-center">
            <label className="switch me-2">
              <input type="checkbox" id="Materials" defaultChecked />
              <span className="slider round"></span>
            </label>
            <p className="mb-0 text-capitalize">Nightly Rate Percentage</p>
          </div>
          <div className="col-12 mt-3">
            <select name="nightlyRate" className="inputstyle px-3 focus-none">
              <option value="" selected disabled hidden>
                Nightly Rate Percentages
              </option>
              <option value="Percentage1">Percentage1</option>
              <option value="Percentage2">Percentage2</option>
              <option value="Percentage3">Percentage3</option>
            </select>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3 d-flex align-items-center">
            <div className="inputstyle d-flex align-items-center py-2">
              <label
                htmlFor="platform1"
                className="bg-white shadow-sm platform2 d-flex align-items-center justify-content-center rounded-circle"
              >
                <img
                  src={platform1}
                  alt="platform1"
                  className="img-fluid object-contain"
                />
              </label>
              <input
                type="number"
                id="platform1"
                placeholder="25"
                className="py-2 input-arrow-none bg-transparent ps-2 border-0 me-2 w-100 focus-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3 d-flex align-items-center">
            <div className="inputstyle d-flex align-items-center py-2">
              <label
                htmlFor="platform2"
                className="bg-white shadow-sm platform2 d-flex align-items-center justify-content-center rounded-circle"
              >
                <img
                  src={platform3}
                  alt="platform2"
                  className="img-fluid object-contain"
                />
              </label>
              <input
                type="number"
                id="platform2"
                placeholder="25"
                className="py-2 input-arrow-none bg-transparent ps-2 border-0 me-2 w-100 focus-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3 d-flex align-items-center">
            <div className="inputstyle d-flex align-items-center py-2">
              <label
                htmlFor="platform3"
                className="bg-white shadow-sm platform2 d-flex align-items-center justify-content-center rounded-circle"
              >
                <img
                  src={platform4}
                  alt="platform3"
                  className="img-fluid object-contain"
                />
              </label>
              <input
                type="number"
                id="platform3"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3 d-flex align-items-center">
            <div className="inputstyle d-flex align-items-center py-2">
              <label
                htmlFor="platform4"
                className="bg-white shadow-sm platform2 d-flex align-items-center justify-content-center rounded-circle"
              >
                <img
                  src={platform1}
                  alt="platform4"
                  className="img-fluid object-contain"
                />
              </label>
              <input
                type="number"
                id="platform4"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
        </div>
        <div className="row mt-4 border-bottom border-1 pb-4">
          <div className="col-12 mt-3 d-flex align-items-center">
            <label className="switch me-2">
              <input type="checkbox" id="Materials" defaultChecked />
              <span className="slider round"></span>
            </label>
            <p className="mb-0 text-capitalize">Guest Fee Percentage</p>
          </div>
          <div className="col-12 mt-3">
            <select name="nightlyRate" className="inputstyle px-3 focus-none">
              <option value="" selected disabled hidden>
                Guest Rate Percentages
              </option>
              <option value="Percentage1">Percentage1</option>
              <option value="Percentage2">Percentage2</option>
              <option value="Percentage3">Percentage3</option>
            </select>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="CommunityFee" className="ps-2 fw-semi">
              Community fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="CommunityFee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="extrafee" className="ps-2 fw-semi">
              Extra guest fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="extrafee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="linenfee" className="ps-2 fw-semi">
              Linens fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="linenfee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="mgmtFee" className="ps-2 fw-semi">
              Mgmt fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="mgmtFee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="otherfee" className="ps-2 fw-semi">
              Other fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="otherfee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="petfee" className="ps-2 fw-semi">
              Pet fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="petfee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>

          <div className="col-lg-4 col-xl-3 col-md-6 mt-3">
            <label htmlFor="petfee" className="ps-2 fw-semi">
              Resort fee
            </label>
            <div className="inputstyle d-flex align-items-center py-2">
              <input
                type="number"
                id="petfee"
                placeholder="25"
                className="py-2 bg-transparent ps-2 border-0 me-2 w-100 focus-none input-arrow-none"
              />
              <span className="fw-semi">%</span>
            </div>
          </div>
        </div>
        <div className="row mt-4 border-bottom border-1 pb-4">
          <div className="col-12 mt-3 d-flex align-items-center">
            <label className="switch me-2">
              <input type="checkbox" id="Materials" defaultChecked />
              <span className="slider round"></span>
            </label>
            <p className="mb-0 text-capitalize">
              Additional Flat Fee Per Resevation
            </p>
          </div>
          <div className="col-lg-7 col-xxl-4 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Name of Fee
            </label>
            <input
              type="text"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="Type name here"
            />
          </div>
          <div className="col-lg-5 col-xxl-2 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Fee Per Reservation
            </label>
            <input
              type="number"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="0"
            />
          </div>
        </div>
        <div className="row mt-4 border-bottom border-1 pb-4">
          <div className="col-12 mt-3 d-flex align-items-center">
            <label className="switch me-2">
              <input type="checkbox" id="Materials" defaultChecked />
              <span className="slider round"></span>
            </label>
            <p className="mb-0 text-capitalize">
              Additional Flat Fee Per Month
            </p>
          </div>
          <div className="col-lg-7 col-xl-6 col-xxl-4 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Name of Fee
            </label>
            <input
              type="text"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="Type name here"
            />
          </div>
          <div className="col-lg-5 col-xl-3 col-xxl-2 mt-3">
            <label htmlFor="ExpenseName" className="fw-semi">
              Fee Per Reservation
            </label>
            <input
              type="number"
              id="ExpenseName"
              className="inputstyle focus-none"
              placeholder="0"
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
      </form>
    </section>
  );
}

export default AddFee;
