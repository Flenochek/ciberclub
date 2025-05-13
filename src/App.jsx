import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CodePage from "./pages/CodePage";
import TournamentsPage from "./pages/TournamentsPage"; 
import Home from "./pages/Home";
import MatchPage from "./pages/MatchPage";
import RatingsPage from "./pages/RatingsPage";
import RatingPage from "./pages/RatingPage";

   
 

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/verify-code" element={<CodePage />} /> 
        <Route path="*" element={<LoginPage />} /> */}
        {/* <Route path="*" element={<TournamentsPage />} /> */}
        {/* <Route path="*" element={<Home />} /> */}
        {/* <Route path="*" element={<MatchPage  />} /> */}
        {/* <Route path="*" element={<RatingsPage/>} /> */}
        <Route path="*" element={<RatingPage/>} />
      </Routes>
    </Router>
  );
};

export default App;