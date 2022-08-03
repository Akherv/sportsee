import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { config } from "./Constants.js";
import NavbarH from "./components/Navbar_h";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import Parameter from "./pages/Parameter";
import Community from "./pages/Community";
import Error from "./pages/Error";

export default function App() {
  const [user, setUser] = useState({
    data: {
      id: 0,
      userInfos: {},
      score: 0,
      keyData: {},
    },
  });
  const [activity, setActivity] = useState({
    data: {
      userId: 0,
      sessions: [],
    },
  });
  const [sessions, setSessions] = useState({
    data: {
      userId: 0,
      sessions: [],
    },
  });
  const [performance, setPerformance] = useState({
    data: {
      userId: 0,
      kind: {},
      data: [],
    },
  });
  //fetch location
  useEffect(() => {
    const url = config.url.REACT_APP_API_URL_USER;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setUser(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = config.url.REACT_APP_API_URL_ACTIVITY;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setActivity(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = config.url.REACT_APP_API_URL_AVERAGESESSION;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setSessions(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const url = config.url.REACT_APP_API_URL_PERFORMANCE;
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const datas = await res.json();
        setPerformance(datas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
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
        <Route path="notFound" element={<Error />} />
        <Route path="*" element={<Navigate to="/notFound" replace />} />
      </Routes>
    </>
  );
}
