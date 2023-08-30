import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./ErrorPage";
import TestCase01 from "../TestCase01/TestCase01";
import TestCase02 from "../TestCase01/TestCase02";
import TestCase03 from "../TestCase01/TestCase03";
import Admin from "./Admin";

export default function RoutingPage() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />}></Route>
        <Route exact path="*" element={<ErrorPage />}></Route>
        <Route exact path="/test1" element={<TestCase01 />}></Route>
        <Route exact path="/test2" element={<TestCase02 />}></Route>
        <Route exact path="/test3" element={<TestCase03 />}></Route>
        <Route exact path="/admin" element={<Admin />}></Route>
        
      </Routes>
    </div>
  );
}
