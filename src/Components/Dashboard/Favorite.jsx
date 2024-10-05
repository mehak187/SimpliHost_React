import React from 'react';
import { CiFilter, CiStar } from 'react-icons/ci';
import UserImg from '../../assets/img/user.png';
import LineGraph from './LineGraph';

const StatCard = ({ title, value, image }) => {
  return (
    <div className='col-3 mb-3'>
      <div className='bg-white shadow rounded-3 p-3 d-flex align-items-center justify-content-between'>
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
    { title: 'Total Users', value: '40,689', image: UserImg },
    { title: 'Total Users', value: '40,689', image: UserImg },
    { title: 'Total Users', value: '40,689', image: UserImg },
    { title: 'Total Users', value: '40,689', image: UserImg },
    { title: 'Total Users', value: '40,689', image: UserImg },
  ];

  return (
    <div>
      <div className='d-flex'>
        <div>
          <h4 className='fw-semibold'>
            Name of Favorite Dashboard Here <CiStar />
          </h4>
        </div>
        <div className='ms-2'>
          <div className='border bg-white py-2 px-2 d-flex align-items-center rounded-3'>
            <CiFilter />
            <select name="" id="" className='border-0 bg-transparent'>
              <option value="">Filter</option>
            </select>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        {userStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
      </div>
      <div className="row">
        <div className="col-8">
          <div className='bg-white shadow p-2 rounded-3'>
              <LineGraph/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
