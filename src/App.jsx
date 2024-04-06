import React, { useEffect } from "react";
import LoginAdmin from "./pages/Admin/LoginAdmin";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Admin/Dashboard";
import Agent from "./pages/Admin/Agents";
import AddAgent from "./pages/Admin/AddAgent";
import Property from "./pages/Admin/Property";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DetailProperty from "./pages/DetailProperty";
import AllTeam from "./pages/AllTeam";
import TopToScroll from "./ScrollToTop";
function App() {
  const location = useLocation();
  let isAdminRoute = location.pathname.startsWith("/admin");

  useEffect(() => {
    isAdminRoute = location.pathname.startsWith("/admin");
  }, []);

  return (
    <>
      {!isAdminRoute && <Header />}
      <TopToScroll>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contactus" element={" "} />
          <Route path="/features" element={<DetailProperty />} />
          <Route path="/teams" element={<AllTeam />} />
          <Route path="/admin/login" element={<LoginAdmin />} />
          <Route path="/admin/signup" element={<Signup />} />
        </Routes>
        {isAdminRoute && (
          <Dashboard>
            <Routes>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/filter" element={<Agent />} />
              <Route path="/admin/agent" element={<Agent />} />
              <Route path="/admin/agent/add" element={<AddAgent />} />
              <Route path="/admin/agent/edit/:id" element={<AddAgent />} />
              <Route path="/admin/property" element={<Property />} />
            </Routes>
          </Dashboard>
        )}
      </TopToScroll>
      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
