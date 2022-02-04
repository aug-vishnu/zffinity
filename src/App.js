import React,{useEffect} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Pages/Home/Home";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'

function App() {
  useEffect(()=>{
    Aos.init({
      duration: 500,
      offset: 10
    });
  },[])
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
