import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RxIcons from "react-icons/rx";
import * as MdIcons from "react-icons/md"
import * as TbIcons from "react-icons/tb"


function Adminsidebar() {

    return (
        <>
            <div className="skin-blue sidebar-mini active menu-open">
                <div className="" style={{ height: "auto", minHeight: "100%" }}>
                    <header className="main-header">
                        <a href="/" className="logo">
                            <span style={{ float: "left" }} className="logo-lg" ><b>Admin</b></span>
                        </a>
                    </header>
                </div>
            </div>
            <aside style={{ backgroundColor: "black" }} className='main-sidebar vertical-line'>
                <section className="sidebar">
                    <div className="user-panel">
                        <ul style={{ paddingInlineStart: 11 }} className="sidebar-menu 
                        active menu-open tree">
                            <li>
                                <MdIcons.MdDashboard />
                                <a href="/admin-dashboard">
                                    <sapn>
                                        Dashboard</sapn></a>
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
                                    <span>Teacher</span></a>
                            </li>
                            <li>
                            <FaIcons.FaBookOpen />
                            <a href="/grade">Grade</a>
                            </li>

                            <li>
                                <AiIcons.AiFillQuestionCircle />
                                <a href="assesment">
                                    <sapn>Asssement</sapn>
                                </a></li>
                            <li>
                                <TbIcons.TbReportSearch />
                                <a href="report">
                                    <span>Report</span>
                                </a>
                            </li>
                            <li >
                                <AiIcons.AiOutlineLogout />
                                <a href="/">
                                    <span className="margin-right-30">Logout</span>

                                </a>
                            </li>
                            {/*  <? php}?> */}
                        </ul>
                    </div>

                </section>
            </aside>


        </>
    );
}

export default Adminsidebar;