import React from "react";
import platform from "../../assets/img/platform.png";
import platforms from "../../assets/img/platforms.png";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function AddNewInvoice() {
  const DataCollection = [
    {
      id: 1,
      Code: "5115",
      Date: "08/31/2024",
      Night: "03",
      Platform: "Airbnb",
      Income: "$245.00",
      Fees: "$245.00",
      Hosting: "$245.00",
      FlatFees: "$245.00",
      Taxes: "$245.00",
    },
    {
      id: 1,
      Code: "5115",
      Date: "08/31/2024",
      Night: "03",
      Platform: "Airbnb",
      Income: "$245.00",
      Fees: "$245.00",
      Hosting: "$245.00",
      FlatFees: "$245.00",
      Taxes: "$245.00",
    },
    {
      id: 1,
      Code: "5115",
      Date: "08/31/2024",
      Night: "03",
      Platform: "Airbnb",
      Income: "$245.00",
      Fees: "$245.00",
      Hosting: "$245.00",
      FlatFees: "$245.00",
      Taxes: "$245.00",
    },
    {
      id: 1,
      Code: "5115",
      Date: "08/31/2024",
      Night: "03",
      Platform: "Airbnb",
      Income: "$245.00",
      Fees: "$245.00",
      Hosting: "$245.00",
      FlatFees: "$245.00",
      Taxes: "$245.00",
    },
    {
      id: 1,
      Code: "5115",
      Date: "08/31/2024",
      Night: "03",
      Platform: "Airbnb",
      Income: "$245.00",
      Fees: "$245.00",
      Hosting: "$245.00",
      FlatFees: "$245.00",
      Taxes: "$245.00",
    },
  ];
  const DataCollection1 = [
    {
      id: 1,
      Date1: "08/31/2024",
      Description1: "Smores kits",
      Type1: "Supplies",
      Qty1: "5",
      Amount1: "$245.00",
      Total1: "$245.00",
    },
    {
      id: 1,
      Date1: "08/31/2024",
      Description1: "Smores kits",
      Type1: "Supplies",
      Qty1: "5",
      Amount1: "$245.00",
      Total1: "$245.00",
    },
    {
      id: 1,
      Date1: "08/31/2024",
      Description1: "Smores kits",
      Type1: "Supplies",
      Qty1: "5",
      Amount1: "$245.00",
      Total1: "$245.00",
    },
    {
      id: 1,
      Date1: "08/31/2024",
      Description1: "Smores kits",
      Type1: "Supplies",
      Qty1: "5",
      Amount1: "$245.00",
      Total1: "$245.00",
    },
    {
      id: 1,
      Date1: "08/31/2024",
      Description1: "Smores kits",
      Type1: "Supplies",
      Qty1: "5",
      Amount1: "$245.00",
      Total1: "$245.00",
    },
  ];
  return (
    <section>
      <div className="row align-items-center justify-content-between mx-1">
        <div className="col-5 detail-bg p-5 rounded-4">
          <h5 className="fw-semi">Invoice #1001</h5>
          <div className="d-flex align-items-center mt-5 justify-content-between">
            <div>
              <p className="mb-0">Invoice Date:</p>
              <p className="mb-0 fw-semi">Saturday, August 31, 2024 </p>
            </div>
            <div>
              <p className="mb-0">Property Owner:</p>
              <p className="mb-0 fw-semi">Owner Name Here</p>
            </div>
          </div>
        </div>
        <div className="col-4 detail-bg p-4 rounded-4">
          <div className="d-flex align-items-center">
            <div className="comimg">
              <img src={platform} alt="platform" className="w-100" />
            </div>
            <p className="mb-0 fw-semi">Company Name here</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <FaLocationDot className="inicons" />
            <p className="mb-0 fw-semi">companylocationhere</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <FaPhoneAlt className="inicons" />
            <p className="mb-0 fw-semi">16086205151</p>
          </div>
          <div className="d-flex align-items-center mt-3">
            <IoMail className="inicons" />
            <p className="mb-0 fw-semi">asmintkdest.co</p>
          </div>
        </div>
      </div>
      <div>
        <div className="d-flex justify-content-end align-items-center mt-3">
          <Link
            to="#"
            className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2"
          >
            Add Property
          </Link>
        </div>
        <div className="table-responsive default-table mt-3">
          <table className="table">
            <thead className="">
              <tr className="align-middle">
                <th className="small fw-semi text-black text-nowrap">
                  Reservation Code
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Reservation Date
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Number of Night
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Platform
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Nightly Income
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Guest Fees
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Hosting %
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Hosting Flat Fees
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Payable Taxes
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Owner Income
                </th>
              </tr>
            </thead>
            <tbody>
              {DataCollection.map((data) => (
                <tr key={data.id} className="align-middle">
                  <td className="small text-black text-nowrap">{data.Code}</td>
                  <td className="small text-black text-nowrap">{data.Date}</td>
                  <td className="small text-black text-nowrap">{data.Night}</td>
                  <td className="small text-black text-nowrap">
                    <img src={platforms} alt="platform" className="pltimg me-2" />
                    {data.Platform}
                  </td>
                  <td className="small text-black text-nowrap">
                    {data.Income}
                  </td>
                  <td className="small text-black text-nowrap">{data.Fees}</td>
                  <td className="small text-black text-nowrap">
                    {data.Hosting}
                  </td>
                  <td className="small text-black text-nowrap">
                    {data.FlatFees}
                  </td>
                  <td className="small text-black text-nowrap">{data.Taxes}</td>
                  <td className="small text-black text-nowrap">
                    {data.Income}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4">
          <div className="d-flex align-items-center justify-content-between">
            <h4 className="fw-semi mt-4">Properties Details:</h4>
            <div className="d-flex justify-content-end align-items-center mt-3">
              <Link
                to="#"
                className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2 me-3"
              >
                Add Refund
              </Link>
              <Link
                to="/admin/add-expenses"
                className="px-sm-4 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2"
              >
                Add Expense
              </Link>
            </div>
          </div>
          <div className="table-responsive default-table mt-3">
            <table className="table">
              <thead className="">
                <tr className="align-middle">
                  <th className="small fw-semi text-black text-nowrap">Date</th>
                  <th className="small fw-semi text-black text-nowrap">
                    Description
                  </th>
                  <th className="small fw-semi text-black text-nowrap">Type</th>
                  <th className="small fw-semi text-black text-nowrap">Qty</th>
                  <th className="small fw-semi text-black text-nowrap">
                    Amount
                  </th>
                  <th className="small fw-semi text-black text-nowrap">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {DataCollection1.map((data) => (
                  <tr key={data.id} className="align-middle">
                    <td className="small text-black text-nowrap">
                      {data.Date1}
                    </td>
                    <td className="small text-black text-nowrap">
                      {data.Description1}
                    </td>
                    <td className="small text-black text-nowrap">
                      {data.Type1}
                    </td>
                    <td className="small text-black text-nowrap">
                      {data.Qty1}
                    </td>
                    <td className="small text-black text-nowrap">
                      {data.Amount1}
                    </td>
                    <td className="small text-black text-nowrap">
                      {data.Total1}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="row align-items-center justify-content-between mx-1 mt-4">
          <div className="col-12 d-flex justify-content-end detail-bg p-4 rounded-4">
            <div className="">
              <p className="">Total Owner Income: $2,415.82</p>
              <p className="">Total Additional Expanse: -$90.32</p>
              <p className=" fw-semi">Total Owner Earnings: $2,343.50</p>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="d-flex align-items-center">
              <input
                type="reset"
                className="graybutton rounded-2 me-4 text-black"
                value="Cancel"
              />
              <input
                type="submit"
                className="bluebutton rounded-2 text-white"
                value="Save"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddNewInvoice;
