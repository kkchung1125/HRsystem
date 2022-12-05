import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/08-notifications.scss";

export default function Notifications() {
  const { register, handleSubmit } = useForm();
  const handleNotifications = (data: any) => console.log(data);
  const [companyEvent, setCompanyEvent] = useState([]);

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
  console.log(companyEvent);

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

  useEffect(() => {
    getCompanyEvent();
  }, []);

  return (
    <>
      <div className="card">
        <Splitter style={{ height: "300px" }} className="mb-5">
          <SplitterPanel className="flex align-items-center justify-content-center">
            <form onSubmit={handleSubmit(handleNotifications)}>
              <div>
                <h2>Create Company Announcement</h2>
                <div>
                  <textarea
                    placeholder="write your message here"
                    {...register("name")}
                  />
                </div>
                <div>
                  <input type="date" {...register("broadcast date")} />

                  <input type="time" {...register("broadcast time")} />
                </div>
              </div>
              <button>Broadcast</button>
            </form>
          </SplitterPanel>
          <SplitterPanel className="flex align-items-center justify-content-center">
            <h3>Previous Announcements</h3>
            <div className="prevAnn">
              <p>Date:</p>
              <p>Time:</p>
              <p>Message:</p>
            </div>
          </SplitterPanel>
        </Splitter>
      </div>
      <div className="eventBigContainer">
        <div>
          <h1>Event Announcement</h1>
        </div>
        <div className="eventInnerContainer">
          <div className="eventAnnounceContainer">
            <div>
              <h2>Create Announcement</h2>
            </div>
            <div className="eventAnnouncementForm">
              <div className="eventNameContainer">
                <label>
                  Event Name :
                  <div>
                    <input type="text" name="name" className="eventName" />
                  </div>
                </label>
              </div>
              <div className="eventNameContainer">
                <label>
                  Event Date :
                  <div>
                    <input type="date" name="name" className="eventDate" />
                  </div>
                </label>
              </div>
              <div className="eventDetailsContainer">
                <label>
                  Event Details :
                  <textarea name="name" rows={10} className="eventDetails" />
                </label>
              </div>
              <div className="eventButtonContainer">
                <input
                  type="submit"
                  value="Submit"
                  className="boardcastButton"
                />
              </div>
            </div>
          </div>
          <div className="eventRecordContainer">
            <div>
              <h2>Previous Announcements</h2>
            </div>
            <div className="recordsContainer">
              {companyEvent.map((data) => {
                return (
                  <div className="eachRecordContainer">
                    <div className="recordItem">
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
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* ///////// */}
      <div className="notificationBigContainer">
        <div>
          <h2>Notification Announcement</h2>
        </div>
        <div className="notificationInnerContainer">
          <div className="notificationAnnounceContainer"></div>
          <div className="notificationRecordContainer"></div>
        </div>
      </div>
    </>
  );
}
