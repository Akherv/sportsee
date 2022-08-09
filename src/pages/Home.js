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
 * @param   {Object}  user         User datas
 * @param   {Object}  activity     Activity datas
 * @param   {Object}  sessions     Sessions datas
 * @param   {Object}  performance  Performance datas
 * @return  {React.ReactElement}  Home page
 */
function Home({ user, activity, sessions, performance }) {
  return (
    <div className="home">
      <NavbarV />
      <div className="dashboard">
        <Header userInfos={user.data?.userInfos} />
        <Activity sessions={activity.data?.sessions} />
        <Sessions sessions={sessions.data?.sessions} />
        <Performance
          type={performance.data?.kind}
          data={performance.data?.data}
        />
        <Score userScore={user.data?.todayScore || user.data?.score} />
        <Nutrients userKeyData={user.data?.keyData} />
      </div>
    </div>
  );
}
export default Home;

Home.propTypes = {
  user: PropTypes.object.isRequired,
  activity: PropTypes.object.isRequired,
  sessions: PropTypes.object.isRequired,
  performance: PropTypes.object.isRequired,
};

Home.defaultProps = {
  user: {},
  activity: {},
  sessions: {},
  performance: {},
};
