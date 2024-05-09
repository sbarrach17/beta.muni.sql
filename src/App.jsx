import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Form from "./views/Form";
import Notes from "./views/Notes";

const App = () => {
  return (
    
    <div className="App cont">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />      
        <Route path="/notes" element={<Notes />} />      
      </Routes>
    </div>
  
  );
};

export default App;
