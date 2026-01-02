import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await API.post("/auth/signup", {
        name,
        email,
        password,
      });

      navigate("/signin");
    } catch (err) {
      alert("Signup failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Create Account</h3>

      <form onSubmit={handleSignup}>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="btn btn-dark w-100">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
