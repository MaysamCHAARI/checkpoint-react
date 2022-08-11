import { Navbar } from "react-bootstrap";
import "./App.css";
import Formulaire from "./components/Formulaire";
import Bar from "./components/Bar";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Bar />
      <Card className="App-header" />
      <header className="App-header">
        <Formulaire />
      </header>
    </div>
  );
}

export default App;
