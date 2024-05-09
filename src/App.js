import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Public from "./Components/Public";
import Login from './features/auth/Login'
import DashLayout from "./Components/DashLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route index element={<Login />} />


        <Route path="dash" element={<DashLayout />}>
          
        </Route>
      </Route>
    </Routes> 
  );
}

export default App;
