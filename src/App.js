import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import NavbarH from "./components/Navbar_h";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Parameter from "./pages/Parameter";
import Community from "./pages/Community";
// import Error from "./pages/Error";

export default function App() {
  const [user, setUser] = useState();
  const [activity, setActivity] = useState();
  const [sessions, setSessions] = useState();
  const [performance, setPerformance] = useState();

  //fetch location
  useEffect(() => {
    const url = "./datas/user/18/user.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setUser(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = "./datas/user/18/activity.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setActivity(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = "./datas/user/18/average-sessions.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setSessions(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = "./datas/user/18/performance.json";
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setPerformance(datas);
        console.log(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <>
        <NavbarH />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                user={user}
                activity={activity}
                sessions={sessions}
                performance={performance}
              />
            }
          />
          <Route
            path="/home"
            element={
              <Home
                user={user}
                activity={activity}
                sessions={sessions}
                performance={performance}
              />
            }
          />
          <Route
            path="/accueil"
            element={
              <Home
                user={user}
                activity={activity}
                sessions={sessions}
                performance={performance}
              />
            }
          />
          <Route path="/profil" element={<Profil />} />
          <Route path="/parameter" element={<Parameter />} />
          <Route path="/reglage" element={<Parameter />} />
          <Route path="/communaute" element={<Community />} />
          <Route path="/community" element={<Community />} />
          {/* <Route path="notFound" element={<Error />} />
          <Route path="*" element={<Navigate to="/notFound" replace />} /> */}
        </Routes>
      </>
    </Router>
  );
}
