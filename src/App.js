import logo from './logo.svg';
import './App.css';

import Header from './myComponent/Header';
import Body from "./myComponent/Body";
import Landingpage from "./myComponent/Landingpage";
import Contactus from './myComponent/Contactus';
import About from './myComponent/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Landingpage />
        </Route>
        <Route path="/mywork">
          <Body />
        </Route>
        <Route path="/enquiry">
          <Contactus />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
