// import Button from "react-bootstrap/Button";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages";
import { Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Login from "./pages/login";
import Flavours from "./pages/flavours";
import NotFound from "./pages/pageNotFound";
import Admin from "./pages/admin";
import BuildPage from "./pages/buildPage";
import Accounts from "./components/Tables/accountTable/accounts";
import Flavors from "./components/Tables/flavorTable/flavor";
import Orders from "./components/Tables/listOfOrders";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/build" element={<BuildPage/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/flavor" element={<Flavours/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/admin/accounts" element={<Accounts/>}/>
        <Route path="/admin/flavors" element={<Flavors/>}/>
        <Route path="/admin/orders" element={<Orders/>}/>
        </Routes>
      </div>
  );
}

export default App;