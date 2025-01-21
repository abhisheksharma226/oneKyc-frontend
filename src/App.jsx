import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
   <Home />
  );
};

export default App;
