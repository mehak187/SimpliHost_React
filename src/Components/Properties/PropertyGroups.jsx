import React from "react";
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { Link } from "react-router-dom";
import { TbCopy } from "react-icons/tb";
import Property from "../../assets/img/property-1.png";
import { FaSearch } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import GroupImage from "../Checklist/GroupImage";

function PropertyGroups() {
  const DataCollection = [
    {
      id: 1,
      propertyImage: Property,
      propertyName: "Well Furnished Apartment",
      streetAddress: "Garden Town House Number 01",
      city: "Tub Top",
      state: "Pakistan, Sialkot",
      status: {
        label: "Occupied",
        color: "green",
      },
      platforms: <GroupImage/>,
    },
    {
      id: 2,
      propertyImage: Property,
      propertyName: "Well Furnished Apartment",
      streetAddress: "Garden Town House Number 01",
      city: "Tub Top",
      state: "Pakistan, Sialkot",
      status: {
        label: "Vacant - Clean",
        color: "orange",
      },
      platforms: <GroupImage/>,
    },
    {
      id: 3,
      propertyImage: Property,
      propertyName: "Well Furnished Apartment",
      streetAddress: "Garden Town House Number 01",
      city: "Tub Top",
      state: "Pakistan, Sialkot",
      status: {
        label: "Vacant - Dirty",
        color: "red",
      },
      platforms: <GroupImage/>,
    },
  ];

  return (
    <div>
      <div className='row align-items-center justify-content-between'>
        <div className="col-12 col-xl-6 ">
           <div className="row">
                <div className="col-sm-7 col-xl-7 col-xxl-6">
                    <div className='border-grey h-100 d-flex custom-rounded'>
                        <input for="search" type="search" className='ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2' placeholder='Type to search task'/>
                        <label htmlFor="search" className='px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg'>
                            <FaSearch className=''/>
                        </label>
                    </div>
                </div>
                <div className="col-xl-4 mt-3 mt-sm-0 col-sm-5 col-12">
                   <div className="d-flex h-100 rounded-2 ps-2 align-items-center border-grey">
                   <CiFilter className='text-grey  fs-4'/>
                    <select name="" className='form-select px-1 text-grey small border-0 w-100 focus-none' id="">
                        <option value="Filter">Filter</option>
                    </select>
                   </div>
                </div>
           </div>
        </div>
        <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
           <Link to="#" className="px-sm-4 mt-3 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">Add Group</Link>
        </div>
    </div>
      <div className="table-responsive default-table mt-3">
        <table className="table">
          <thead>
            <tr className="align-middle">
              <th className="small fw-semi text-black text-nowrap">Property Name</th>
              <th className="small fw-semi text-black text-nowrap">Description</th>
              <th className="small fw-semi text-black text-nowrap">Status</th>
              <th className="small fw-semi text-black text-nowrap">Properties Associated</th>
              <th className="small fw-semi text-black text-nowrap text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {DataCollection.map((data) => (
              <tr key={data.id} className="align-middle">
                <td className="small fw-semi text-black text-nowrap">
                  <div className="d-flex align-items-center">
                    <img
                      src={data.propertyImage}
                      alt={data.propertyName}
                      className="property-image"
                    />
                    <div>{data.propertyName}</div>
                  </div>
                </td>
                <td className="small fw-semi text-black text-nowrap">{data.streetAddress}</td>
                <td className="small fw-semi text-black text-nowrap">
                  <span style={{ color: data.status.color }}>
                    {data.status.label}
                  </span>
                </td>
                <td className="small fw-semi text-black text-nowrap">
                  <div className="d-flex justify-content-center">
                    {data.platforms}
                  </div>
                </td>
                <td className="small text-black">
                  <div className="d-flex justify-content-center">
                    <Link to="#" className="mx-1 tblicon">
                      <TbCopy className="fs-5" />
                    </Link>
                    <Link to="/admin/editProperty" className="mx-1 tblicon">
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

export default PropertyGroups;
