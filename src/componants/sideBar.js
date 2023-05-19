import React from 'react';
import { sidebarIcons } from './sidebardata';
import { Nav } from 'react-bootstrap';
import './sideBar.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      {sidebarIcons.map((icon, index) => (
        <Nav key={index} className="flex-column">
          <Nav.Item>
            <Nav.Link>
              {icon.icon} {icon.title}
            </Nav.Link>
          </Nav.Item>
        </Nav>
      ))}
    </div>
  );
}
