import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import battery from "../../assets/img/battery.png";
import property from "../../assets/img/property.png";
import heatwave from "../../assets/img/heatwave.png";
import FilterRow from "./FilterRow";
import { FaEye } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";

function AllDevices() {
  const DataCollection = [
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Active",
      Battery:"90",
      Lock:"Lock",
      Thermostat:"40℃"
    },
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Offline",
      Battery:"90",
      Lock:"Unlocked",
      Thermostat:"40℃"
    },
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Active",
      Battery:"90",
      Lock:"Lock",
      Thermostat:"40℃"
    },
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Active",
      Battery:"90",
      Lock:"Unlocked",
      Thermostat:"40℃"
    },
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Offline",
      Battery:"90",
      Lock:"Lock",
      Thermostat:"40℃"
    },
    {
      id: 1,
      DeviceImage: "FreeText",
      DeviceName: "Simple",
      Type:"Lock",
      Property: property,
      PropertyName: "property name",
      status: "Active",
      Battery:"90",
      Lock:"Unlocked",
      Thermostat:"40℃"
    },
    
  ];
  const getStatusClass = (status) => {
    switch (status) {
      case "Offline":
        return "text-danger";
      case "Active":
        return "text-success";
      default:
        return "";
    }
  };
  return (
    <div>
      <FilterRow/>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead className="">
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">
                Device Image
              </th>
              <th className="small fw-semi text-black text-nowrap">Fee Type</th>
              <th className="small fw-semi text-black text-nowrap">Owner(s)</th>
              <th className="small fw-semi text-black text-nowrap">Property</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Battery </th>
              <th className="small fw-semi text-black text-nowrap">
                Lock / Thermostat{" "}
              </th>
              <th className="small fw-semi text-black text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small text-black text-nowrap">
                  {data.DeviceImage}
                </td>
                <td className="small text-black text-nowrap">
                  {data.DeviceName}
                </td>
                <td className="small text-black">{data.Type}</td>
                <td className="small text-black">
                  <img
                    src={data.Property}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  {data.PropertyName}
                </td>
                <td className={`small fw-semi ${getStatusClass(data.status)}`}>
                  {data.status}
                </td>
                <td className="small fw-semi">
                  <img
                    src={battery}
                    alt="property-img"
                    className="img-fluid me-2 property-img"
                  />
                  {data.Battery}
                </td>
                <td className="small fw-semi">
                  <div className="d-flex align-items-center">
                    <div className="me-3">
                      <label className="switch me-2">
                        <input type="checkbox" id="Capture" checked={data.Lock === "Lock"} readOnly/>
                        <span className="slider round"></span>
                      </label>
                      {data.Lock}
                    </div>
                    <img
                      src={heatwave}
                      alt="property-img"
                      className="img-fluid me-2 property-img"
                    />
                    {data.Thermostat}
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

export default AllDevices
