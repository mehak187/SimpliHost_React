import React from 'react'
import Property from '../../assets/img/property-1.png'
import TableOne from '../../assets/img/table-1.png'
import { BsBoxArrowUpRight } from "react-icons/bs";
import TimeIn from '../../assets/img/time-in.png'
import TimeOut from '../../assets/img/time-out.png'
import NightStar from '../../assets/img/night-star.png'
import ProgressDollar from '../../assets/img/progress-dollar.png'


function RightChat() {
    return (
        <div className=''>
            <div className='r-scroll'>
                <div className='bg-lgrey p-2 rounded-3 h-100'>
                    <div className='d-flex align-items-center bg-white p-2 rounded-3 mb-2'>
                        <div>
                            <img src={Property} alt="" className='pr-img' />
                        </div>
                        <div className='ps-2'>
                            <h6 className='mb-0 fw-semi'>Property Name Here</h6>
                            <div className='d-flex'>
                                <p className='mb-0 fw-semi'>Status:</p>
                                <p className='text-blue mb-0 fw-semi'>Occupied</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-2 rounded-3 mb-2'>
                        <div className='d-flex justify-content-between'>
                            <div className='d-flex align-items-center'>
                                <div>
                                    <img src={TableOne} alt="" className='md1-img ' />
                                </div>
                                <div className='ps-2'>
                                    <h6 className='mb-0 fw-semi'>Property address here Property address here</h6>
                                </div>
                            </div>
                            <div className='ps-2'>
                                <BsBoxArrowUpRight />
                            </div>
                        </div>
                        <div>
                            <p className='text-blue fw-semi'>Booked</p>
                            <p>HM5F9TFQFF - Booked on 1/11</p>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-7">
                                <div className='d-flex align-items-center mb-2'>
                                    <div>
                                        <img src={TimeIn} alt="" />
                                    </div>
                                    <div className='ps-2'>
                                        <p className='ex-small mb-0 fw-semi'>Friday, Jan 09, 2024</p>
                                    </div>
                                </div>
                                <div className='d-flex align-items-center mb-2'>
                                    <div>
                                        <img src={TimeOut} alt="" />
                                    </div>
                                    <div className='ps-2'>
                                        <p className='ex-small mb-0 fw-semi'>Sunday, Jan 11, 2024</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div>
                                    <select name="" id="" className='selection-op'>
                                        <option value="" >03:00pm</option>
                                    </select>
                                </div>
                                <div className='mt-2'>
                                    <select name="" id="" className='selection-op'>
                                        <option value="">03:00pm</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex align-items-center '>
                            <div className='d-flex align-items-center '>
                                <div>
                                    <img src={NightStar} alt="" />
                                </div>
                                <div className='ms-2'> 
                                    <p className='mb-0 fw-semi'>02</p>
                                </div>
                            </div>
                            <div className='d-flex align-items-center ms-3'>
                                <div>
                                    <img src={ProgressDollar} alt="" />
                                </div>
                                <div className='ms-2'> 
                                    <p className='mb-0 fw-semi'>$624.11</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white p-2 rounded-3'>
                        <form action="">
                            <div className='mb-2'>
                                <label htmlFor="" className='fw-semi'>Internal Notes</label>
                                <input type="text" name="" className='inputstyle py-2 border-0' id="" placeholder='Type here'/>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='fw-semi'>Welcome Message</label>
                                <input type="text" name="" className='inputstyle py-2 border-0' id="" placeholder='Type here'/>
                            </div>
                            <div className='mb-2'>
                                <label htmlFor="" className='fw-semi'>Special Instructions</label>
                                <input type="text" name="" className='inputstyle py-2 border-0' id="" placeholder='Type here'/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightChat
