// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import Build from "./pages/build";
import Register from "./pages/register";
import Login from "./pages/login";
import Flavours from "./pages/flavours";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/build" element={<Build/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/flavor" element={<Flavours/>}/>
        </Routes>
      </div>
  );
}

export default App;
