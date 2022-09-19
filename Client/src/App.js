// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
