import React from "react";
import listingdetail from "../../assets/img/listingdetail-pic.svg";
import futnished from "../../assets/img/futnished-flower.svg";

function ListingDetails() {
  return (
    <div>
      <section className="top mt-5">
        <div className="container">
          <div className="d-sm-flex d-row justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <div className="furnished-flower">
                <img
                  src={futnished}
                  alt="Flower"
                  className="w-100"
                />
              </div>
              <div className="ms-3">
                <p className="mb-0 light-black">Listed By:</p>
                <p className="mb-0  fw-bold">John Doberman</p>
              </div>
              <div className="listingdeatil-size ms-3">
                <img src={listingdetail} alt="Apartment" />
              </div>
            </div>
            <div className="mt-4  mt-sm-0">
              <button type="button" className="listingshow-all-btn ">
                Show all photos
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingDetails;
