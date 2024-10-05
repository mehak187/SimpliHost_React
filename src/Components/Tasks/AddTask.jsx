import React from 'react'

function AddTask() {
  return (
    <>
      <section>
        <div>
          <h2>Add New Task</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-md-6 mt-3">
                  <label htmlFor="TaskName" className='fw-semi'>Task Name</label><br />
                  <input type="text" id='TaskName' className='inputstyle' placeholder='Type name here'/>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="Property" className='fw-semi'>Property</label><br />
                  <select name="Property" id="Property" className='inputstyle'>
                    <option value="" selected disabled hidden>Select Property</option>
                    <option value="Property1">Property1</option>
                    <option value="Property2">Property2</option>
                    <option value="Property3">Property3</option>
                  </select>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="TaskType" className='fw-semi'>Select Task Type</label><br />
                  <select name="TaskType" id="TaskType" className='inputstyle'>
                    <option value="" selected disabled hidden>Select Task Type</option>
                    <option value="Task1">Task1</option>
                    <option value="Task2">Task2</option>
                    <option value="Task3">Task3</option>
                  </select>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="Assign" className='fw-semi'>Assign To</label><br />
                  <select name="Assign" id="Assign" className='inputstyle'>
                    <option value="" selected disabled hidden>Select Assign To</option>
                    <option value="Assign1">Assign1</option>
                    <option value="Assign2">Assign2</option>
                    <option value="Assign3">Assign3</option>
                  </select>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="StartDate" className='fw-semi'>Select Start Date</label><br />
                  <input type="date" id='StartDate' className='inputstyle'/>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="StartTime" className='fw-semi'>Select Start Time</label><br />
                  <input type="time" id='StartTime' className='inputstyle'/>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="EndDate" className='fw-semi'>Select End Date</label><br />
                  <input type="date" id='EndDate' className='inputstyle'/>
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="EndTime" className='fw-semi'>Select End Time</label><br />
                  <input type="time" id='EndTime' className='inputstyle'/>
                </div>
                <div className="col-md-6 mt-3">
                  
                </div>
                <div className="col-md-6 mt-3">
                  <label htmlFor="Checklist" className='fw-semi'>Select Checklist</label><br />
                  <select name="Checklist" id="Checklist" className='inputstyle'>
                    <option value="" selected disabled hidden>Select Select Checklist</option>
                    <option value="Checklist1">Checklist1</option>
                    <option value="Checklist2">Checklist2</option>
                    <option value="Checklist3">Checklist3</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="Notes" className='fw-semi'>Internal Notes</label><br />
                  <textarea name="Notes" id="Notes" className='inputstyle' rows={4}>Type here</textarea>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id='Capture'/>
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Capture">Capture Hours?</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id='Materials'/>
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Materials">Capture Materials?</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id='Images'/>
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Images">Able to Add Images?</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <input type="reset" className='graybutton'/>
                    <input type="submit" className='bluebutton'/>
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

export default AddTask
