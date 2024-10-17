import React from 'react';
import faserach from "../../assets/img/faserach-listing.svg";

function SearchFilter() {
  return (
    <form>
    <div className="row justify-content-center">
      <div className="col-md-11 col-lg-10 col-xl-9 col-xxl-7">
        <div className="d-flex justify-content-between listingform-bg shadow rounded-4 p-3">
          <div className="col-md-3 my-2 my-md-0 pe-3 searchform-group ">
            <label htmlFor="location">Enter Location:</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Enter a city"
              className="border-0 listingsearh-bg pt-0 pt-md-2 w-100 pb-0 "
            />
          </div>
          <div className="col-md-3 my-2 my-md-0 pe-3 searchform-group border-start border-1 ps-md-3">
            <label htmlFor="checkindate">Check In:</label>
            <input
              type="date"
              id="checkindate"
              name="checkIn-date"
              placeholder="Add Dates"
              className="border-0 listingsearh-bg pt-0 pt-md-2 w-100 pb-0"
            />
          </div>
          <div className="col-md-3 my-2 my-md-0 pe-3 searchform-group border-start border-1 ps-md-3">
            <label htmlFor="checkoutdate">Check out:</label>
            <input
              type="date"
              id="checkoutdate"
              name="checkout-date"
              placeholder="Add Dates"
              className="border-0 listingsearh-bg pt-0 pt-md-2 w-100 pb-0"
            />
          </div>
          <div className="col-md-3 my-2 my-md-0 d-flex justify-content-between align-items-center">
            <div className=" searchform-group  border-start border-1 ps-md-3">
              <label htmlFor="guest">Guests:</label>
              <input
                type="text"
                id="guest"
                name="Guest"
                placeholder="Add Guest"
                className="border-0 listingsearh-bg pt-0 pt-md-2 w-100 pb-0"
              />
            </div>
            <div className="">
              <a href="#" className="text-decoration-none">
                <div className="listingsearchicon-size">
                  <img
                    src={faserach}
                    alt="search"
                    className="search-icon"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  )
}

export default SearchFilter