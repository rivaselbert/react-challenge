import React from "react";
import ProfileViewsChart from "./ProfileViewsChart";
import "../styles/statistics.css";

const StatisticsGraph = () => {
  return (
    <div>
      <div className="profile-header">
        <h3>Statistics Graph</h3>
      </div>
      <div className="statistics-container">
        <div className="statistics">
          <ProfileViewsChart />
        </div>
        <div className="statistics">
          <ProfileViewsChart />
        </div>
        <div className="statistics">
          <ProfileViewsChart />
        </div>
      </div>
    </div>
  );
};

export default StatisticsGraph;
