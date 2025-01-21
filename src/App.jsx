import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home.jsx";
import SignUp from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );

};

export default App;
