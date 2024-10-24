import React, { useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { addDays } from "date-fns";

function Multi() {
  useEffect(() => {
    let calendarEl = document.getElementById("calendar");

    const events = [
      { title: "Conference", start: "2024-10-22", end: "2024-10-25" },
      { title: "Meeting", start: "2024-10-27", end: "2024-10-27" },
      { title: "Workshop", start: "2024-10-14", end: "2024-10-17" },
    ];

    const adjustedEvents = events.map((event) => ({
      ...event,
      end: event.end ? addDays(new Date(event.end), 1).toISOString().split("T")[0] : event.end,
      allDay: true,
    }));

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
      dayHeaderFormat: { weekday: "long" },
      events: adjustedEvents,

      dayCellDidMount: function (info) {
        const adjustedDate = addDays(info.date, 1);
        const dateStr = adjustedDate.toISOString().split("T")[0]; 

        const hasEvent = adjustedEvents.some(event => {
          return dateStr >= event.start && dateStr < event.end;
        });

        if (hasEvent) {
          info.el.style.backgroundColor = "#cdcdcd"; 
        }
      }
    });

    calendar.render();

    return () => {
      calendar.destroy();
    };
  }, []);

  return <div id="calendar" style={{ position: "relative" }}></div>;
}

export default Multi;
