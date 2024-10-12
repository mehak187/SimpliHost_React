import React, { useState } from 'react';
import { HiTrash } from "react-icons/hi2";
import { IoPencil } from "react-icons/io5";
import { TbCopy } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function AutomationTable() {
    const DataCollection = [
        {
            id: 1,
            AutomationTableName: "Toilet Paper",
            trigger: "Every Monday",
            shared: "Yes",
            numberOfitems: "30",
            isActive: true,  // Added to store the active state
        },
        {
            id: 2,
            AutomationTableName: "Toilet Paper",
            trigger: "Every Monday",
            shared: "Yes",
            numberOfitems: "30",
            isActive: false,  // Added to store the active state
        },
        {
            id: 3,
            AutomationTableName: "Toilet Paper",
            trigger: "Every Monday",
            shared: "Yes",
            numberOfitems: "30",
            isActive: true,  // Added to store the active state
        },
        {
            id: 4,
            AutomationTableName: "Toilet Paper",
            trigger: "Every Monday",
            shared: "Yes",
            numberOfitems: "30",
            isActive: false,  // Added to store the active state
        },
    ];

    const [automationData, setAutomationData] = useState(DataCollection);

    const toggleSwitch = (id) => {
        setAutomationData((prevData) =>
            prevData.map((item) =>
                item.id === id ? { ...item, isActive: !item.isActive } : item
            )
        );
    };

    return (
        <div>
            <div className='row align-items-center justify-content-between'>
                <div className="col-12 col-xl-6 ">
                    <div className="row">
                        <div className="col-sm-7 col-xl-7 col-xxl-6">
                            <div className='border-grey h-100 d-flex custom-rounded'>
                                <input id="search" type="search" className='ps-2 small text-grey w-100 focus-none border-0 bg-transparent py-2' placeholder='Type to search task' />
                                <label htmlFor="search" className='px-sm-3 px-2 d-flex small text-grey align-items-center text-white py-2 search-bg'>
                                    <FaSearch />
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-sm-flex col-xl-6 col-12 mt-3 mt-xl-0 justify-content-end align-items-center">
                    <Link to="/admin/addAutomation" className="px-sm-4 mt-3 me-2 mt-sm-0 px-3 border-blue text-center d-block d-sm-inline text-blue rounded-3 opacity-hover bg-white text-decoration-none py-2">Create New</Link>
                </div>
            </div>
            <div className="table-responsive default-table mt-3">
                <table className="table">
                    <thead>
                        <tr className="align-middle">
                            <th className="small fw-semi text-black text-nowrap">Rule Name</th>
                            <th className="small fw-semi text-black text-nowrap">Trigger</th>
                            <th className="small fw-semi text-black text-nowrap">Shared</th>
                            <th className="small fw-semi text-black text-nowrap text-center">Active</th>
                            <th className="small fw-semi text-black text-nowrap text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {automationData.map((data) => (
                            <tr key={data.id} className="align-middle">
                                <td className="small text-black">{data.AutomationTableName}</td>
                                <td className="small text-black text-nowrap">{data.trigger}</td>
                                <td className="small text-black">{data.shared}</td>
                                <td className="small text-black text-center">
                                    <div className="toggle-container">
                                        <div
                                            className={`toggle-switch ${data.isActive ? 'on' : 'off'}`}
                                            onClick={() => toggleSwitch(data.id)}
                                            role="switch"
                                            aria-checked={data.isActive}
                                            tabIndex={0}
                                        >
                                            <span className="toggle-label off">Off</span>
                                            <div className="toggle-slider">
                                                <div className="toggle-knob">
                                                    {data.isActive && <span className="checkmark"><FaCheck/></span>}
                                                </div>
                                            </div>
                                            <span className="toggle-label on">On</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="small text-black">
                                    <div className="d-flex justify-content-center">
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
    );
}

export default AutomationTable;
