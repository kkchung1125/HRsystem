import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/08-notifications.scss";

export default function Notifications() {
  // const { register, handleSubmit } = useForm();
  // const handleNotifications = (data: any) => console.log(data);
  const [companyEvent, setCompanyEvent] = useState([]);
  const [notifications, setNotifications] = useState([] as any);
  const [eventObj, setEventObj] = useState({
    eventName: "",
    eventDate: "",
    eventDetails: "",
  });
  const [notificationObj, setNotificationObj] = useState({
    notificationTitle: "",
    notificationMessage: "",
    notificationRecipient: "all",
  });

  // console.log(eventObj);

  // console.log(notificationObj);

  async function getCompanyEvent() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/notification/getEventRecord`,
        options
      );

      let event = await res.json();
      event = event["res"];
      setCompanyEvent(event);
    } catch {
      console.log("fetch fail");
    }
  }
  async function getNotifications() {
    try {
      const options = { method: "GET" };
      let res = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/notification/getNotifications`,
        options
      );

      let notification = await res.json();
      notification = notification["res"];
      setNotifications(notification);
    } catch {
      console.log("fetch fail");
    }
  }
  console.log(notifications);

  function dateFormatter(dateString: string) {
    // Create a date object from a date string
    var date = new Date(dateString);

    // Get year, month, and day part from the date
    var year = date
      .toLocaleString("default", { year: "numeric" })
      .replace("年", "");
    var month = date
      .toLocaleString("default", { month: "2-digit" })
      .replace("月", "");

    var day = date
      .toLocaleString("default", { day: "2-digit" })
      .replace("日", "");

    // Generate yyyy-mm-dd date string
    var formattedDate = year + "-" + month + "-" + day;
    return formattedDate;
  }

  function dataTimeFormatter(dateTimeString: string) {
    // Create a date object from a date string
    var date = new Date(dateTimeString);

    // Get year, month, and day part from the date
    var year = date
      .toLocaleString("default", { year: "numeric" })
      .replace("年", "");
    var month = date
      .toLocaleString("default", { month: "2-digit" })
      .replace("月", "");

    var day = date
      .toLocaleString("default", { day: "2-digit" })
      .replace("日", "");

    let date_of_dateTimeString = year + "-" + month + "-" + day;
    let time_of_dateTimeString = new Date(dateTimeString)
      .toTimeString()
      .split(" ")[0];
    let final_date_time = date_of_dateTimeString + " " + time_of_dateTimeString;
    return final_date_time;
  }

  const handleEventSubmitClick = async () => {
    console.log("You are going to boardcast the event");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(eventObj),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/notification/postNewEvent`,
      requestOptions
    );
    const event_result = await res.json();
    // console.log(event_result);
    setEventObj({
      ...eventObj,
      eventName: "",
      eventDate: "",
      eventDetails: "",
    });
    getCompanyEvent();
  };

  const handleNotificationSubmitClick = async () => {
    console.log("You are going to boardcast the notification");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(notificationObj),
      // headers: { "Content-Type": "multi-type/form-data" },
      // body: formData,
    };
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/notification/postNewNotification`,
      requestOptions
    );
    const notification_result = await res.json();
    // console.log(notification_result);
    setNotificationObj({
      ...notificationObj,
      notificationTitle: "",
      notificationMessage: "",
      notificationRecipient: "all",
    });
    getNotifications();
  };

  useEffect(() => {
    getCompanyEvent();
    getNotifications();
  }, []);

  {
    /* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  }

  return (
    <div className="pageBigContainer">
      <div className="eventBigContainer">
        <div>
          <h1>Events Announcement</h1>
        </div>
        <div className="eventInnerContainer">
          <div className="eventAnnounceContainer">
            <div>
              <h2>Create Event</h2>
            </div>
            <div className="eventAnnouncementForm">
              <div className="eventNameContainer">
                <label>
                  Event Name :
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="eventName"
                      value={eventObj["eventName"]}
                      onChange={(event) => {
                        setEventObj({
                          ...eventObj,
                          eventName: event.target.value,
                        });
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className="eventNameContainer">
                <label>
                  Event Date :
                  <div>
                    <input
                      type="date"
                      name="name"
                      className="eventDate"
                      value={eventObj["eventDate"]}
                      onChange={(event) => {
                        setEventObj({
                          ...eventObj,
                          eventDate: event.target.value,
                        });
                      }}
                    />
                  </div>
                </label>
              </div>
              <div className="eventDetailsContainer">
                <label>
                  <div>Event Details :</div>
                  <textarea
                    name="name"
                    rows={10}
                    className="eventDetails"
                    value={eventObj["eventDetails"]}
                    onChange={(event) => {
                      setEventObj({
                        ...eventObj,
                        eventDetails: event.target.value,
                      });
                    }}
                  />
                </label>
              </div>
              <div className="eventButtonContainer">
                <input
                  type="submit"
                  value="Submit"
                  className="boardcastButton"
                  onClick={handleEventSubmitClick}
                />
              </div>
            </div>
          </div>
          <div className="eventRecordContainer">
            <div>
              <h2>Previous Events</h2>
            </div>
            <div className="recordsContainer">
              {companyEvent.map((data, index) => {
                return (
                  <div className="eachRecordContainer" key={index}>
                    <div className="recordItem" style={{ fontWeight: "bold" }}>
                      Event Name :{" "}
                      <div className="recordItemText">{data["event_name"]}</div>
                    </div>
                    <div className="recordItem">
                      Event date :{" "}
                      <div className="recordItemText">
                        {dateFormatter(data["date"])}
                      </div>
                    </div>
                    <div className="recordItem">
                      Event details :{" "}
                      <div className="recordItemText">{data["details"]}</div>
                    </div>
                    <div className="recordItem createTime">
                      {/* Create time :{" "} */}
                      <div className="recordItemText">
                        {" "}
                        {dataTimeFormatter(data["created_at"])}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="notificationBigContainer">
        <div>
          <h1>Notifications Announcement</h1>
        </div>
        <div className="eventInnerContainer">
          <div className="eventAnnounceContainer">
            <div>
              <h2>Create Notification</h2>
            </div>
            <div className="eventAnnouncementForm">
              <div className="eventNameContainer">
                <label style={{ fontWeight: "bold" }}>
                  Title :
                  <div>
                    <input
                      type="text"
                      name="name"
                      className="eventName"
                      value={notificationObj["notificationTitle"]}
                      onChange={(event) => {
                        setNotificationObj({
                          ...notificationObj,
                          notificationTitle: event.target.value,
                        });
                      }}
                    />
                  </div>
                </label>
              </div>

              <div className="eventDetailsContainer">
                <label>
                  <div>Message :</div>
                  <textarea
                    name="name"
                    rows={10}
                    className="eventDetails"
                    value={notificationObj["notificationMessage"]}
                    onChange={(event) => {
                      setNotificationObj({
                        ...notificationObj,
                        notificationMessage: event.target.value,
                      });
                    }}
                  />
                </label>
              </div>

              <div className="eventRecepientContainer">
                <label>
                  <div>Recepient :</div>
                  <select
                    className="eventRecepient"
                    value={notificationObj["notificationRecipient"]}
                    onChange={(event) => {
                      setNotificationObj({
                        ...notificationObj,
                        notificationRecipient: event.target.value,
                      });
                    }}
                  >
                    {/* <option value=""></option> */}
                    <option value="all">All</option>
                  </select>
                </label>
              </div>
              <div className="eventButtonContainer">
                <input
                  type="submit"
                  value="Submit"
                  className="boardcastButton"
                  onClick={handleNotificationSubmitClick}
                />
              </div>
            </div>
          </div>
          <div className="eventRecordContainer">
            <div>
              <h2>Previous Notifications</h2>
            </div>
            <div className="recordsContainer">
              {notifications.map((data: any, index: any) => {
                return (
                  <div className="eachRecordContainer" key={index}>
                    <div className="recordItem" style={{ fontWeight: "bold" }}>
                      Title :{" "}
                      <div className="recordItemText">{data["title"]}</div>
                    </div>
                    <div className="recordItem_message">
                      <div
                        className="recordItemText"
                        style={{ fontSize: "12" }}
                      >
                        {data["message"]}
                      </div>
                    </div>
                    <div className="recordItem createTime">
                      Recipients :{" "}
                      <div className="recordItemText">{data["recipient"]}</div>
                    </div>
                    <div className="recordItem createTime">
                      {/* Create time :{" "} */}
                      <div className="recordItemText">
                        {" "}
                        {dataTimeFormatter(data["created_at"])}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
