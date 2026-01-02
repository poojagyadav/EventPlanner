import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav
      className="navbar px-4 py-2"
      style={{ background: "black" }}
    >
      <span
        className="navbar-brand text-light fw-bold fs-4"
        style={{ cursor: "pointer" }}
        onClick={() => navigate("/")}
      >
        EventPlanner
      </span>

      <div>
        {!isLoggedIn ? (
          <>
            <button
              className="btn btn-outline-light me-2"
              onClick={() => navigate("/signin")}
            >
              Login
            </button>
            <button
              className="btn btn-light fw-semibold"
              onClick={() => navigate("/signup")}
            >
              Get Started
            </button>
          </>
        ) : (
          <button
            className="btn btn-danger"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
