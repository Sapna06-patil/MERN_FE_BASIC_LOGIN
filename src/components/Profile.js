// resume-builder-frontend/src/components/Profile.js
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext.js";
// import React from "react";
const Profile = () => {
  console.log("inside profile");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [date-of-b]
  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data } = await axios.get(
        "http://localhost:5000/api/users/profile",
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      setName(data.name);
      setEmail(data.email);
    };

    fetchProfile();
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.put(
        "http://localhost:5000/api/users/profile",
        { name, email, password },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      alert("Profile updated successfully");
    } catch (error) {
      alert("Error updating profile");
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button type="submit">Update Profile</button>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </form>
  );
};

export default Profile;
