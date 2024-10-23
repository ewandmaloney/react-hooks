import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import LoginPage from './LoginPage'

const MainApp = () => {
  return (
    <>
      <h1>Main Page</h1>
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default MainApp
