import "./App.css";
import Login from "./pages/Login";
import Member from "./pages/member/Member";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Footer from "components/Footer";
import React, { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar((prev) => !prev);
  };

  return (
    <div className={sidebar ? "content content-long" : "content"}>
      <Routes>
        <Route
          element={
            <>
              <Sidebar showSidebar={showSidebar} sidebar={sidebar} />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Member />} />
          <Route path="/member" element={<Member />} />
        </Route>

        {/* 내비바 숨기고 싶은 페이지 */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
