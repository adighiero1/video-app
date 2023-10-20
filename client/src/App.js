import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages/landingPage";
import SingleVideoPage from "./pages/singleVideoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:id" element={<SingleVideoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
