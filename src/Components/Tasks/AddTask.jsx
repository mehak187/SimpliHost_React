import { Calendar } from "primereact/calendar";
import React from "react";

function AddTask() {
  return (
    <>
      <section>
        <div>
          <h2 className="fw-semi fs-3">Add New Task</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="TaskName" className="fw-semi">
                    Task Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="TaskName"
                    className="inputstyle focus-none"
                    placeholder="Type name here"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Property" className="fw-semi">
                    Property
                  </label>
                  <br />
                  <select
                    name="Property"
                    id="Property"
                    className="inputstyle focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Property
                    </option>
                    <option value="Property1">Property1</option>
                    <option value="Property2">Property2</option>
                    <option value="Property3">Property3</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="TaskType" className="fw-semi">
                    Select Task Type
                  </label>
                  <br />
                  <select
                    name="TaskType"
                    id="TaskType"
                    className="inputstyle focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Task Type
                    </option>
                    <option value="Task1">Task1</option>
                    <option value="Task2">Task2</option>
                    <option value="Task3">Task3</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Assign" className="fw-semi">
                    Assign To
                  </label>
                  <br />
                  <select
                    name="Assign"
                    id="Assign"
                    className="inputstyle focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Assign To
                    </option>
                    <option value="Admin">Admin</option>
                    <option value="Amenity">Amenity</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Inspection">Inspection</option>
                    <option value="Maintaenance">Maintaenance</option>
                    <option value="Pet">Pet</option>
                    <option value="Seasonal">Seasonal</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="StartDate" className="fw-semi">
                    Select Start Date
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="startTime" className="fw-semi">
                    Select Start Time
                  </label>
                  <br />
                  <select
                    name="startTime"
                    id="startTime"
                    className="inputstyle focus-none"
                  >
                    <option value="12:00AM">12:00 AM</option>
                    <option value="12:30AM">12:30 AM</option>
                    <option value="1:00AM">1:00 AM</option>
                    <option value="1:30AM">1:30 AM</option>
                    <option value="2:00AM">2:00 AM</option>
                    <option value="2:30AM">2:30 AM</option>
                    <option value="3:00AM">3:00 AM</option>
                    <option value="3:30AM">3:30 AM</option>
                    <option value="4:00AM">4:00 AM</option>
                    <option value="4:30AM">4:30 AM</option>
                    <option value="5:00AM">5:00 AM</option>
                    <option value="5:30AM">5:30 AM</option>
                    <option value="6:00AM">6:00 AM</option>
                    <option value="6:30AM">6:30 AM</option>
                    <option value="7:00AM">7:00 AM</option>
                    <option value="7:30AM">7:30 AM</option>
                    <option value="8:00AM">8:00 AM</option>
                    <option value="8:30AM">8:30 AM</option>
                    <option value="9:00AM">9:00 AM</option>
                    <option value="9:30AM">9:30 AM</option>
                    <option value="10:00AM">10:00 AM</option>
                    <option value="10:30AM">10:30 AM</option>
                    <option value="11:00AM">11:00 AM</option>
                    <option value="11:30AM">11:30 AM</option>
                    <option value="12:00PM">12:00 PM</option>
                    <option value="12:30PM">12:30 PM</option>
                    <option value="1:00PM">1:00 PM</option>
                    <option value="1:30PM">1:30 PM</option>
                    <option value="2:00PM">2:00 PM</option>
                    <option value="2:30PM">2:30 PM</option>
                    <option value="3:00PM">3:00 PM</option>
                    <option value="3:30PM">3:30 PM</option>
                    <option value="4:00PM">4:00 PM</option>
                    <option value="4:30PM">4:30 PM</option>
                    <option value="5:00PM">5:00 PM</option>
                    <option value="5:30PM">5:30 PM</option>
                    <option value="6:00PM">6:00 PM</option>
                    <option value="6:30PM">6:30 PM</option>
                    <option value="7:00PM">7:00 PM</option>
                    <option value="7:30PM">7:30 PM</option>
                    <option value="8:00PM">8:00 PM</option>
                    <option value="8:30PM">8:30 PM</option>
                    <option value="9:00PM">9:00 PM</option>
                    <option value="9:30PM">9:30 PM</option>
                    <option value="10:00PM">10:00 PM</option>
                    <option value="10:30PM">10:30 PM</option>
                    <option value="11:00PM">11:00 PM</option>
                    <option value="11:30PM">11:30 PM</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="EndDate" className="fw-semi">
                    Select End Date
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>

                <div className="col-lg-6 mt-3">
                  <label htmlFor="endTime" className="fw-semi">
                    Select End Time
                  </label>
                  <br />
                  <select
                    name="endTime"
                    id="endTime"
                    className="inputstyle focus-none"
                  >
                    <option value="12:00AM">12:00 AM</option>
                    <option value="12:30AM">12:30 AM</option>
                    <option value="1:00AM">1:00 AM</option>
                    <option value="1:30AM">1:30 AM</option>
                    <option value="2:00AM">2:00 AM</option>
                    <option value="2:30AM">2:30 AM</option>
                    <option value="3:00AM">3:00 AM</option>
                    <option value="3:30AM">3:30 AM</option>
                    <option value="4:00AM">4:00 AM</option>
                    <option value="4:30AM">4:30 AM</option>
                    <option value="5:00AM">5:00 AM</option>
                    <option value="5:30AM">5:30 AM</option>
                    <option value="6:00AM">6:00 AM</option>
                    <option value="6:30AM">6:30 AM</option>
                    <option value="7:00AM">7:00 AM</option>
                    <option value="7:30AM">7:30 AM</option>
                    <option value="8:00AM">8:00 AM</option>
                    <option value="8:30AM">8:30 AM</option>
                    <option value="9:00AM">9:00 AM</option>
                    <option value="9:30AM">9:30 AM</option>
                    <option value="10:00AM">10:00 AM</option>
                    <option value="10:30AM">10:30 AM</option>
                    <option value="11:00AM">11:00 AM</option>
                    <option value="11:30AM">11:30 AM</option>
                    <option value="12:00PM">12:00 PM</option>
                    <option value="12:30PM">12:30 PM</option>
                    <option value="1:00PM">1:00 PM</option>
                    <option value="1:30PM">1:30 PM</option>
                    <option value="2:00PM">2:00 PM</option>
                    <option value="2:30PM">2:30 PM</option>
                    <option value="3:00PM">3:00 PM</option>
                    <option value="3:30PM">3:30 PM</option>
                    <option value="4:00PM">4:00 PM</option>
                    <option value="4:30PM">4:30 PM</option>
                    <option value="5:00PM">5:00 PM</option>
                    <option value="5:30PM">5:30 PM</option>
                    <option value="6:00PM">6:00 PM</option>
                    <option value="6:30PM">6:30 PM</option>
                    <option value="7:00PM">7:00 PM</option>
                    <option value="7:30PM">7:30 PM</option>
                    <option value="8:00PM">8:00 PM</option>
                    <option value="8:30PM">8:30 PM</option>
                    <option value="9:00PM">9:00 PM</option>
                    <option value="9:30PM">9:30 PM</option>
                    <option value="10:00PM">10:00 PM</option>
                    <option value="10:30PM">10:30 PM</option>
                    <option value="11:00PM">11:00 PM</option>
                    <option value="11:30PM">11:30 PM</option>
                  </select>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="EndTime" className="fw-semi">
                    Select Inventory
                  </label>
                  <br />
                  <div className="d-sm-flex align-items-center">
                    <div className="d-flex align-items-center">
                      <label htmlFor="Materials" className="me-2">
                        Repeating?
                      </label>
                      <label className="switch me-3">
                        <input type="checkbox" id="Materials" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <div className="d-flex mt-2 mt-sm-0 align-items-center">
                      <input
                        type="number"
                        id=""
                        placeholder="00"
                        className="inputstyle me-2 w-100 focus-none"
                      />
                      <select
                        name=""
                        id=""
                        className="inputstyle w-100 focus-none"
                      >
                        <option value="days">Days</option>
                        <option value="weeks">Weeks</option>
                        <option value="Months">Months</option>
                        <option value="Turns">Turns</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Checklist" className="fw-semi">
                    Select Checklist
                  </label>
                  <br />
                  <select
                    name="Checklist"
                    id="Checklist"
                    className="inputstyle focus-none"
                  >
                    <option value="" selected disabled hidden>
                      Select Select Checklist
                    </option>
                    <option value="Checklist1">Checklist1</option>
                    <option value="Checklist2">Checklist2</option>
                    <option value="Checklist3">Checklist3</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <label htmlFor="Notes" className="fw-semi">
                    Internal Notes
                  </label>
                  <br />
                  <textarea
                    name="Notes"
                    id="Notes"
                    className="inputstyle focus-none"
                    rows={4}
                  >
                    Type here
                  </textarea>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id="Capture" />
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Capture">Capture Hours?</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Materials">Capture Materials?</label>
                  </div>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex align-items-center">
                    <label className="switch me-3">
                      <input type="checkbox" id="Images" />
                      <span className="slider round"></span>
                    </label>
                    <label htmlFor="Images">Able to Add Images?</label>
                  </div>
                </div>
                <div className="col-12 mt-4">
                  <div className="d-flex align-items-center">
                    <input
                      type="reset"
                      className="graybutton rounded-2 me-4 text-black"
                      value="Cancel"
                    />
                    <input
                      type="submit"
                      className="bluebutton rounded-2 text-white"
                      value="Save"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddTask;
