import React, { useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

function Single() {
  useEffect(() => {
    let calendarEl = document.getElementById("calendar");

    const events = [
      { title: "Meeting", start: "2024-10-20", end: "2024-10-24" },
      { title: "Conference", start: "2024-10-25", end: "2024-10-25" },
      { title: "Workshop", start: "2024-10-28", end: "2024-10-29" },
    ];

    let calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
      initialView: "dayGridMonth",
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,listWeek",
      },
      dayHeaderFormat: { weekday: "long" },
      events: events,
      dayCellDidMount: function (info) {
        const dateStr = toDateOnly(info.date.toISOString());

        // Check if the current day falls within the range of an event
        const hasEvent = events.some((event) => {
          const start = toDateOnly(new Date(event.start).toISOString());
          const end = toDateOnly(
            event.end ? new Date(event.end).toISOString() : start
          );
          return dateStr >= start && dateStr <= end;
        });

        // Apply slash if it's part of an event
        if (hasEvent) {
          info.el.style.backgroundImage =
            "linear-gradient(45deg, transparent 45%, black 45%, black 55%, transparent 55%)";
          info.el.style.backgroundSize = "100% 100%";
        } else {
          // Apply moon icon for days without events
          if (!info.el.querySelector(".moon-icon")) {
            const moonIcon = document.createElement("span");
            moonIcon.classList.add("moon-icon");
            moonIcon.innerHTML = "🌙";
            moonIcon.style.fontSize = "30px";
            moonIcon.style.position = "absolute";
            moonIcon.style.top = "5px";
            moonIcon.style.left = "5px";
            info.el.style.position = "relative";
            info.el.appendChild(moonIcon);
          }
        }
      },
    });

    calendar.render();

  });

  return <div id="calendar" style={{ position: "relative" }}></div>;
}

export default Single;
