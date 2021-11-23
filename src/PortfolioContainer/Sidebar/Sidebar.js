import React from "react";
import "./Sidebar.css";
//import logo from
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import useMetaMask from "../components/hooks/metamask";
import { injected } from "../components/wallet/connectors";

function Sidebar() {
  //const { active, account, library, connector, activate, desactivate } =useWeb3React();

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  /*
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      desactivate();
    } catch (ex) {
      console.log(ex);
    }
  }
*/

  const { connect, disconnect, isActive, account, shouldDisable } =
    useMetaMask();

  async function connectWallet() {
    try {
      await connect();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <>
      <header>
        <div className="navbar-wallet">
          <AiOutlineMenu className={"toggle"} onClick={showSidebar} />

          <button className="btn-conectar-wallet" onClick={disconnect}>
            Disconnect
          </button>
          <span className="msg-wallet">
            {isActive ? (
              account
            ) : (
              <button
                className="btn-conectar-wallet"
                onClick={connectWallet}
                disabled={shouldDisable}
              >
                Connect Wallet
              </button>
            )}
          </span>
        </div>
      </header>
      <div className={sidebar ? "sidenav active" : "sidenav"}>
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
