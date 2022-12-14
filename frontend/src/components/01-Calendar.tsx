import React, { useState, useEffect } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import { INITIAL_EVENTS, createEventId } from "./01-eventSetting";
import "../styles/01-Calendar.css";

import moment from "moment";
import { eventNames } from "process";
moment().format();

interface state {
  id: string;
  title: string;
  start: string;
  backgroundColor: string;
  borderColor: string;
}
export default function Calendar() {
  const [initialEvent, setInitialEvent] = useState<state[]>([
    { id: "", title: "", start: "", backgroundColor: "", borderColor: "" },
  ]);

  useEffect(() => {
    async function checkBirthdayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/birthdayShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        item["id"] = "birthday" + i.toString();
        item["start"] = changeBirthdayDateFormat(item["start"]);
        item["title"] = "Birthday: " + item["title"];
        item["backgroundColor"] = "#eab676";
        item["borderColor"] = "#eab676";
        i++;
      }
      return response;
    }

    async function checkLeaveShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/leaveShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        if (
          // full day one day
          item["start"] == item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"];
          item["end"] = item["end"];
        } else if (
          // full day more than one day
          item["start"] != item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"];
          item["end"] = item["end"] + "T23:00:00";
        } else if (
          // one morning
          item["start"] == item["end"] &&
          item["start_date_period"] == "first_half" &&
          item["end_date_period"] == "first_half"
        ) {
          item["start"] = item["start"] + "T09:00:00";
          item["end"] = item["end"] + "T14:00:00";
        } else if (
          // one afternoon
          item["start"] == item["end"] &&
          item["start_date_period"] == "second_half" &&
          item["end_date_period"] == "second_half"
        ) {
          item["start"] = item["start"] + "T14:00:00";
          item["end"] = item["end"] + "T18:00:00";
        } else if (
          // more than one day with afternoon start
          item["start"] != item["end"] &&
          item["start_date_period"] == "second_half" &&
          item["end_date_period"] == "full_day"
        ) {
          item["start"] = item["start"] + "T14:00:00";
          item["end"] = item["end"] + "T23:00:00";
        } else if (
          // more than one day with morning end
          item["start"] != item["end"] &&
          item["start_date_period"] == "full_day" &&
          item["end_date_period"] == "first_half"
        ) {
          item["start"] = item["start"] + "T09:00:00";
          item["end"] = item["end"] + "T14:00:00";
          // specified for half day end
          item["title"] = item["title"] + " (2pm end)";
        }

        item["id"] = "leave" + i.toString();
        item["title"] = item["type"] + ": " + item["title"];

        // decide the color deopends on status
        if (item["status"] == "pending") {
          item["backgroundColor"] = "#d5dfe1";
          item["borderColor"] = "#d5dfe1";
        } else if (item["status"] == "approved") {
          item["backgroundColor"] = "#9fa0f4";
          item["borderColor"] = "#9fa0f4";
        } else if (item["status"] == "taken") {
          item["backgroundColor"] = "#534666";
          item["borderColor"] = "#534666";
        }

        i++;
      }
      // console.log(response);
      return response;
    }

    function changeBirthdayDateFormat(date: string) {
      return "2022" + date.substring(4);
      // return moment(new Date()).format("YYYY") + date.substring(4);
    }

    async function checkFirstDayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/firstDateShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        item["id"] = "firstday" + i.toString();
        item["start"] = item["start"];
        item["title"] = "First Day: " + item["title"];
        item["backgroundColor"] = "#0EEEEE";
        item["borderColor"] = "#0EEEEE";
        i++;
      }
      return response;
      // setInitialEvent(response);
    }

    async function checkContractDayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/contractEndShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        item["id"] = "contract" + i.toString();
        item["start"] = item["start"];
        item["title"] = "Contract End: " + item["title"];
        item["backgroundColor"] = "#873e23";
        item["borderColor"] = "#873e23";
        i++;
      }
      return response;
      // setInitialEvent(response);
    }

    async function checkProbationDayShowCalendar() {
      const requestOptions = {
        method: "Get",
      };

      const res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/user/probationEndShowCalendar`,
        requestOptions
      );
      const response = await res.json();

      let i = 1;
      for (let item of response) {
        item["id"] = "probation" + i.toString();
        item["start"] = item["start"];
        item["title"] = "Probation End: " + item["title"];
        item["backgroundColor"] = "#095f9c";
        item["borderColor"] = "#095f9c";
        i++;
      }
      return response;
      // setInitialEvent(response);
    }

    async function main() {
      let array1 = await checkBirthdayShowCalendar();
      // console.log(array1);
      let array1nextYear = JSON.parse(JSON.stringify(array1));
      array1nextYear.map((item: any) => {
        item["start"] =
          (+item["start"].substring(0, 4) + 1).toString() +
          item["start"].substring(4);
        item["id"] = "next" + item["id"];
      });
      let array2 = await checkLeaveShowCalendar();
      let array3 = await checkFirstDayShowCalendar();
      let array4 = await checkContractDayShowCalendar();
      let array5 = await checkProbationDayShowCalendar();

      const lastDay = [
        {
          title: "Last Day: Cheung Ka Yee, Mia",
          start: "2022-12-28",
          id: "lastday1",
          backgroundColor: "#ec6480",
          borderColor: "#ec6480",
        },
      ];

      let show: Array<any> = [
        ...array1,
        ...array1nextYear,
        ...array2,
        ...array3,
        ...array4,
        ...array5,
        ...lastDay,
      ];

      // console.log(show);

      // sort by date;
      let showResult = show.sort(function (a, b) {
        var keyA = new Date(a.start),
          keyB = new Date(b.start);
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      // showResult = showResult.slice(0, 12);
      // console.log(showResult);
      // show.filter((item, index) => show.indexOf(item) <= 12);

      setInitialEvent(showResult);
    }
    main();
  }, []);

  return (
    <>
      <div className="calendar-container">
        <div className="calendar-main">
          <FullCalendar
            plugins={[dayGridPlugin]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth",
            }}
            initialView="dayGridMonth"
            nextDayThreshold="09:00:00"
            editable={false} // disable drag and drop
            weekends={false}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            events={initialEvent} // alternatively, use the `events` setting to fetch from a feed
            // eventContent={renderEventContent} // custom render function
          />
          {/* <div className="calendar-info">{renderInfoBox}</div> */}
        </div>
        <div className="calendar-info">
          <div className="calendar-sidebar">
            <h2 className="board-title">Upcoming Events</h2>
            {/* <h2>Upcoming Events ({initialEvent.length})</h2> */}

            <ul className="dotspace">{initialEvent.map(renderSidebarEvent)}</ul>
          </div>
        </div>
      </div>
    </>
  );
}

function renderSidebarEvent(event: any) {
  // console.log(event.uniqueid);
  return (
    <>
      {new Date(event.start) >= new Date() &&
      new Date(event.start) <
        new Date(new Date().setDate(new Date().getDate() + 30)) ? (
        <li key={event.id} className="dot">
          <b>
            {formatDate(event.start, {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </b>
          <br />
          <i> {event.title}</i>
        </li>
      ) : (
        <></>
      )}
    </>
  );
}
