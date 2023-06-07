/** @format */

import React from "react";
import { MdDashboard } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLogout } from "react-icons/ai";

function TeacherSidebar() {
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
                <a href="/profile">
                  <RxAvatar /> profile
                </a>
              </li>
              <li>
                <a href="/teacher-login">
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

export { TeacherSidebar };
