import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import AddNewJob from "./pages/AddNewJob";
import EditJob from "./pages/EditJob";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/jobs/all" />} />
        <Route path="/jobs" element={<Navigate to="/jobs/all" />} />
        <Route path="/jobs/:jobType" element={<Home />} />
        <Route path="/jobs/add" element={<AddNewJob />} />
        <Route path="/jobs/edit/:jobId" element={<EditJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
