import React from "react";
import bells from "../assets/img/bells.png";

function Notifications() {
  const Notifications = [
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
    {
      id: 1,
      Title: "Notification Title Here",
      Content: "Notification Contenet will be  Here",
      Date: "11/02/2023",
      Time: "1 mins. ago",
    },
  ];
  return (
    <div className="graysection">
      <div className="innerdiv">
        <div className="container-fluid">
          {Notifications.map((data) => (
            <div className="row my-3">
              <div className="col-12 notif p-3">
                <div className="d-lg-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img
                      src={bells}
                      alt=""
                      className="bell d-none d-sm-block me-2 me-md-3"
                    />
                    <div>
                      <p className="mb-0 fw-semi">{data.Title}</p>
                      <p className="mb-0 small">{data.Content}</p>
                    </div>
                  </div>
                  <div className="mt-3 mt-lg-0">
                    <div className="d-flex flex-wrap justify-content-end align-items-center">
                      <p className="mb-0 small">{data.Date}</p>
                      <p className="mb-0 small  ms-2 ms-sm-3 ms-md-4">
                        {data.Time}
                      </p>
                    </div>
                    <div className=" d-flex align-items-center justify-content-end mt-3">
                      <span>Off</span>
                      <label className="switch mx-3">
                        <input type="checkbox" id="Capture" />
                        <span className="slider round"></span>
                      </label>
                      <span>On</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Notifications;
