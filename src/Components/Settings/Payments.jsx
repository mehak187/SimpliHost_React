import React from "react";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";
import payment1 from "../../assets/img/paymentType1.png";
import payment2 from "../../assets/img/paymentType2.png";
import payment3 from "../../assets/img/paymentType3.png";
import payment4 from "../../assets/img/paymentType4.png";
import payment5 from "../../assets/img/paymentType5.png";

import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";

function Payments() {
  const DataCollection = [
    {
      id: 1,
      Type: payment1,
      AccountName: "Beth",
      AccountNumber: "**** **** **** 9090",
      Properties: property,
    },
    {
      id: 1,
      Type: payment2,
      AccountName: "Beth",
      AccountNumber: "**** **** **** 9090",
      Properties: property,
    },
    {
      id: 1,
      Type: payment3,
      AccountName: "Beth",
      AccountNumber: "**** **** **** 9090",
      Properties: property,
    },
    {
      id: 1,
      Type: payment4,
      AccountName: "Beth",
      AccountNumber: "**** **** **** 9090",
      Properties: property,
    },
    {
      id: 1,
      Type: payment5,
      AccountName: "Beth",
      AccountNumber: "**** **** **** 9090",
      Properties: property,
    },
  ];

  return (
    <div className="">
      <div className="d-flex justify-content-end align-items-center">
        <Link className="d-inline-block mt-3 border border-1 border-primary rounded-3 px-4 py-2 text-decoration-none">
          Add Payment
        </Link>
      </div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle border-bottom-0">
              <th className="small fw-semi text-black text-nowrap">Type</th>
              <th className="small fw-semi text-black text-nowrap">
                Name of Account
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Account Number
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Properties Associated To
              </th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">
                  <div className="d-flex align-items-center">
                    <img
                      src={data.Type}
                      alt="property-img"
                      className="me-2 payment-img"
                    />
                  </div>
                </td>
                <td className="small text-black text-nowrap">
                  {data.AccountName}
                </td>
                <td className="small text-black text-nowrap">
                  {data.AccountNumber}
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
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <HiTrash className="fs-5" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Payments;
