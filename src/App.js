import "./App.css";
import React, { useState } from "react";
import Layout from "Layout";
import "./assets/css/Topbar.css";
import Login from "pages/Login";

function App() {
  const [auth, setAuth] = useState(false);
  const onAuth = () => {
    setAuth((prev) => !prev);
  };

  return (
    <div>
      {auth === false ? (
        <Login auth={onAuth}></Login>
      ) : (
        <Layout auth={onAuth}></Layout>
      )}
    </div>
  );
}

export default App;
