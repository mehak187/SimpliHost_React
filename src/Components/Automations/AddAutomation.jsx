import React, { useState, useRef, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { MdTextsms } from "react-icons/md";
import {
  FaSms,
  FaTemperatureHigh,
  FaEnvelope,
  FaCaretUp,
  FaCaretDown,
  FaArrowRight,
} from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";

const automationActions = [
  {
    icon: <MdTextsms className="bg-lblue p-2 rounded-3 text-blue fs-1" />,
    label: "Send In-App Message",
  },
  {
    icon: <FaSms className="bg-lblue p-2 rounded-3 text-blue fs-1" />,
    label: "Send SMS",
  },
  {
    icon: (
      <FaTemperatureHigh className="bg-lblue p-2 rounded-3 text-blue fs-1" />
    ),
    label: "Set Temperature",
  },
  {
    icon: <IoIosLock className="bg-lblue p-2 rounded-3 text-blue fs-1" />,
    label: "Set Lock",
  },
  {
    icon: <LuAlarmClock className="bg-lblue p-2 rounded-3 text-blue fs-1" />,
    label: "Change House Status",
  },
  {
    icon: <FaEnvelope className="bg-lblue p-2 rounded-3 text-blue fs-1" />,
    label: "Gmail",
  },
];

function AutomationPanel({ title, isOpen, toggleOpen, onSelectAction }) {
  return (
    <div className="w-100 position-relative">
      <div
        className="d-flex align-items-center justify-content-between border-bottom border-primary border-2 cursor-pointer"
        onClick={toggleOpen}
      >
        <h6 className={`text-${isOpen ? "blue" : "dark"}`}>{title}</h6>
        {isOpen ? (
          <FaCaretUp className="text-blue" />
        ) : (
          <FaCaretDown className="text-blue" />
        )}
      </div>

      {isOpen && (
        <div className="shadow bg-white p-2 rounded-3 mt-3 position-absolute w-100 top-100 start-0 index-10">
          <div className="shadow rounded-3 d-flex align-items-center p-2 border border-info">
            <label htmlFor="searchInput">
              <CiSearch className="bg-blue p-2 rounded-3 text-white fs-1" />
            </label>
            <input
              type="search"
              className="w-100 border-0 px-3"
              id="searchInput"
              placeholder="Search"
            />
          </div>

          <h6 className="ex-small fw-semi mt-3">Most Used</h6>
          {automationActions.map((action, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 cursor-pointer"
              onClick={() => onSelectAction(action.label)}
            >
              {action.icon}
              <p className="mb-0 ms-2 fw-semi pointer">{action.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AddAutomation() {
  const [isWhenOpen, setIsWhenOpen] = useState(false);
  const [isThenOpen, setIsThenOpen] = useState(false);
  const [isNotificationOpenWhen, setIsNotificationOpenWhen] = useState(false);
  const [isNotificationOpenThen, setIsNotificationOpenThen] = useState(false);
  const [selectedActionWhen, setSelectedActionWhen] = useState(null);
  const [selectedActionThen, setSelectedActionThen] = useState(null);

  const notificationRefWhen = useRef(null);
  const notificationRefThen = useRef(null);

  const handleSelectActionWhen = (action) => {
    setSelectedActionWhen(action);
    setIsWhenOpen(false);
    setIsNotificationOpenWhen(true);
  };

  const handleSelectActionThen = (action) => {
    setSelectedActionThen(action);
    setIsThenOpen(false);
    setIsNotificationOpenThen(true);
  };

  const handleClickOutside = (event) => {
    if (
      notificationRefWhen.current &&
      !notificationRefWhen.current.contains(event.target)
    ) {
      setIsNotificationOpenWhen(false);
    }
    if (
      notificationRefThen.current &&
      !notificationRefThen.current.contains(event.target)
    ) {
      setIsNotificationOpenThen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <form className="h-100">
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <div className="bg-white shadow rounded-3 p-3">
            <h4 className="mb-0 fw-semi">Add Automation</h4>
          </div>
          <div className="row mt-4">
            <div className="col-xl-10">
              <div className="row">
                <div className="col-lg-5 position-relative mb-3">
                  <AutomationPanel
                    title="When this happens"
                    isOpen={isWhenOpen}
                    toggleOpen={() => setIsWhenOpen(!isWhenOpen)}
                    onSelectAction={handleSelectActionWhen}
                  />
                  {isNotificationOpenWhen && (
                    <div
                      ref={notificationRefWhen}
                      className="bg-white border shadow rounded-3 p-3 mt-3 max position-relative top-0 start-0 z-index-10"
                    >
                      <h6 className="fw-semi">
                        When would you like to send the notification for?
                      </h6>
                      <div className="d-flex my-2">
                        <input type="radio" className="rad" name="notify" />
                        <label
                          htmlFor=""
                          className="d-flex align-items-center ms-2"
                        >
                          <div>
                            <p className="mb-0 text-nowrap">
                              When date arrives at
                            </p>
                          </div>
                          <div className="ms-2">
                            <select
                              name=""
                              id=""
                              className="form-select shadow-none bg-lgrey"
                            >
                              <option value="">09:30 PM</option>
                            </select>
                          </div>
                        </label>
                      </div>
                      <div className="d-flex mb-2">
                        <div>
                          <input type="radio" className="rad" name="notify" />
                        </div>
                        <label
                          htmlFor=""
                          className="d-flex align-items-center ms-2"
                        >
                          <div>
                            <input
                              type="text"
                              className="form-control bg-lgrey shadow-none in-w"
                              placeholder="5"
                            />
                          </div>
                          <div className="ms-2">
                            <select
                              name=""
                              id=""
                              className="form-select shadow-none bg-lgrey in-s"
                            >
                              <option value="">Days</option>
                              <option value="">Weeks</option>
                              <option value="">Months</option>
                            </select>
                          </div>
                          <div className="ms-2">
                            <select
                              name=""
                              id=""
                              className="form-select shadow-none bg-lgrey in-s"
                            >
                              <option value="">Before</option>
                              <option value="">After</option>
                            </select>
                          </div>
                          <div className="ms-2">
                            <p className="text-nowrap mb-0">
                              {" "}
                              dates arrive, at
                            </p>
                          </div>
                          <div className="ms-2">
                            <select
                              name=""
                              id=""
                              className="form-select shadow-none bg-lgrey in-s"
                            >
                              <option value="">09:30 PM</option>
                            </select>
                          </div>
                        </label>
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-lg-1 mb-3 mx-auto">
                  <FaArrowRight className="text-lblue fs-3" />
                </div>

                <div className="col-lg-5 position-relative">
                  <AutomationPanel
                    title="Then do this"
                    isOpen={isThenOpen}
                    toggleOpen={() => setIsThenOpen(!isThenOpen)}
                    onSelectAction={handleSelectActionThen}
                  />
                  {isNotificationOpenThen && (
                    <div
                      ref={notificationRefThen}
                      className="bg-white border shadow rounded-3 p-3 mt-3 w-100 position-relative top-0 start-0 z-index-10"
                    >
                      <input type="date" className="form-control" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-sm-flex align-items-center">
          <div>
            <button className="bg-lgrey border rounded-2 py-2 px-4 w-100 text-dark">
              Cancel
            </button>
          </div>
          <div className="ms-sm-2 mt-sm-0 mt-3">
            <button
              type="submit"
              className="bg-blue text-white border-blue w-100 rounded-2 py-2 px-4 "
            >
              Create Automation
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddAutomation;
