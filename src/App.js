import { Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Details from "./components/Details";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
