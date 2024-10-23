import React, { useState } from 'react';
import { CiFilter } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";

function CopyItem() {
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
                                    <h4 className="text-blue mb-0 fw-semi modal-h" id="modalLabel">
                                        Select to Continue
                                    </h4>
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4 me-3"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <IoMdCloseCircle />
                                    </button>
                                </div>

                                <div className="modal-body">
                                    <div className=''>
                                        <label htmlFor="" className='fw-semi mb-1'>Copy From</label>
                                        <select className='inputstyle py-2'>
                                            <option value="">Select</option>
                                        </select>
                                    </div>

                                    <div className='mt-3'>
                                        <button className='bg-blue w-100 text-white border-0 py-2 px-4 rounded-2 text-nowrap'>
                                            Create from Scratch
                                        </button>
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

export default CopyItem;
