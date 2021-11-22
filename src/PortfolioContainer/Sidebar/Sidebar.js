import React from "react";
import "./Sidebar.css";
//import logo from
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const [button, setButton] = useState(false);
  const showButton = () => setButton(!button);

  return (
    <>
      <div className={sidebar ? "sidenav active" : "sidenav"}>
        <AiOutlineMenu className={"toggle"} onClick={showSidebar} />
        <ul>
          <AiOutlineCloseCircle id="close" onClick={showSidebar} />
          <li>
            <br />
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
          <li>
            <a href="#">UI/UX Design</a>
          </li>
          <li>
            <a href="#">NFT Gallery</a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
