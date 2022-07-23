import logo from './logo.svg';
import './App.css';
import Admin from './myComponent/admin/Admin';
import Header from './myComponent/Header';
import Body from "./myComponent/Body";
import Landingpage from "./myComponent/Landingpage";
import Contactus from './myComponent/Contactus';
import About from './myComponent/About';
import AdminLogin from './myComponent/admin/AdminLogin';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div>
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
          {/* <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/adminlogin">
            <AdminLogin/>
          </Route> */}
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
