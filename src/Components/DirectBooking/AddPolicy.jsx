import React from 'react'
import SelectProperty1 from '../Modals/SelectProperty1'

function AddPolicy() {
    return (
        <div className='h-100'>
            <form action="/admin/direct-booking" className='h-100'>
                <div className='d-flex flex-column justify-content-between h-100 '>
                    <div className="row px-2">
                        <h5 className='bg-white p-3 shadow mb-3 rounded-3 fw-semi'>Add Cancellation Policies Detail</h5>
                        <div className="col-lg-9">
                            <div className="row mt-4">
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="policyName" className='fw-semi mb-2 small'>Policy Name</label>
                                    <input type="text" name="" className='inputstyle' id="policyName" placeholder='Type name here' />
                                </div>
                                <div className="col-lg-6 mb-3">
                                    <label htmlFor="property" className='fw-semi mb-2 small'>Select Property & Property Group</label>
                                    <SelectProperty1 />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="refund" className='fw-semi mb-2 small'>Refund Policy</label>
                                    <textarea name="" id="refund" rows="5" className='inputstyle py-2'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='d-sm-flex align-items-center mt-5'>
                        <div>
                            <button className='border w-100 bg-grey px-5 py-2 rounded-3'>Cancel</button>
                        </div>
                        <div className='ms-sm-2 mt-sm-0 mt-3'>
                            <button type='submit' className='bg-blue w-100 text-white py-2 px-5 border-0 rounded-3'>Save</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddPolicy
