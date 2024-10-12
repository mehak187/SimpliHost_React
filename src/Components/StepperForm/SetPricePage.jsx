import React from 'react'
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';

function SetPricePage() {
    return (
        <div className='container pt-5 pb-4'>
            <div className="row">
                <div className="col-lg-6">
                    <div>
                        <p className='bg-lgrey rounded-pill py-2 px-4 max fw-semi border'>Step 10</p>
                    </div>
                    <h2 className='step-font'>Your Place, Your Price<br></br>
                        —Let’s Do This!</h2>
                    <p className='fw-normal lh-2 mt-3'>In the next steps, we’ll gather all the important details about
                        your property, like its type, location, and capacity. We’ll
                        make sure you're set up and ready to welcome guests in no time!</p>
                </div>
                <div className="col-lg-6">
                    <div className='set-div bg-lgrey d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='fw-bold fs-1'>$254<MdEdit className='bg-white rounded-circle p-2 ms-1 border' /></h2>
                        <div className="dropdown w-75">
                            <button className="btn bg-lgrey fw-semi dropdown-toggle d-flex w-100 align-items-center justify-content-between" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Payout details
                            </button>
                            <ul className="dropdown-menu w-100 shadow border-0 show">
                                <li><Link className="dropdown-item" href="#">
                                    <div className='d-flex align-items-center justify-content-between border-bottom'>
                                        <p className='mb-0 fw-semi'>Base Price</p>
                                        <p className='mb-0'>$254</p>
                                    </div>
                                    </Link></li>
                                <li><Link className="dropdown-item" href="#">
                                <div className='d-flex align-items-center justify-content-between border-bottom'>
                                        <p className='mb-0 fw-semi'>Host service fee</p>
                                        <p className='mb-0'>-$8</p>
                                    </div>
                                    </Link></li>
                                <li><Link className="dropdown-item" href="#"><div className='d-flex align-items-center justify-content-between'>
                                        <p className='mb-0 fw-semi'>You Earn</p>
                                        <p className='mb-0'>$254</p>
                                    </div></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetPricePage
