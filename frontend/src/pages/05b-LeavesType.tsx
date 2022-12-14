import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import LeavesTypeCard from "../components/05b-LeavesTypeCard";
import "../styles/05b-LeavesType.css";
import PopupAddType from "../components/05b-PopupAddType";
import PopupDeleteType from "../components/05b-PopupDeleteType";

interface typeState {
  id: string;
  type: string;
  description: string;
}

export default function LeavesType() {
  const [leavestype, setLeavesType] = useState<string[]>([]);
  const [toggleRefresh, setToggleRefresh] = useState(false);
  const [toggleRefreshDelete, setToggleRefreshDelete] = useState(false);

  useEffect(() => {
    const requestOptions = {
      method: "Get",
    };
    fetch(`${process.env.REACT_APP_BACKEND_URL}/leave/types`, requestOptions)
      .then((response) => {
        return response.json();
        // console.log(response.json())
      })
      .then((data) => {
        setLeavesType(data);
      });
    console.log(leavestype);
  }, [toggleRefresh, toggleRefreshDelete]);

  // const types: typeState[] = [
  //   {
  //     id: "01",
  //     type: "Annaul Leave",
  //     description: "blahblahblah",
  //   },
  //   {
  //     id: "02",
  //     type: "Sick Leave",
  //     description: "blahblahblahblah",
  //   },
  //   {
  //     id: "03",
  //     type: "Maternity Leave",
  //     description: "blahblahblahblahblah",
  //   },
  // ];

  return (
    <div>
      <div className="adddeltype">
      <PopupAddType
        setToggleRefresh={setToggleRefresh}
        addType={(newType: string) => {
          setLeavesType([...leavestype, newType]);
        }}
      />
      <PopupDeleteType
        setToggleRefreshDelete={setToggleRefreshDelete}
        setToggleRefresh={setToggleRefresh}
        leaveTypes={leavestype}
        onDelete={(item: string) => {
          const newList = leavestype.slice(0);
          setLeavesType(newList.filter((leavestype) => leavestype != item));
        }}
      />
</div>
      <div className="cardsContainer">
        {leavestype.map((type: any, id: any) => (
          <LeavesTypeCard key={id} obj={type} />
        ))}
      </div>
    </div>
  );
}
