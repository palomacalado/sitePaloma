import Nav from "../Components/Nav/Nav";
import "./App.css";
import Ways from "../Ways";
import { BrowserRouter,} from "react-router-dom";
import Contact from "../Components/Contact/Contact";

function App() {
  return (
<BrowserRouter>

    <div className="App">
     <Contact />
      <Nav />
      <Ways />
      
    </div>
</BrowserRouter>
  );
}

export default App;
