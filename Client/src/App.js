import Button from "react-bootstrap/Button";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '/components/navbar'

function App() {
  return (
    <div className="App">
        <Button as="a" variant="primary">
          Button as link
        </Button>
        <Navbar/>
        <Button as="a" variant="success">
          Button as link
        </Button>
    </div>
  );
}

export default App;
