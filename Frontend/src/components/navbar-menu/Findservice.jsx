import React, { useState } from "react";

const Findservice = () => {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");

  const serviceData = [
    {
      id: 1,
      name: "Manjeet Singh",
      job: "Plumber",
      location: "Abohar, Punjab",
      rating: 4.8,
      reviews: 124,
      experience: "8 Years",
      image:
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=500",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      job: "Electrician",
      location: "Delhi",
      rating: 4.7,
      reviews: 98,
      experience: "6 Years",
      image:
        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=500",
    },
    {
      id: 3,
      name: "Sanjay Kumar",
      job: "Carpenter",
      location: "Chandigarh",
      rating: 4.9,
      reviews: 156,
      experience: "10 Years",
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500",
    },
    {
      id: 4,
      name: "Ravi Kumar",
      job: "Painter",
      location: "Ludhiana",
      rating: 4.6,
      reviews: 76,
      experience: "5 Years",
      image:
        "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500",
    },
    {
      id: 5,
      name: "Sunil Verma",
      job: "Mechanic",
      location: "Jaipur",
      rating: 4.8,
      reviews: 112,
      experience: "7 Years",
      image:
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=500",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      job: "AC Technician",
      location: "Amritsar, Punjab",
      rating: 4.9,
      reviews: 87,
      experience: "9 Years",
      image:
        "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500",
    },
  ];

  const filteredServices = serviceData.filter((item) => {
    const matchesService =
      item.job.toLowerCase().includes(search.toLowerCase()) ||
      item.name.toLowerCase().includes(search.toLowerCase());

    const matchesLocation = item.location
      .toLowerCase()
      .includes(location.toLowerCase());

    return matchesService && matchesLocation;
  });

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f6f8f7",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #10261c 0%, #183c2b 55%, #198754 100%)",
          padding: "55px 20px 90px",
          color: "#fff",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "1150px",
          }}
        >
          <div className="text-center">
            <span
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "7px 14px",
                borderRadius: "30px",
                fontSize: "12px",
                marginBottom: "18px",
              }}
            >
              Trusted local professionals
            </span>

            <h1
              className="fw-bold"
              style={{
                fontSize: "clamp(30px, 5vw, 48px)",
                letterSpacing: "-1.5px",
                marginBottom: "12px",
              }}
            >
              Find the right professional
              <br />
              <span style={{ color: "#8de0b2" }}>
                for your service
              </span>
            </h1>

            <p
              style={{
                color: "#c8d8d0",
                fontSize: "15px",
                maxWidth: "560px",
                margin: "0 auto",
              }}
            >
              Discover trusted service providers near you,
              compare their experience and ratings, and book
              the right professional.
            </p>
          </div>

          {/* Search Box */}
          <div
            className="search-container"
            style={{
              maxWidth: "850px",
              margin: "38px auto -125px",
              background: "#fff",
              padding: "8px",
              borderRadius: "17px",
              boxShadow:
                "0 20px 50px rgba(0,0,0,0.18)",
            }}
          >
            <div className="row g-0 align-items-center">
              {/* Service */}
              <div className="col-md-5">
                <div
                  className="px-3 py-2"
                  style={{
                    borderRight: "1px solid #e8e8e8",
                  }}
                >
                  <small
                    style={{
                      display: "block",
                      color: "#8a918e",
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    What do you need?
                  </small>

                  <input
                    type="text"
                    placeholder="Plumber, electrician..."
                    value={search}
                    onChange={(e) =>
                      setSearch(e.target.value)
                    }
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                      color: "#222",
                    }}
                  />
                </div>
              </div>

              {/* Location */}
              <div className="col-md-4">
                <div className="px-3 py-2">
                  <small
                    style={{
                      display: "block",
                      color: "#8a918e",
                      fontSize: "10px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                      marginBottom: "3px",
                    }}
                  >
                    Location
                  </small>

                  <input
                    type="text"
                    placeholder="City or area"
                    value={location}
                    onChange={(e) =>
                      setLocation(e.target.value)
                    }
                    style={{
                      width: "100%",
                      border: "none",
                      outline: "none",
                      fontSize: "14px",
                      color: "#222",
                    }}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="col-md-3">
                <button
                  style={{
                    width: "100%",
                    height: "52px",
                    border: "none",
                    borderRadius: "12px",
                    background: "#198754",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  Search Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="container"
        style={{
          maxWidth: "1150px",
          paddingTop: "75px",
          paddingBottom: "50px",
        }}
      >
        {/* Section Header */}
        <div className="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h4
              className="fw-bold mb-1"
              style={{
                color: "#171717",
                letterSpacing: "-0.5px",
              }}
            >
              Recommended Professionals
            </h4>

            <p
              className="text-muted mb-0"
              style={{ fontSize: "13px" }}
            >
              {filteredServices.length} professionals
              available for your service
            </p>
          </div>

          <button
            className="btn btn-light"
            style={{
              border: "1px solid #e0e5e2",
              borderRadius: "9px",
              fontSize: "12px",
            }}
          >
            Sort by ▾
          </button>
        </div>

        {/* Service Cards */}
        <div className="row g-4">
          {filteredServices.map((item) => (
            <div
              key={item.id}
              className="col-12 col-sm-6 col-lg-4"
            >
              <div
                className="service-card"
                style={{
                  background: "#fff",
                  border: "1px solid #e5e9e7",
                  borderRadius: "18px",
                  overflow: "hidden",
                  height: "100%",
                  transition: "all 0.25s ease",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    height: "190px",
                    position: "relative",
                    overflow: "hidden",
                    background: "#e9eeeb",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.job}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />

                  {/* Rating */}
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "#fff",
                      padding: "6px 9px",
                      borderRadius: "8px",
                      fontSize: "11px",
                      fontWeight: "700",
                      boxShadow:
                        "0 3px 10px rgba(0,0,0,0.1)",
                    }}
                  >
                    <span style={{ color: "#f5a623" }}>
                      ★
                    </span>{" "}
                    {item.rating}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px" }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5
                        className="fw-bold mb-1"
                        style={{
                          fontSize: "16px",
                          color: "#202423",
                        }}
                      >
                        {item.name}
                      </h5>

                      <span
                        style={{
                          color: "#198754",
                          fontSize: "12px",
                          fontWeight: "600",
                        }}
                      >
                        {item.job}
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    className="d-flex align-items-center mt-3"
                    style={{
                      color: "#777f7b",
                      fontSize: "12px",
                    }}
                  >
                    <span className="me-2">📍</span>
                    {item.location}
                  </div>

                  {/* Experience + Reviews */}
                  <div
                    className="d-flex align-items-center mt-3 pt-3"
                    style={{
                      borderTop: "1px solid #f0f2f1",
                      gap: "18px",
                    }}
                  >
                    <div>
                      <small
                        className="text-muted d-block"
                        style={{ fontSize: "10px" }}
                      >
                        EXPERIENCE
                      </small>

                      <strong
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {item.experience}
                      </strong>
                    </div>

                    <div>
                      <small
                        className="text-muted d-block"
                        style={{ fontSize: "10px" }}
                      >
                        REVIEWS
                      </small>

                      <strong
                        style={{
                          fontSize: "12px",
                        }}
                      >
                        {item.reviews}
                      </strong>
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    className="details-btn"
                    onClick={() =>
                      console.log(
                        `Viewing ${item.name}`
                      )
                    }
                    style={{
                      width: "100%",
                      marginTop: "18px",
                      padding: "10px",
                      borderRadius: "9px",
                      border: "none",
                      background: "#198754",
                      color: "#fff",
                      fontSize: "12px",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                  >
                    View Profile →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div
            className="text-center py-5"
            style={{
              background: "#fff",
              borderRadius: "18px",
              border: "1px solid #e5e9e7",
            }}
          >
            <div style={{ fontSize: "40px" }}>
              🔍
            </div>

            <h5 className="mt-3 fw-bold">
              No professionals found
            </h5>

            <p className="text-muted small">
              Try searching for another service or location.
            </p>
          </div>
        )}
      </div>

      {/* CSS */}
      <style>
        {`
          .service-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 35px rgba(0,0,0,0.08);
            border-color: #d9e7df !important;
          }

          .service-card:hover .details-btn {
            background: #146c43 !important;
          }

          .details-btn:hover {
            transform: translateY(-1px);
          }

          @media (max-width: 767px) {
            .search-container {
              margin-left: 10px !important;
              margin-right: 10px !important;
            }

            .search-container .col-md-5 > div {
              border-right: none !important;
              border-bottom: 1px solid #eee;
            }

            .search-container button {
              margin-top: 5px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Findservice;