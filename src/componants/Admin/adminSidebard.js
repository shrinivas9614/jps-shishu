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
        style={{ backgroundColor: "black" }}
        className="main-sidebar vertical-line"
      >
        <section className="sidebar">
          <div className="user-panel">
            <ul className="sidebar-menu active menu-open tree">
              <li>
                <a href="/admin-dashboard">
                  <MdDashboard /> Dashboard
                </a>
              </li>
              <li>
                <a href="/student">
                  <RxAvatar /> Student
                </a>
              </li>
              <li>
                <a href="/allocate-user">
                  <BsIcons.BsFillPersonCheckFill />
                  Allocation
                </a>
              </li>
              <li>
                <a href="/teacher">
                  <FaChalkboardTeacher /> Teacher
                </a>
              </li>
              <li>
                <a href="/grade">
                  <FaBookOpen /> Grade
                </a>
              </li>

              <li>
                <a href="/subject">
                  <FaBookOpen /> Subject
                </a>
              </li>
              <li>
                <a href="/chapter">
                  <FaBookOpen /> Chapter
                </a>
              </li>
              <li>
                <a href="/assesment">
                  <AiFillQuestionCircle /> Assessment
                </a>
              </li>
              <li>
                <a href="/report">
                  <TbReportSearch /> Report
                </a>
              </li>
              <li>
                <a href="/">
                  <AiOutlineLogout /> Logout
                </a>
              </li>
            </ul>
          </div>
        </section>
      </aside>
    </>
  );
}

export default Adminsidebar;
