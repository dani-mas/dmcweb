import "./App.css";
import Home from "./PortfolioContainer/Home/Home";
import Sidebar from "./PortfolioContainer/Sidebar/Sidebar.js";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}
function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Sidebar />
        <Home />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
