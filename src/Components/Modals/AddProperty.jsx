import React, { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Grp from '../../assets/img/grp.png';
import GrpImport from '../../assets/img/grp-import.png';

function AddProperty() {
    const [showFirstModal, setShowFirstModal] = useState(false); // State for first modal
    const [showSecondModal, setShowSecondModal] = useState(false); // State for second modal
    const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
    const navigate = useNavigate();

    const handleSelection = (option) => {
        setSelectedOption(option);
    };

    const handleConnectClick = () => {
        if (selectedOption) {
            // Navigate to the next page when a selection is made
            navigate('/admin/stepper');
        }
    };

    const openFirstModal = () => {
        setShowFirstModal(true);
    };

    const openSecondModal = () => {
        // Close the first modal when the second modal opens
        setShowFirstModal(false);
        setShowSecondModal(true);
    };

    return (
        <div>
            {/* Button to open the first modal */}
            <div className="dropdown">
                <button
                    className="px-sm-4 px-3 w-100 mt-sm-0 mt-2 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white me-sm-2 text-decoration-none py-2"
                    type="button"
                    onClick={openFirstModal} // Opens the first modal
                >
                    Add Property
                </button>
            </div>

            {/* First modal */}
            {showFirstModal && (
                <>
                    <div className="custom-backdrop" onClick={() => setShowFirstModal(false)}></div>
                    <div className="modal d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button
                                        type="button"
                                        className="bg-transparent border-0 text-secondary fs-4"
                                        onClick={() => setShowFirstModal(false)}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <h5 className="modal-title text-dark fw-semi">Add Property</h5>
                                    <div></div>
                                </div>
                                

                                <div className="modal-body">
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
                                        <button
                                            className="rounded-3 border-0 d-block text-decoration-none text-center py-2 px-2 bg-lblue text-blue w-100 fw-semi"
                                            type="button"
                                            onClick={openSecondModal} // Open second modal
                                        >
                                            Connect
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Second modal (Import Airbnb Modal) */}
            {showSecondModal && (
                <>
                    <div className="custom-backdrop" onClick={() => setShowSecondModal(false)}></div>
                    <div className="modal d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="bg-transparent border-0 text-secondary fs-4" onClick={() => setShowSecondModal(false)}>
                                        <FaArrowLeft />
                                    </button>
                                    <h5 className="modal-title text-dark fw-semi">Select Here</h5>
                                    <div></div>
                                </div>

                                <div className="modal-body">
                                    <label className={`d-block bg-lgrey border p-2 rounded-3 mb-3 pointer ${selectedOption === 'airbnb' ? 'border-blue' : ''}`} onClick={() => handleSelection('airbnb')}>
                                        <input type="checkbox" className="d-none" checked={selectedOption === 'airbnb'} onChange={() => handleSelection('airbnb')} />
                                        <div className="text-center">
                                            <img src={GrpImport} alt="grp" />
                                        </div>
                                        <div className="mt-3">
                                            <h4 className="fw-semi text-center">Import from AirBnb</h4>
                                            <p className="text-center">Takes 2 minutes!</p>
                                        </div>
                                    </label>
                                    <label className={`d-block bg-lblue border p-2 rounded-3 pointer ${selectedOption === 'manual' ? 'border-blue' : ''}`} onClick={() => handleSelection('manual')}>
                                        <input type="checkbox" className="d-none" checked={selectedOption === 'manual'} onChange={() => handleSelection('manual')} />
                                        <div className="text-center">
                                            <img src={Grp} alt="grp" />
                                        </div>
                                        <div className="mt-3">
                                            <h4 className="fw-semi text-center">Manually Create</h4>
                                            <p className="text-center">It’s easy - we’ll walk you through each step</p>
                                        </div>
                                    </label>
                                    <div className="mt-5">
                                        <button className="rounded-3 border-0 d-block text-decoration-none text-center py-2 px-2 bg-lblue text-blue w-100 fw-semi" onClick={handleConnectClick} disabled={!selectedOption}>
                                            Manually Add
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

export default AddProperty;
