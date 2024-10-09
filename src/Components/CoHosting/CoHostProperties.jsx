import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import property from "../../assets/img/property-main.png";
import propertySingle from "../../assets/img/property.png";
import platform1 from "../../assets/img/platform.png";
import platform2 from "../../assets/img/platform2.png";
import platform3 from "../../assets/img/platform3.png";
import platform4 from "../../assets/img/platform4.png";
import OwnerDetailBox from "./OwnerDetailBox";


function CoHostProperties() {
  const DataCollection = [
    {
      id: 1,
      Property: property,
      PropertyName: "Well Furnished Apartment",
      Address: "Garden Town House Number 01",
      City: "Tub Top",
      State: "Pakistan,Sialkot",
      platform: [platform1, platform2, platform3, platform4],
      PropertyGroup: propertySingle,
      status: "Unknown",
    },
    {
      id: 1,
      Property: property,
      PropertyName: "Well Furnished Apartment",
      Address: "Garden Town House Number 01",
      City: "Tub Top",
      State: "Pakistan,Sialkot",
      platform: [platform1, platform2, platform3, platform4],
      PropertyGroup: propertySingle,
      status: "Occupied",
    },
    {
      id: 1,
      Property: property,
      PropertyName: "Well Furnished Apartment",
      Address: "Garden Town House Number 01",
      City: "Tub Top",
      State: "Pakistan,Sialkot",
      platform: [platform1, platform2, platform3, platform4],
      PropertyGroup: propertySingle,
      status: "Vacant - Clean",
    },
    {
      id: 1,
      Property: property,
      PropertyName: "Well Furnished Apartment",
      Address: "Garden Town House Number 01",
      City: "Tub Top",
      State: "Pakistan,Sialkot",
      platform: [platform1, platform2, platform3, platform4],
      PropertyGroup: propertySingle,
      status: "Vacant - Dirty",
    },
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Unknown":
        return "text-danger";
        case "Occupied":
          return "text-blue";
      case "Vacant - Clean":
        return "text-success";
        case "Vacant - Dirty":
          return "text-danger";
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
            <th className="small fw-semi text-black text-nowrap">
              Property Name
            </th>
            <th className="small fw-semi text-black text-nowrap">
              Street Address
            </th>
            <th className="small fw-semi text-black text-nowrap">
              City
            </th>
            <th className="small fw-semi text-black text-nowrap">State</th>
            <th className="small fw-semi text-black text-nowrap">Platform</th>
            <th className="small fw-semi text-black text-nowrap">Property Group</th>
            <th className="small fw-semi text-black text-nowrap">Status</th>
            <th className="small fw-semi text-black text-nowrap">Action</th>
          </tr>
        </thead>
        <tbody>
          {DataCollection.map((data) => (
            <tr key={data.id} className="align-middle">
              <td className="small text-black">
                <div className="d-flex align-items-center">
                  <img
                    src={data.Property}
                    alt="property-main"
                    className="img-fluid property-main me-2 rounded-3"
                  />
                  {data.PropertyName}
                </div>
              </td>
              <td className="small text-black">
                <div className="d-flex align-items-center">
                {data.platform.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`platform-${index + 1}`}
                      className="img-fluid me-2 owner-img"
                    />
                  ))}
                </div>
              </td>

        
              <td className="small text-black">{data.Address}</td>
              <td className="small text-black">{data.City}</td>
              <td className="small text-black">{data.State}</td>
              <td className="small text-black">
                <div className="d-flex align-items-center">
                  <img
                    src={data.PropertyGroup}
                    alt="property-img"
                    className="img-fluid me-2 owner-img"
                  />
                </div>
              </td>
              <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
              <td className="small text-black">
                <div className="d-flex">
                  <Link
                    to="/admin/co-hosting-details"
                    className="mx-1 tblicon"
                  >
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
  )
}

export default CoHostProperties
