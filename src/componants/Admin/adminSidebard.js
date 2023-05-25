import React from "react";

function Adminsidebar() {

    return (
        <>
            <div className="skin-blue sidebar-mini active menu-open">
                <div className="" style={{ height: "auto", minHeight: "100%" }}>
                    <header className="main-header">
                        <a className="logo">
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
                                <a href="/admin-dashboard">
                                    <sapn>
                                        Dashboard</sapn></a>
                            </li>
                            <li>
                                <a href="/student">
                                    <span>Student</span>
                                </a>
                            </li>
                            <li>
                                <a href="/teacher">
                                    <span>Teacher</span></a>
                            </li>
                            <li>
                            <a href="/grade">Grade</a>
                            </li>

                            <li>
                                <a href="">
                                    <sapn>Asssement</sapn>
                                </a></li>
                            <li>
                                <a href="">
                                    <span>Report</span>
                                </a>
                            </li>
                            <li >
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