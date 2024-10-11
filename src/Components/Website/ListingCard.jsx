import React from 'react';
import locationimg from "../../assets/img/furnished-location.svg";
import bedimg from "../../assets/img/furnished-bed.svg";
import furniture2img from "../../assets/img/furniture2.svg";
import carimg from "../../assets/img/furnished-car.svg";
import furniture4 from "../../assets/img/furniture4.svg";


const ListingCard = ({
    imageSrc,
    heartSrc,
    leftArrowSrc,
    rightArrowSrc,
    flowerSrc,
    title,
    location,
    beds,
    baths,
    cars,
    garage,
    detailImageSrc,
}) => {
    return (
        <div className="col-xl-4 col-lg-6 mt-4">
            <div className="p-3 furnished-shadow rounded-3">
                <div className="furnished-siz">
                    <img src={imageSrc} alt="furnished" className="w-100" />
                </div>
                <div className="furnishedover-size">
                    <img src={heartSrc} alt="Furnished" className="w-100 p-2" />
                </div>
                <div className="furnished-leftarrow">
                    <img src={leftArrowSrc} alt="left-arrow" className="w-100 p-2" />
                </div>
                <div className="furnished-rightarrow">
                    <img src={rightArrowSrc} alt="right-arrow" className="w-100 p-2" />
                </div>
                <div className="d-flex align-items-center mt-3">
                    <div className="furnished-flower">
                        <img src={flowerSrc} alt="furnished-flower" className="w-100" />
                    </div>
                    <p className="mb-0 fs-4 fw-bold ms-2">{title}</p>
                </div>
                <div className="d-flex align-items-center mt-3">
                    <div className="">
                        <img src={locationimg} alt="location" className="w-100" />
                    </div>
                    <p className="mb-0 light-black ms-2">{location}</p>
                </div>
                <div className="d-flex mt-3 justify-content-between">
                    <div className="d-flex align-items-center">
                        <div className="furniture-size">
                            <img src={bedimg} alt="Furniture" className="w-100" />
                        </div>
                        <p className="mb-0 fw-bold ms-2">{beds}</p>
                    </div>
                    <div className="d-flex align-items-center ms-2">
                        <div className="furniture-size">
                            <img src={furniture2img} alt="Furniture" className="w-100" />
                        </div>
                        <p className="mb-0 fw-bold ms-2">{baths}</p>
                    </div>
                    <div className="d-flex align-items-center ms-2">
                        <div className="furniture-size">
                            <img src={carimg} alt="Furniture" className="w-100" />
                        </div>
                        <p className="mb-0 fw-bold ms-2">{cars}</p>
                    </div>
                    <div className="d-flex align-items-center ms-2">
                        <div className="furniture-size">
                            <img src={furniture4} alt="Furniture" className="w-100" />
                        </div>
                        <p className="mb-0 fw-bold ms-2">{garage}</p>
                    </div>
                    <button type="button" className="detail-btn">
                        Detail
                        <img src={detailImageSrc} alt="detail" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
