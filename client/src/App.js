import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/landingPage/landingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
