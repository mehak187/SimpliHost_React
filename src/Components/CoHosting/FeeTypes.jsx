import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import owner from "../../assets/img/owner.png";
import property from "../../assets/img/property-collection.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function FeeTypes() {
  const DataCollection = [
    {
      id: 1,
      FeeName: "FreeText",
      FeeType: "Simple",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: property,
    },
    {
      id: 1,
      FeeName: "FreeText",
      FeeType: "Simple",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: property,
    },
    {
      id: 1,
      FeeName: "FreeText",
      FeeType: "Simple",
      Owner: owner,
      OwnerName: "Naseeb Designer",
      Property: property,
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      // case "Overdue":
      //   return "text-danger";
      case "Active":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow searchName="Fee" btnName="Add Fee" btnLink="#" />
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Fee Name</th>
              <th className="small fw-semi text-black text-nowrap">Fee Type</th>
              <th className="small fw-semi text-black text-nowrap">Owner(s)</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">{data.FeeName}</td>
                <td className="small text-black text-nowrap">{data.FeeType}</td>
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
                <td className="small text-black">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
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

export default FeeTypes;
