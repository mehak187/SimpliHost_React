import React, { useState, useRef, useEffect } from 'react';
import SelectProperty1 from "../Modals/SelectProperty1";
import { Calendar } from "primereact/calendar";
import UserImg from '../../assets/img/user-details.png'
import { CiSearch } from "react-icons/ci";
import { FaSquarePlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa6";

function AddOperationsCodes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState('Select Here');
    const [searchQuery, setSearchQuery] = useState('');
    const dropdownRef = useRef(null);

    // Sample customer data
    const customers = [
        { name: 'Customer', img: UserImg },
        { name: 'Customer name here', img: UserImg },
        { name: 'Customer name here', img: UserImg },
        { name: 'Customer name here', img: UserImg },
        { name: 'Customer name here', img: UserImg },
    ];

    // Handle dropdown toggle
    const toggleDropdown = () => {
        setIsDropdownOpen(prevState => !prevState);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);
        return () => document.removeEventListener('click', handleOutsideClick);
    }, []);

    // Handle customer selection
    const handleCustomerSelect = (customerName) => {
        setSelectedCustomer(customerName);
        setIsDropdownOpen(false); // Close dropdown
    };

    // Filter customers based on search query
    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  return (
    <>
      <section>
        <div>
          <h2 className="fw-semi fs-3">Add Operations Details</h2>
        </div>
        <form action="">
          <div className="row">
            <div className="col-lg-12 col-xl-10 col-xxl-8">
              <div className="row">
                <div className="col-lg-6 mt-3">
                  <label htmlFor="CodeName" className="fw-semi">
                    Code Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="CodeName"
                    className="inputstyle focus-none"
                    placeholder="Type Code Name here"
                  />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Code" className="fw-semi">
                    Code
                  </label>
                  <br />
                  <select
                    name="Code"
                    id="Code"
                    className="inputstyle focus-none form-select"
                  >
                    <option value="" selected disabled hidden>
                      Select Code
                    </option>
                    <option value="Code1">Code1</option>
                    <option value="Code2">Code2</option>
                    <option value="Code3">Code3</option>
                  </select>
                </div>
                <div className="col-12 mt-3">
                  <div className="d-flex w-50 align-items-center justify-content-between">
                    <label htmlFor="Materials" className="fw-semi">
                      Set Time / Date?
                    </label>
                    <label className="switch me-3">
                      <input type="checkbox" id="Materials" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="StartDate" className="fw-semi">
                    Start Date/Time
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="EndDate" className="fw-semi">
                    End Date/Time
                  </label>
                  <br />
                  <Calendar showIcon className="impdate" />
                </div>
                <div className="col-lg-6 mt-3">
                  <label htmlFor="Group" className="fw-semi">
                    Select Property/Property Group
                  </label>
                  <br />
                 <SelectProperty1 />
                </div>
                <div className="col-lg-6 mt-3">
                <div className="dropdown1" ref={dropdownRef}>
            <label className=" fw-semi">Select Customer</label>
            <div className="dropdown-toggle1 inputstyle d-flex " onClick={toggleDropdown}>
                <div className="w-100">
                    <button type="button" className="w-100 dropdown-toggle2 border-0 p-0 text-start bg-transparent">
                        {selectedCustomer}
                    </button>
                </div>
                <div>
                    <FaCaretDown/>
                </div>
            </div>

            {isDropdownOpen && (
                <div className="dropdown-menu1 bg-white shadow rounded-3 p-2">
                    <button
                        type="button"
                        className="create-new-btn inputstyle text-start text-blue border-0 shadow-sm rounded-3"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        <FaSquarePlus className='me-2'/>
                        Create a new user
                    </button>
                    <div className="mt-2">
                        <div className="search-input d-flex align-items-center shadow-sm px-3 py-2">
                            <input
                                type="text"
                                placeholder="Search Customer"
                                className="w-100 border-0 bg-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button className="search-btn">
                            <CiSearch/>
                            </button>
                        </div>
                    </div>
                    <ul className="customer-list mt-2 list-unstyled">
                        {filteredCustomers.length > 0 ? (
                            filteredCustomers.map((customer, index) => (
                                <li
                                    key={index}
                                    className="customer-list-item"
                                    onClick={() => handleCustomerSelect(customer.name)}
                                >
                                    <img src={customer.img} alt="Customer" />
                                    {customer.name}
                                </li>
                            ))
                        ) : (
                            <li>No customers found</li>
                        )}
                    </ul>
                </div>
            )}
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
          </div>
        </form>
      </section>
    </>
  );
}

export default AddOperationsCodes;
