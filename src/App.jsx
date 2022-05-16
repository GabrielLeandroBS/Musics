import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./Layout/index";
import Albums from "./pages/Albums";
import Explorer from "./pages/Explorer/index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Explorer />} />
        <Route path="explorer" element={<Explorer />} />
        <Route path="albums" element={<Albums />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
}
