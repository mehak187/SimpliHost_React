import React from 'react';
import { CiStar } from "react-icons/ci";
import { GrUpload } from "react-icons/gr";
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
import PF from '../../assets/img/PF.png';
import GPF from '../../assets/img/GPF.png';
import LcdImg from '../../assets/img/donut.png';
import DonutChart from './DonutChart';
import PetsDonut from './PetsDonut';
import { IoPawOutline } from "react-icons/io5";
import BarChart from './BarChart';
import QuickFilter from './Common/QuickFilter';
import { Link } from 'react-router-dom';
import { BiSolidFileExport } from 'react-icons/bi';

// Reusable StatCard component
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

// Reusable RevenueCard component
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

function Snapshot() {
  const userStats = [
    { title: 'Number of Check-Ins', value: '233', image: CheckIn },
    { title: 'Number of Check-Outs', value: '20%', image: CheckOut },
    { title: 'Current Number of Guests', value: '600', image: Guest },
    { title: 'Number of Reservations', value: '689', image: NFR },
  ];

  const revenueData = [
    { title: 'Gross Revenue', value: '$40,689', image: Revenue },
    { title: 'Occupancy Rate', value: '20%', image: Occupancyrate },
    { title: 'Avg Nightly Rate', value: '$40,689', image: ANR },
    { title: 'Number of Cancellations', value: '10', image: Cancelations },
    { title: 'Number of Nights', value: '29', image: Nights },
    { title: 'Number of Blocked Nights', value: '29', image: NBLOCKEDN },
    { title: 'RevPAR', value: '$40,689', image: RevPAR },
    { title: 'Avg Booking Days', value: '10', image: BookingDays },
    { title: 'Avg LOS', value: '3.25', image: AvgLOS },
    { title: 'Cleaning Fees', value: '$40,689', image: Clearance },
    { title: 'Platform Fees', value: '$40,689', image: PF },
    { title: 'Gross Payout after Fees', value: '$40,689', image: GPF },

  ];

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
              Snapshot Dashboard <CiStar />
          </h4>
          </div>
          <div className='mx-2'>
            <QuickFilter/>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <GrUpload className="me-2" />Export
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2'/>Export to Excel</Link></li><hr className='m-0'></hr>
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2'/>Export to Pdf</Link></li>
          </ul>
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
                <h6 className='mb-0 fw-semi'>Pets</h6>
              </div>
            </div>
            <PetsDonut/>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className='col-12'>
            <div className='bg-white shadow rounded-3 p-2'>
              <BarChart/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Snapshot;
