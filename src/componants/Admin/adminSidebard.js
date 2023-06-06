/** @format */

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import * as BsIcons from "react-icons/bs";
import { MdDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { FaChalkboardTeacher, FaBookOpen } from "react-icons/fa";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";

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
            <ul
              style={{ paddingInlineStart: 11 }}
              className="sidebar-menu 
                        active menu-open tree"
            >
              <li>
                <MdIcons.MdDashboard />
                <a href="/admin-dashboard">
                  <sapn>Dashboard</sapn>
                </a>
              </li>
              <li>
                <RxIcons.RxAvatar />
                <a href="/student">
                  <span>Student</span>
                </a>
              </li>
              <li>
                <FaIcons.FaChalkboardTeacher />
                <a href="/teacher">
                  <span>Teacher</span>
                </a>
              </li>
              <li>
                <FaIcons.FaBookOpen />
                <a href="/grade">Grade</a>
              </li>
              <li>
                <BsIcons.BsFillPersonCheckFill />
                <a href="/allocate-user">Allocation</a>
              </li>

              <li>
                <AiIcons.AiFillQuestionCircle />
                <a href="assesment">
                  <sapn>Asssement</sapn>
                </a>
              </li>
              <li>
                <TbIcons.TbReportSearch />
                <a href="report">
                  <span>Report</span>
                </a>
              </li>
              <li>
                <AiIcons.AiOutlineLogout />
                <a href="/">
                  <span className="margin-right-30">Logout</span>
                </a>
              </li>
              {/*  <? php}?> */}
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
                <a href="/grade">
                  <FaBookOpen /> Subject
                </a>
              </li>
              <li>
                <a href="/grade">
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
