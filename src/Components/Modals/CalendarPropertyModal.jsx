import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

function CalendarPropertyModal() {
    const [showModal, setShowModal] = useState(false);
    const handleCopyLink = () => {
        const link = "https://www.simplihost.com/calendar/";
        navigator.clipboard.writeText(link);
        alert('Link copied to clipboard');
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
                    <div
                        className="modal d-block"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="modalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4 me-3"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                    <h5 className="modal-title text-dark fw-semi modal-h" id="modalLabel">
                                        SimpliHost Calendar Link - PROPERTY NAME
                                    </h5>
                                    <div></div>
                                </div>

                                <div className="modal-body">
                                    <div className='d-flex border p-2 rounded-3'>
                                        <input
                                            type="text"
                                            defaultValue="https://www.simplihost.com/calendar/"
                                            className='w-100 border-0 px-2'
                                            readOnly
                                        />
                                        <button
                                            className='bg-blue text-white border-0 py-2 px-sm-4 px-2 rounded-2 text-nowrap'
                                            onClick={handleCopyLink}
                                        >
                                            Copy Link
                                        </button>
                                    </div>

                                    <div className='d-sm-flex align-items-center mt-4'>
                                        <div>
                                            <button className='bg-blue w-100 text-white border-0 py-2 px-4 rounded-2 text-nowrap'>
                                                Generate New Link
                                            </button>
                                        </div>
                                        <div className='ms-sm-2 mt-sm-0 mt-3'>
                                            <button className='bg-blue w-100 text-white border-0 py-2 px-4 rounded-2 text-nowrap'>
                                                Revoke All Access
                                            </button>
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

export default CalendarPropertyModal;
