import React from "react";
import { Link } from "react-router-dom";
import info from "../../assets/img/info.png";
import { IoPencil } from "react-icons/io5";
import property from "../../assets/img/property-collection.png";
import { HiTrash } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbCopy } from "react-icons/tb";
function Checklists() {
  const DataCollection = [
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
    {
      id: 1,
      Name: "Bedroom",
      NumberOfChecklist: "01",
      DateCreated: "08/09/2024",
    },
  ];
  return (
    <section>
      <form action="">
        <div className="setting-bg pb-4 rounded-3">
          <h2 className="fs-6 bg-white mb-0 text-black py-4 setting-shadow  px-3 rounded-3 text-blue2 fw-bold mt-3 mt-sm-0">
            Checklists Settings
          </h2>
          <div className="px-3">
            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Auto Create Pre-Arrival Checklist?
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                  <div className="col-lg-5 d-flex mt-3 align-items-center ">
                    <p className="mb-0">Default Pre-Arrival Checklist</p>
                  </div>
                  <div className="col-lg-7 d-flex mt-3 align-items-center ">
                    <select
                      id="Property"
                      className="inputstyle bg-white w-100 focus-none"
                    >
                      <option value="" selected disabled hidden>
                        Select a checklist
                      </option>
                      <option value="checklist1">checklist1</option>
                      <option value="checklist2">checklist2</option>
                      <option value="checklist3">checklist3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Auto Create Damage Checklist
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                  <div className="col-lg-5 d-flex mt-3 align-items-center ">
                    <p className="mb-0">Default Damage Checklist</p>
                  </div>
                  <div className="col-lg-7 d-flex mt-3 align-items-center ">
                    <select
                      id="Property"
                      className="inputstyle bg-white w-100 focus-none"
                    >
                      <option value="" selected disabled hidden>
                        Select a checklist
                      </option>
                      <option value="checklist1">checklist1</option>
                      <option value="checklist2">checklist2</option>
                      <option value="checklist3">checklist3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Auto Create Cleaning Checklist
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                  <div className="col-lg-5 d-flex mt-3 align-items-center ">
                    <p className="mb-0">Default Cleaning Checklist</p>
                  </div>
                  <div className="col-lg-7 d-flex mt-3 align-items-center ">
                    <select
                      id="Property"
                      className="inputstyle bg-white w-100 focus-none"
                    >
                      <option value="" selected disabled hidden>
                        Select a checklist
                      </option>
                      <option value="checklist1">checklist1</option>
                      <option value="checklist2">checklist2</option>
                      <option value="checklist3">checklist3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Auto Create Pet Checklist
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                  <div className="col-lg-5 d-flex mt-3 align-items-center ">
                    <p className="mb-0">Default Pet Checklist</p>
                  </div>
                  <div className="col-lg-7 d-flex mt-3 align-items-center ">
                    <select
                      id="Property"
                      className="inputstyle bg-white w-100 focus-none"
                    >
                      <option value="" selected disabled hidden>
                        Select a checklist
                      </option>
                      <option value="checklist1">checklist1</option>
                      <option value="checklist2">checklist2</option>
                      <option value="checklist3">checklist3</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Auto Assign Cleaning Checklists to Primary Cleaner
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Allow Rating of Guest
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Start Cleaning Immediately After Guest Check-Out
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="setting-bg pb-4 rounded-3 mt-4 ">
          <div className="px-3">
            <div className="row align-items-center py-3 border-bottom border-1">
              <div className="col-xl-8 col-lg-10 col-xxl-7">
                <div className="row  align-items-center">
                  <div className="col-lg-4 col-xxl-3 d-flex my-2 my-lg-0 align-items-center pe-3 border-tab-0">
                    <label className="me-2">No</label>
                    <label className="switch me-2">
                      <input type="checkbox" id="Materials" defaultChecked />
                      <span className="slider round"></span>
                    </label>
                    <label className="me-2">Yes</label>
                  </div>
                  <div className="col-lg-8 col-xl-8 col-xxl-6 d-flex align-items-center">
                    <p className="mb-0 my-2 my-lg-0 me-2 text-black me-lg-3 me-0 ps-lg-3">
                      Flexible Cleaning Window
                    </p>
                    <img src={info} alt="info" className="img-fluid" />
                  </div>
                  <div className="col-lg-4 d-flex mt-3 align-items-center ">
                    <span className="text-nowrap me-2">Up to: </span>
                    <select
                      id="Property"
                      className="inputstyle bg-white w-100 focus-none"
                    >
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                    </select>
                  </div>
                  <div className="col-lg-7 d-flex mt-3 align-items-center ">
                    <p className="mb-0">day(s) after guest checkout</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 mt-5">
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
        <div className="d-flex flex-wrap align-items-center justify-content-between mt-4">
          <h2 className="fs-5 my-2 me-3 text-black fw-bold ">
            Checklist Categories
          </h2>
          <div className="d-flex flex-wrap">
            <div className="border-grey me-3  my-2 h-100 d-flex custom-rounded">
              <input
                for="search"
                type="search"
                className="ps-2  small text-grey w-100 focus-none border-0 bg-transparent py-2"
                placeholder="Search Categories"
              />
              <label
                htmlFor="search"
                className="px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg"
              >
                <FaSearch className="" />
              </label>
            </div>
            <Link
              to="/admin/add-checklist-category"
              className="px-sm-4 px-3 bg-blue  my-2 text-center d-block d-sm-inline text-white rounded-2 opacity-hover text-decoration-none py-2"
            >
              Add Category
            </Link>
          </div>
        </div>
        <div className="table-responsive default-table mt-3">
          <table className="table">
            <thead className="">
              <tr className="align-middle border-bottom-0">
                <th className="small fw-semi text-black text-nowrap">Name</th>
                <th className="small fw-semi text-black text-nowrap">
                  Number Of Checklist
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
                  <td className="small text-black text-nowrap">
                    {data.NumberOfChecklist}
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
      </form>
    </section>
  );
}

export default Checklists;
