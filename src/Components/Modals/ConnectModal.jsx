import React, { useState, useEffect } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';


function ConnectModal() {

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
                    <div className="modal modal-xl d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <div></div>
                                    <h5 className="modal-title text-dark fw-semi" id="exampleModalLabel">Who runs the world? You, do Beth</h5>
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className='border bg-lgrey p-2 d-flex align-items-center justify-content-between rounded-3 mb-2'>
                                        <div className='d-flex'>
                                            <div>

                                            </div>
                                            <div>
                                                <p className='bg-white border mb-0 p-2 rounded-2 d-inline-flex'>01</p>
                                            </div>
                                            <div className='ps-2'>
                                                <h6 className='mb-0 text-blue fw-semi'>Connect Your Airbnb account</h6>
                                                <p className='mb-0 ex-small'>You've completed this.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='' className='bg-lblue py-2 min-wd text-dark rounded-3 text-decoration-none fw-semi'>Connect</Link>
                                        </div>
                                    </div>
                                    <div className='border bg-lgrey p-2 d-flex align-items-center justify-content-between rounded-3 mb-2'>
                                        <div className='d-flex'>
                                            <div>

                                            </div>
                                            <div>
                                                <p className='bg-white border mb-0 p-2 rounded-2 d-inline-flex'>02</p>
                                            </div>
                                            <div className='ps-2'>
                                                <h6 className='mb-0 text-blue fw-semi'>Create Users</h6>
                                                <p className='mb-0 ex-small'>We only offer one plan currently.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='' className='bg-lblue py-2 min-wd text-dark rounded-3 text-decoration-none fw-semi'>Create Users</Link>
                                        </div>
                                    </div>
                                    <div className='border bg-lgrey p-2 d-flex align-items-center justify-content-between rounded-3 mb-2'>
                                        <div className='d-flex'>
                                            <div>

                                            </div>
                                            <div>
                                                <p className='bg-white border mb-0 p-2 rounded-2 d-inline-flex'>03</p>
                                            </div>
                                            <div className='ps-2'>
                                                <h6 className='mb-0 text-blue fw-semi'>Create Users</h6>
                                                <p className='mb-0 ex-small'>We only offer one plan currently.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='' className='bg-lblue py-2 min-wd text-dark rounded-3 text-decoration-none fw-semi'>Create Users</Link>
                                        </div>
                                    </div>
                                    <div className='border bg-lgrey p-2 d-flex align-items-center justify-content-between rounded-3 mb-2'>
                                        <div className='d-flex'>
                                            <div>

                                            </div>
                                            <div>
                                                <p className='bg-white border mb-0 p-2 rounded-2 d-inline-flex'>04</p>
                                            </div>
                                            <div className='ps-2'>
                                                <h6 className='mb-0 text-blue fw-semi'>Configure Checklists</h6>
                                                <p className='mb-0 ex-small'>We only offer one plan currently.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='' className='bg-lblue py-2 min-wd text-dark rounded-3 text-decoration-none fw-semi'>Checklists</Link>
                                        </div>
                                    </div>
                                    <div className='border bg-lgrey p-2 d-flex align-items-center justify-content-between rounded-3 mb-2'>
                                        <div className='d-flex'>
                                            <div>

                                            </div>
                                            <div>
                                                <p className='bg-white border mb-0 p-2 rounded-2 d-inline-flex'>04</p>
                                            </div>
                                            <div className='ps-2'>
                                                <h6 className='mb-0 text-blue fw-semi'>Configure Automations</h6>
                                                <p className='mb-0 ex-small'>We only offer one plan currently.</p>
                                            </div>
                                        </div>
                                        <div>
                                            <Link to='' className='bg-lblue py-2 min-wd text-dark rounded-3 text-decoration-none fw-semi'>Automation</Link>
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

export default ConnectModal;
