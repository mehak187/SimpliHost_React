import React from 'react'
import { CiStar } from "react-icons/ci";
import QuickFilter from './Common/QuickFilter';
import { GrUpload } from 'react-icons/gr';

function Taxes() {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
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
    </div>
  )
}

export default Taxes
