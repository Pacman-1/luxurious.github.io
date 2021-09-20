import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/pages/HomePage/Home"
import Services from "./components/pages/Services/Services"
import Products from "./components/pages/Products/Products"
import SignUp from "./components/pages/SignUp/SignUp"
import Footer from './components/pages/HomePage/Footer/Footer';

function App() {
  return (
    <Router>
     <NavBar/>
     <Switch>
       <Route path="/" exact component={Home} />
       <Route path="/services" component={Services} />
       <Route path="/products" component={Products} />
       <Route path="/sign-up" component={SignUp} />

     </Switch>
     <Footer/>
    </Router>
  );
}

export default App;
