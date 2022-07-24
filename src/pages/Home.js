import NavbarV from "../components/Navbar_v";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Sessions from "../components/Sessions";
import Performance from "../components/Performance";
import Score from "../components/Score";
import Nutrients from "../components/Nutrients";
import "../style/Home.css";

function Home() {
  return (
    <div className="home">
      <NavbarV />
      <div className="dashboard">
        <Header />
        <Activity />
        <Sessions />
        <Performance />
        <Score />
        <Nutrients />
      </div>
    </div>
  );
}
export default Home;
