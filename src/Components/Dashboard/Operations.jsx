import React from 'react';
import { GrUpload } from 'react-icons/gr';
import QuickFilter from './Common/QuickFilter';
import UserImg from '../../assets/img/user.png';
import OL from '../../assets/img/OI.png';
import Clearance from '../../assets/img/clearence.png';
import OM from '../../assets/img/OM.png';
import OverdueAdmin from '../../assets/img/OverdueAdmin.png';
import OMI from '../../assets/img/OMI.png';
import UMI from '../../assets/img/UMI.png';
import LSI from '../../assets/img/LSI.png';
import OSI from '../../assets/img/OSI.png';
import Openinvoices from '../../assets/img/openinvoices.png';
import Overdueinvoices from '../../assets/img/overdueinvoices.png';
import MWM from '../../assets/img/MWM.png';
import UM from '../../assets/img/UM.png';
import LcdImg from '../../assets/img/donut.png';
import TaskDonutChart from './TaskDonutChart';
import { BiSolidFileExport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import DateCalendarPicker from './Common/DateCalendarPicker';
import { BsStarFill } from 'react-icons/bs';

const StatCard = ({ title, value, image }) => (
  <div className="col-xl-3 col-lg-4 col-sm-6 mb-3">
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
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
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
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
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
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
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
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
    <div className="bg-white shadow rounded-3 p-2 d-flex align-items-center justify-content-between border">
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
    { title: 'Overdue Cleaning', value: '689', image: Clearance },
    { title: 'Overdue Inspections', value: '689', image: OL },
    { title: 'Overdue Maintenance', value: '689', image: OM },
    { title: 'Overdue Admin', value: '689', image: OverdueAdmin },
  ];

  const userMaintenance = [
    { title: 'Overdue Maintenance Items', value: '689', image: OMI },
    { title: 'Upcoming Maintenance Items', value: '689', image: UMI },
  ];

  const userInventory = [
    { title: 'Low Stock Inventory', value: '689', image: LSI },
    { title: 'Out Of Stock Inventory', value: '689', image: OSI },
  ];

  const userInvoice = [
    { title: 'Open Invoices', value: '689', image: Openinvoices },
    { title: 'Overdue Invoices', value: '689', image: Overdueinvoices },
  ];

  const userMessaging = [
    { title: 'Missing Welcome Message', value: '689', image: MWM },
    { title: 'Unread Messages', value: '689', image: UM },
  ];


  return (
    <div>
      <div className="d-xl-flex align-items-center justify-content-between">
        <div className="d-lg-flex align-items-center">
          <h4 className="fw-semibold">
            Today at a Glance <BsStarFill className='text-warning'/>
          </h4>
          <div className='d-sm-flex justify-content-end'>
          <div className='mx-sm-2'>
            <QuickFilter />
          </div>
          <div className='my-sm-0 my-2'>
            <DateCalendarPicker/>
          </div>
          </div>
        </div>
        <div className="dropdown">
          <button className="bg-white border py-2 px-3 w-100 justify-content-center rounded-2 dropdown-toggle d-flex align-items-center" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <GrUpload className="me-2" />Export
          </button>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2'/>Export to Excel</Link></li><hr className='m-0'></hr>
            <li><Link className="dropdown-item" to="#"><BiSolidFileExport className='text-blue mb-1 me-2'/>Export to Pdf</Link></li>
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
