import React, { useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
// import userData from "../jsonFiles/DataInsights.json";
import DoughnutChart from "../components/07-DoughnutChart";
import VerticalBarChart from "../components/07-VerticalBarChart";
import PolarAreaChart from "../components/07-PolarAreaChart";
import StackBarChart from "../components/07-StackBarChart";

const DataInsights = () => (
  /* const [dataGain, setDataGain] = useState({*/ /*   labels: userData.map((data) => data.year),*/ /*   datasets: [*/ /*     {*/ /*       label: "Users Gained",*/ /*       data: userData.map((data) => data.userGain),*/ /*       backgroundColor: [*/ /*         "rgba(75,192,192,1)",*/ /*         "#ecf0f1",*/ /*         "#50AF95",*/ /*         "#f3ba2f",*/ /*         "#2a71d0",*/ /*       ],*/ /*       borderColor: "black",*/ /*       borderWidth: 2,*/ /*     },*/ /*   ],*/ /* });*/ /* const [dataLost, setDataLost] = useState({*/ /*   labels: userData.map((data) => data.year),*/ /*   datasets: [*/ /*     {*/ /*       label: "Users Lost",*/ /*       data: userData.map((data) => data.userLost),*/ /*       backgroundColor: [*/ /*         "rgba(75,192,192,1)",*/ /*         "#ecf0f1",*/ /*         "#50AF95",*/ /*         "#f3ba2f",*/ /*         "#2a71d0",*/ /*       ],*/ /*       borderColor: "black",*/ /*       borderWidth: 2,*/ /*     },*/ /*   ],*/ /* });*/ <>
    <div className="two-column-grid">
      <div className="two-column-grid-content">
        <div className="data-title">Job Status of Employees</div>
        <DoughnutChart />
      </div>
      <div className="two-column-grid-content">
        <div className="data-title">Human Cost by Department</div>
        <PolarAreaChart />
      </div>
      <div className="two-column-grid-content">
        <div className="data-title">Year of Service</div>
        <VerticalBarChart />
      </div>
      <div className="two-column-grid-content">
        <div className="data-title">Turnover by Departmenrt</div>
        <StackBarChart />
      </div>
      {/* <div>
          <Barchart chartData={dataGain} />
        </div>
        <div>
          <LineChart chartData={dataLost} />
        </div> */}
    </div>
  </>
);

export default DataInsights;
