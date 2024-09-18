import React from "react";
import "../styles/activityList.css";

const activities = [
  {
    timestamp: "Jun 12, 2024 5:00 PM",
    activityName: "Password Changed",
  },
  {
    timestamp: "Jun 12, 2024 6:00 PM",
    activityName: "Profile Updated",
  },
  {
    timestamp: "Jun 12, 2024 7:00 PM",
    activityName: "Email Verified",
  },
  {
    timestamp: "Jun 12, 2024 8:00 PM",
    activityName: "Logged Out",
  },
];

const ActivityList = () => {
  return (
    <div className="activity-list-container">
      <div className="activity-list-header">
        <h3>Recent Activities</h3>
      </div>
      <div className="activity-list">
        <table className="activity-table">
          <thead>
            <tr>
              <th>Timestamp</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, index) => (
              <tr key={index}>
                <td>{activity.timestamp}</td>
                <td className="activity-name">{activity.activityName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActivityList;
