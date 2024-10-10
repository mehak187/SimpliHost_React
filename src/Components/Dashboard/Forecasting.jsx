import React from 'react'
import DonutChart from './DonutChart'
import { CiStar } from 'react-icons/ci'
import QuickFilter from './Common/QuickFilter'
import { GrUpload } from 'react-icons/gr'
import UserImg from '../../assets/img/user.png';
import { IoPawOutline } from 'react-icons/io5'
import PetsDonut from './PetsDonut'
import LcdImg from '../../assets/img/donut.png';
import BarChart from './BarChart'
import { Link } from 'react-router-dom'
import { BiSolidFileExport } from 'react-icons/bi'
import DateCalendarPicker from './Common/DateCalendarPicker'


const StatCard = ({ title, value, image }) => (
  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);

const RevenueCard = ({ title, value, image }) => (
  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
    <div className="bg-white p-2 rounded-3 shadow d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h6 className="fw-semibold fs-4">{value}</h6>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);


function Forecasting() {
  const userStats = [
    { title: 'Number of Check-Ins', value: '$40,689', image: UserImg },
    { title: 'Number of Check-Outs', value: '$40,689', image: UserImg },
    { title: 'Current Number of Guests', value: '$40,689', image: UserImg },
  ];

  const revenueData = [
    { title: 'Gross Revenue', value: '$40,689', image: UserImg },
    { title: 'Occupancy Rate', value: '20%', image: UserImg },
    { title: 'Avg Nightly Rate', value: '$40,689', image: UserImg },
    { title: 'Number of Forecasting', value: '$40,689', image: UserImg },
    { title: 'Number of Cancellations', value: '10', image: UserImg },
    { title: 'Number of Nights', value: '29', image: UserImg },
    { title: 'Number of Blocked Nights', value: '29', image: UserImg },
    { title: 'RevPAR', value: '$40,689', image: UserImg },
    { title: 'Avg Booking Days', value: '10', image: UserImg },
    { title: 'Avg LOS', value: '3.25', image: UserImg },
    { title: 'Cleaning Fees', value: '$40,689', image: UserImg },
    { title: 'Platform Fees', value: '$40,689', image: UserImg },
  
  ];
  
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2">
        <div className='d-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
            Forcasting Dashboard <CiStar />
          </h4>
          </div>
          <div className='mx-2'>
            <QuickFilter className=''/>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <GrUpload className="me-2" />Export
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2 fs-4'/>Export to Excel</Link></li><hr className='m-0'></hr>
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2 fs-4'/>Export to Pdf</Link></li>
          </ul>
        </div>
      </div>
      <div className='row mt-3'>
          <div className="col-6">
          <div className='d-flex align-items-center'>
            <h6 className='mb-0 fw-semi'>Report Period:</h6>
            <div className='ms-2'>
              <DateCalendarPicker />
            </div>
          </div>
          </div>
      </div>
      <div className="row mt-3">
        {userStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
      </div>

      <div className="row mt-4">
        <h5 className="fw-semibold">Reservation Dashboard</h5>
        {revenueData.map((revenue, index) => (
          <RevenueCard key={index} title={revenue.title} value={revenue.value} image={revenue.image} />
        ))}
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
          <div className='bg-white shadow rounded-3 p-2'>
            <div className='d-flex align-items-center'>
              <div>
                <img src={LcdImg} alt="" />
              </div>
              <div className='ms-2'>
                <h6 className='mb-0 fw-semibold'>Revenue by Platform</h6>
              </div>
            </div>
            <DonutChart/>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
          <div className='bg-white shadow rounded-3 p-2'>
            <div className='d-flex align-items-center'>
              <div>
                <img src={LcdImg} alt="" />
              </div>
              <div className='ms-2'>
                <h6 className='mb-0 fw-semibold'>Bookings by Platform</h6>
              </div>
            </div>
            <DonutChart/>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
          <div className='bg-white shadow rounded-3 p-2'>
            <div className='d-flex align-items-center'>
              <div>
               <IoPawOutline className='fs-4 text-blue'/>
              </div>
              <div className='ms-2'>
                <h6 className='mb-0 fw-semi'>Pets Percentage</h6>
              </div>
            </div>
            <PetsDonut/>
          </div>
        </div>
        <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
          <div className='bg-white shadow rounded-3 p-2'>
            <div className='d-flex align-items-center'>
              <div>
               <IoPawOutline className='fs-4 text-blue'/>
              </div>
              <div className='ms-2'>
                <h6 className='mb-0 fw-semi'>Pets Revenue</h6>
              </div>
            </div>
            <PetsDonut/>
          </div>
        </div>
      </div>
      <div className=''>
          <div className='bg-white shadow rounded-3 p-2'>
            <BarChart/>
          </div>
        </div>
    </div>
  )
}

export default Forecasting



