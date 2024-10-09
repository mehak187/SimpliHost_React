import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";
import { FaDollarSign } from "react-icons/fa";
import OwnerDetailBox from "./OwnerDetailBox";
function CoHostExpenses() {
  const DataCollection = [
    {
      id: 1,
      ExpenseName: "FreeText",
      ExpenseType: "Kitchen Gas",
      Recurring: "Yes",
      LastPaid: "08/23/2024",
      InvoiceNumber: "25",
      status: "Open",
      Amount: "$3,000.00",
      Property: property,
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
      <OwnerDetailBox />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Expense Name</th>
              <th className="small fw-semi text-black text-nowrap">
              Expense Type
              </th>
              <th className="small fw-semi text-black text-nowrap">
              Recurring Expense
              </th>
              <th className="small fw-semi text-black text-nowrap">LastPaid</th>
              <th className="small fw-semi text-black text-nowrap">Invoice Number</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Amount</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">{data.ExpenseName}</td>
                <td className="small text-black text-nowrap">
                  {data.ExpenseType}
                </td>
                <td className="small text-black">{data.Recurring}</td>
                <td className="small text-black">{data.LastPaid}</td>
                <td className="small text-black">{data.InvoiceNumber}</td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">{data.Amount}</td>
                <td className="small text-black">
                <div className="d-flex align-items-center">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <FaDollarSign className="fs-5" />
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

export default CoHostExpenses;
