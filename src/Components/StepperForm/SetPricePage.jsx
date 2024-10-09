import React from 'react'
import { Link } from 'react-router-dom'

function SetPricePage() {
    return (
        <div className='container pt-5 pb-4'>
            <div className="row align-items-center">
                <div className="col-6">
                    <div>
                        <p className='bg-lgrey rounded-pill py-2 px-4 max fw-semi border'>Step 10</p>
                    </div>
                    <h2 className='step-font'>Your Place, Your Price
                        —Let’s Do This!</h2>
                    <p className='fw-normal lh-2 mt-3'>In the next steps, we’ll gather all the important details about
                        your property, like its type, location, and capacity. We’ll
                        make sure you're set up and ready to welcome guests in no time!</p>
                </div>
                <div className="col-6">
                    <div className='set-div bg-lgrey d-flex flex-column justify-content-center align-items-center'>
                        <h2 className='fw-bold fs-1'>$254</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SetPricePage
