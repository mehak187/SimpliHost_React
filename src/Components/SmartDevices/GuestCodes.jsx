import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import used from "../../assets/img/used.png";
import property from "../../assets/img/property.png";
import FilterRow from "./FilterRow";
import { FaRegCopy } from "react-icons/fa";

function GuestCodes() {
  const DataCollection = [
    {
      id: 1,
      GuestName: "Naseeb Designer",
      Checkin: "06/14/2024   2:00pm",
      Checkout: "06/17/2024  10:00am",
      Code: "9252",
      status: "Active",
      Property: property,
      PropertyName: "property name",
      Used: "yes",
    },
    {
      id: 1,
      GuestName: "Naseeb Designer",
      Checkin: "06/14/2024   2:00pm",
      Checkout: "06/17/2024  10:00am",
      Code: "9252",
      status: "Deleted",
      Property: property,
      PropertyName: "property name",
      Used: "no",
    },
    {
      id: 1,
      GuestName: "Naseeb Designer",
      Checkin: "06/14/2024   2:00pm",
      Checkout: "06/17/2024  10:00am",
      Code: "9252",
      status: "Error",
      Property: property,
      PropertyName: "property name",
      Used: "yes",
    },
    {
      id: 1,
      GuestName: "Naseeb Designer",
      Checkin: "06/14/2024   2:00pm",
      Checkout: "06/17/2024  10:00am",
      Code: "9252",
      status: "Generated",
      Property: property,
      PropertyName: "property name",
      Used: "no",
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Error":
        return "text-danger";
      case "Active":
        return "text-success";
      case "Generated":
        return "text-warning";
      case "Deleted":
        return "text-grey";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                GuestName
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Check-In Date/Time
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Check-Out Date/Time
              </th>
              <th className="small fw-semi text-black text-nowrap">Code</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Used </th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.GuestName}
                </td>
                <td className="small text-black text-nowrap">{data.Checkin}</td>
                <td className="small text-black text-nowrap">
                  {data.Checkout}
                </td>
                <td className="small text-black text-nowrap">
                  <div className="bg-grey px-2 rounded-3 d-inline-flex justify-content-center bg-grey2 align-items-center py-2">
                    <span className="mb-0 me-2">{data.Code}</span>
                    <FaRegCopy className="fs-5" />
                  </div>
                </td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small text-black">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  {data.PropertyName}
                </td>
                <td className="small fw-semi">
                  <div className="d-flex align-items-center">
                    {data.Used === "yes" && (
                      <img
                        src={used}
                        alt="property-img"
                        className="img-fluid me-2 property-img"
                      />
                    )}
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <IoPencil className=" fs-5" />
                    </Link>
                    <Link to="#" className="mx-1 tblicon">
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

export default GuestCodes;
