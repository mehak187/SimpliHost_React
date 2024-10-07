import React from 'react'
import HostLogo from '../../assets/img/host-logo.png'
import Steps from '../../assets/img/step.png'
import { Link } from 'react-router-dom'

function GettingStart() {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-between bg-lgrey px-5 py-3'>
                <div>
                    <img src={HostLogo} alt="" className='host-img' />
                </div>
                <div>
                    <button className='bg-blue text-white shadow rounded-3 py-2 px-3 border-0'>Save & Exit</button>
                </div>
            </div>
            <div className='p-5'>
                <div className="row align-items-center">
                    <div className="col-6">
                        <h2 className='step-font'>Getting Started with
                            <span className='ms-1 lblue d-inline-flex'>SimpliHost</span> is a Breeze!</h2>
                        <p className='fw-normal lh-base mt-3'>In the next steps, we’ll gather all the important details about
                            your property, like its type, location, and capacity. We’ll
                            make sure you're set up and ready to welcome guests in no time!</p>
                    </div>
                    <div className="col-6">
                        <div>
                            <img src={Steps} alt="" className='step-img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex align-items-center justify-content-between px-5 py-4'>
                <div>
                    <Link to="" className='bg-lgrey text-dark rounded-3 py-2 px-4 fw-semi border text-decoration-none'>Back</Link>
                </div>
                <div>
                    <Link to="" className='bg-lblue text-blue rounded-3 py-2 px-4 fw-semi border-0 text-decoration-none'>Next</Link>
                </div>
            </div>
        </div>
    )
}

export default GettingStart
