import React from 'react'
import { FaUser } from "react-icons/fa6";
import { FaCalendarCheck, FaChild } from "react-icons/fa";
import { FaBaby } from "react-icons/fa6";
import { IoPawOutline } from "react-icons/io5";
import { FaCalendar } from "react-icons/fa";
import UserImg from '../../assets/img/user-details.png'
import { CiCalendar } from "react-icons/ci";
import { FaChevronDown } from "react-icons/fa6";
import Clearance from '../../assets/img/cleaning-2.png'
import { MdEdit } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosRadioButtonOn } from "react-icons/io";

function CleaningTask() {
  return (
    <div className='container-fluid'>
      <div className="bg-white">
        <div className="bg-blue p-3 d-flex justify-content-center mb-3">
            <div className="bg-lblue rounded-pill d-flex align-items-center max justify-content-center py-2 px-4">
                <div>
                  <img src={Clearance} alt="" className="md1-img"/>
                </div>
                <div>
                  <p className="mb-0 fw-semi">Cleaning</p>
                </div>
            </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <div>
              <h6>Task Name:</h6>
              <h5 className="fw-semi">Green Back Home Inspection</h5>
          </div>
          <div>
              <Link to='#' className="bg-lgrey p-2 rounded-2 align-middle"><MdEdit className="fs-3 text-dark mb-1"/></Link>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4">
            <p className='fw-semi mb-0'>Start Date:</p>
            <div className="d-flex align-items-center">
              <FaCalendarCheck className="text-danger"/>
              <p className="mb-0 small ms-2">January 10, 2024</p>
            </div>
          </div>
          <div className="col-4">
            <p className='fw-semi mb-0'>End Date:</p>
            <div className="d-flex align-items-center">
              <FaCalendarCheck className="text-dark"/>
              <p className="mb-0 small ms-2">January 10, 2024</p>
            </div>
          </div>
          <div className="col-4">
            <p className='fw-semi mb-0'>Status:</p>
            <div className="d-flex align-items-center">
              <IoIosRadioButtonOn className="text-warning"/>
              <p className="mb-0 small ms-2">January 10, 2024</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between border rounded-3 p-2 border-dark mb-3">
           <div className="d-flex">
            <CiCalendar className="fs-5"/>
            <p className="mb-0 ms-2">User Notes</p>
           </div>
           <div className="d-flex align-items-center">
              <p className="mb-0 bg-secondary rounded-circle d-inline-flex px-2 text-white">0</p>
              <FaChevronDown className="ms-2"/>
           </div>
        </div>
        <div className="mb-3">
        <input type="text" className="w-100 form-control shadow-none" name=""  placeholder="Type comment to user here" />
        </div>
        <div className="border-bottom pb-2">
          <h6>Check-In Date</h6>
          <div className="d-flex align-items-center">
            <h6 className="fw-semi">Next Guest Name:</h6>
            <div className="ms-2">
              <img src={UserImg} alt="" className="md1-img rounded-circle"/>
            </div>
            <p className="mb-0 ms-2">Arlen</p>
          </div>
          <div className="d-flex align-items-center">
            <FaCalendar />
            <p className="mb-0 ms-2">Jun 16th</p>
          </div>
        </div>
        <div className="mt-3">
          <h6># of Guests and/or Pets</h6>
          <div className="d-flex align-items-center">
              <div className="me-3">
                <p className="mb-0">Adults</p>
                <div className="d-flex align-items-center justify-content-center">
                  <FaUser/>
                  <p className="me-2 mb-0">3</p>
                </div>
              </div>
              <div className="me-3">
                <p className="mb-0">Children</p>
                <div className="d-flex align-items-center justify-content-center">
                  <FaChild/>
                  <p className="me-2 mb-0">2</p>
                </div>
              </div>
              <div className="me-3">
                <p className="mb-0">Infant</p>
                <div className="d-flex align-items-center justify-content-center">
                  <FaBaby/>
                  <p className="me-2 mb-0">2</p>
                </div>
              </div>
              <div className="me-3">
                <p className="mb-0">Pets</p>
                <div className="d-flex align-items-center justify-content-center">
                  <IoPawOutline/>
                  <p className="me-2 mb-0">2</p>
                </div>
              </div>
          </div>
        </div>
        <div>
          <label htmlFor="message" className="fw-semi">Welcome Message</label>
          <input type="text" className="w-100 form-control shadow-none" name="" id="message" placeholder="Dummy Text Here" />
        </div>
        <div className="mt-3">
          <label htmlFor="instruction" className="fw-semi">Special Instructions</label>
          <input type="text" className="w-100 form-control shadow-none" name="" id="instruction" placeholder="Dummy Text Here" />
        </div>
      </div>
    </div>
  )
}

export default CleaningTask
