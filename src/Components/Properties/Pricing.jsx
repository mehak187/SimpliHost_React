import React from 'react';
import PropertyMain from '../../assets/img/property-main.png';
import TableOne from '../../assets/img/table-1.png';
import TableTwo from '../../assets/img/table-2.png';
import TableThree from '../../assets/img/table-3.png';
import { Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const listings = [
  { name: 'Year Round Hot Tub, Walk to Lake & Dog Friendly', img: TableOne },
  { name: 'The Retreat-Sleeps 6', img: TableTwo },
  { name: 'Year Retreat Hot Tub, Walk to Lake & Dog Friendly', img: TableThree },
];

const discounts = [
  { name: 'Weekly Discount', description: 'For stays of 7 nights or more', img: TableOne },
  { name: 'Monthly Discount', description: 'For stays of 28 nights or more', img: TableOne },
  { name: 'Year Round Hot Tub, Walk to Lake & Dog Friendly', img: TableOne },
];

const fees = [
  { name: 'Cleaning Fee', img: TableOne },
  { name: 'Linens Fee', img: TableOne },
  { name: 'Resort Fee', img: TableOne },
  { name: 'Management Fee', img: TableOne },
  { name: 'Community Fee', img: TableOne },
  { name: 'Pet Fee', img: TableOne },
  { name: 'Extra Guest Fee', img: TableOne },
  { name: 'Pool/Hot Tub Fee', img: TableOne },
];

function Pricing() {
  return (
    <div>
      <div className="bg-white p-3 rounded-3 shadow">
        <h5 className="fw-semi mb-0">Pricing</h5>
      </div>

      <div className="row mt-4">
        <div className="col-lg-10">
          <h6 className="fw-semi">Listing Markups</h6>
          <p className="small mb-0">Set the percentage that will be added to your nightly rate, when you make future price updates from the property...</p>
          
          <div className="main-table table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Listing</th>
                  <th>Markup rate</th>
                </tr>
              </thead>
              <tbody>
                {listings.map((listing, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={PropertyMain} alt="Property" className="prop-img" />
                        <div className="ps-2">
                          <p className="fw-semi mb-0">{listing.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <img src={listing.img} alt="Table" className="table-img me-2 shadow-sm" />
                        <input type="number" className="form-control shadow-none in-s" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h6 className="fw-semi">Discounts</h6>
            <p className="small mb-0">Help your place stand out to get booked faster and earn your first reviews.</p>
          </div>

          <div className="main-table table-responsive mt-3">
            <table className="table">
              <tbody>
                {discounts.map((discount, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <Switch {...label} defaultChecked />
                        <input type="number" className="form-control shadow-none in-s max" placeholder="50%" />
                        <div className="ps-2 w-100">
                          <p className="fw-semi mb-0">{discount.name}</p>
                          {discount.description && <p className="mb-0 ex-small">{discount.description}</p>}
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <img src={discount.img} alt="Table" className="table-img me-2 shadow-sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-4">
            <h6 className="fw-semi">Additional Fees</h6>
          </div>

          <div className="main-table table-responsive mt-3">
            <table className="table">
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={index}>
                    <td>
                      <div className="d-flex align-items-center">
                        <input type="number" className="form-control shadow-none in-s max" placeholder="$20%" />
                        <div className="ps-2 w-100">
                          <p className="fw-semi mb-0">{fee.name}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-end">
                      <img src={fee.img} alt="Table" className="table-img me-2 shadow-sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
