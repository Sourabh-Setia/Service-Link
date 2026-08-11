import React, { useState } from "react";

const Yourbooking = () => {
  const [activeTab, setActiveTab] = useState("Upcoming");

  const bookings = [
    {
      id: "SL-1024",
      service: "AC Repair & Service",
      provider: "Manjeet Singh",
      category: "Home Service",
      date: "14 Aug 2026",
      time: "10:30 AM - 12:00 PM",
      location: "Abohar, Punjab",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500",
    },
    {
      id: "SL-1025",
      service: "Electrical Installation",
      provider: "Rohit Sharma",
      category: "Electrical",
      date: "16 Aug 2026",
      time: "02:00 PM - 03:30 PM",
      location: "Delhi",
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500",
    },
    {
      id: "SL-1026",
      service: "Furniture Repair",
      provider: "Sanjay Kumar",
      category: "Carpentry",
      date: "18 Aug 2026",
      time: "11:00 AM - 01:00 PM",
      location: "Chandigarh",
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1601058268499-e52658b8bb88?w=500",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    if (activeTab === "Upcoming") {
      return (
        booking.status === "Confirmed" ||
        booking.status === "Pending"
      );
    }

    return booking.status === activeTab;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f8f7",
        paddingBottom: "50px",
      }}
    >
      <div className="container-fluid px-3 px-md-4 py-4">

        {/* ================= HEADER ================= */}

        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <h3
                className="fw-bold mb-1"
                style={{
                  color: "#171717",
                  letterSpacing: "-0.6px",
                }}
              >
                Your Bookings
              </h3>

              <p
                className="text-muted mb-0"
                style={{ fontSize: "13px" }}
              >
                Manage your upcoming services and appointments
              </p>
            </div>

            <div
              className="booking-icon d-none d-sm-flex"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "13px",
                background: "#e8f5ee",
                color: "#198754",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
              }}
            >
              📅
            </div>
          </div>
        </div>

        {/* ================= SUMMARY CARDS ================= */}

        <div className="row g-3 mb-4">

          <div className="col-12 col-md-4">
            <div
              className="summary-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e9e7",
                borderRadius: "15px",
                padding: "18px",
              }}
            >
              <small className="text-muted">
                Upcoming Services
              </small>

              <h3
                className="fw-bold mb-0 mt-1"
                style={{ color: "#198754" }}
              >
                3
              </h3>

              <small
                style={{
                  color: "#8a918e",
                  fontSize: "11px",
                }}
              >
                Scheduled appointments
              </small>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className="summary-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e9e7",
                borderRadius: "15px",
                padding: "18px",
              }}
            >
              <small className="text-muted">
                Next Appointment
              </small>

              <h6 className="fw-bold mb-1 mt-2">
                14 Aug 2026
              </h6>

              <small
                style={{
                  color: "#8a918e",
                  fontSize: "11px",
                }}
              >
                AC Repair · 10:30 AM
              </small>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div
              className="summary-card"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e9e7",
                borderRadius: "15px",
                padding: "18px",
              }}
            >
              <small className="text-muted">
                Pending Confirmation
              </small>

              <h3
                className="fw-bold mb-0 mt-1"
                style={{ color: "#c17b00" }}
              >
                1
              </h3>

              <small
                style={{
                  color: "#8a918e",
                  fontSize: "11px",
                }}
              >
                Awaiting provider confirmation
              </small>
            </div>
          </div>

        </div>

        {/* ================= TABS ================= */}

        <div
          className="d-flex align-items-center gap-2 mb-4"
          style={{
            borderBottom: "1px solid #e3e8e5",
          }}
        >
          {["Upcoming", "Completed", "Cancelled"].map(
            (tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  border: "none",
                  background: "transparent",
                  padding: "11px 18px",
                  fontSize: "13px",
                  fontWeight:
                    activeTab === tab
                      ? "600"
                      : "500",
                  color:
                    activeTab === tab
                      ? "#198754"
                      : "#777f7b",
                  borderBottom:
                    activeTab === tab
                      ? "2px solid #198754"
                      : "2px solid transparent",
                  marginBottom: "-1px",
                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            )
          )}
        </div>

        {/* ================= BOOKINGS ================= */}

        <div className="row g-4">

          {filteredBookings.map((booking) => (
            <div
              key={booking.id}
              className="col-12"
            >
              <div
                className="booking-card"
                style={{
                  background: "#fff",
                  border: "1px solid #e3e8e5",
                  borderRadius: "18px",
                  padding: "22px",
                  transition: "all 0.25s ease",
                }}
              >

                {/* Top */}
                <div className="d-flex flex-column flex-md-row">

                  {/* Provider Image */}
                  <div
                    className="provider-image"
                    style={{
                      width: "75px",
                      height: "75px",
                      minWidth: "75px",
                      borderRadius: "15px",
                      overflow: "hidden",
                      background: "#edf3ef",
                      marginRight: "18px",
                    }}
                  >
                    <img
                      src={booking.image}
                      alt={booking.provider}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  {/* Main Info */}
                  <div className="flex-grow-1">

                    <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">

                      <div>
                        <small
                          style={{
                            color: "#198754",
                            fontWeight: "600",
                            fontSize: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "0.4px",
                          }}
                        >
                          {booking.category}
                        </small>

                        <h5
                          className="fw-bold mb-1 mt-1"
                          style={{
                            fontSize: "17px",
                            color: "#202423",
                          }}
                        >
                          {booking.service}
                        </h5>

                        <p
                          className="mb-0"
                          style={{
                            fontSize: "12px",
                            color: "#777f7b",
                          }}
                        >
                          Service Provider ·{" "}
                          <strong>
                            {booking.provider}
                          </strong>
                        </p>
                      </div>

                      {/* Status */}
                      <span
                        style={{
                          padding: "6px 11px",
                          borderRadius: "20px",
                          fontSize: "10px",
                          fontWeight: "600",
                          background:
                            booking.status === "Confirmed"
                              ? "#e8f6ef"
                              : "#fff4df",
                          color:
                            booking.status === "Confirmed"
                              ? "#198754"
                              : "#c17b00",
                        }}
                      >
                        ● {booking.status}
                      </span>

                    </div>

                    {/* Details */}
                    <div
                      className="row mt-3 pt-3"
                      style={{
                        borderTop:
                          "1px solid #f0f2f1",
                      }}
                    >

                      <div className="col-12 col-md-4 mb-2 mb-md-0">
                        <small
                          className="text-muted d-block"
                          style={{ fontSize: "10px" }}
                        >
                          DATE & TIME
                        </small>

                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          {booking.date}
                        </span>

                        <br />

                        <span
                          style={{
                            fontSize: "11px",
                            color: "#777f7b",
                          }}
                        >
                          {booking.time}
                        </span>
                      </div>

                      <div className="col-12 col-md-4 mb-2 mb-md-0">
                        <small
                          className="text-muted d-block"
                          style={{ fontSize: "10px" }}
                        >
                          LOCATION
                        </small>

                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                          }}
                        >
                          📍 {booking.location}
                        </span>
                      </div>

                      <div className="col-12 col-md-4">
                        <small
                          className="text-muted d-block"
                          style={{ fontSize: "10px" }}
                        >
                          BOOKING ID
                        </small>

                        <span
                          style={{
                            fontSize: "12px",
                            fontWeight: "600",
                            color: "#555d59",
                          }}
                        >
                          {booking.id}
                        </span>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div
                  className="d-flex flex-wrap justify-content-end gap-2 mt-4 pt-3"
                  style={{
                    borderTop:
                      "1px solid #f0f2f1",
                  }}
                >

                  <button
                    className="booking-action secondary"
                    onClick={() =>
                      console.log(
                        `Opening chat with ${booking.provider}`
                      )
                    }
                  >
                    💬 Chat Provider
                  </button>

                  <button
                    className="booking-action secondary"
                    onClick={() =>
                      console.log(
                        `Viewing booking ${booking.id}`
                      )
                    }
                  >
                    View Details
                  </button>

                  <button
                    className="booking-action primary"
                    onClick={() =>
                      console.log(
                        `Managing booking ${booking.id}`
                      )
                    }
                  >
                    Manage Booking →
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* ================= EMPTY STATE ================= */}

        {filteredBookings.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              background: "#fff",
              borderRadius: "18px",
              border: "1px solid #e3e8e5",
            }}
          >
            <div style={{ fontSize: "42px" }}>
              📅
            </div>

            <h5 className="fw-bold mt-3">
              No {activeTab.toLowerCase()} bookings
            </h5>

            <p
              className="text-muted"
              style={{ fontSize: "13px" }}
            >
              Your {activeTab.toLowerCase()} services
              will appear here.
            </p>
          </div>
        )}

      </div>

      {/* ================= CSS ================= */}

      <style>
        {`
          .booking-card:hover {
            transform: translateY(-3px);
            box-shadow:
              0 12px 30px rgba(0,0,0,0.06);
            border-color: #d5e4db !important;
          }

          .summary-card {
            transition: all 0.2s ease;
          }

          .summary-card:hover {
            transform: translateY(-2px);
            box-shadow:
              0 8px 20px rgba(0,0,0,0.05);
          }

          .booking-action {
            border-radius: 9px;
            padding: 8px 13px;
            font-size: 11px;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .booking-action.secondary {
            background: #fff;
            border: 1px solid #dfe4e1;
            color: #555d59;
          }

          .booking-action.secondary:hover {
            border-color: #198754;
            color: #198754;
            background: #f4faf6;
          }

          .booking-action.primary {
            background: #198754;
            border: 1px solid #198754;
            color: white;
          }

          .booking-action.primary:hover {
            background: #146c43;
            border-color: #146c43;
            transform: translateY(-1px);
          }

          @media (max-width: 768px) {
            .provider-image {
              margin-bottom: 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Yourbooking;