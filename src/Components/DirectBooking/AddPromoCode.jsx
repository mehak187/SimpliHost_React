import React from 'react'

function AddPromoCode() {
    return (
        <div className='h-100'>
            <form action="" className='h-100'>
                <div className='d-flex flex-column justify-content-between h-100 '>
                    <div className="row px-2">
                        <h5 className='bg-white p-3 shadow mb-3 rounded-3 fw-semi'>Add promo Code Details</h5>
                        <div className="col-lg-9">
                            <div className="row mt-4">
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="" className='fw-semi mb-2 small'>Promo Code Name</label>
                                    <input type="text" name="" className='inputstyle py-2' id="" placeholder='Type name here' />
                                </div>
                                <div className="col-sm-6 mb-3">
                                    <label htmlFor="" className='fw-semi mb-2 small'>Type -  Percentage or Flat Fee</label>
                                    <input type="text" name="" className='inputstyle py-2' id="" placeholder='Type name here' />
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

export default AddPromoCode
