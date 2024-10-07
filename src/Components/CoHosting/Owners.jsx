import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import propertyCollection from "../../assets/img/property.png";
import owner from "../../assets/img/owner.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
function Owners() {
  const DataCollection = [
    {
      id: 1,
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Phone: "+21 315 999 999",
      property: propertyCollection,
      PropertyName: "Naseeb Designer",
      FeeType: "15% Flat Fee",
      Balance: "$345,00",
    },
    {
      id: 1,
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Phone: "+21 315 999 999",
      property: propertyCollection,
      PropertyName: "Naseeb Designer",
      FeeType: "15% Flat Fee",
      Balance: "$345,00",
    },
    {
      id: 1,
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Phone: "+21 315 999 999",
      property: propertyCollection,
      PropertyName: "Naseeb Designer",
      FeeType: "15% Flat Fee",
      Balance: "$345,00",
    },
    {
      id: 1,
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Phone: "+21 315 999 999",
      property: propertyCollection,
      PropertyName: "Naseeb Designer",
      FeeType: "15% Flat Fee",
      Balance: "$345,00",
    },
    {
      id: 1,
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Phone: "+21 315 999 999",
      property: propertyCollection,
      PropertyName: "Naseeb Designer",
      FeeType: "15% Flat Fee",
      Balance: "$345,00",
    },
  ];
  return (
    <div>
      <FilterRow searchName="Owner" btnName="Add Owner" btnLink="#" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Owner Name
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Phone Number
              </th>
              <th className="small fw-semi text-black text-nowrap">
                Properties
              </th>
              <th className="small fw-semi text-black text-nowrap">Fee Type</th>
              <th className="small fw-semi text-black text-nowrap">Balance</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black">
                <div className="d-flex align-items-center">
                  <img
                    src={data.Owner}
                    alt="property-img"
                    className="img-fluid me-2 owner-img"
                  />
                  {data.OwnerName}
                  </div>
                </td>
                <td className="small text-black">{data.Phone}</td>
                <td className="small text-black">
                <div className="d-flex align-items-center">
                  <img
                    src={data.property}
                    alt="property-img"
                    className="img-fluid me-2 owner-img"
                  />
                  {data.PropertyName}
                  </div>
                </td>
                <td className="small text-black text-nowrap">{data.FeeType}</td>
                <td className="small text-black">{data.Balance}</td>
                <td className="small text-black">
                  <div className="d-flex">
                    <Link to="#" className="mx-1 tblicon">
                      <FaEye className="fs-5" />
                    </Link>
                    <Link to="/admin/edit-inventory" className="mx-1 tblicon">
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

export default Owners;
