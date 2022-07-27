import NavbarV from "../components/Navbar_v";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Sessions from "../components/Sessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Nutrients from "../components/Nutrients";
import "../style/Home.css";

function Home({ user, activity, sessions, performance }) {
  return (
    <div className="home">
      <NavbarV />
      <div className="dashboard">
        <Header userInfos={user?.data.userInfos} />
        <Activity sessions={activity?.data.sessions} />
        <Sessions sessions={sessions?.data.sessions} />
        <Performance
          type={performance?.data.kind}
          data={performance?.data.data}
        />
        <Score userScore={user?.data.score} />
        <Nutrients userKeyData={user?.data.keyData} />
      </div>
    </div>
  );
}
export default Home;
