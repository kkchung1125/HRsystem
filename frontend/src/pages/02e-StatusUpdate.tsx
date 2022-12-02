import React, { useState, useEffect } from "react";
// import StatusUpdateForm from "../components/02e-StatusUpdateForm";
import StatusUpdateCard from "../components/02e-statusUpdateCard";
import { Carousel } from "primereact/carousel";
// import { Splitter, SplitterPanel } from "primereact/splitter";
import "../styles/06-Carousel.css";

interface statusCard {
  id: string;
  status: string;
  barColor: string;
  profilepic: string;
  person: string;
  position: string;
  endDate: string;
  daysLeft: string;
  bgcolor: string;
  completed: number;
}

export default function StatusUpdate() {
  const statuses: statusCard[] = [
    {
      id: "01",
      status: "End of Probation",
      barColor: "#fbffa0",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Charlotte Cakad",
      position: "Programmer",
      endDate: "06-12-2022",
      daysLeft: "10 days left",
      bgcolor: "#6a1b9a",
      completed: 10,
    },
    {
      id: "02",
      status: "End of Contract",
      barColor: "#cca0ff",
      profilepic:
        "https://play-lh.googleusercontent.com/i1qvljmS0nE43vtDhNKeGYtNlujcFxq72WAsyD2htUHOac57Z9Oiew0FrpGKlEehOvo=w240-h480-rw",
      person: "Angela Baby",
      position: "UX Designer",
      endDate: "06-12-2022",
      daysLeft: "10 days left",
      bgcolor: "#6a1b9a",
      completed: 50,
    },
  ];

  // const [showDetails, setShowDetails] = useState(false);

  // function Card(): any {
  //   return <StatusUpdateCard setShowDetails={setShowDetails} />;
  // }

  return (
    <>
      <Carousel
        value={statuses}
        itemTemplate={StatusUpdateCard}
        numVisible={5}
        numScroll={1}
        showNavigators={true}
        verticalViewPortHeight={"450px"}
      />
    </>
  );
}
