import React from "react";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsWallet,
} from "react-icons/bs";

import { TbHexagonNumber0 } from "react-icons/tb";
import { LuBadgePercent } from "react-icons/lu";
import { MdOutlineLiveHelp } from "react-icons/md";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <TbHexagonNumber0 className="icon_header" /> DashBoard
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Products
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Customers
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsWallet className="icon" /> Income
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <LuBadgePercent className="icon" /> Promote
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <MdOutlineLiveHelp className="icon" /> Help
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
