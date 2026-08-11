import React, { useState } from "react";

const Service_history = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [services, setServices] = useState([
    {
      id: 1,
      name: "Website Development",
      provider: "TechNova Solutions",
      date: "08 Aug 2026",
      status: "Completed",
      rating: 5,
    },
    {
      id: 2,
      name: "AC Repair",
      provider: "CoolCare Services",
      date: "05 Aug 2026",
      status: "Completed",
      rating: 4,
    },
    {
      id: 3,
      name: "Logo Design",
      provider: "Creative Studio",
      date: "28 Jul 2026",
      status: "Completed",
      rating: null,
    },
    {
      id: 4,
      name: "Plumbing Service",
      provider: "QuickFix Plumbing",
      date: "21 Jul 2026",
      status: "Completed",
      rating: 5,
    },
    {
      id: 5,
      name: "Mobile App Development",
      provider: "AppCraft Technologies",
      date: "15 Jul 2026",
      status: "In Progress",
      rating: null,
    },
    {
      id: 6,
      name: "Electrical Repair",
      provider: "PowerFix Services",
      date: "10 Jul 2026",
      status: "Completed",
      rating: null,
    },
  ]);

  const filteredServices = services.filter((service) => {
    const matchesSearch =
      service.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      service.provider
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || service.status === filter;

    return matchesSearch && matchesFilter;
  });

  // Rate service
  const rateService = (id) => {
    const rating = prompt(
      "Rate your experience from 1 to 5"
    );

    const numericRating = Number(rating);

    if (
      numericRating >= 1 &&
      numericRating <= 5
    ) {
      setServices((prevServices) =>
        prevServices.map((service) =>
          service.id === id
            ? {
                ...service,
                rating: numericRating,
              }
            : service
        )
      );
    }
  };

  return (
    <div
      className="container-fluid px-3 px-md-4 py-4"
      style={{
        minHeight: "100vh",
        background: "#f6f8f7",
      }}
    >
      {/* Page Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3
            className="fw-bold mb-1"
            style={{
              color: "#171717",
              letterSpacing: "-0.5px",
            }}
          >
            Service History
          </h3>

          <p className="text-muted mb-0">
            View your previous services and share your experience
          </p>
        </div>

        <div
          className="d-flex align-items-center justify-content-center"
          style={{
            width: "46px",
            height: "46px",
            borderRadius: "12px",
            background: "#e8f5ee",
            color: "#198754",
            fontSize: "20px",
          }}
        >
          ↗
        </div>
      </div>

      {/* Main Card */}
      <div
        className="bg-white"
        style={{
          borderRadius: "20px",
          border: "1px solid #e7ebe8",
          boxShadow: "0 6px 25px rgba(0,0,0,0.04)",
          overflow: "hidden",
        }}
      >
        {/* Toolbar */}
        <div
          className="d-flex justify-content-between align-items-center flex-wrap gap-3"
          style={{
            padding: "22px 26px",
            borderBottom: "1px solid #eeeeee",
          }}
        >
          <div>
            <h5 className="fw-bold mb-1">
              Your Services
            </h5>

            <small className="text-muted">
              {filteredServices.length} services found
            </small>
          </div>

          <div className="d-flex gap-2">
            {/* Search */}
            <div
              className="d-flex align-items-center"
              style={{
                width: "240px",
                height: "40px",
                borderRadius: "9px",
                background: "#f7f8f8",
                border: "1px solid #e1e5e3",
                padding: "0 12px",
              }}
            >
              <span
                style={{
                  color: "#8b9390",
                  marginRight: "8px",
                }}
              >
                🔍
              </span>

              <input
                type="text"
                placeholder="Search services..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                style={{
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  width: "100%",
                  fontSize: "13px",
                }}
              />
            </div>

            {/* Filter */}
            <select
              value={filter}
              onChange={(e) =>
                setFilter(e.target.value)
              }
              className="form-select"
              style={{
                width: "140px",
                height: "40px",
                borderRadius: "9px",
                fontSize: "13px",
              }}
            >
              <option value="All">All Services</option>
              <option value="Completed">
                Completed
              </option>
              <option value="In Progress">
                In Progress
              </option>
            </select>
          </div>
        </div>

        {/* Table Header */}
        <div
          className="d-none d-md-grid"
          style={{
            gridTemplateColumns:
              "1.8fr 1.6fr 1fr 1fr 1fr 120px",
            padding: "14px 26px",
            background: "#fafbfa",
            borderBottom: "1px solid #eeeeee",
            color: "#8a918e",
            fontSize: "11px",
            fontWeight: "600",
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          <div>Service</div>
          <div>Service Provider</div>
          <div>Date</div>
          <div>Rating</div>
          <div>Status</div>
          <div>Action</div>
        </div>

        {/* Service Rows */}
        {filteredServices.map((service, index) => (
          <div
            key={service.id}
            className="service-row"
            style={{
              display: "grid",
              gridTemplateColumns:
                "1.8fr 1.6fr 1fr 1fr 1fr 120px",
              alignItems: "center",
              padding: "18px 26px",
              borderBottom:
                index !== filteredServices.length - 1
                  ? "1px solid #f0f2f1"
                  : "none",
              transition: "all 0.2s ease",
            }}
          >
            {/* Service */}
            <div className="d-flex align-items-center">
              <div
                className="d-flex align-items-center justify-content-center me-3"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "#eef7f2",
                  color: "#198754",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                {service.name.charAt(0)}
              </div>

              <div>
                <h6
                  className="mb-1 fw-semibold"
                  style={{
                    fontSize: "14px",
                    color: "#202423",
                  }}
                >
                  {service.name}
                </h6>

                <small className="text-muted">
                  Service #
                  {service.id
                    .toString()
                    .padStart(3, "0")}
                </small>
              </div>
            </div>

            {/* Service Provider */}
            <div>
              <div
                className="fw-semibold"
                style={{
                  fontSize: "13px",
                  color: "#343a40",
                }}
              >
                {service.provider}
              </div>
            </div>

            {/* Date */}
            <div
              style={{
                fontSize: "13px",
                color: "#555d59",
              }}
            >
              {service.date}
            </div>

            {/* Rating */}
            <div>
              {service.rating ? (
                <div className="d-flex align-items-center gap-1">
                  <span
                    style={{
                      color: "#f5a623",
                      fontSize: "14px",
                      letterSpacing: "1px",
                    }}
                  >
                    {"★".repeat(service.rating)}
                  </span>

                  <small
                    className="text-muted ms-1"
                    style={{ fontSize: "11px" }}
                  >
                    {service.rating}.0
                  </small>
                </div>
              ) : service.status === "Completed" ? (
                <button
                  onClick={() =>
                    rateService(service.id)
                  }
                  style={{
                    background: "#fff8e7",
                    color: "#b77900",
                    border: "1px solid #f3dfaa",
                    borderRadius: "7px",
                    padding: "6px 10px",
                    fontSize: "11px",
                    fontWeight: "600",
                  }}
                >
                  ★ Rate Experience
                </button>
              ) : (
                <span
                  className="text-muted"
                  style={{ fontSize: "12px" }}
                >
                  Not available
                </span>
              )}
            </div>

            {/* Status */}
            <div>
              <span
                style={{
                  padding: "6px 10px",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  background:
                    service.status === "Completed"
                      ? "#e8f6ef"
                      : "#fff4df",
                  color:
                    service.status === "Completed"
                      ? "#198754"
                      : "#c17b00",
                }}
              >
                {service.status}
              </span>
            </div>

            {/* Action */}
            <div>
              <button
                className="view-service-btn"
                onClick={() =>
                  console.log(
                    `Viewing service ${service.id}`
                  )
                }
                style={{
                  background: "#fff",
                  border: "1px solid #dfe4e1",
                  color: "#198754",
                  borderRadius: "8px",
                  padding: "7px 12px",
                  fontSize: "11px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                }}
              >
                View Details →
              </button>
            </div>
          </div>
        ))}

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              color: "#8a918e",
            }}
          >
            <div style={{ fontSize: "35px" }}>
              🔍
            </div>

            <h6 className="mt-3">
              No services found
            </h6>

            <small>
              Try changing your search or filter.
            </small>
          </div>
        )}

        {/* Footer */}
        <div
          className="text-center py-3"
          style={{
            background: "#fafbfa",
            borderTop: "1px solid #eeeeee",
          }}
        >
          <small
            className="text-muted"
            style={{ fontSize: "11px" }}
          >
            Showing {filteredServices.length} of{" "}
            {services.length} services
          </small>
        </div>
      </div>

      {/* Styles */}
      <style>
        {`
          .service-row:hover {
            background: #f9fcfa;
          }

          .service-row:hover .view-service-btn {
            background: #198754 !important;
            color: white !important;
            border-color: #198754 !important;
            box-shadow: 0 4px 10px rgba(25,135,84,0.15);
          }

          .view-service-btn:hover {
            transform: translateY(-1px);
          }

          @media (max-width: 1000px) {
            .service-row {
              grid-template-columns:
                1.5fr 1.3fr 1fr 1fr !important;
            }

            .service-row > div:nth-child(5),
            .service-row > div:nth-child(6) {
              grid-column: span 2;
            }
          }

          @media (max-width: 768px) {
            .service-row {
              display: flex !important;
              flex-direction: column;
              align-items: flex-start !important;
              gap: 12px;
            }

            .service-row > div {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Service_history;