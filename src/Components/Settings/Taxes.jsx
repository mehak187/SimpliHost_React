import React from "react";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";

function Taxes() {
  const DataCollection = [
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      Properties: property,
      CollectedBy:"OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      Properties: property,
      CollectedBy:"OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      Properties: property,
      CollectedBy:"OTA",
    },
    {
      id: 1,
      TaxType: "Tax Type here",
      TaxName: "Tax name here",
      Percentage: "10%",
      Properties: property,
      CollectedBy:"OTA",
    },
  ];
  
  return (
    <div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle border-bottom-0">
              <th className="small fw-semi text-black text-nowrap">Tax Type</th>
              <th className="small fw-semi text-black text-nowrap">Tax Name</th>
              <th className="small fw-semi text-black text-nowrap">Percentage</th>
              <th className="small fw-semi text-black text-nowrap">Properties</th>
              <th className="small fw-semi text-black text-nowrap">Collected by</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.TaxType}
                </td>
                <td className="small text-black text-nowrap">
                  {data.TaxName}
                </td>
                <td className="small text-black text-nowrap">
                  {data.Percentage}
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
                <td className="small text-black text-nowrap">
                  {data.CollectedBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Taxes
