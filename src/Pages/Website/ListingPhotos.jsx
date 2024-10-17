import React from "react";
import appartmentArrow from "../../assets/img/appartment-arrow.svg";
import appartment1 from "../../assets/img/apartment1.svg";
import appartment2 from "../../assets/img/apartment2.svg";
import appartment3 from "../../assets/img/apartment3.svg";
import appartment5 from "../../assets/img/apartment5.svg";
import apartmentStair from "../../assets/img/apartment-stair.svg";
import { Link } from "react-router-dom";

function ListingPhotos() {
  const images = [
    {
      src: appartment1,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size",
      colSize: 12,
    },
    {
      src: appartment2,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 6,
    },
    {
      src: appartment3,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 6,
    },
    {
      src: appartment1,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 8,
    },
    {
      src: apartmentStair,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 4,
    },
    {
      src: appartment5,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size",
      colSize: 12,
    },
    {
      src: appartment2,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 6,
    },
    {
      src: appartment3,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 6,
    },
    {
      src: appartment1,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size",
      colSize: 12,
    },
    {
      src: appartment2,
      alt: "Apartment-Pic",
      className: "furnushedapartment-size2",
      colSize: 12,
    },
  ];

  return (
    <div>
      <section className="appartment-bg p-4">
        <div className="d-sm-flex d-row justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <Link to="/listing-details"><img src={appartmentArrow} alt="arrow" /></Link>
            <div className="ms-3">
              <p className="mb-0 fw-bold fs-5">Well Furnished Apartment</p>
              <p className="mb-0 light-black">100 Smart Street, LA, USA</p>
            </div>
          </div>
          <div className="mt-4 mt-sm-0">
            <i className="fa-regular fa-heart fa-size"></i>
            <i className="fa-solid fa-share-nodes fa-size ms-2"></i>
          </div>
        </div>
      </section>
      <section className="more-photo pb-4">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div key={index} className={`col-${image.colSize} mt-4`}>
                <div className={`h-100 ${image.className}`}>
                  <img src={image.src} alt={image.alt} className="rounded-3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ListingPhotos;
