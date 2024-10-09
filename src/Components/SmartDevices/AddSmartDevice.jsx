import React from 'react'

function AddSmartDevice() {
  return (
    <>
      <section>
        <div>
          <h2 className='fw-semi fs-3'>Add Smart Device</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="DevicePicture" className='fw-semi'>Device Picture</label><br />
                  <input type="file" id='DevicePicture' className='inputstyle focus-none' placeholder='Type Device Picture here'/>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="DeviceName" className='fw-semi'>Device Name</label><br />
                  <input type="text" id='DeviceName' className='inputstyle focus-none' placeholder='Type Device Name here'/>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Type" className='fw-semi'>Device Type</label><br />
                  <select name="Type" id="Type" className='inputstyle focus-none'>
                    <option value="" selected disabled hidden>Device Type</option>
                    <option value="Type1">Type1</option>
                    <option value="Type2">Type2</option>
                    <option value="Type3">Type3</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Property" className='fw-semi'>Property</label><br />
                  <select name="Property" id="Property" className='inputstyle focus-none'>
                    <option value="" selected disabled hidden>Select Property</option>
                    <option value="Property1">Property1</option>
                    <option value="Property2">Property2</option>
                    <option value="Property3">Property3</option>
                  </select>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex align-items-center">
                    <input type="reset" className='graybutton rounded-2 me-4 text-black' value="Cancel"/>
                    <input type="submit" className='bluebutton rounded-2 text-white' value="Save"/>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  )
}

export default AddSmartDevice
