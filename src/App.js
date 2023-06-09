import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <div className="bg-richblack-900 w-screen h-screen ">
      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </div>
  );
}
