import React from "react";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
      {!isAdminRoute && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<LoginAdmin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
