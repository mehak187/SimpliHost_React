import React from 'react';
import PCI from "../../assets/img/pci.png";
import Arrows from "../../assets/img/arrow2.png";
import FurnishFlower from "../../assets/img/furnishFlower.png";
import locationimg from "../../assets/img/furnished-location.svg";
import bedimg from "../../assets/img/furnished-bed.svg";
import furniture2img from "../../assets/img/furniture2.svg";
import carimg from "../../assets/img/furnished-car.svg";
import furniture4 from "../../assets/img/furniture4.svg";
import Slider from 'react-slick';
import Left from "../../assets/img/Left.svg";
import rightarrow from "../../assets/img/arrow_right.png";

const listings = [
    {
        imageSrc: PCI,
        heartSrc: 'path_to_heart_image',
        leftArrowSrc: 'path_to_left_arrow_image',
        rightArrowSrc: 'path_to_right_arrow_image',
        flowerSrc: FurnishFlower,
        title: 'Well Furnished Apartment',
        location: '100 Smart Street, LA, USA',
        beds: 3,
        baths: 2,
        cars: 1,
        garage: 0,
        detailImageSrc: Arrows,
    },
    {
        imageSrc: PCI,
        heartSrc: 'path_to_heart_image',
        leftArrowSrc: 'path_to_left_arrow_image',
        rightArrowSrc: 'path_to_right_arrow_image',
        flowerSrc: FurnishFlower,
        title: 'Well Furnished Apartment',
        location: '100 Smart Street, LA, USA',
        beds: 3,
        baths: 2,
        cars: 1,
        garage: 0,
        detailImageSrc: Arrows,
    },
    {
        imageSrc: PCI,
        heartSrc: 'path_to_heart_image',
        leftArrowSrc: 'path_to_left_arrow_image',
        rightArrowSrc: 'path_to_right_arrow_image',
        flowerSrc: FurnishFlower,
        title: 'Well Furnished Apartment',
        location: '100 Smart Street, LA, USA',
        beds: 3,
        baths: 2,
        cars: 1,
        garage: 0,
        detailImageSrc: Arrows,
    },
    {
        imageSrc: PCI,
        heartSrc: 'path_to_heart_image',
        leftArrowSrc: 'path_to_left_arrow_image',
        rightArrowSrc: 'path_to_right_arrow_image',
        flowerSrc: FurnishFlower,
        title: 'Well Furnished Apartment',
        location: '100 Smart Street, LA, USA',
        beds: 3,
        baths: 2,
        cars: 1,
        garage: 0,
        detailImageSrc: Arrows,
    },
    // Add more listings as needed
];

const ListingCard = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Adjust this based on how many cards you want to show at once
        slidesToScroll: 1,
        prevArrow: (
            <div className="slider-arrow slider-prev">
                <img src={Left} alt="left" className="w-100" />
            </div>
        ),
        nextArrow: (
            <div className="slider-arrow slider-next">
                <img src={rightarrow} alt="right" className="w-100" />
            </div>
        ),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div>
            <Slider {...settings}>
            {listings.map((listing, index) => (
                <div className="col-12 mt-4 px-2 py-5" key={index}>
                    <div className="p-3 furnished-shadow rounded-3">
                        <div className="furnished-siz">
                            <img src={listing.imageSrc} alt="furnished" className="w-100" />
                        </div>
                        <div className="furnishedover-size">
                            <img src={listing.heartSrc} alt="Furnished" className="w-100 p-2" />
                        </div>
                        {/* <div className="furnished-leftarrow">
                            <img src={listing.leftArrowSrc} alt="left-arrow" className="w-100 p-2" />
                        </div>
                        <div className="furnished-rightarrow">
                            <img src={listing.rightArrowSrc} alt="right-arrow" className="w-100 p-2" />
                        </div> */}
                        <div className="d-flex align-items-center mt-3">
                            <div className="furnished-flower">
                                <img src={listing.flowerSrc} alt="furnished-flower" className="w-100" />
                            </div>
                            <p className="mb-0 fs-6 fw-bold ms-2">{listing.title}</p>
                        </div>
                        <div className="d-flex align-items-center mt-3">
                            <div className="">
                                <img src={locationimg} alt="location" className="w-100" />
                            </div>
                            <p className="mb-0 light-black ms-2 ex-small">{listing.location}</p>
                        </div>
                        <div className="d-flex mt-3 justify-content-between">
                            <div className="d-flex align-items-center">
                                <div className="furniture-size">
                                    <img src={bedimg} alt="Furniture" className="w-100" />
                                </div>
                                <p className="mb-0 fw-bold ms-2">{listing.beds}</p>
                            </div>
                            <div className="d-flex align-items-center ms-1">
                                <div className="furniture-size">
                                    <img src={furniture2img} alt="Furniture" className="w-100" />
                                </div>
                                <p className="mb-0 fw-bold ms-2">{listing.baths}</p>
                            </div>
                            <div className="d-flex align-items-center ms-1">
                                <div className="furniture-size">
                                    <img src={carimg} alt="Furniture" className="w-100" />
                                </div>
                                <p className="mb-0 fw-bold ms-2">{listing.cars}</p>
                            </div>
                            <div className="d-flex align-items-center ms-1">
                                <div className="furniture-size">
                                    <img src={furniture4} alt="Furniture" className="w-100" />
                                </div>
                                <p className="mb-0 fw-bold ms-2">{listing.garage}</p>
                            </div>
                            <button type="button" className="detail-btn d-inline-flex align-items-center">
                                Detail
                                <img src={listing.detailImageSrc} alt="detail" className='ms-2' />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
        </div>
    );
};

export default ListingCard;
