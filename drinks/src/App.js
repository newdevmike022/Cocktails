import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import components
import Navbar from "./comps/Navbar";

const App = () => {
  return (
    <div>
      <h1>App Component</h1>
    </div>
  );
};

export default App;
