import React, { useMemo, useState } from "react";
import {
  FiBell,
  FiCheckCircle,
  FiClock,
  FiCreditCard,
  FiEdit3,
  FiGlobe,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiStar,
  FiUser,
} from "react-icons/fi";

const Profile = () => {
  const [profile, setProfile] = useState({
    firstName: "Sourabh",
    lastName: "Setia",
    email: "sourabh.setia@example.com",
    phone: "+91 98765 43210",
    alternatePhone: "+91 98760 12345",
    dateOfBirth: "1998-04-21",
    gender: "Male",
    occupation: "Product Designer",
    preferredLanguage: "English",
    bio: "I use ServiceLink to manage trusted home services and keep all my bookings in one place.",
    addressLine1: "House 214, Green Avenue",
    addressLine2: "Near City Square",
    city: "Abohar",
    state: "Punjab",
    postalCode: "152116",
    country: "India",
    defaultServiceCategory: "Home Services",
    preferredVisitTime: "Morning",
    serviceNotes: "Please call before arrival and avoid scheduling during lunch hours.",
    notificationSms: true,
    notificationEmail: true,
    notificationWhatsapp: false,
    marketingUpdates: false,
  });
  const [saveState, setSaveState] = useState("idle");

  const stats = [
    {
      label: "Completed Services",
      value: "28",
      helper: "Across home and personal services",
      icon: <FiCheckCircle size={18} />,
      accent: "#198754",
      background: "#e9f7ef",
    },
    {
      label: "Active Bookings",
      value: "3",
      helper: "Upcoming appointments this week",
      icon: <FiClock size={18} />,
      accent: "#0d6efd",
      background: "#e9f2ff",
    },
    {
      label: "Saved Addresses",
      value: "2",
      helper: "Home and work locations available",
      icon: <FiMapPin size={18} />,
      accent: "#c17b00",
      background: "#fff4de",
    },
    {
      label: "Loyalty Rating",
      value: "4.9",
      helper: "Based on your recent activity",
      icon: <FiStar size={18} />,
      accent: "#8b5cf6",
      background: "#f1ebff",
    },
  ];

  const accountItems = [
    {
      title: "Identity Verification",
      detail: "Phone, email, and address verified",
      icon: <FiShield size={17} />,
      status: "Verified",
      color: "#198754",
      background: "#e9f7ef",
    },
    {
      title: "Payment Preferences",
      detail: "UPI linked and one backup card saved",
      icon: <FiCreditCard size={17} />,
      status: "Configured",
      color: "#0d6efd",
      background: "#e9f2ff",
    },
    {
      title: "Login Security",
      detail: "Password updated 18 days ago",
      icon: <FiLock size={17} />,
      status: "Healthy",
      color: "#c17b00",
      background: "#fff4de",
    },
  ];

  const initials = useMemo(() => {
    return `${profile.firstName.charAt(0)}${profile.lastName.charAt(0)}`.toUpperCase();
  }, [profile.firstName, profile.lastName]);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setProfile((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = () => {
    setSaveState("saved");

    window.setTimeout(() => {
      setSaveState("idle");
    }, 2500);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #f6f8f7 0%, #edf4f0 100%)",
        paddingBottom: "48px",
      }}
    >
      <div className="container-fluid px-3 px-md-4 py-4">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
          <div>
            <h3
              className="fw-bold mb-1"
              style={{ color: "#171717", letterSpacing: "-0.6px" }}
            >
              Profile Settings
            </h3>
            <p className="text-muted mb-0" style={{ fontSize: "13px" }}>
              Keep your account details, contact information, and service preferences up to date.
            </p>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div
              className="d-none d-sm-flex align-items-center gap-2"
              style={{
                background: "#ffffff",
                border: "1px solid #e3e8e5",
                borderRadius: "999px",
                padding: "9px 14px",
                color: "#5f6a65",
                fontSize: "13px",
              }}
            >
              <FiShield size={15} />
              Account secured
            </div>

            <button
              className="btn"
              onClick={handleSave}
              style={{
                background: "#198754",
                color: "#fff",
                borderRadius: "12px",
                padding: "10px 18px",
                border: "none",
                fontWeight: "600",
                boxShadow: "0 12px 28px rgba(25,135,84,0.18)",
              }}
            >
              Save Changes
            </button>
          </div>
        </div>

        {saveState === "saved" && (
          <div
            className="mb-4"
            style={{
              background: "#eaf7ef",
              border: "1px solid #cde9d8",
              color: "#17633f",
              borderRadius: "14px",
              padding: "14px 16px",
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Profile details saved successfully.
          </div>
        )}

        <div className="row g-4">
          <div className="col-12 col-xl-4">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e4eae7",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 12px 36px rgba(15, 23, 42, 0.05)",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, #15231d 0%, #234336 100%)",
                  padding: "28px",
                  color: "#fff",
                }}
              >
                <div
                  style={{
                    width: "82px",
                    height: "82px",
                    borderRadius: "24px",
                    background: "linear-gradient(135deg, #d6f4e3, #99d2b3)",
                    color: "#163c2a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    fontWeight: "700",
                    marginBottom: "18px",
                  }}
                >
                  {initials}
                </div>

                <h4 className="fw-bold mb-1">
                  {profile.firstName} {profile.lastName}
                </h4>
                <p className="mb-3" style={{ color: "#c7d5ce", fontSize: "13px" }}>
                  {profile.occupation}
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <span
                    style={{
                      background: "rgba(255,255,255,0.12)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      borderRadius: "999px",
                      padding: "7px 12px",
                      fontSize: "12px",
                    }}
                  >
                    Premium member
                  </span>
                  <span
                    style={{
                      background: "rgba(25,135,84,0.25)",
                      borderRadius: "999px",
                      padding: "7px 12px",
                      fontSize: "12px",
                    }}
                  >
                    Verified profile
                  </span>
                </div>
              </div>

              <div style={{ padding: "22px" }}>
                <div className="row g-3 mb-3">
                  {stats.map((stat) => (
                    <div className="col-12 col-sm-6 col-xl-12" key={stat.label}>
                      <div
                        style={{
                          border: "1px solid #e8ece9",
                          borderRadius: "18px",
                          padding: "16px",
                          background: "#fbfcfb",
                        }}
                      >
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <div
                            style={{
                              width: "38px",
                              height: "38px",
                              borderRadius: "12px",
                              background: stat.background,
                              color: stat.accent,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {stat.icon}
                          </div>

                          <span className="fw-bold" style={{ color: "#171717", fontSize: "20px" }}>
                            {stat.value}
                          </span>
                        </div>

                        <div className="fw-semibold mb-1" style={{ color: "#202523", fontSize: "14px" }}>
                          {stat.label}
                        </div>

                        <small style={{ color: "#7b8480", fontSize: "12px" }}>
                          {stat.helper}
                        </small>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    border: "1px solid #e8ece9",
                    borderRadius: "18px",
                    padding: "18px",
                    background: "#fcfdfc",
                  }}
                >
                  <h6 className="fw-bold mb-3" style={{ color: "#171717" }}>
                    Account Status
                  </h6>

                  <div className="d-flex flex-column gap-3">
                    {accountItems.map((item) => (
                      <div
                        className="d-flex justify-content-between align-items-start gap-3"
                        key={item.title}
                      >
                        <div className="d-flex gap-3">
                          <div
                            style={{
                              width: "36px",
                              height: "36px",
                              borderRadius: "12px",
                              background: item.background,
                              color: item.color,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            {item.icon}
                          </div>

                          <div>
                            <div className="fw-semibold" style={{ color: "#232927", fontSize: "14px" }}>
                              {item.title}
                            </div>
                            <small style={{ color: "#7c8581", fontSize: "12px" }}>
                              {item.detail}
                            </small>
                          </div>
                        </div>

                        <span
                          style={{
                            background: item.background,
                            color: item.color,
                            borderRadius: "999px",
                            padding: "5px 10px",
                            fontSize: "11px",
                            fontWeight: "700",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-xl-8">
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e4eae7",
                borderRadius: "24px",
                boxShadow: "0 12px 36px rgba(15, 23, 42, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "24px 26px",
                  borderBottom: "1px solid #edf1ee",
                  background: "#fbfcfb",
                }}
              >
                <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
                  <div>
                    <h5 className="fw-bold mb-1" style={{ color: "#171717" }}>
                      Personal Details
                    </h5>
                    <small style={{ color: "#7c8581" }}>
                      These details help providers reach you and deliver services smoothly.
                    </small>
                  </div>

                  <div
                    className="d-flex align-items-center gap-2"
                    style={{ color: "#5f6a65", fontSize: "13px", fontWeight: "500" }}
                  >
                    <FiEdit3 size={15} />
                    Editable profile
                  </div>
                </div>
              </div>

              <div style={{ padding: "26px" }}>
                <div className="row g-4">
                  <div className="col-12">
                    <h6 className="fw-bold mb-3" style={{ color: "#1d2421" }}>
                      Basic Information
                    </h6>
                  </div>

                  <Field
                    label="First Name"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    icon={<FiUser size={15} />}
                  />
                  <Field
                    label="Last Name"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    icon={<FiUser size={15} />}
                  />
                  <Field
                    label="Email Address"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    icon={<FiMail size={15} />}
                    type="email"
                  />
                  <Field
                    label="Primary Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    icon={<FiPhone size={15} />}
                  />
                  <Field
                    label="Alternate Phone"
                    name="alternatePhone"
                    value={profile.alternatePhone}
                    onChange={handleChange}
                    icon={<FiPhone size={15} />}
                  />
                  <Field
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={handleChange}
                    type="date"
                  />

                  <SelectField
                    label="Gender"
                    name="gender"
                    value={profile.gender}
                    onChange={handleChange}
                    options={["Male", "Female", "Non-binary", "Prefer not to say"]}
                  />
                  <Field
                    label="Occupation"
                    name="occupation"
                    value={profile.occupation}
                    onChange={handleChange}
                    icon={<FiBriefcasePlaceholder />}
                  />
                  <SelectField
                    label="Preferred Language"
                    name="preferredLanguage"
                    value={profile.preferredLanguage}
                    onChange={handleChange}
                    options={["English", "Hindi", "Punjabi"]}
                  />

                  <div className="col-12">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#303634", fontSize: "13px" }}
                    >
                      Short Bio
                    </label>
                    <textarea
                      className="form-control"
                      rows="4"
                      name="bio"
                      value={profile.bio}
                      onChange={handleChange}
                      style={textareaStyle}
                    />
                  </div>

                  <div className="col-12 pt-2">
                    <h6 className="fw-bold mb-3" style={{ color: "#1d2421" }}>
                      Address Details
                    </h6>
                  </div>

                  <Field
                    label="Address Line 1"
                    name="addressLine1"
                    value={profile.addressLine1}
                    onChange={handleChange}
                    icon={<FiMapPin size={15} />}
                    colClass="col-12"
                  />
                  <Field
                    label="Address Line 2"
                    name="addressLine2"
                    value={profile.addressLine2}
                    onChange={handleChange}
                    icon={<FiMapPin size={15} />}
                    colClass="col-12"
                  />
                  <Field
                    label="City"
                    name="city"
                    value={profile.city}
                    onChange={handleChange}
                    icon={<FiMapPin size={15} />}
                  />
                  <Field
                    label="State"
                    name="state"
                    value={profile.state}
                    onChange={handleChange}
                    icon={<FiMapPin size={15} />}
                  />
                  <Field
                    label="Postal Code"
                    name="postalCode"
                    value={profile.postalCode}
                    onChange={handleChange}
                    icon={<FiMapPin size={15} />}
                  />
                  <Field
                    label="Country"
                    name="country"
                    value={profile.country}
                    onChange={handleChange}
                    icon={<FiGlobe size={15} />}
                  />

                  <div className="col-12 pt-2">
                    <h6 className="fw-bold mb-3" style={{ color: "#1d2421" }}>
                      Service Preferences
                    </h6>
                  </div>

                  <SelectField
                    label="Default Service Category"
                    name="defaultServiceCategory"
                    value={profile.defaultServiceCategory}
                    onChange={handleChange}
                    options={[
                      "Home Services",
                      "Cleaning",
                      "Electrical",
                      "Repairs",
                      "Beauty & Wellness",
                    ]}
                  />
                  <SelectField
                    label="Preferred Visit Time"
                    name="preferredVisitTime"
                    value={profile.preferredVisitTime}
                    onChange={handleChange}
                    options={["Morning", "Afternoon", "Evening", "Flexible"]}
                  />
                  <div className="col-12">
                    <label
                      className="form-label fw-semibold"
                      style={{ color: "#303634", fontSize: "13px" }}
                    >
                      Service Instructions
                    </label>
                    <textarea
                      className="form-control"
                      rows="3"
                      name="serviceNotes"
                      value={profile.serviceNotes}
                      onChange={handleChange}
                      style={textareaStyle}
                    />
                  </div>

                  <div className="col-12 pt-2">
                    <h6 className="fw-bold mb-3" style={{ color: "#1d2421" }}>
                      Notification Preferences
                    </h6>
                  </div>

                  <div className="col-12">
                    <div className="row g-3">
                      <ToggleCard
                        label="Email updates"
                        helper="Receive booking confirmations and receipts"
                        name="notificationEmail"
                        checked={profile.notificationEmail}
                        onChange={handleChange}
                        icon={<FiMail size={16} />}
                      />
                      <ToggleCard
                        label="SMS alerts"
                        helper="Get appointment reminders on your phone"
                        name="notificationSms"
                        checked={profile.notificationSms}
                        onChange={handleChange}
                        icon={<FiPhone size={16} />}
                      />
                      <ToggleCard
                        label="WhatsApp updates"
                        helper="Quick communication from providers"
                        name="notificationWhatsapp"
                        checked={profile.notificationWhatsapp}
                        onChange={handleChange}
                        icon={<FiBell size={16} />}
                      />
                      <ToggleCard
                        label="Promotional offers"
                        helper="Receive offers and seasonal service deals"
                        name="marketingUpdates"
                        checked={profile.marketingUpdates}
                        onChange={handleChange}
                        icon={<FiBell size={16} />}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Field = ({
  label,
  name,
  value,
  onChange,
  icon,
  type = "text",
  colClass = "col-12 col-md-6",
}) => {
  return (
    <div className={colClass}>
      <label className="form-label fw-semibold" style={{ color: "#303634", fontSize: "13px" }}>
        {label}
      </label>
      <div style={inputWrapperStyle}>
        {icon && <span style={inputIconStyle}>{icon}</span>}
        <input
          type={type}
          className="form-control"
          name={name}
          value={value}
          onChange={onChange}
          style={{
            ...inputStyle,
            paddingLeft: icon ? "42px" : "14px",
          }}
        />
      </div>
    </div>
  );
};

const SelectField = ({ label, name, value, onChange, options }) => {
  return (
    <div className="col-12 col-md-6">
      <label className="form-label fw-semibold" style={{ color: "#303634", fontSize: "13px" }}>
        {label}
      </label>
      <select
        className="form-select"
        name={name}
        value={value}
        onChange={onChange}
        style={selectStyle}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

const ToggleCard = ({ label, helper, name, checked, onChange, icon }) => {
  return (
    <div className="col-12 col-md-6">
      <label
        className="d-flex justify-content-between align-items-start gap-3"
        style={{
          border: "1px solid #e5ebe7",
          borderRadius: "18px",
          padding: "16px 18px",
          background: checked ? "#f4fbf7" : "#fbfcfb",
          cursor: "pointer",
        }}
      >
        <div className="d-flex gap-3">
          <div
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "12px",
              background: checked ? "#dff3e7" : "#eef2f0",
              color: checked ? "#198754" : "#70807a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </div>

          <div>
            <div className="fw-semibold" style={{ color: "#212724", fontSize: "14px" }}>
              {label}
            </div>
            <small style={{ color: "#78817d", fontSize: "12px" }}>{helper}</small>
          </div>
        </div>

        <input
          type="checkbox"
          className="form-check-input"
          name={name}
          checked={checked}
          onChange={onChange}
          style={{ marginTop: "2px", width: "44px", height: "22px" }}
        />
      </label>
    </div>
  );
};

const FiBriefcasePlaceholder = ({ size = 15 }) => {
  return <span style={{ fontSize: size, lineHeight: 1 }}>▣</span>;
};

const inputWrapperStyle = {
  position: "relative",
};

const inputIconStyle = {
  position: "absolute",
  left: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  color: "#80908a",
  zIndex: 1,
};

const inputStyle = {
  height: "48px",
  borderRadius: "14px",
  border: "1px solid #dde5e1",
  background: "#fbfcfb",
  boxShadow: "none",
  fontSize: "14px",
};

const selectStyle = {
  height: "48px",
  borderRadius: "14px",
  border: "1px solid #dde5e1",
  background: "#fbfcfb",
  boxShadow: "none",
  fontSize: "14px",
};

const textareaStyle = {
  borderRadius: "14px",
  border: "1px solid #dde5e1",
  background: "#fbfcfb",
  boxShadow: "none",
  fontSize: "14px",
  padding: "14px 16px",
  resize: "none",
};

export default Profile;
