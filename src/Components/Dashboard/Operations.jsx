import React from 'react';
import { GrUpload } from 'react-icons/gr';
import QuickFilter from './Common/QuickFilter';
import { CiStar } from 'react-icons/ci';
import UserImg from '../../assets/img/user.png';
import LcdImg from '../../assets/img/donut.png';
import TaskDonutChart from './TaskDonutChart';

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

const Maintenance = ({ title, value, image }) => (
  <div className="col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);

const Inventory = ({ title, value, image }) => (
  <div className="col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);

const Invoice = ({ title, value, image }) => (
  <div className="col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);

const Messaging = ({ title, value, image }) => (
  <div className="col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between">
      <div>
        <p className="mb-0 small">{title}</p>
        <h4 className="fw-semibold">{value}</h4>
      </div>
      <img src={image} alt={title} />
    </div>
  </div>
);
function Operations() {

  const userStats = [
    { title: 'Overdue Cleaning', value: '689', image: UserImg },
    { title: 'Overdue Inspections', value: '689', image: UserImg },
    { title: 'Overdue Maintenance', value: '689', image: UserImg },
    { title: 'Overdue Admin', value: '689', image: UserImg },
  ];

  const userMaintenance = [
    { title: 'Overdue Maintenance Items', value: '689', image: UserImg },
    { title: 'Upcoming Maintenance Items', value: '689', image: UserImg },
  ];

  const userInventory = [
    { title: 'Low Stock Inventory', value: '689', image: UserImg },
    { title: 'Out Of Stock Inventory', value: '689', image: UserImg },
  ];

  const userInvoice = [
    { title: 'Open Invoices', value: '689', image: UserImg },
    { title: 'Overdue Invoices', value: '689', image: UserImg },
  ];

  const userMessaging = [
    { title: 'Missing Welcome Message', value: '689', image: UserImg },
    { title: 'Unread Messages', value: '689', image: UserImg },
  ];


  return (
    <div>
      <div className="d-sm-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <h4 className="fw-semibold">
            Today at a Glance <CiStar />
          </h4>
          <QuickFilter className="ms-2" />
        </div>
        <div className="dropdown">
          <button
            className="bg-white border py-2 px-3 rounded-2 dropdown-toggle d-flex align-items-center"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <GrUpload className="me-2" /> Export
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </div>
      <div className="row mt-3">
        <h5 className='fw-semi'>Overdue Tasks by Type</h5>
        {userStats.map((stat, index) => (
          <StatCard key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
      </div>
      <div className="row mt-3">
        <div className="col-xl-6 mb-3">
          <div className="row mt-3">
            <h5 className='fw-semi'>Upcoming and Overdue Maintenance</h5>
          {userMaintenance.map((stat, index) => (
          <Maintenance key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
          </div>
          <div className="row mt-3">
            <h5 className='fw-semi'>Inventory Statuses</h5>
          {userInventory.map((stat, index) => (
          <Inventory key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
          </div>
          <div className="row mt-3">
            <h5 className='fw-semi'>Owner Invoices</h5>
          {userInvoice.map((stat, index) => (
          <Invoice key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
          </div>
          <div className="row mt-3">
            <h5 className='fw-semi'>Guest Messaging</h5>
          {userMessaging.map((stat, index) => (
          <Messaging key={index} title={stat.title} value={stat.value} image={stat.image} />
        ))}
          </div>
        </div>
        <div className="col-xl-6 mb-3">
            <div className="row">
                <div className="col-sm-6">
                    <div className='bg-white shadow rounded-3 p-2'>
                      <div className='d-flex align-items-center'>
                        <div>
                          <img src={LcdImg} alt="" />
                        </div>
                        <div>
                          <h6 className='fw-semi mb-0 ms-2'>Open Tasks by Type</h6>
                        </div>
                      </div>
                      <TaskDonutChart/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Operations;
