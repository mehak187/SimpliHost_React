import React from 'react'
import { CiStar } from "react-icons/ci";
import QuickFilter from './Common/QuickFilter';
import { GrUpload } from 'react-icons/gr';
import UserImg from '../../assets/img/user.png';

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

function Taxes() {
  const userStats = [
    { title: 'Taxes Total', value: '$40,689', image: UserImg },
    { title: 'Host Responsible Taxes', value: '$40,689', image: UserImg },
    { title: 'Platform Responsible Taxes', value: '$40,689', image: UserImg },
  ];
  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
              Occupancy Taxes  <CiStar />
          </h4>
          </div>
          <div className='ms-2'>
            <QuickFilter/>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <GrUpload className="me-2" />Export
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
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
