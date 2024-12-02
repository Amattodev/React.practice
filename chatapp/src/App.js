import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";

import { AuthProvider } from "./AuthService";
import LoggedInRoute from "./LoggedInRoute";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<LoggedInRoute />}>
            <Route path="/" element={<Room />} />
          </Route>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
