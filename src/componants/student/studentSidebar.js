import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";

export const StudentSidebar = ({ id }) => {
  return (
    <>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>

      <>
        <aside
          className="main-sidebar w3-sidebar w3-light-blue w3-bar-block" style={{width:"17%", fontSize: "20px" }}
        >
          <section className="sidebar">
            <div className="user-panel ">
              <ul className="sidebar-menu active menu-open tree">
                <li>
                  <a className="w3-bar-item w3-button" href="/student-dashboard">
                    <MdDashboard /> Dashboard
                  </a>
                </li>

                <li>
                  {/* <a className="w3-bar-item w3-button" href="/student-profile"> */}
                  <a className="w3-bar-item w3-button" href={`/student-profile/${id}`}>
                    <MdAccountCircle /> Profile
                  </a>
                </li>
                <li>
                  <a className="w3-bar-item w3-button" href="/student-assessment">
                    <AiFillQuestionCircle /> Assessment
                  </a>
                </li>
                <li>
                <a className="w3-bar-item w3-button" href="/student-report">
                  <TbReportSearch /> Report
                </a>
                </li>
                
                
                <li>
                  <a className="w3-bar-item w3-button" href="/">
                    <AiOutlineLogout /> Logout
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </aside>
      </>
    </>
  );
};
