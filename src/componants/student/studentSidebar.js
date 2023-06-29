import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";

export const StudentSidebar = ({ id }) => {
  return (
    <>
      <>
        <aside
          style={{ backgroundColor: "black" }}
          className="main-sidebar vertical-line"
        >
          <section className="sidebar">
            <div className="user-panel">
              <ul className="sidebar-menu active menu-open tree">
                <li>
                  <a href="/student-dashboard">
                    <MdDashboard /> Dashboard
                  </a>
                </li>
                <li>
                  {/* <a href="/student-profile"> */}
                  <a href={`/student-profile/${id}`}>
                    <MdAccountCircle /> Profile
                  </a>
                </li>
                
                <li>
                  <a href="/student-assessment">
                    <AiFillQuestionCircle /> Assessment
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
    </>
  );
};
