import React, { useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { addDays, format } from "date-fns";
import moonImage from "../../assets/img/moon.png";
import lineImage from "../../assets/img/line.png";

function Multi() {
  useEffect(() => {
    let calendarEl = document.getElementById("calendar");

    const events = [
      { title: "Conference", start: "2024-10-22", end: "2024-10-25" },
      { title: "Meeting", start: "2024-10-27", end: "2024-10-27" },
      { title: "Workshop", start: "2024-10-14", end: "2024-10-17" },
    ];

    const blockedDays = ["2024-10-28", "2024-10-29", "2024-10-30"];

    const adjustedEvents = events.map((event) => ({
      ...event,
      end: event.end
        ? addDays(new Date(event.end), 1).toISOString().split("T")[0]
        : event.end,
      allDay: true,
    }));

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: false,
      dayHeaderFormat: { weekday: "long" },
      events: adjustedEvents,

      dayCellDidMount: function (info) {
        const dateStr = format(info.date, "yyyy-MM-dd");

        const hasEvent = adjustedEvents.some((event) => {
          return dateStr >= event.start && dateStr < event.end;
        });

        const isBlocked = blockedDays.includes(dateStr);

        if (isBlocked) {
          info.el.style.backgroundColor = "#F0F0F0";
          info.el.style.color = "#cdcdcd";
          info.el.style.pointerEvents = "none";
        } else if (hasEvent) {
          info.el.style.backgroundImage = `url(${lineImage})`;
          info.el.style.backgroundRepeat = "no-repeat";
          info.el.style.backgroundSize = "cover";
        } else {
          info.el.style.backgroundImage = `url(${moonImage})`;
          info.el.style.backgroundRepeat = "no-repeat";
          info.el.style.backgroundPosition = "right 10px top 10px";
        }
      },
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div id="calendar" style={{ position: "relative" }}></div>;
}

export default Multi;
