import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    major: "",
    degree: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
      }

      setMessage("Registration successful! You can now log in.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        major: "",
        degree: "",
      }); // Reset form
    } catch (err) {
      setMessage(`Error: ${err.message}`);
    }
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      {message && <div className="info-message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          name="major"
          placeholder="Major"
          value={formData.major}
          onChange={handleChange}
          required
        />
        <input
          name="degree"
          placeholder="Degree (e.g. BS)"
          value={formData.degree}
          onChange={handleChange}
          required
        />
        <button type="submit" className="submit-btn">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
