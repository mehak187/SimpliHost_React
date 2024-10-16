import React, { useState, useEffect } from 'react';
import { BiCheck } from 'react-icons/bi';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


function AddProperty() {

    const [showModal, setShowModal] = useState(false);

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
                    <div className="modal d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div></div>
                                    <h5 className="modal-title text-dark fw-semi" id="exampleModalLabel">Add Property</h5>
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
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
                                    <div className='d-flex mb-3'>
                                        <div>
                                            <BiCheck className='fs-3' />
                                        </div>
                                        <div>
                                            <p className='text-secondary'><strong className='me-2'>Almost there!</strong> A pop-up will appear with a message from
                                                Airbnb. Just tick the "I agree to the Airbnb Additional Terms
                                                of Service" box and click Allow to keep going.</p>
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

export default AddProperty;
