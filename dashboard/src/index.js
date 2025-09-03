// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { CookiesProvider } from "react-cookie"; // ← import karo
// import "./index.css";
// import Home from "./components/Home";
// import Dashboard from "./components/Dashboard";
// import Logout from "./components/logout";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <CookiesProvider> {/* ← wrap top-level */}
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />             {/* Home page */}
//           <Route path="/*" element={<Dashboard />} /> {/* Dashboard ke routes */}
//           <Route path="/logout" element={<Logout />} />     {/* Logout */}
//         </Routes>
//       </BrowserRouter>
//     </CookiesProvider>
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import "./index.css";
import Home from "./components/Home";
import Logout from "./components/logout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
     </CookiesProvider>
  </React.StrictMode>
);