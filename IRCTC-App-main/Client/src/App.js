import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/signup";
import Home from "./pages/home";
import FirstPage from "./pages/startpage";
import LandingPage from "./pages/landing";
import GetStartPage from "./pages/getstart";
import Signin from "./pages/signin";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/getstart" element={<GetStartPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
