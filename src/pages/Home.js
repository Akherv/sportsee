import PropTypes from "prop-types";
import NavbarV from "../components/Navbar_v";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Sessions from "../components/Sessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Nutrients from "../components/Nutrients";
import "../style/Home.css";

/**
 * Represents the Home page
 * @param   {Object}  user         [user description]
 * @param   {Object}  activity     [activity description]
 * @param   {Object}  sessions     [sessions description]
 * @param   {Object}  performance  [performance description]
 * @return  {React.ReactElement}  Home page
 */
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
        <Score userScore={user?.data.todayScore || user?.data.score} />
        <Nutrients userKeyData={user?.data.keyData} />
      </div>
    </div>
  );
}
export default Home;

Home.propTypes = {
  user: PropTypes.object,
  activity: PropTypes.object,
  sessions: PropTypes.object,
  performance: PropTypes.object,
};
