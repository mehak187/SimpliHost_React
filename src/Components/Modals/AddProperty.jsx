import React, { useState, useEffect } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';


function AddProperty() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <div className="dropdown">
                <button
                    className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white me-sm-2 text-decoration-none py-2"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
                    Add Property
                </button>
            </div>

            {showModal && (
                <>
                    <div className="custom-backdrop" onClick={() => setShowModal(false)}></div>
                    <div className="modal d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <h5 className="modal-title text-dark fw-semi" id="exampleModalLabel">Add Property</h5>
                                    <div></div>
                                </div>

                                <div className="modal-body">
                                    <h6 className='text-center fw-semi  mb-3'>Things to know before copying your rental
                                        from Airbnb</h6>
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <BiCheck className='fs-3' />
                                        </div>
                                        <div>
                                            <p className='text-secondary'><strong className='me-2'>Heads Up!</strong>After connecting, Airbnb might switch you to
                                                their new simplified pricing model automatically.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <BiCheck className='fs-3' />
                                        </div>
                                        <div>
                                            <p className='text-secondary'><strong className='me-2'>Import Made Simple!</strong>We’ll grab your info from Airbnb
                                                without messing with your current settings.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-3 mt-5'>
                                        <div>
                                            <BiCheck className='fs-3' />
                                        </div>
                                        <div>
                                            <p className='text-secondary'><strong className='me-2'>Almost there!</strong> A pop-up will appear with a message from
                                                Airbnb. Just tick the "I agree to the Airbnb Additional Terms
                                                of Service" box and click Allow to keep going.</p>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-3 mt-5'>
                                        <div>
                                            <BiCheck className='fs-3' />
                                        </div>
                                        <div>
                                            <p className='text-secondary'><strong className='me-2'>Need Help Importing Your Rentals?</strong> No worries, just
                                                give us a shout [here]!</p>
                                        </div>
                                    </div>
                                    <div className='ps-3'>
                                        <input type="checkbox" className='chk' checked/>
                                        <label htmlFor="" className='fw-semi ps-3'>I have read and accept the information above</label>
                                    </div>
                                    <div className='mt-5'>
                                        <Link to='#' className='rounded-3 border-0 d-block text-decoration-none text-center py-2 px-2 bg-lblue text-blue w-100 fw-semi'>Connect</Link>
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

export default AddProperty;
