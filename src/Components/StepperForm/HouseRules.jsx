import React, { useState } from 'react';
import { Switch } from '@mui/material';
import { CiCircleCheck } from "react-icons/ci";
import { IoIosCloseCircleOutline } from 'react-icons/io';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function HouseRules() {
    const [bedroomCount, setBedroomCount] = useState(2);
    const [bedCount, setBedCount] = useState(2);

    return (
        <div className="container py-5">
            <div className="row px-lg-4 justify-content-between">
                <div className="col-xl-5 col-lg-6">
                    <p className="bg-lgrey rounded-pill py-2 px-4 max fw-semi border">Step 09</p>
                    <h2 className="font-step fw-semi lh-base mt-4">Let’s Get the Basics on Your Space!</h2>
                    <p>Don’t worry, we’ll dive into the details like amenities and photos later!</p>
                </div>

                <div className="col-lg-6">
                    <div className='pet-height'>
                        <div className='p-2'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <label className='fw-semi'>Pets Allowed</label>
                                <Switch {...label} />
                            </div>

                            <RoomCounter label="Maximum number of pets allowed" count={bedroomCount} setCount={setBedroomCount} />

                            <div className='d-flex align-items-center justify-content-between border bg-lgrey rounded-3 p-2 mb-2'>
                                <div>
                                    <h6 className='fw-semi'>Events Allowed</h6>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='bg-transparent border-0'>
                                        <CiCircleCheck className='fs-3 text-muted'/>
                                    </button>
                                    <button className='bg-transparent border-0'>
                                        <IoIosCloseCircleOutline className='fs-3 text-muted ms-4'/>
                                    </button>
                                </div>
                            </div>

                            <div className='d-flex align-items-center justify-content-between border bg-lgrey rounded-3 p-2 mb-2'>
                                <div>
                                    <h6 className='fw-semi'>Smoking, vaping, e-cigarettes allowed</h6>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='bg-transparent border-0'>
                                        <CiCircleCheck className='fs-3 text-muted'/>
                                    </button>
                                    <button className='bg-transparent border-0'>
                                        <IoIosCloseCircleOutline className='fs-3 text-muted ms-4'/>
                                    </button>
                                </div>
                            </div>

                            <RoomCounter label="Max Number of Guests" count={bedCount} setCount={setBedCount} />

                            <div className='d-flex align-items-center justify-content-between border bg-lgrey rounded-3 p-2 mb-2'>
                                <div>
                                    <h6 className='fw-semi'>Commercial photography and filming allowed</h6>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <button className='bg-transparent border-0'>
                                        <CiCircleCheck className='fs-3 text-muted'/>
                                    </button>
                                    <button className='bg-transparent border-0'>
                                        <IoIosCloseCircleOutline className='fs-3 text-muted ms-4'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Reusable RoomCounter component for Bedrooms and Beds
const RoomCounter = ({ label, count, setCount }) => {
    const modifyCount = (increment) => {
        if (increment) {
            setCount(count + 1);
        } else if (count > 0) {
            setCount(count - 1);
        }
    };

    return (
        <div className="room-counter-container">
            <span className="room-counter-label">{label}</span>
            <div className="room-counter-wrapper">
                <button className="room-counter-button" onClick={() => modifyCount(false)}>
                    <span>−</span>
                </button>
                <span className="room-counter-count">{count}</span>
                <button className="room-counter-button" onClick={() => modifyCount(true)}>
                    <span>+</span>
                </button>
            </div>
        </div>
    );
};

export default HouseRules;
