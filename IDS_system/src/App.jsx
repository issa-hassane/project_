import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboad from "./components/Dashboard";
import Login2 from "./components/Login2";
import NotFound from "./components/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Login2 />} />
        <Route path="/dashboard" element={<Dashboad />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
