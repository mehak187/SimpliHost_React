import React from "react";
import { Link } from "react-router-dom";
import { IoPencil } from "react-icons/io5";
import property from "../../assets/img/property-collection.png";
import info from "../../assets/img/info.png";
import { HiTrash } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";

function Properties() {
  const DataCollection = [
    {
      id: 1,
      Name: "First Day",
      Properties: property,
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "First Day",
      Properties: property,
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "First Day",
      Properties: property,
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "First Day",
      Properties: property,
      DateCreated: "08/09/2024",
    },
  ];
  return (
    <div>
      <div className="setting-bg rounded-3">
        <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
          Properties Settings
        </h2>
        <div className="mt-4 px-3">
          <p className="fs-5 fw-semi">Default Check-In and Check-Out Times</p>
          <form action="">
            <div className="row">
              <div className="col-lg-12 col-xl-10 col-xxl-8">
                <div className="row pb-4 border-bottom border-1">
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="checkin" className="w-100 fw-semi">
                      Check-In time
                    </label>
                    <input
                      type="time"
                      id="checkin"
                      className="inputstyle bg-white focus-none"
                      placeholder="11:00AM"
                    />
                  </div>
                  <div className="col-lg-6 mt-3">
                    <label htmlFor="checkout" className="w-100 fw-semi">
                      Checkout time
                    </label>
                    <input
                      type="time"
                      id="checkout"
                      className="inputstyle bg-white focus-none"
                      placeholder="11:00AM"
                    />
                  </div>
                  <div className=" mt-4">
                    <div className="d-sm-flex align-items-center">
                      <div className="d-flex align-items-center pe-3 border-tab-0">
                        <label className="me-2">No</label>
                        <label className="switch me-2">
                          <input
                            type="checkbox"
                            id="Materials"
                            defaultChecked
                          />
                          <span className="slider round"></span>
                        </label>
                        <label className="me-2">Yes</label>
                      </div>
                      <div className="d-flex align-items-center ps-3">
                        <p className="mb-0 me-2 text-black">
                          Auto Schedule Maintenance Items
                        </p>
                        <img src={info} alt="info" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mb-4 mt-5">
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
          </form>
        </div>
      </div>
      <div>
        <div className="d-flex flex-wrap align-items-center justify-content-between mt-4">
          <h2 className="fs-5 my-2 me-3 text-black fw-bold ">Property Tags</h2>
          <div className="d-flex flex-wrap">
            <div className="border-grey me-3  my-2 h-100 d-flex custom-rounded">
              <input
                for="search"
                type="search"
                className="ps-2  small text-grey w-100 focus-none border-0 bg-transparent py-2"
                placeholder="Search tags"
              />
              <label
                htmlFor="search"
                className="px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg"
              >
                <FaSearch className="" />
              </label>
            </div>
            <Link
              to="/admin/add-property-tags"
              className="px-sm-4 px-3 bg-blue  my-2 text-center d-block d-sm-inline text-white rounded-2 opacity-hover text-decoration-none py-2"
            >
              Add Tags
            </Link>
          </div>
        </div>

        <div className="table-responsive default-table mt-3">
          <table className="table">
            <thead className="">
              <tr className="align-middle border-bottom-0">
                <th className="small fw-semi text-black text-nowrap">Name</th>
                <th className="small fw-semi text-black text-nowrap">
                  Properties
                </th>
                <th className="small fw-semi text-black text-nowrap">
                  Date Created
                </th>
                <th className="small fw-semi text-black text-nowrap">Action</th>
              </tr>
            </thead>
            <tbody>
              {DataCollection.map((data) => (
                <tr key={data.id} className="align-middle">
                  <td className="small text-black text-nowrap">{data.Name}</td>
                  <td className="small text-black">
                    <div className="d-flex align-items-center justify-content-center">
                      <img
                        src={data.Properties}
                        alt="property-img"
                        className="me-2 property-col"
                      />
                    </div>
                  </td>
                  <td className="small text-black text-nowrap">
                    {data.DateCreated}
                  </td>
                  <td className="small text-black">
                    <div className="d-flex">
                      <Link to="#" className="mx-1 tblicon">
                        <TbCopy className="fs-5" />
                      </Link>
                      <Link to="/manager_detail" className="mx-1 tblicon">
                        <IoPencil className="fs-5" />
                      </Link>
                      <Link to="/delete_task" className="mx-1 tblicon">
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
    </div>
  );
}

export default Properties;
