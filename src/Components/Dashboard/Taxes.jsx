import React from 'react'
import { CiStar } from "react-icons/ci";
import QuickFilter from './Common/QuickFilter';
import { GrUpload } from 'react-icons/gr';
import TaxesCollected from '../../assets/img/TaxesCollected.png';
import TaxesOwed from '../../assets/img/TaxesOwed.png';
import { Link } from 'react-router-dom';
import { BiSolidFileExport } from 'react-icons/bi';
import DateCalendarPicker from './Common/DateCalendarPicker';

const StatCard = ({ title, value, image }) => (
  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} className='md-img'/>
    </div>
  </div>
);

function Taxes() {
  const userStats = [
    { title: 'Taxes Total', value: '$40,689', image: TaxesCollected },
    { title: 'Host Responsible Taxes', value: '$40,689', image: TaxesOwed },
    { title: 'Platform Responsible Taxes', value: '$40,689', image: TaxesOwed },
  ];
  return (
    <div>
      <div className="d-lg-flex align-items-center justify-content-between">
        <div className='d-md-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
              Occupancy Taxes  <CiStar />
          </h4>
          </div>
          <div className='d-sm-flex align-items-center justify-content-end my-sm-0 my-2'>
          <div className='mx-sm-2 mt-sm-0 mt-2'>
            <QuickFilter/>
          </div>
          <div className='mx-sm-2 mt-sm-0 mt-2'>
            <DateCalendarPicker/>
          </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border w-100 py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center justify-content-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
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
    </div>
  )
}

export default Taxes
