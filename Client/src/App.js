// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";

/*function App() {
  return (
    <div className="App">
    {" "}
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flavours" element={<Flavours />} /> *Should active and inactive flavours be the same page with two sections or two separate pages?
        <Route path="/build" element={<Build />} /> *This is the page you will build your cone
        <Route path="/order" element={<Register />} /> *Page to confirm and place order, generates QR code
      </Routes>
      </Router>
      </div>
  );
}*/

export default App;
