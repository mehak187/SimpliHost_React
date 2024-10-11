import React from 'react';
import Slider from 'react-slick';
import slidercomma from "../../assets/img/slidercomma1.svg";
import Left from "../../assets/img/Left.svg";
import rightarrow from "../../assets/img/rightarrow.png";
import aroundcircle from "../../assets/img/aroundcircle-1.svg";

const testimonials = [
    {
        text: "I am proud to say that after a few months of taking this course...I passed my exam and now I’ve secured a high paying job! This content was exactly what the exam covered.",
        name: "Will Somers",
        image: aroundcircle,  // Corrected: no curly braces
        comma: slidercomma,   // Corrected: no curly braces
    },
    {
        text: "Another great testimonial! SimpliHost has made my life so much easier.",
        name: "Jane Doe",
        image: aroundcircle,  // Corrected: no curly braces
        comma: slidercomma,   // Corrected: no curly braces
    },
    {
        text: "I can’t recommend this service enough! It has truly changed my life.",
        name: "John Smith",
        image: aroundcircle,  // Corrected: no curly braces
        comma: slidercomma,   // Corrected: no curly braces
    },
];

const Sliderr = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Change this to 1 to match your original layout
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
    };

    return (
        <section className="around py-5">
            <div className="container">
                <div className="row high-slide position-relative">
                    <div className="d-flex flex-column flex-md-row justify-content-between ">
                        <div>
                            <p className="mb-0 fs-2 fw-bold high-fives-title">High Fives All Around!</p>
                            <p className="mb-0 mt-2 black-color fw-semi">Our customers are thrilled—SimpliHost saves them time and makes management a breeze!</p>
                        </div>
                    </div>
                    <Slider {...settings}>
                        {testimonials.map((testimonial, index) => (
                            <div className="col-lg-4 col-md-6 p-2" key={index}>
                                <div className="slider-bg p-3 mt-3 h-100">
                                    <div className="slidercomma">
                                        <img src={testimonial.comma} alt="comma" className="w-100" />
                                    </div>
                                    <p className="mb-0 black-color mt-2 slider-p">{testimonial.text}</p>
                                    <div className="d-flex align-items-center mt-2">
                                        <div className="slider-img1">
                                            <img src={testimonial.image} alt="profile" className="w-100" />
                                        </div>
                                        <p className="mb-0 fs-6 fw-semi black-color ms-3">{testimonial.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Sliderr;
