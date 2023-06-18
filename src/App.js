import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
