// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const App = () => {
//   const [users, setUsers] = useState([]);
//   const getData = async () => {
//     const res = await axios.get("/api/users");
//     setUsers(res.data);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div>
//       {users.map((u) => (
//         <h4 key={u._id}>userName : {u.userName}</h4>
//       ))}
//     </div>
//   );
// };

// export default App;
// resume-builder-frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Profile from "./components/Profile.js";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
