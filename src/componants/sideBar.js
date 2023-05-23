import React from "react";
import { Link, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { sidebarIcons } from "./sidebardata";

import "./sideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Router>
        <Nav className="flex-column">
          {sidebarIcons.map((icon, index) => (
            <Nav.Link as={Link} to={icon.path} key={index} className="nav-link">
              {icon.icon} {icon.title}
            </Nav.Link>
          ))}
        </Nav>
        <Routes>
          {sidebarIcons.map((icon, index) => (
            <Route
              key={index}
              path={icon.path}
              element={<div>{icon.title} content</div>}
            />
          ))}
        </Routes>
      </Router>
    </div>
  );
}
