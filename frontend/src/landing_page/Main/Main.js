import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Main() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const isLoggedIn = !!token;

  const [view, setView] = useState("dashboard");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [events, setEvents] = useState([]);

  const authHeader = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  const createEvent = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "/api/events",
        { title, description, date, time },
        authHeader
      );
      alert("Event created successfully");
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setView("dashboard");
    } catch (err) {
      alert("Event creation failed");
    }
  };

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events", authHeader);
      setEvents(res.data);
      setView("view");
    } catch (err) {
      alert("Failed to fetch events");
    }
  };

  /*LANDING PAGE */
  if (!isLoggedIn) {
    return (
      <div
        className="min-vh-100 d-flex align-items-center"
        style={{ backgroundColor: "aliceblue" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5">
                  <div className="row align-items-center">
                    <div className="col-md-6">
                      <h1 className="fw-bold mb-3">
                        Event<span className="text-dark">Planner</span>
                      </h1>

                      <p className="text-muted fs-5 mb-4">
                        Plan and organize your events with date and time.
                        Simple. Fast. Reliable.
                      </p>

                      <div className="mb-4">
                        <button
                          className="btn btn-dark btn-lg me-3"
                          onClick={() => navigate("/signup")}
                        >
                          Get Started
                        </button>
                        <button
                          className="btn btn-outline-dark btn-lg"
                          onClick={() => navigate("/signin")}
                        >
                          Login
                        </button>
                      </div>

                      <div className="row text-center">
                        <div className="col-4">
                          <h5 className="fw-bold">Upcoming</h5>
                          <small className="text-muted">View events</small>
                        </div>
                        <div className="col-4">
                          <h5 className="fw-bold text-success">Organized</h5>
                          <small className="text-muted">Easy tracking</small>
                        </div>
                        <div className="col-4">
                          <h5 className="fw-bold text-warning">Secure</h5>
                          <small className="text-muted">Safe data</small>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 text-center">
                      <img
                        src="/Event.avif"
                        alt="Event"
                        className="img-fluid"
                        style={{ maxHeight: "320px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  /*DASHBOARD*/
  return (
    <div className="container mt-5">
      {view === "dashboard" && (
        <>
          <h2 className="fw-bold text-center mb-4">Dashboard</h2>

          <div className="row justify-content-center">
            <div className="col-md-5 mb-4">
              <div className="card shadow-lg h-100">
                <div className="card-body text-center">
                  <h5 className="fw-bold">Create Event</h5>
                  <p className="text-muted">Add a new event</p>
                  <button
                    className="btn btn-dark w-100"
                    onClick={() => setView("create")}
                  >
                    Create Event
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-5 mb-4">
              <div className="card shadow-lg h-100">
                <div className="card-body text-center">
                  <h5 className="fw-bold">View Events</h5>
                  <p className="text-muted">See all your events</p>
                  <button
                    className="btn btn-outline-dark w-100"
                    onClick={fetchEvents}
                  >
                    View Events
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-danger mt-3" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      )}

      {view === "create" && (
        <div
          className="card p-4 shadow-lg mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <h4 className="text-center mb-3">Create Event</h4>

          <form onSubmit={createEvent}>
            <input
              className="form-control mb-2"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <textarea
              className="form-control mb-2"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="date"
              className="form-control mb-2"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
            />
            <input
              type="time"
              className="form-control mb-3"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
            <button className="btn btn-dark w-100">Save Event</button>
          </form>

          <button
            className="btn btn-link mt-2"
            onClick={() => setView("dashboard")}
          >
            ← Back
          </button>
        </div>
      )}

      {view === "view" && (
        <div>
          <h4 className="text-center mb-3">My Events</h4>

          {events.length === 0 && (
            <p className="text-center">No events found</p>
          )}

          {events.map((e) => (
            <div key={e._id} className="card mb-2 p-3 shadow-sm">
              <h6 className="fw-bold">{e.title}</h6>
              <p>{e.description}</p>
              <small>
                {e.date} | {e.time}
              </small>
            </div>
          ))}

          <div className="text-center">
            <button
              className="btn btn-link"
              onClick={() => setView("dashboard")}
            >
              ← Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
