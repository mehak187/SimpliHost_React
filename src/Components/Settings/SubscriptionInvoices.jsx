import React from "react";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-collection.png";
import { MdDownloading } from "react-icons/md";

function SubscriptionInvoices() {
  const DataCollection = [
    {
      id: 1,
      date: "08/24/2024",
      amount: "$ 89,00",
      status: "Paid",
    },
    {
        id: 1,
        date: "08/24/2024",
        amount: "$ 89,00",
        status: "Overdue",
      },
      {
        id: 1,
        date: "08/24/2024",
        amount: "$ 89,00",
        status: "Open",
      },
      {
        id: 1,
        date: "08/24/2024",
        amount: "$ 89,00",
        status: "Paid",
      },
 
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Overdue":
        return "text-danger";
      case "Paid":
        return "text-success";
        case "Open":
            return "text-primary";
      default:
        return "";
    }
  };

  return (
    <div className="h-100 d-flex flex-column">
      <h2 className="fs-5 mb-0 text-black fw-semi mt-3">
        Subscription Setting
      </h2>
      <div className="table-responsive default-table mt-4">
        <table className="table w-100">
          <thead className="w-100">
            <tr className="align-middle border-bottom-0">
              <th className="small fw-semi text-black text-nowrap">
                Invoice Number
              </th>
              <th className="small fw-semi text-black text-nowrap">
               Date
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Amount
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Status
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Download PDF
              </th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.id}
                </td>
                 <td className="small text-black text-nowrap">
                  {data.date}
                </td>
                <td className="small text-black text-nowrap">
                  {data.amount}
                </td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <Link to="#">
                  <MdDownloading className="fs-3 me-2"/>
                  <span className="fs-6">Download Invoice</span>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Link
          to="#"
          className="graybutton text-decoration-none rounded-2 me-4 text-black"
        >
          Cancel Plan
        </Link>
      </div>
    </div>
  );
}

export default SubscriptionInvoices;
