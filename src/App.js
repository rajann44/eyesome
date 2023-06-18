import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
