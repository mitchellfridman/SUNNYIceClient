// import Button from "react-bootstrap/Button";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/NavBar/navbar'
import Sidebar from "./components/SideBar/sidebar";
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Sidebar/>
        <Navbar/>
    </Router>
  );
}

export default App;
