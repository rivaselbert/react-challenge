import "./App.css";
import ProfileCard from "./components/ProfileCard";
import Content from "./components/Content";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Content />
        <ProfileCard />
      </div>
    </div>
  );
};

export default App;
