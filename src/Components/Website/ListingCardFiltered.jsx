import React from "react";
import PCI from "../../assets/img/pci.png";
import Arrows from "../../assets/img/arrow2.png";
import FurnishFlower from "../../assets/img/furnishFlower.png";
import locationimg from "../../assets/img/furnished-location.svg";
import bedimg from "../../assets/img/furnished-bed.svg";
import furniture2img from "../../assets/img/furniture2.svg";
import carimg from "../../assets/img/furnished-car.svg";
import furniture4 from "../../assets/img/furniture4.svg";
import Slider from "react-slick";
import Left from "../../assets/img/arrow_left.png";
import rightarrow from "../../assets/img/arrow_right.png";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const listings = [
  {
    imageSrc: PCI,
    leftArrowSrc: "path_to_left_arrow_image",
    rightArrowSrc: "path_to_right_arrow_image",
    flowerSrc: FurnishFlower,
    title: "Well Furnished Apartment",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrc: PCI,
    leftArrowSrc: "path_to_left_arrow_image",
    rightArrowSrc: "path_to_right_arrow_image",
    flowerSrc: FurnishFlower,
    title: "Well Furnished Apartment",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrc: PCI,
    leftArrowSrc: "path_to_left_arrow_image",
    rightArrowSrc: "path_to_right_arrow_image",
    flowerSrc: FurnishFlower,
    title: "Well Furnished Apartment",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
  {
    imageSrc: PCI,
    leftArrowSrc: "path_to_left_arrow_image",
    rightArrowSrc: "path_to_right_arrow_image",
    flowerSrc: FurnishFlower,
    title: "Well Furnished Apartment",
    location: "100 Smart Street, LA, USA",
    beds: 3,
    baths: 2,
    cars: 1,
    garage: 0,
  },
];

const ListingCardFiltered = () => {
  return (
    <div className="row">
      {listings.map((listing, index) => (
        <div
          className="col-12 col-md-6 mt-4 mx-auto px-3 px-2 py-2"
          key={index}
        >
          <div className="p-3 furnished-shadow rounded-3">
            <div className="furnished-siz">
              <img src={listing.imageSrc} alt="furnished" className="w-100" />
            </div>
            <Link to="#" className="furnishedover-size">
              <FaRegHeart className=" text-black" />
            </Link>
            <div className="d-flex justify-content-center justify-content-sm-start align-items-center mt-3">
              <div className="furnished-flower d-none d-sm-block">
                <img
                  src={listing.flowerSrc}
                  alt="furnished-flower"
                  className="w-100"
                />
              </div>
              <p className="mb-0 fs-6 text-center text-sm-start fw-bold ms-2">
                {listing.title}
              </p>
            </div>
            <div className="d-flex justify-content-center justify-content-sm-start align-items-center mt-3">
              <div className="">
                <img src={locationimg} alt="location" className="w-100" />
              </div>
              <p className="mb-0 light-black ms-2 ex-small">
                {listing.location}
              </p>
            </div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between mt-3">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center">
                  <div className="furniture-size">
                    <img src={bedimg} alt="bed" className="sm-img" />
                  </div>
                  <p className="mb-0 fw-bold ms-1">{listing.beds}</p>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="furniture-size">
                    <img
                      src={furniture2img}
                      alt="Furniture"
                      className="sm-img"
                    />
                  </div>
                  <p className="mb-0 fw-bold ms-1">{listing.baths}</p>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="furniture-size">
                    <img src={carimg} alt="car" className="sm-img" />
                  </div>
                  <p className="mb-0 fw-bold ms-2">{listing.cars}</p>
                </div>
                <div className="d-flex align-items-center ms-2">
                  <div className="furniture-size">
                    <img src={furniture4} alt="Furniture" className="sm-img" />
                  </div>
                  <p className="mb-0 fw-bold ms-1">{listing.garage}</p>
                </div>
              </div>
              <Link
                to="/listing-details"
                className="detail-btn mt-3 mt-sm-0 text-white d-inline-flex align-items-center text-decoration-none"
              >
                Detail
                <img src={Arrows} alt="detail" className="ms-2" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListingCardFiltered;
