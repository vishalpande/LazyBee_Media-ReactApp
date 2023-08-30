import "./App.css";
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

export default function App() {
  const ApiKey = "340eda28ca7845e7a8e9da9320dbdf25";
  const [state, setState] = useState({
    progress: 0,
    pageSize: 9,
  });

  const setProgress = (progress) => {
    setState({
      progress: progress,
    });
  };
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={state.progress} />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="General"
                key={"General"}
              />
            }
          ></Route>
          <Route
            path="/Business"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Business"
                key={"Business"}
              />
            }
          ></Route>
          <Route
            path="/Entertainment"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Entertainment"
                key={"Entertainment"}
              />
            }
          ></Route>
          <Route
            path="/Sports"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Sports"
                key={"Sports"}
              />
            }
            
          ></Route>
          <Route
            path="/Science"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Science"
                key={"Science"}
              />
            }
          ></Route>
          <Route
            path="/Health"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Health"
                key={"Health"}
              />
            }
          ></Route>
          <Route
            path="/Technology"
            element={
              <News
                setProgress={setProgress}
                pageSize={state.pageSize}
                ApiKey={ApiKey}
                country={"in"}
                category="Technology"
                key={"Technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
