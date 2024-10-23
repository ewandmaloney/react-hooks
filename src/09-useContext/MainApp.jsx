import React from "react";
import { Routes, Route, Navigate, Link, NavLink } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import LoginPage from "./LoginPage";
import UserProvider from "./context/UserProvider";

const MainApp = () => {
  return (
    <UserProvider>
      <h1>Main Page</h1>
      <hr />

      <Link to="/">Home</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <NavLink
        to="/"
        className={(props) => {
          // console.log(props);
          return "active";
        }}
      >
        Home
      </NavLink>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<Navigate to="/about" />} />
      </Routes>
    </UserProvider>
  );
};

export default MainApp;
