/** @jsxImportSource @emotion/react */
import "./App.scss";
import { css } from "@emotion/react";
import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink, useNavigate } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdOutlineSpaceDashboard, MdOutlineSubtitles } from "react-icons/md";
import { HiOutlineOfficeBuilding, HiOutlineSpeakerphone } from "react-icons/hi";
import { SlOrganization } from "react-icons/sl";
import { MdOutlinePeopleAlt, MdNotificationsNone } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { GoTriangleLeft, GoTriangleDown } from "react-icons/go";
import { CgProfile } from "react-icons/cg";

import Dashboard from "./pages/01-Dashboard";
import Organization from "./pages/02a-Organization";
import Employee from "./pages/02d-Employee";
import Attendance from "./pages/04-Attendance";
import Payroll from "./pages/05-Payroll";
import Calendar from "./pages/09-Calendar";

function App() {
  const navigate = useNavigate();
  const [sideBarItemShow1, setSideBarItemShow1] = useState(false);
  const [sideBarItemShow2, setSideBarItemShow2] = useState(false);

  return (
    <div className="container">
      <div className="sidebar">
        <div id="company-logo" onClick={() => navigate("dashboard")}>
          <BsFillPeopleFill /> <span>HR Solution</span>
        </div>

        <NavLink to={"dashboard"}>
          <div>
            <MdOutlineSpaceDashboard /> <span>dashboard</span>
          </div>
        </NavLink>

        <div onClick={() => setSideBarItemShow1(!sideBarItemShow1)}>
          <HiOutlineOfficeBuilding />
          <span>Company</span>
          <div className="sub-list-triangle">
            {sideBarItemShow1 ? <GoTriangleDown /> : <GoTriangleLeft />}
          </div>
        </div>

        {sideBarItemShow1 && (
          <>
            <NavLink className="sub-item" to={"organization"}>
              <div>
                <SlOrganization /> <span>organization</span>
              </div>
            </NavLink>
            <NavLink className="sub-item" to={"grade"}>
              <div>
                <TbReportSearch /> <span>grade</span>
              </div>
            </NavLink>
            <NavLink className="sub-item" to={"title"}>
              <div>
                <MdOutlineSubtitles /> <span>title</span>
              </div>
            </NavLink>
            <NavLink className="sub-item" to={"employee"}>
              <div>
                <MdOutlinePeopleAlt /> <span>employee</span>
              </div>
            </NavLink>
          </>
        )}

        <NavLink className="nav-item" to={"attendance"}>
          <div>
            <MdOutlineSpaceDashboard /> <span>attendance</span>
          </div>
        </NavLink>
        <NavLink className="nav-item" to={"calendar"}>
          <div>
            <MdOutlineSpaceDashboard /> <span>calendar</span>
          </div>
        </NavLink>
      </div>
      <div className="main-container">
        <div className="navbar">
          <div className="navbar-grid">
          <HiOutlineSpeakerphone />
          </div>
          <div id="announcement">Sample Company Announcement</div>
          <div className="navbar-grid"><MdNotificationsNone /><span>
            1</span></div>
          <div className="navbar-grid">
          <FiSettings />
          </div>
          <div className="navbar-grid"><CgProfile /></div>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="organization" element={<Organization />}></Route>
            <Route path="employee" element={<Employee />}></Route>
            <Route path="attendance" element={<Attendance />}></Route>
            <Route path="payroll" element={<Payroll />}></Route>
            <Route path="calendar" element={<Calendar />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
function setPage(
  arg0: (page: any) => void
): React.MouseEventHandler<HTMLAnchorElement> | undefined {
  throw new Error("Function not implemented.");
}
