import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
    </div>
  );
}

export default App;
