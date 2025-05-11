import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CodePage from "./pages/CodePage";
import TournamentsPage from "./pages/TournamentsPage"; 
import Home from "./pages/Home";
import MatchPage from "./pages/MatchPage";

   
 

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
        <Route path="*" element={<MatchPage  />} />
      </Routes>
    </Router>
  );
};

export default App;