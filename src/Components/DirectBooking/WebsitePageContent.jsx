import React from 'react'
import SmallImg from '../../assets/img/small-img.png';
import { FaExclamationTriangle } from "react-icons/fa";

function WebsitePageContent() {
    return (
        <div>
            <div className="row">
                <div className="col-xl-9">
                    <div className="row mt-4">
                        <div className="col-lg-6 mb-3">
                            <label htmlFor="" className='fw-semi'>Company Logo</label>
                            <p className='mb-0 ex-small'>Shown on sales forms and purchase orders.
                                Connected to the Business Network.</p>
                            <div className='logo-brand bg-white d-flex flex-column justify-content-center align-items-center'>
                                <label htmlFor="brand">
                                    <div className='text-center'>
                                        <img src={SmallImg} alt="" />
                                    </div>
                                    <p className='ex-small mt-2'>Click and Upload</p>
                                </label>
                                <input type="file" id='brand' className='d-none' />
                            </div>
                            <div className='d-flex mt-3'>
                                <FaExclamationTriangle className='text-danger fs-4 mb-1' />
                                <p className='text-danger mb-0 ms-2'>The file is too small. Please upload a photo that exceeds 2Mb.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <h6 className='fw-semi'>Company Name</h6>
                            <div>
                                <label htmlFor="" className='fw-semi'>Type Company Name</label>
                                <input type="text" className='inputstyle bg-white py-2' placeholder='Simplihost.com' />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="" className='fw-semi'>Type Company Slogan</label>
                                <input type="text" className='inputstyle bg-white py-2' placeholder='Simplihost.com' />
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="" className='fw-semi'>Main Title</label>
                            <textarea name="" className='inputstyle bg-white py-2' id="" rows="3"></textarea>
                        </div>
                        <div className="col-12 mt-3">
                            <label htmlFor="" className='fw-semi'>Sub Title</label>
                            <textarea name="" className='inputstyle bg-white py-2' id="" rows="3"></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebsitePageContent
