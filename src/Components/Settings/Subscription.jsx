import React from "react";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";

function Subscription() {
  const DataCollection = [
    {
      id: 1,
      CurrentPlan: "Pro Plan",
      CurrentUsers: "3 Active Users",
      Properties: property,
    },
    {
      id: 1,
      CurrentPlan: "Pro Plan",
      CurrentUsers: "3 Active Users",
      Properties: property,
    },
    {
      id: 1,
      CurrentPlan: "Pro Plan",
      CurrentUsers: "3 Active Users",
      Properties: property,
    },
    {
      id: 1,
      CurrentPlan: "Pro Plan",
      CurrentUsers: "3 Active Users",
      Properties: property,
    },
  ];
  
  return (
    <div className="h-100 d-flex flex-column">
      <div className="table-responsive default-table mt-3">
        <table className="table w-100">
          <thead className="w-100">
            <tr className="align-middle border-bottom-0">
              <th className="small fw-semi text-black text-nowrap">Current Plan</th>
              <th className="small fw-semi text-black text-nowrap">Current Users</th>
              <th className="small fw-semi text-black text-nowrap">Total Active Properties</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.CurrentPlan}
                </td>
                <td className="small text-black text-nowrap">
                  {data.CurrentUsers}
                </td>
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                  <img
                    src={data.Properties}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  </div>
                </td>
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
      <Link to="#" className='graybutton text-decoration-none rounded-2 me-4 text-black'>Cancel Plan</Link>
      </div>
    </div>
  )
}

export default Subscription