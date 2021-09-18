import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/pages/HomePage/Home"
import Footer from './components/pages/HomePage/Footer/Footer';

function App() {
  return (
    <Router>
     <NavBar/>
     <Switch>
       <Route path="/" exact component={Home} />
     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
