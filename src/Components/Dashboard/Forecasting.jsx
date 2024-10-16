import React from 'react'
import DonutChart from './DonutChart'
import { CiStar } from 'react-icons/ci'
import QuickFilter from './Common/QuickFilter'
import { GrUpload } from 'react-icons/gr'
import CheckIn from '../../assets/img/checkin.png';
import CheckOut from '../../assets/img/checkout.png';
import Guest from '../../assets/img/guests.png';
import Occupancyrate from '../../assets/img/Occupancyrate.png';
import Revenue from '../../assets/img/Revenue.png';
import ANR from '../../assets/img/ANR.png';
import NFR from '../../assets/img/NFR.png';
import Cancelations from '../../assets/img/Cancelations.png';
import Nights from '../../assets/img/nights.png';
import NBLOCKEDN from '../../assets/img/NBLOCKEDN.png';
import RevPAR from '../../assets/img/RevPAR.png';
import BookingDays from '../../assets/img/BookingDays.png';
import AvgLOS from '../../assets/img/AvgLOS.png';
import Clearance from '../../assets/img/clearence.png';
import TaxesCollected from '../../assets/img/TaxesCollected.png';
import TaxesOwed from '../../assets/img/TaxesOwed.png';
import PF from '../../assets/img/PF.png';
import paidInvoices from '../../assets/img/paidInvoices.png';
import overdueinvoices from '../../assets/img/overdueinvoices.png';
import { IoPawOutline } from 'react-icons/io5'
import PetsDonut from './PetsDonut'
import LcdImg from '../../assets/img/donut.png';
import BarChart from './BarChart'
import { Link } from 'react-router-dom'
import { BiSolidFileExport } from 'react-icons/bi'
import DateCalendarPicker from './Common/DateCalendarPicker'
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

const StatCard = ({ title, value, image, trend }) => {
  const isTrendDown = trend < 0 || trend <= 50;
  const trendIcon = isTrendDown ? <FaArrowTrendDown /> : <FaArrowTrendUp />;
  const trendColor = isTrendDown ? 'bg-lred' : 'bg-lblue';

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
      <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
        <div>
          <div className='d-flex align-items-center'>
            <div>
              <p className="mb-0 small">{title}</p>
            </div>
            <div className='ms-2'>
              <p className={`mb-0 ${trendColor} max rounded-pill py-1 px-3 ex-small`}>
                {trendIcon} {Math.abs(trend)}%
              </p>
            </div>
          </div>
          <h4 className="fw-semibold">{value}</h4>
        </div>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

const RevenueCard = ({ title, value, image, trend }) => {
  const isTrendDown = trend < 0 || trend <= 50;
  const trendIcon = isTrendDown ? <FaArrowTrendDown /> : <FaArrowTrendUp />;
  const trendColor = isTrendDown ? 'bg-lred' : 'bg-lblue';

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
      <div className="bg-white p-2 rounded-3 shadow d-flex align-items-center justify-content-between border">
        <div>
          <div className='d-flex align-items-center'>
            <div>
              <p className="mb-0 small">{title}</p>
            </div>
            <div className='ms-2'>
              <p className={`mb-0 ${trendColor} max rounded-pill py-1 px-3 ex-small`}>
                {trendIcon} {Math.abs(trend)}%
              </p>
            </div>
          </div>
          <h6 className="fw-semibold fs-4">{value}</h6>
        </div>
        <img src={image} alt={title} className='md-img' />
      </div>
    </div>
  );
};

function Forecasting() {
  const userStats = [
    { title: 'Taxes Owed', value: '$40,689', image: CheckIn, trend: -50 },
    { title: 'Taxes Collected', value: '$40,689', image: TaxesCollected, trend: 80 },
    { title: 'Open Invoices', value: '$40,689', image: TaxesOwed, trend: -10 },
    { title: 'Paid Invoices', value: '$40,689', image: paidInvoices, trend: 20 },
    { title: 'Overdue Invoices', value: '$40,689', image: overdueinvoices, trend: 5 },
  ];

  const revenueData = [
    { title: 'Gross Revenue', value: '$40,689', image: Revenue, trend: 30 },
    { title: 'Occupancy Rate', value: '20%', image: Occupancyrate, trend: -50 },
    { title: 'Avg Nightly Rate', value: '$40,689', image: ANR, trend: 10 },
    { title: 'Number of Forecasting', value: '$40,689', image: NFR, trend: -20 },
    { title: 'Number of Cancellations', value: '10', image: Cancelations, trend: -15 },
    { title: 'Number of Nights', value: '29', image: Nights, trend: 40 },
    { title: 'Number of Blocked Nights', value: '29', image: NBLOCKEDN, trend: 50 },
    { title: 'RevPAR', value: '$40,689', image: RevPAR, trend: 20 },
    { title: 'Avg Booking Days', value: '10', image: BookingDays, trend: -5 },
    { title: 'Avg LOS', value: '3.25', image: AvgLOS, trend: 12 },
    { title: 'Cleaning Fees', value: '$40,689', image: Clearance, trend: -30 },
    { title: 'Platform Fees', value: '$40,689', image: PF, trend: 5 },
  ];
  
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between border-bottom pb-2">
        <div className='d-sm-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
            Forcasting Dashboard <CiStar />
          </h4>
          </div>
          <div className='mx-sm-2 my-sm-0 my-2'>
            <QuickFilter className=''/>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border w-100 py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <GrUpload className="me-2" />Export
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2 fs-4'/>Export to Excel</Link></li><hr className='m-0'></hr>
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2 fs-4'/>Export to Pdf</Link></li>
          </ul>
        </div>
      </div>
      <div className='row mt-3'>
          <div className="col-xl-5">
          <div className='d-sm-flex align-items-center'>
            <h6 className='mb-0 fw-semi'>Report Period:</h6>
            <div className='ms-sm-2 mt-sm-0 mt-2'>
              <DateCalendarPicker />
            </div>
          </div>
          </div>
          <div className="col-xl-6 col-lg-9 mt-xl-0 mt-3">
          <div className='d-sm-flex align-items-center'>
            <h6 className='mb-0 fw-semi text-nowrap'>Compare another Period:</h6>
            <div className='ms-sm-2 w-100 mt-sm-0 mt-2'>
              <select name="" id="" className='form-select'>
                <option value="">None</option>
              </select>
            </div>
          </div>
          </div>
      </div>
      <div className="row mt-3">
        {userStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} image={stat.image} trend={stat.trend} />
        ))}
      </div>

      <div className="row mt-4">
        <h5 className="fw-semibold">Reservation Dashboard</h5>
        {revenueData.map((revenue, index) => (
          <RevenueCard key={index} title={revenue.title} value={revenue.value} image={revenue.image} trend={revenue.trend} />
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



