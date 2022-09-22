// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import Build from "./pages/build";

function App() {
  return (
    <div className="App">
      <Router>
        <Home/>
        <Build/>
      </Router>
    
      </div>
  );
}

export default App;
