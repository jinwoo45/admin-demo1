import "./App.css";
import Login from "./pages/Login";
import Member from "./pages/member/Member";
import Community from "./pages/community/Community";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Club from "./pages/club/Club";
import Admin from "./pages/admin/Admin";
import Gathering from "./pages/gathering/Gathering";
import Store from "./pages/store/Store";
import Nft from "./pages/nft/Nft";
import University from "./pages/university/University";
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
                    <Route path="/university" element={<University />} />
                    <Route path="/gathering" element={<Gathering />} />
                    <Route path="/club" element={<Club />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/store" element={<Store />} />
                    <Route path="/nft" element={<Nft />} />
                    <Route path="/community" element={<Community />} />
                </Route>

                {/* 내비바 숨기고 싶은 페이지 */}
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    );
}

export default App;
