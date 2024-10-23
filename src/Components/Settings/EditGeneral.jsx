import React from "react";
import logoFile from "../../assets/img/logo-file.png";
function EditGeneral() {
  return (
    <div className="setting-bg rounded-3">
      <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
        Edit General Settings
      </h2>
      <div className="mt-2 px-3 col-xl-9 col-xxl-8">
        <div className="row">
          <div className="col-lg-6 mt-3">
            <label className="fw-semi">Company Logo</label>
            <p>
              Shown on invoices and reports (able to edit on individual invoices
              if needed)
            </p>
            <label
              htmlFor="logo"
              className="d-inline-flex bg-white flex-column px-4 py-5 align-items-center border border-1 rounded-3 px-3 py-2"
            >
              <img src={logoFile} alt="logoFile" />
              <p className="mt-2 mb-0 text-center">Click and upload</p>
              <input type="file" id="logo" className="d-none" />
            </label>
          </div>
          <div className="col-lg-6  mt-3">
            <label className="fw-semi">Company Name</label>
            <p className="my-1">
              Shown on invoices and reports (able to edit on individual invoices
              if needed)
            </p>
            <label htmlFor="companyName" className="mt-2 fw-semi">
              Type Company Name
            </label>
            <input
              type="text"
              id="companyName"
              className="inputstyle bg-white focus-none"
              placeholder="Simplihost.com"
            />
          </div>
          <h3 className="fs-5 mt-4 mb-0 text-capitalize text-black fw-semi">
            Global Preferences
          </h3>
          <div className="col-lg-6 mt-3">
            <label htmlFor="language" className="fw-semi">
              Preffered Language
            </label>
            <select
              name="language"
              id="language"
              className="inputstyle bg-white focus-none"
            >
              <option value="" selected disabled hidden>
                Select Language
              </option>
              <option value="Language1">Language1</option>
              <option value="Language2">Language2</option>
              <option value="Language3">Language3</option>
            </select>
          </div>
          <div className="col-lg-6 mt-3">
            <label htmlFor="Currency" className="fw-semi">
              Preffered Currency
            </label>
            <select
              name="Currency"
              id="Currency"
              className="inputstyle bg-white focus-none"
            >
              <option value="" selected disabled hidden>
                Select Currency
              </option>
              <option value="Currency1">Currency1</option>
              <option value="Currency2">Currency2</option>
              <option value="Currency3">Currency3</option>
            </select>
          </div>
          <div className="col-lg-6 mt-3">
            <label htmlFor="timezone" className="fw-semi">
             Time Zone
            </label>
            <select
              name="timezone"
              id="timezone"
              className="inputstyle bg-white focus-none"
            >
              <option value="" selected disabled hidden>
                Select Timezone
              </option>
              <option value="timezone1">timezone1</option>
              <option value="timezone2">timezone2</option>
              <option value="timezone3">timezone3</option>
            </select>
          </div>
          <div className="col-lg-6 mt-3">
            <label htmlFor="timezone" className="fw-semi">
             Select Calendar Start of Week
            </label>
            <select
              name="timezone"
              id="timezone"
              className="inputstyle bg-white focus-none"
            >
              <option value="" selected disabled hidden>
                Select Timezone
              </option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
            </select>
          </div>
          <div className="col-lg-6 mt-3">
            <label htmlFor="timezone" className="fw-semi">
            Initial # of Listings to Display on Calendar
            </label>
            <select
              name="timezone"
              id="timezone"
              className="inputstyle bg-white focus-none"
            >
              <option value="" selected disabled hidden>
              Select # of Listings
              </option>
            
              <option value="listing1">listing1</option>
              <option value="listing2">listing2</option>
              <option value="listing3">listing3</option>
            </select>
          </div>
          <div className="col-12 mt-4 mb-3">
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
  );
}

export default EditGeneral;
