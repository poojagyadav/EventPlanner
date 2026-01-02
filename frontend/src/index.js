import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";

import MainPage from "./landing_page/Main/MainPage";
import Signin from "./landing_page/Signin/Signin";
import Signup from "./landing_page/Signup/Signup";
import Main from "./landing_page/Main/Main";
import ProtectedRoute from "./landing_page/ProtectedRoute";
import NotFound from "./NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <div className="app-container">
      <Navbar />

      <main className="content">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Main />
              </ProtectedRoute>
            }
          />

          {/* PAGE NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  </BrowserRouter>
);
