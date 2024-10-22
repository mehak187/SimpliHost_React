import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa"; 


function ConfirmAddress() {
    const [showModal, setShowModal] = useState(false);
    const [showSecondModal, setShowSecondModal] = useState(false); 

    const handleApplyClick = (e) => {
        e.preventDefault(); 
        setShowModal(false); 
        setShowSecondModal(true); 
    };

    return (
        <div>
            <div className="dropdown">
                <button
                    className="bg-white border py-2 px-3 rounded-3 dropdown-toggle d-flex align-items-center justify-content-between"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    <CiFilter /> Filter
                </button>
            </div>

            {showModal && (
                <>
                    <div className="custom-backdrop" onClick={() => setShowModal(false)}></div>
                    <div className="modal modal-lg d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div></div>
                                    <h5 className="modal-title text-dark fw-semi" id="exampleModalLabel">Confirm your address</h5>
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-9 col-11 mx-auto">
                                            <h6 className='mb-0 text-center fw-semi'>Your address is only shared with guests after they’ve made a reservation.</h6>
                                            <form onSubmit={handleApplyClick}> {/* Updated form to use handleApplyClick */}
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>Country / Region</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Pakistan - PK' />
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>Street Address</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Sialkot' />
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>Apt, floor, bldg (if applicable)</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Second Floor' />
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>City / Town / Village</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Second Floor' />
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>Province / state / territory (if applicable)</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Second Floor' />
                                                </div>
                                                <div className='mt-3'>
                                                    <label htmlFor="" className='fw-semi'>Zip Code (if applicable)</label>
                                                    <input type="text" className='inputstyle py-2' placeholder='Second Floor' />
                                                </div>
                                                <div className='mt-5 d-flex align-items-center justify-content-between'>
                                                    <div>
                                                        <button className='text-decoration-underline border-0 text-blue bg-transparent'>Clear</button>
                                                    </div>
                                                    <div>
                                                        <button type='submit' className='bg-blue text-white py-2 px-4 border-0 rounded-3'>Apply</button> {/* Submit button triggers handleApplyClick */}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {showSecondModal && ( /* Render the second modal based on showSecondModal state */
                <>
                    <div className="custom-backdrop"></div>
                    <div className="modal d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content rounded-5 p-4">
                                <div className="modal-body">
                                    <div className='d-flex'>
                                        <div>
                                            <FaExclamationCircle  className='text-danger fs-1' />
                                        </div>
                                        <div className='ps-3'>
                                            <h6 className='fw-semi mb-0'>We don't recognize that address</h6>
                                            <p>Are you sure that it's correct?</p>
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <div>
                                            <p className='text-decoration-underline text-blue fw-semi mb-0'>No edit the address</p>
                                        </div>
                                        <div>
                                            <button className='bg-blue border-0 rounded-3 text-white px-4 py-2 fw-semi'onClick={() => setShowSecondModal(false)}>Yes my address is correct</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ConfirmAddress;
