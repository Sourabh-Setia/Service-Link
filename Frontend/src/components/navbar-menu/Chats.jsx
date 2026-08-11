import React from "react";

const Chats = () => {
  const chats = [
    {
      id: 1,
      name: "Rahul Sharma",
      message: "Hey, are you available?",
      time: "10:45 AM",
      unread: 2,
    },
    {
      id: 2,
      name: "Priya Singh",
      message: "I'll send you the details.",
      time: "9:32 AM",
      unread: 1,
    },
    {
      id: 3,
      name: "Amit Kumar",
      message: "Let's connect tomorrow.",
      time: "Yesterday",
      unread: 0,
    },
    {
      id: 4,
      name: "Neha Verma",
      message: "Thanks for your help!",
      time: "Yesterday",
      unread: 3,
    },
    {
      id: 5,
      name: "Vikas Mehta",
      message: "Can you check this?",
      time: "Monday",
      unread: 0,
    },
    {
      id: 6,
      name: "Ananya Kapoor",
      message: "Perfect, thank you!",
      time: "Sunday",
      unread: 0,
    },
    {
      id: 7,
      name: "Rohan Malhotra",
      message: "I'll get back to you.",
      time: "Sunday",
      unread: 4,
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #f5f7f6 0%, #eef5f1 100%)",
        padding: "28px",
      }}
    >
      {/* Main Container */}
      <div
        style={{
          minHeight: "calc(100vh - 56px)",
          background: "#fff",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(0, 0, 0, 0.08)",
          border: "1px solid rgba(0,0,0,0.05)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            padding: "28px 34px",
            background:
              "linear-gradient(135deg, #111827 0%, #1f2937 100%)",
            color: "#fff",
          }}
        >
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div
                className="d-flex align-items-center gap-3"
                style={{ marginBottom: "6px" }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "14px",
                    background: "#198754",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "21px",
                  }}
                >
                  💬
                </div>

                <h2
                  className="mb-0 fw-bold"
                  style={{
                    letterSpacing: "-0.7px",
                  }}
                >
                  Messages
                </h2>
              </div>

              <p
                className="mb-0"
                style={{
                  color: "#9ca3af",
                  fontSize: "14px",
                  marginLeft: "57px",
                }}
              >
                Stay connected with your conversations
              </p>
            </div>

            <button
              className="btn"
              style={{
                background: "#198754",
                color: "#fff",
                borderRadius: "11px",
                padding: "10px 18px",
                fontWeight: "500",
                border: "none",
                boxShadow: "0 8px 20px rgba(25,135,84,0.25)",
              }}
            >
              + New Chat
            </button>
          </div>
        </div>

        {/* Toolbar */}
        <div
          className="d-flex justify-content-between align-items-center"
          style={{
            padding: "20px 34px",
            borderBottom: "1px solid #eeeeee",
          }}
        >
          <div>
            <h5
              className="mb-1 fw-bold"
              style={{ color: "#171717" }}
            >
              Recent Conversations
            </h5>

            <small className="text-muted">
              {chats.length} conversations
            </small>
          </div>

          {/* Search */}
          <div
            className="d-flex align-items-center"
            style={{
              width: "280px",
              height: "42px",
              background: "#f6f7f7",
              border: "1px solid #e5e7e7",
              borderRadius: "11px",
              padding: "0 14px",
            }}
          >
            <span
              style={{
                color: "#9ca3af",
                marginRight: "9px",
              }}
            >
              🔍
            </span>

            <input
              type="text"
              placeholder="Search conversations..."
              style={{
                border: "none",
                outline: "none",
                background: "transparent",
                width: "100%",
                fontSize: "13px",
              }}
            />
          </div>
        </div>

        {/* Chat List */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
          }}
        >
          {chats.map((chat, index) => (
            <div
              key={chat.id}
              className="chat-row"
              style={{
                minHeight: "92px",
                padding: "18px 34px",
                display: "flex",
                alignItems: "center",
                borderBottom:
                  index !== chats.length - 1
                    ? "1px solid #f1f2f2"
                    : "none",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "54px",
                  height: "54px",
                  minWidth: "54px",
                  borderRadius: "17px",
                  background:
                    "linear-gradient(135deg, #e7f5ee, #d4eee1)",
                  color: "#198754",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                  marginRight: "17px",
                }}
              >
                {chat.name.charAt(0)}
              </div>

              {/* Details */}
              <div
                style={{
                  flex: 1,
                  minWidth: 0,
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-between"
                >
                  <h6
                    className="mb-1 fw-semibold"
                    style={{
                      color: "#171717",
                      fontSize: "15px",
                    }}
                  >
                    {chat.name}
                  </h6>

                  <span
                    style={{
                      fontSize: "11px",
                      color: chat.unread
                        ? "#198754"
                        : "#9ca3af",
                      fontWeight: chat.unread
                        ? "600"
                        : "400",
                    }}
                  >
                    {chat.time}
                  </span>
                </div>

                <div
                  className="d-flex align-items-center"
                  style={{ marginTop: "2px" }}
                >
                  <span
                    className="text-truncate"
                    style={{
                      color: "#8a9198",
                      fontSize: "13px",
                      maxWidth: "600px",
                    }}
                  >
                    {chat.message}
                  </span>

                  {chat.unread > 0 && (
                    <span
                      style={{
                        marginLeft: "10px",
                        minWidth: "20px",
                        height: "20px",
                        padding: "0 5px",
                        borderRadius: "20px",
                        background: "#198754",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: "700",
                      }}
                    >
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>

              {/* View Chat */}
              <button
                className="view-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  console.log(
                    `Opening chat with ${chat.name}`
                  );
                }}
                style={{
                  marginLeft: "25px",
                  border: "1px solid #dfe4e1",
                  background: "#fff",
                  color: "#198754",
                  borderRadius: "9px",
                  padding: "8px 16px",
                  fontSize: "12px",
                  fontWeight: "600",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                }}
              >
                View Chat →
              </button>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          style={{
            padding: "13px",
            textAlign: "center",
            background: "#fafbfa",
            borderTop: "1px solid #eeeeee",
          }}
        >
          <small
            style={{
              color: "#9ca3af",
              fontSize: "11px",
            }}
          >
            You're all caught up
          </small>
        </div>
      </div>

      <style>
        {`
          .chat-row:hover {
            background: #f8fbf9;
            padding-left: 40px !important;
          }

          .chat-row:hover .view-btn {
            background: #198754 !important;
            color: white !important;
            border-color: #198754 !important;
            box-shadow: 0 5px 15px rgba(25,135,84,0.18);
          }

          .view-btn:hover {
            transform: translateX(2px);
          }

          @media (max-width: 768px) {
            .container-fluid {
              padding: 10px !important;
            }

            .chat-row {
              padding: 15px !important;
            }

            .chat-row:hover {
              padding-left: 18px !important;
            }

            .view-btn {
              padding: 7px 10px !important;
            }

            .search-box {
              width: 180px !important;
            }
          }

          @media (max-width: 576px) {
            .view-btn {
              display: none;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Chats; 