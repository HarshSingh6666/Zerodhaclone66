import React from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import Logout from "./logout";

import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
  // Logout function inside the component

  return (
    <div className="dashboard-container">
      {/* Sidebar / WatchList */}
      <WatchList />

      {/* Main Content Area */}
      <div className="content">
        <GeneralContextProvider>
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/logout"element={<Logout/>}/>
          </Routes>
        </GeneralContextProvider>
      </div>
    </div>
  );
};

export default Dashboard;
