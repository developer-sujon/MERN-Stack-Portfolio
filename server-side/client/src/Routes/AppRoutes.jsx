//external Lib  imports
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import ChartPage from "../pages/ChartPage";
import CoursePage from "../pages/CoursePage";
import ProjectPage from "../pages/ProjectPage";
import ServicePage from "../pages/ServicePage";
import TestimonialPage from "../pages/TestimonialPage";
import SettingPage from "../pages/SettingPage";
import NotFoundPage from "../pages/NotFoundPage";
import Loading from "../components/Loading/Loading";

function Approutes() {
  const token = sessionStorage.getItem("accessToken") ?? null;

  if (token) {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chart" element={<ChartPage />} />
            <Route path="/course" element={<CoursePage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/testimonial" element={<TestimonialPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/setting" element={<SettingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  } else {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default Approutes;
