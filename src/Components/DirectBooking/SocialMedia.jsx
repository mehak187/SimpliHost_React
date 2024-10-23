import React from 'react'

function SocialMedia() {
    return (
        <div>
            <h5 className='fw-semi'>Add a Your Social Media Links</h5>
            <p>Please add a your Active social media platform links.</p>
            <div className="row">
                <div className="col-lg-4 col-sm-6 mb-3">
                    <label htmlFor="" className='fw-semi'>Facebook</label>
                    <input type="text" name="" className='inputstyle bg-white py-2' id="" placeholder='Paste link here'/>
                </div>
                <div className="col-lg-4 col-sm-6 mb-3">
                    <label htmlFor="" className='fw-semi'>Twitter</label>
                    <input type="text" name="" className='inputstyle bg-white py-2' id="" placeholder='Paste link here'/>
                </div>
                <div className="col-lg-4 col-sm-6 mb-3">
                    <label htmlFor="" className='fw-semi'>Instagram</label>
                    <input type="text" name="" className='inputstyle bg-white py-2' id="" placeholder='Paste link here'/>
                </div>
                <div className="col-lg-4 col-sm-6 mb-3">
                    <label htmlFor="" className='fw-semi'>Youtube</label>
                    <input type="text" name="" className='inputstyle bg-white py-2' id="" placeholder='Paste link here'/>
                </div>
                <div className="col-lg-4 col-sm-6 mb-3">
                    <label htmlFor="" className='fw-semi'>LinkedIn</label>
                    <input type="text" name="" className='inputstyle bg-white py-2' id="" placeholder='Paste link here'/>
                </div>
                
            </div>
        </div>
    )
}

export default SocialMedia
