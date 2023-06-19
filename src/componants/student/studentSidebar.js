import React from 'react'
import { MdDashboard } from "react-icons/md";
import { AiFillQuestionCircle, AiOutlineLogout } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { BiBookContent } from "react-icons/bi";
export const StudentSidebar = () => {
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
                                    <a href="/student-profile">
                                        <MdAccountCircle /> Profile
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <BiBookContent/>    Class
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
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
    )
}