import StatisticsGraph from "./StatisticsGraph";
import ActivityList from "./ActivityList";
import "../styles/content.css";

const Content = () => {
  return (
    <div className="content">
      <StatisticsGraph />
      <ActivityList />
    </div>
  );
};

export default Content;
