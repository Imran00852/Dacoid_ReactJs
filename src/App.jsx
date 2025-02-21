import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Instructions from "./pages/Instructions";
import Quiz from "./pages/Quiz";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Instructions />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </Router>
  );
};

export default App;
