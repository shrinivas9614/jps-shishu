/** @format */

import React from "react";
import { MdDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import * as BsIcons from "react-icons/bs";

function Adminsidebar() {
  return (
    <>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />

      <>
        <div className="skin-blue sidebar-mini active menu-open">
          <div className="" style={{ height: "auto", minHeight: "100%" }}>
            <header className="main-header">
              <a href="/" className="logo">
                <span style={{ float: "left" }} className="logo-lg">
                  <b>Admin</b>
                </span>
              </a>
            </header>
          </div>
        </div>
        <aside
          className="main-sidebar vertical-line w3-sidebar w3-light-blue w3-bar-block" style={{width:"17%", fontSize: "20px" }}
        >
          <section className="sidebar">
            <div className="user-panel">
              <ul className="sidebar-menu active menu-open tree">
                <li>
                  <a  className="w3-bar-item w3-button" href="/admin-dashboard">
                    <MdDashboard /> Dashboard
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/student">
                    <RxAvatar /> Student
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/allocate-user">
                    <BsIcons.BsFillPersonCheckFill />
                    Allocation
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/teacher">
                    <FaChalkboardTeacher /> Teacher
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/grade">
                    <FaBookOpen /> Grade
                  </a>
                </li>

                <li>
                  <a  className="w3-bar-item w3-button" href="/subject">
                    <FaBookOpen /> Subject
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/chapter">
                    <FaBookOpen /> Chapter
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/assessment">
                    <AiFillQuestionCircle /> Assessment
                  </a>
                </li>

                {/* <li>
                <a  className="w3-bar-item w3-button" href="/test-form">
                  <AiFillQuestionCircle /> Test
                </a>
              </li> */}

                <li>
                  <a  className="w3-bar-item w3-button" href="/report">
                    <TbReportSearch /> Report
                  </a>
                </li>
                <li>
                  <a  className="w3-bar-item w3-button" href="/">
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
}

export default Adminsidebar;
