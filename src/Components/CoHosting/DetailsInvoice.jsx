import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import Property from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
function DetailsInvoice() {
  const DataCollection = [
    {
      id: 1,
      Properties: Property,
      FeeType: "123 456 789",
      Balance: "$3,000.00",
      status: "Open",
    },
    {
        id: 1,
        Properties: Property,
        FeeType: "123 456 789",
        Balance: "$3,000.00",
        status: "Paid",
      },
      {
        id: 1,
        Properties: Property,
        FeeType: "123 456 789",
        Balance: "$3,000.00",
        status: "Overdue",
      },
      {
        id: 1,
        Properties: Property,
        FeeType: "123 456 789",
        Balance: "$3,000.00",
        status: "Open",
      },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Overdue":
        return "text-danger";
      case "Paid":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow searchName="Invoice" btnName="Create Invoice" btnLink="/admin/add-invoice" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Properties</th>
              <th className="small fw-semi text-black text-nowrap">Fee Type</th>
              <th className="small fw-semi text-black text-nowrap">Balance</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                <img
                    src={data.Properties}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                </td>
                <td className="small text-black text-nowrap">{data.FeeType}</td>
                <td className="small text-black text-nowrap">{data.Balance}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <FaDollarSign className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <FaEye className="fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className=" fs-5" />
                    </Link>
                    <Link to="" className="mx-1 tblicon">
                      <HiTrash className=" fs-5" />
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

export default DetailsInvoice;

