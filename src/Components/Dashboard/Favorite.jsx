import React from 'react';
import { CiFilter, CiStar } from 'react-icons/ci';
import UserImg from '../../assets/img/user.png';
import LineGraph from './LineGraph';
import QuickFilter from './Common/QuickFilter';
import { GrUpload } from 'react-icons/gr';
import { BiSolidFileExport } from "react-icons/bi";
import { Link } from 'react-router-dom';

const StatCard = ({ title, value, image }) => {
  return (
    <div className='col-xl-3 col-lg-4 col-sml-6 mb-3'>
      <div className='bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between'>
        <div>
          <p className='mb-0 small'>{title}</p>
          <h4 className='fw-semibold'>{value}</h4>
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

function Favorite() {
  const userStats = [
    { title: 'Total Users', value: '40,689', image: UserImg },
    { title: 'Total Inventory', value: '102', image: UserImg },
    { title: 'Total Sales', value: '$ 324,3400', image: UserImg },
    { title: 'Total cleaners', value: '34', image: UserImg },
    { title: 'Total inbox message', value: '40,689', image: UserImg },
    { title: 'Total property listings', value: '40', image: UserImg },
  ];

  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between">
        <div className='d-flex align-items-center'>
          <div>
            <h4 className="fw-semibold">
              Name of your Favorite Dashboard here<CiStar />
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
      <div className="row">
        <div className="col-lg-8">
          <div className='bg-white shadow p-2 rounded-3 main-canvas'>
            <div className='d-flex align-items-center justify-content-between'>
              <div>
                 <h5 className='fw-semi'>Property Sales Details</h5>
              </div>
              <div>
                <select name="" className='form-select shadow-none' id="">
                  <option value="">October</option>
                </select>
              </div>
            </div>
              <LineGraph/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
